/**
 * 合并脚本：把 data/_staging/*.json（调研子代理产出）规范化并合并为最终数据文件
 * 用法：node scripts/merge.mjs
 *
 * 输入（_staging，不发布）:
 *   dusseldorf.json, berlin_frankfurt.json, ingolstadt.json   -> data/cities.json
 *   weather.json + _sun.json                                  -> data/weather.json
 *   weekend.json                                              -> data/weekend.json
 *   immigration.json                                          -> data/immigration.json
 *   safety.json                                               -> data/safety.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');
const STAGING = path.join(DATA, '_staging');

const report = [];
function note(msg) { report.push(msg); }

function readStaging(name) {
  const p = path.join(STAGING, name);
  if (!fs.existsSync(p)) { note(`· 跳过 ${name}（不存在）`); return null; }
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    note(`✗ ${name} 解析失败: ${e.message}`);
    return null;
  }
}

function writeData(name, obj) {
  fs.writeFileSync(path.join(DATA, name), JSON.stringify(obj, null, 2) + '\n', 'utf8');
  const kb = (Buffer.byteLength(JSON.stringify(obj), 'utf8') / 1024).toFixed(1);
  note(`✓ data/${name}  ${kb} KB`);
}

const s = (v, d = '') => (v === undefined || v === null ? d : String(v));
const n = (v, d = 0) => (typeof v === 'number' && !Number.isNaN(v) ? v : d);

/** 规范化酒店字段 */
function normHotel(h, budget) {
  const low = n(h.price_eur_low, n(h.price_eur_high, budget));
  const high = n(h.price_eur_high, low);
  const single = n(h.single_price_eur, low);
  return {
    name_zh: s(h.name_zh || h.name_en),
    name_en: s(h.name_en),
    address: s(h.address),
    nearest_station: s(h.nearest_station),
    walk_minutes: n(h.walk_minutes, 0),
    stars: h.stars === undefined || h.stars === null ? null : n(h.stars),
    single_price_eur: single,
    price_eur_low: low,
    price_eur_high: high,
    breakfast_included: !!h.breakfast_included,
    rating: s(h.rating),
    rating_source: s(h.rating_source),
    within_budget: h.within_budget === undefined ? single <= budget : !!h.within_budget,
    why: s(h.why),
    booking_tip: s(h.booking_tip),
    source_url: s(h.source_url)
  };
}

/** 规范化餐饮字段 */
function normEat(x) {
  return {
    name_zh: s(x.name_zh || x.name_en),
    name_en: s(x.name_en),
    address: s(x.address),
    area: s(x.area),
    price_eur: n(x.price_eur, 0),
    cuisine: s(x.cuisine),
    specialty: s(x.specialty),
    hours: s(x.hours),
    open_sunday: x.open_sunday === undefined ? null : !!x.open_sunday,
    reservation_needed: !!x.reservation_needed,
    source_url: s(x.source_url)
  };
}

/** 找出某个城市的块（兼容 {city:...} 顶层 或 {berlin:{...}} 嵌套） */
function pickCity(obj, keys, cityZh) {
  if (!obj) return null;
  if (obj.city === cityZh) return obj;
  for (const k of keys) {
    if (obj[k]) return obj[k];
  }
  return null;
}

// ---------------- cities.json ----------------
const CITY_CONF = [
  { key: 'dusseldorf', zh: '杜塞尔多夫', en: 'Düsseldorf', budget: 120, src: 'dusseldorf.json' },
  { key: 'berlin', zh: '柏林', en: 'Berlin', budget: 150, src: 'berlin_frankfurt.json', pick: ['berlin'] },
  { key: 'frankfurt', zh: '法兰克福', en: 'Frankfurt', budget: 180, src: 'berlin_frankfurt.json', pick: ['frankfurt'] },
  { key: 'ingolstadt', zh: '因戈尔施塔特', en: 'Ingolstadt', budget: 120, src: 'ingolstadt.json', pick: ['ingolstadt'] }
];

const cache = {};
const cities = {};
for (const c of CITY_CONF) {
  if (!(c.src in cache)) cache[c.src] = readStaging(c.src);
  const raw = pickCity(cache[c.src], c.pick || ['ingolstadt', c.key], c.zh);
  if (!raw) { note(`✗ 城市数据缺失: ${c.zh}（来自 ${c.src}）`); continue; }
  cities[c.key] = {
    city: c.zh,
    cityEn: c.en,
    budget_eur: n(raw.budget_eur, c.budget),
    meal_eur: n(raw.meal_eur, 60),
    other_eur: n(raw.other_eur, 38),
    hotels: (raw.hotels || []).map((h) => normHotel(h, c.budget)),
    lunch: (raw.lunch || []).map(normEat),
    dinner: (raw.dinner || []).map(normEat),
    tips: (raw.tips || []).map((t) => s(t)),
    extraNote: s(raw.extraNote),
    routeLunch: (raw.routeLunch || []).map((x) => ({
      name_zh: s(x.name_zh || x.name_en),
      name_en: s(x.name_en),
      town: s(x.town),
      address: s(x.address),
      price_eur: n(x.price_eur, 0),
      specialty: s(x.specialty),
      source_url: s(x.source_url)
    }))
  };
}

// 因戈尔施塔特：附加 Wörnitz 周边信息
const ing = cache['ingolstadt.json'];
if (ing && ing.woernitz_area) {
  const w = ing.woernitz_area;
  if (cities.ingolstadt) {
    cities.ingolstadt.woernitz = {
      note: s(w.note),
      hotels: (w.hotels || []).map((h) => normHotel(h, 120)),
      lunch: (w.lunch || []).map(normEat),
      tips: (w.tips || []).map((t) => s(t))
    };
    note(`· 因戈尔施塔特附加 Wörnitz 周边：酒店 ${cities.ingolstadt.woernitz.hotels.length} / 午餐 ${cities.ingolstadt.woernitz.lunch.length}`);
  }
}
if (ing && ing.imtron_info) {
  note(`· IMTron 客户信息: found=${!!ing.imtron_info.found}`);
}
if (Object.keys(cities).length) writeData('cities.json', cities);

