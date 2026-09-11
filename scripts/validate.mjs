/**
 * 数据校验：检查 data/*.json 的结构完整性与引用一致性
 * 用法：node scripts/validate.mjs
 * 退出码非 0 表示存在错误（error），warning 不阻塞发布。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'data');

const errors = [];
const warnings = [];

function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

function load(name) {
  const p = path.join(DATA, name);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    err(`${name}: JSON 解析失败 — ${e.message}`);
    return null;
  }
}

/** 必填字段检查 */
function requireFields(obj, fields, label) {
  for (const f of fields) {
    if (obj[f] === undefined || obj[f] === null || obj[f] === '') {
      err(`${label}: 缺少必填字段 "${f}"`);
    }
  }
}

// ---------- itinerary ----------
const itinerary = load('itinerary.json');
const citySet = new Set();
if (itinerary) {
  const m = itinerary.meta;
  if (!m) err('itinerary.json: 缺少 meta');
  else {
    requireFields(m.outbound, ['date', 'flight', 'from', 'to', 'depart', 'arrive'], 'meta.outbound');
    requireFields(m.inbound, ['date', 'flight', 'from', 'to', 'depart', 'arrive'], 'meta.inbound');
    if (m.outbound?.flight !== 'CA431') err(`meta.outbound.flight 应为 CA431，实际 ${m.outbound?.flight}`);
    if (m.inbound?.flight !== 'CA432') err(`meta.inbound.flight 应为 CA432，实际 ${m.inbound?.flight}`);
    if (m.outbound?.depart !== '01:45') err(`CA431 起飞时间应为 01:45，实际 ${m.outbound?.depart}`);
    if (m.outbound?.arrive !== '06:45') err(`CA431 抵达时间应为 06:45，实际 ${m.outbound?.arrive}`);
    if (m.inbound?.depart !== '13:30') err(`CA432 起飞时间应为 13:30，实际 ${m.inbound?.depart}`);
    if (m.inbound?.arrive !== '06:55') err(`CA432 抵达时间应为 06:55，实际 ${m.inbound?.arrive}`);
  }

  const days = itinerary.days || [];
  if (!days.length) err('itinerary.json: days 为空');
  const ids = new Set();
  const prev = null;
  days.forEach((d, i) => {
    const label = `days[${i}] (${d.date || '?'})`;
    requireFields(d, ['id', 'date', 'weekday', 'type', 'title', 'stayCity', 'detail'], label);
    if (ids.has(d.id)) err(`${label}: id 重复 "${d.id}"`);
    ids.add(d.id);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.date || '')) err(`${label}: date 格式应为 YYYY-MM-DD`);
    if (!['travel', 'work', 'field', 'weekend'].includes(d.type)) err(`${label}: type 非法 "${d.type}"`);
    if (d.segments) {
      d.segments.forEach((s, j) => requireFields(s, ['time', 'text'], `${label}.segments[${j}]`));
    }
    if (d.stayCity) d.stayCity.split('/').forEach((c) => citySet.add(c.trim()));
  });

  // 日期连续性（无缺失、无重复）
  const sorted = days.map((d) => d.date).sort();
  for (let i = 1; i < sorted.length; i++) {
    const a = new Date(sorted[i - 1]);
    const b = new Date(sorted[i]);
    if ((b - a) / 86400000 !== 1) warn(`itinerary.json: 日期不连续 ${sorted[i - 1]} → ${sorted[i]}`);
  }

  const acc = itinerary.accommodation || [];
  const totalNights = acc.reduce((s, a) => s + (a.nights || 0), 0);
  if (m && m.totalNights && totalNights !== m.totalNights) {
    err(`itinerary.json: 住宿晚数合计 ${totalNights} 与 meta.totalNights ${m.totalNights} 不一致`);
  }
}

// ---------- budget ----------
const budget = load('budget.json');
if (budget) {
  const expect = {
    berlin_hamburg: { hotel: 150, meal: 60, other: 38 },
    munich: { hotel: 170, meal: 60, other: 38 },
    frankfurt: { hotel: 180, meal: 60, other: 38 },
    other: { hotel: 120, meal: 60, other: 38 }
  };
  (budget.standards || []).forEach((s) => {
    const e = expect[s.key];
    if (!e) { warn(`budget.json: 未预期的补贴档位 "${s.key}"`); return; }
    if (s.hotel !== e.hotel) err(`budget.json: ${s.key} 住宿应为 ${e.hotel}，实际 ${s.hotel}`);
    if (s.meal !== e.meal) err(`budget.json: ${s.key} 餐饮应为 ${e.meal}，实际 ${s.meal}`);
    if (s.other !== e.other) err(`budget.json: ${s.key} 其他应为 ${e.other}，实际 ${s.other}`);
  });
  if ((budget.appliedCities || []).length === 0) warn('budget.json: appliedCities 为空');
}