// ---------------- weather.json ----------------
const wRaw = readStaging('weather.json');
const sunRaw = readStaging('_sun.json');
if (wRaw) {
  const weather = {
    dst: {
      startDate: '2026-03-29',
      endDate: s(wRaw.dst?.endDate, '2026-10-25'),
      tzBefore: n(wRaw.dst?.tzBefore, 6),
      tzAfter: n(wRaw.dst?.tzAfter, 7),
      note: s(wRaw.dst?.note) || '德国 2026 年夏令时于 10 月 25 日 03:00 结束，时钟回调 1 小时；10/11–10/24 比北京晚 6 小时，10/25 起比北京晚 7 小时。'
    },
    quick: (wRaw.quick || []).map((c) => ({
      city: s(c.city),
      period: s(c.period, '10 月中下旬'),
      temp_high: n(c.temp_high),
      temp_low: n(c.temp_low),
      cond: s(c.cond, '多云有雨'),
      clothing: s(c.clothing)
    })),
    cities: (wRaw.cities || []).map((c) => ({
      city: s(c.city),
      period: s(c.period, '10 月中下旬'),
      temp_high: n(c.temp_high),
      temp_low: n(c.temp_low),
      rain_days: n(c.rain_days, 0),
      rainfall_mm: n(c.rainfall_mm, 0),
      sunshine_hours: n(c.sunshine_hours, 0),
      cond: s(c.cond),
      clothing: s(c.clothing),
      note: s(c.note),
      source_url: s(c.source_url)
    })),
    clothingLevels: (wRaw.clothingLevels || []).map((l) => ({
      temp_range: s(l.temp_range),
      advice: s(l.advice),
      layers: s(l.layers),
      items: (l.items || []).map((x) => s(x))
    })),
    packing: (wRaw.packing || []).map((p) => ({
      category: s(p.category),
      note: s(p.note),
      items: (p.items || []).map((x) => s(x))
    })),
    risks: (wRaw.risks || []).map((x) => s(x)),
    sunset: sunRaw ? sunRaw.sunset : (wRaw.sunset || []),
    sunsetNote: sunRaw ? sunRaw.note + '；' + sunRaw.generator : '',
    source_urls: (wRaw.source_urls || []).map((x) => s(x))
  };
  writeData('weather.json', weather);
}

// ---------------- weekend.json ----------------
const wkRaw = readStaging('weekend.json');
if (wkRaw) {
  const COVERS = ['history', 'river', 'industrial', 'city', 'castle'];
  const trips = (wkRaw.weekend_trips || []).map((t) => ({
    id: s(t.id),
    base_city: s(t.base_city),
    available_dates: (t.available_dates || []).map((x) => s(x)),
    title_zh: s(t.title_zh),
    subtitle: s(t.subtitle),
    theme: s(t.theme, '人文历史'),
    cover: COVERS.includes(t.cover) ? t.cover : 'city',
    highlight: s(t.highlight),
    transport: s(t.transport),
    one_way_minutes: n(t.one_way_minutes),
    fare_eur: s(t.fare_eur),
    money_saving_tip: s(t.money_saving_tip),
    schedule: (t.schedule || []).map((x) => ({ time: s(x.time), item: s(x.item) })),
    tickets: (t.tickets || []).map((x) => ({ name: s(x.name), price_eur: s(x.price_eur) })),
    restaurants: (t.restaurants || []).map(normEat),
    return_time: s(t.return_time),
    intensity: s(t.intensity, '适中'),
    rainy_plan: s(t.rainy_plan),
    recommended: t.recommended !== false,
    caution: s(t.caution),
    source_url: s(t.source_url)
  }));
  const souvenirs = (wkRaw.souvenirs || []).map((g) => ({
    name_zh: s(g.name_zh),
    name_de: s(g.name_de),
    category: s(g.category, '自用'),
    price_range: s(g.price_range),
    where_to_buy: (g.where_to_buy || []).map((x) => s(x)),
    why: s(g.why),
    customs_note: s(g.customs_note),
    source_url: s(g.source_url)
  }));
  writeData('weekend.json', {
    weekend_trips: trips,
    souvenirs,
    taxRefund: (wkRaw.taxRefund || []).map((x) => s(x)),
    warnings: (wkRaw.warnings || []).map((x) => s(x))
  });
}

// ---------------- immigration.json ----------------
const imRaw = readStaging('immigration.json');
if (imRaw) writeData('immigration.json', imRaw);

// ---------------- safety.json ----------------
const sfRaw = readStaging('safety.json');
if (sfRaw) writeData('safety.json', sfRaw);

// ---------------- 汇总 ----------------
console.log('='.repeat(60));
console.log('合并报告');
console.log('='.repeat(60));
report.forEach((r) => console.log(r));
if (fs.existsSync(path.join(DATA, 'cities.json'))) {
  const c = JSON.parse(fs.readFileSync(path.join(DATA, 'cities.json'), 'utf8'));
  console.log('\n城市食宿统计:');
  for (const [k, v] of Object.entries(c)) {
    console.log(`  ${v.city.padEnd(7)} 单间上限 ${String(v.budget_eur).padStart(3)}€  ` +
      `酒店 ${String(v.hotels.length).padStart(2)}  午餐 ${String(v.lunch.length).padStart(2)}  晚餐 ${String(v.dinner.length).padStart(2)}`);
  }
}