// ---------- cities ----------
const cities = load('cities.json');
if (cities) {
  const budgetByCity = {
    '杜塞尔多夫': 120, '柏林': 150, '法兰克福': 180, '因戈尔施塔特': 120
  };
  Object.entries(cities).forEach(([key, c]) => {
    const label = `cities.${key}`;
    requireFields(c, ['city', 'budget_eur', 'hotels', 'lunch', 'dinner'], label);
    const exp = budgetByCity[c.city];
    if (exp && c.budget_eur !== exp) {
      err(`${label}: ${c.city} 住宿补贴应为 ${exp}，实际 ${c.budget_eur}`);
    }
    if (!exp) warn(`${label}: 未知城市 "${c.city}"，请确认补贴档位`);

    const hotels = c.hotels || [];
    if (hotels.length < 2) warn(`${label}: 酒店少于 2 家（要求至少 2 家重点推荐）`);
    hotels.forEach((h, i) => {
      const hl = `${label}.hotels[${i}] "${h.name_zh || h.name_en || '?'}"`;
      requireFields(h, ['name_zh', 'price_eur_low', 'price_eur_high', 'within_budget', 'why'], hl);
      if (h.price_eur_low > h.price_eur_high) err(`${hl}: 价格区间反了`);
      // 预算判定以「单人间」为准（团组为 4 间单人间）
      const single = h.single_price_eur ?? h.price_eur_low;
      if (h.within_budget === true && single > c.budget_eur) {
        err(`${hl}: 标注预算内但单人间 ${single} > 补贴 ${c.budget_eur}`);
      }
      if (h.within_budget === false && single <= c.budget_eur && h.price_eur_high <= c.budget_eur) {
        warn(`${hl}: 标注超预算但价格均在补贴内，请复核`);
      }
      if (h.single_price_eur === undefined) warn(`${hl}: 缺少 single_price_eur，已回退用 price_eur_low`);
    });

    (c.lunch || []).forEach((x, i) => {
      const l = `${label}.lunch[${i}] "${x.name_zh || x.name_en || '?'}"`;
      requireFields(x, ['name_zh', 'price_eur'], l);
      if (x.price_eur > 22) warn(`${l}: 午餐人均 €${x.price_eur} 偏高（预算 12–20）`);
    });
    (c.dinner || []).forEach((x, i) => {
      const l = `${label}.dinner[${i}] "${x.name_zh || x.name_en || '?'}"`;
      requireFields(x, ['name_zh', 'price_eur'], l);
      if (x.price_eur > 45) warn(`${l}: 晚餐人均 €${x.price_eur} 偏高（预算 30–42）`);
    });

    // 午 + 晚是否落在 60 欧餐补内（取中位数粗查）
    const lunches = (c.lunch || []).map((x) => x.price_eur).filter((n) => typeof n === 'number');
    const dinners = (c.dinner || []).map((x) => x.price_eur).filter((n) => typeof n === 'number');
    if (lunches.length && dinners.length) {
      const med = (a) => a.slice().sort((x, y) => x - y)[Math.floor(a.length / 2)];
      const combo = med(lunches) + med(dinners);
      if (combo > 60) warn(`${label}: 午餐+晚餐中位组合 €${combo} 超出餐补 60 €（早餐不含）`);
    }
  });
}

// ---------- weather ----------
const weather = load('weather.json');
if (weather) {
  (weather.cities || []).forEach((c, i) => {
    requireFields(c, ['city', 'temp_high', 'temp_low'], `weather.cities[${i}]`);
    if (c.temp_low > c.temp_high) err(`weather.cities[${i}]: 最低温高于最高温`);
  });
  if (weather.dst) {
    if (weather.dst.tzBefore !== 6) err(`weather.dst.tzBefore 应为 6，实际 ${weather.dst.tzBefore}`);
    if (weather.dst.tzAfter !== 7) err(`weather.dst.tzAfter 应为 7，实际 ${weather.dst.tzAfter}`);
    if (weather.dst.endDate !== '2026-10-25') err(`weather.dst.endDate 应为 2026-10-25，实际 ${weather.dst.endDate}`);
  } else {
    warn('weather.json: 缺少 dst 夏令时字段');
  }
}

// ---------- weekend ----------
const weekend = load('weekend.json');
if (weekend) {
  const trips = weekend.weekend_trips || [];
  if (trips.length < 3) warn(`weekend.json: 周末线路仅 ${trips.length} 条`);
  const tids = new Set();
  trips.forEach((t, i) => {
    const l = `weekend_trips[${i}] "${t.title_zh || t.id || '?'}"`;
    requireFields(t, ['id', 'base_city', 'title_zh', 'one_way_minutes'], l);
    if (tids.has(t.id)) err(`${l}: id 重复`);
    tids.add(t.id);
    if (!(t.schedule || []).length) warn(`${l}: 缺少 schedule 时间表`);
    if (!t.rainy_plan) warn(`${l}: 缺少雨天备选方案`);
  });

  const gifts = weekend.souvenirs || [];
  if (gifts.length < 15) warn(`weekend.json: 伴手礼 ${gifts.length} 项（要求 ≥15 项）`);
  const cats = new Set();
  gifts.forEach((g, i) => {
    const l = `souvenirs[${i}] "${g.name_zh || '?'}"`;
    requireFields(g, ['name_zh', 'category', 'price_range', 'why'], l);
    cats.add(g.category);
  });
  ['送家人', '送朋友同事', '送领导客户', '自用'].forEach((c) => {
    if (!cats.has(c)) warn(`weekend.json: 伴手礼缺少分类「${c}」`);
  });
}

// ---------- tips ----------
const tips = load('tips.json');
if (tips) {
  if (!(tips.sections || []).length) err('tips.json: sections 为空');
  if (!(tips.checklist || []).length) err('tips.json: checklist 为空');
}

// ---------- 汇总 ----------
console.log('='.repeat(64));
console.log('数据校验报告');
console.log('='.repeat(64));
const files = fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).sort();
console.log(`已检查 ${files.length} 个数据文件: ${files.join(', ')}\n`);
console.log(`行程城市: ${[...citySet].join(' / ')}`);

if (warnings.length) {
  console.log(`\n⚠ 警告 (${warnings.length}):`);
  warnings.forEach((w) => console.log('  · ' + w));
}
if (errors.length) {
  console.log(`\n✗ 错误 (${errors.length}):`);
  errors.forEach((e) => console.log('  · ' + e));
  console.log('\n校验未通过');
  process.exit(1);
}
console.log(`\n✓ 校验通过${warnings.length ? `（${warnings.length} 条警告）` : ''}`);
