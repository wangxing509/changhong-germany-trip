/* ==========================================================================
   德国长虹商务出行 App · 应用逻辑
   纯原生 JS · 无依赖 · 离线可用
   ========================================================================== */
(function () {
  'use strict';

  /* ====================== 工具 ====================== */
  var D = window.APP_DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function pad2(n) { return n < 10 ? '0' + n : '' + n; }
  function parseDate(s) { var p = String(s).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function daysBetween(a, b) { return Math.round((b - a) / 86400000); }
  function today() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
  function fmtCN(d) { return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'; }
  function eur(n) { return '€' + n; }
  function cny(n) { return '¥' + n; }

  var toastTimer = null;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    requestAnimationFrame(function () { t.classList.add('is-on'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('is-on');
      setTimeout(function () { t.hidden = true; }, 320);
    }, 2000);
  }

  /* ====================== 图标 ====================== */
  var I = {
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 13.5L3 11l18-7-7 18-2.5-7.5z"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20V9l9-5 9 5v11"/><path d="M3 20h18"/><path d="M8 20v-5h8v5"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v8a2 2 0 002 2h0a2 2 0 002-2V3"/><path d="M8 13v8"/><path d="M17 3c-1.5 1.5-2 3-2 5s.5 3.5 2 5v8"/></svg>',
    mtn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18l5.5-9 4 6 2.5-3.5L21 18z"/><circle cx="17" cy="6" r="2.2"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0012 3z"/></svg>',
    train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14"/><path d="M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M4 17v-4l2-5h12l2 5v4"/><circle cx="7.5" cy="17.5" r="1.4"/><circle cx="16.5" cy="17.5" r="1.4"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h9a4 4 0 000-8 6 6 0 00-11.6 1.6A3.2 3.2 0 007 18z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7V5.5A2.5 2.5 0 0110.5 3h3A2.5 2.5 0 0116 5.5V7"/><path d="M3 12h18"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/><path d="M12 8S10.5 3 8 3a2.5 2.5 0 000 5M12 8s1.5-5 4-5a2.5 2.5 0 010 5"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M2.5 10h19"/><path d="M6 14.5h3"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0115 0"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>',
    plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6M15 3v6"/><path d="M6 9h12v3a6 6 0 01-6 6 6 6 0 01-6-6z"/><path d="M12 18v3"/></svg>',
    ban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>',
    shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3L4 6l2 4 1.5-.8V21h9V9.2L18 10l2-4-5-3-3 2z"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9a15 15 0 0119 0M6 12.5a10 10 0 0112 0M9.5 16a5 5 0 015 0"/><circle cx="12" cy="19.5" r=".9"/></svg>',
    tax: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>',
    med: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7"/><path d="M12 11v5M9.5 13.5h5"/></svg>',
    app: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M11 18.5h2"/></svg>',
    snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M4 7.5l16 9M20 7.5l-16 9"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16c.6-1.4 1.7-2 3-2s2.4.6 3 2"/><path d="M14.5 10h4M14.5 13.5h4"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.7 5.8 6.3.8-4.6 4.4 1.2 6.2L12 17.3 6.4 20.2l1.2-6.2L3 9.6l6.3-.8z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    euro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.5A7 7 0 106.5 14"/><path d="M4 10.5h9M4 13.5h9"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10" width="15" height="10.5" rx="2.5"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3.5h3l1.6 4-2 1.4a12 12 0 006.5 6.5l1.4-2 4 1.6v3a1.7 1.7 0 01-1.9 1.7A16 16 0 013.3 5.4 1.7 1.7 0 015 3.5z"/></svg>'
  };
  function ic(name, cls) { return '<span class="' + (cls || '') + '">' + (I[name] || I.doc) + '</span>'; }

  /* ====================== 路由 ====================== */
  var currentView = 'home';
  var state = { stayCity: null, outdoorTab: 'weather', tipsTab: 'guide', itinFilter: 'all' };

  var VIEWS = ['home', 'itinerary', 'stay', 'outdoor', 'tips'];

  function go(view, silent) {
    if (VIEWS.indexOf(view) < 0) view = 'home';
    if (view === currentView) {
      $('#viewport').scrollTo({ top: 0, behavior: 'smooth' });
      if (!silent) syncHash(view);
      return;
    }
    $$('.view').forEach(function (v) { v.hidden = v.dataset.view !== view; });
    $$('.tab').forEach(function (t) { t.classList.toggle('is-active', t.dataset.view === view); });
    currentView = view;
    if (!silent) syncHash(view);
    $('#viewport').scrollTop = 0;
    if (view === 'stay') renderStay();
    if (view === 'outdoor') renderOutdoor();
    if (view === 'tips') renderTips();
    if (view === 'itinerary') renderItinerary();
  }

  /** 支持 ?view=stay / #view=stay&ttab=gift 深链，同时便于分享与收藏 */
  function syncHash(view) {
    try {
      var q = [];
      if (view !== 'home') q.push('view=' + view);
      if (view === 'tips' && state.tipsTab !== 'guide') q.push('ttab=' + state.tipsTab);
      if (view === 'outdoor' && state.outdoorTab !== 'weather') q.push('otab=' + state.outdoorTab);
      if (view === 'stay' && state.stayCity) q.push('city=' + state.stayCity);
      var frag = q.length ? '#' + q.join('&') : '';
      if (history.replaceState) history.replaceState(null, '', location.pathname + location.search + frag);
      else location.hash = frag.replace(/^#/, '');
    } catch (e) { /* 本地 file:// 下忽略 */ }
  }

  function urlParam(name) {
    var src = location.search + '&' + location.hash.replace(/^#/, '');
    var m = new RegExp('[?&#]' + name + '=([A-Za-z0-9_-]+)', 'i').exec(src);
    return m ? m[1].toLowerCase() : '';
  }

  function initialView() {
    var v = urlParam('view') || urlParam('v');
    return VIEWS.indexOf(v) >= 0 ? v : 'home';
  }

  function applyInitialState() {
    var tt = urlParam('ttab');
    if (['guide', 'customs', 'checklist', 'gift', 'about'].indexOf(tt) >= 0) state.tipsTab = tt;
    var ot = urlParam('otab');
    if (['weather', 'transport', 'weekend'].indexOf(ot) >= 0) state.outdoorTab = ot;
    var ct = urlParam('city');
    if (ct) state.stayCity = ct;
  }

  /* ====================== 详情层 ====================== */
  var sheetOpen = false;
  function openSheet(kicker, title, html) {
    $('#sheetKicker').textContent = kicker || '';
    $('#sheetTitle').textContent = title || '';
    $('#sheetBody').innerHTML = html;
    $('#sheet').hidden = false;
    sheetOpen = true;
    document.body.classList.add('no-scroll');
    $('#sheetBody').scrollTop = 0;
  }
  function closeSheet() {
    $('#sheet').hidden = true;
    sheetOpen = false;
    document.body.classList.remove('no-scroll');
  }

  /* ====================== 首页 ====================== */
  function renderHero() {
    var m = D.itinerary && D.itinerary.meta;
    if (!m) return;
    var out = parseDate(m.outbound.date);
    var back = parseDate(m.inbound.arriveDate || m.inbound.date);
    var t = today();
    var dOut = daysBetween(t, out);
    var dBack = daysBetween(t, back);
    var label, num, unit, dateLine;
    if (dOut > 0) {
      label = '距离出发';
      num = dOut; unit = '天';
      dateLine = fmtCN(out) + ' · ' + m.outbound.flight;
    } else if (dBack >= 0) {
      label = '行程进行中';
      var dayN = daysBetween(out, t) + 1;
      num = dayN; unit = '天';
      dateLine = '第 ' + dayN + ' 天 · 剩余 ' + dBack + ' 天';
    } else {
      label = '行程已结束';
      num = 0; unit = '天';
      dateLine = fmtCN(back) + ' 返回成都';
    }
    $('#heroLabel').textContent = label;
    $('#heroNum').textContent = num;
    $('#heroUnit').textContent = unit;
    $('#heroDate').textContent = dateLine;

    var total = daysBetween(out, back);
    var done = Math.max(0, Math.min(total, daysBetween(out, t)));
    $('#heroBar').style.width = (total > 0 ? (done / total * 100) : 0) + '%';
    var spanDays = m.startDate && m.endDate ? daysBetween(parseDate(m.startDate), parseDate(m.endDate)) + 1 : total + 1;
    $('#heroMeta').innerHTML = '<span>全程 ' + spanDays + ' 天 · ' + (m.totalNights || 21) + ' 晚</span>' +
      '<span>' + esc((m.outbound.from || '').slice(0, 4)) + ' ⇄ ' + esc((m.inbound.to || '').slice(0, 4)) + '</span>';
  }

  function flightCard(f, dir) {
    var isOut = dir === 'out';
    return '' +
      '<div class="card flight tap" data-flight="' + dir + '">' +
        '<div class="flight-top">' +
          '<div class="flight-no"><i class="dot"></i>' + esc(f.flight) + '</div>' +
          '<div class="flight-date">' + esc(f.date) + (f.arriveDate ? ' → ' + esc(f.arriveDate) : '') + '</div>' +
        '</div>' +
        '<div class="flight-route">' +
          '<div class="flight-end from">' +
            '<div class="flight-time">' + esc(f.depart) + '</div>' +
            '<div class="flight-code">' + esc(String(f.from).match(/[A-Z]{3}/) || '—') + '</div>' +
            '<div class="flight-port">' + esc(f.from) + '</div>' +
          '</div>' +
          '<div class="flight-mid">' +
            '<div class="line"></div>' +
            '<div class="plane">' + I.plane + '</div>' +
            '<div class="dur">' + (isOut ? '直飞' : '直飞') + '</div>' +
          '</div>' +
          '<div class="flight-end to">' +
            '<div class="flight-time">' + esc(f.arrive) + '</div>' +
            '<div class="flight-code">' + esc(String(f.to).match(/[A-Z]{3}/) || '—') + '</div>' +
            '<div class="flight-port">' + esc(f.to) + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="flight-foot">' +
          '<span class="badge gold">' + esc(f.airline) + '</span>' +
          '<span class="badge">' + esc(isOut ? f.departTz : f.departTz) + ' 起飞</span>' +
          '<span class="badge">' + esc(f.arriveTz) + ' 抵达</span>' +
          (f.duration ? '<span class="badge blue">' + esc(f.duration) + '</span>' : '') +
        '</div>' +
      '</div>';
  }

  function renderFlights() {
    var m = D.itinerary && D.itinerary.meta;
    if (!m) return;
    $('#flightCards').innerHTML = flightCard(m.outbound, 'out') + flightCard(m.inbound, 'in');
    $('#flightCards').innerHTML +=
      '<div class="notice info" style="margin-top:2px"><span class="ni">' + I.clock + '</span><div>' +
      '<b>时差提醒</b><br>' + esc(m.note || '10月25日德国夏令时结束，时差由 6 小时变为 7 小时') +
      '</div></div>';
  }

  function nextDayItem() {
    var days = (D.itinerary && D.itinerary.days) || [];
    var t = today();
    var upcoming = days.filter(function (d) { return parseDate(d.date) >= t; });
    return upcoming.length ? upcoming[0] : days[days.length - 1];
  }

  function renderNext() {
    var d = nextDayItem();
    if (!d) return;
    var dt = parseDate(d.date);
    var t = today();
    var rel = daysBetween(t, dt);
    var relTx = rel === 0 ? '今天' : rel > 0 ? ('还有 ' + rel + ' 天') : ('已过 ' + (-rel) + ' 天');
    $('#nextTag').textContent = relTx;
    var typeBadge = { travel: 'gold', field: 'amber', weekend: 'green', work: 'blue' }[d.type] || '';
    var typeName = { travel: '交通/转场', field: '现场/仓库', weekend: '周末出行', work: '现场办公' }[d.type] || '安排';
    $('#nextCard').innerHTML = '' +
      '<div class="card next-card tap" data-day="' + esc(d.id) + '">' +
        '<div class="next-row">' +
          '<div class="next-day"><div class="d">' + dt.getDate() + '</div><div class="m">' + (dt.getMonth() + 1) + '月</div></div>' +
          '<div class="next-main">' +
            '<div class="next-title">' + esc(d.title) + '</div>' +
            '<div class="next-meta">' +
              '<span>' + esc(d.weekday) + '</span>' +
              (d.timeBlock ? '<span>' + esc(d.timeBlock) + '</span>' : '') +
              (d.transport && d.transport !== '—' ? '<span>' + esc(d.transport) + '</span>' : '') +
            '</div>' +
            '<div class="next-detail">' + esc(d.detail) + '</div>' +
            '<div class="ttags" style="margin-top:10px">' +
              '<span class="badge ' + typeBadge + '">' + esc(typeName) + '</span>' +
              (d.tags || []).slice(0, 3).map(function (x) { return '<span class="badge">' + esc(x) + '</span>'; }).join('') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ====================== 天气条 ====================== */
  function renderWeatherStrip() {
    var w = D.weather && D.weather.quick;
    var box = $('#weatherStrip');
    if (!w || !w.length) {
      box.innerHTML = '<div class="notice info" style="width:100%">天气数据加载中…</div>';
      return;
    }
    box.innerHTML = w.map(function (c) {
      return '<div class="wcard tap" data-weather="' + esc(c.city) + '">' +
        '<div class="wcity">' + esc(c.city) + '</div>' +
        '<div class="wdate">' + esc(c.period || '10月中下旬') + '</div>' +
        '<div class="wtemp">' + esc(c.temp_high) + '°<small> / ' + esc(c.temp_low) + '°</small></div>' +
        '<div class="wcond">' + esc(c.cond || '多云有雨') + '</div>' +
        '<div class="wcloth">' + esc(c.clothing || '') + '</div>' +
      '</div>';
    }).join('');
  }

  /* ====================== 快捷入口 ====================== */
  var QUICK = [
    { k: 'stay', n: '住宿', i: 'bed' },
    { k: 'eat', n: '餐饮', i: 'food' },
    { k: 'weekend', n: '周末', i: 'mtn' },
    { k: 'weather', n: '天气', i: 'cloud' },
    { k: 'customs', n: '海关', i: 'shield' },
    { k: 'gift', n: '伴手礼', i: 'gift' },
    { k: 'checklist', n: '清单', i: 'check' },
    { k: 'emergency', n: '紧急', i: 'phone' }
  ];
  function renderQuick() {
    $('#quickGrid').innerHTML = QUICK.map(function (q) {
      return '<button class="quick" data-quick="' + q.k + '">' +
        '<span class="qi">' + I[q.i] + '</span>' +
        '<span class="ql">' + q.n + '</span>' +
      '</button>';
    }).join('');
  }

  /* ====================== 预算概览 ====================== */
  function renderBudgetSummary() {
    var b = D.budget;
    if (!b) { $('#budgetSummary').innerHTML = ''; return; }
    var est = b.estimates || {};
    var detail = (est.detail || []).filter(function (x) { return x.item.indexOf('合计') < 0; });
    $('#budgetSummary').innerHTML = '' +
      '<div class="card budget-card">' +
        '<div class="budget-grid">' +
          detail.map(function (x) {
            return '<div class="bstat">' +
              '<div class="bk">' + esc(x.item) + '</div>' +
              '<div class="bv">' + esc(x.eur) + '<small> €</small></div>' +
              '<div class="bs">' + esc(x.note || '每人') + '</div>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="notice info" style="margin:13px 0 0">' +
          '<span class="ni">' + I.euro + '</span>' +
          '<div><b>每人合计约 ' + esc(est.headline) + ' €</b>（21 晚补贴上限）' +
          '<br>全团 4 人上限合计约 ' + esc(est.teamTotal) + ' €<br>' +
          esc(b.rateNote || '') + '</div>' +
        '</div>' +
        '<div class="notice warn" style="margin:10px 0 0">' +
          '<span class="ni">' + I.bed + '</span>' +
          '<div>' + esc((b.basis && b.basis.hotel) || '') + '<br>' +
          esc((b.basis && b.basis.meal) || '') + '</div>' +
        '</div>' +
        '<button class="seg" style="width:100%;margin-top:11px;text-align:center" data-quick="budget">查看补贴标准明细</button>' +
      '</div>';
  }

  function renderHomeFootnote() {
    $('#homeFootnote').innerHTML =
      '行程数据来源：《德国境内行程安排》与《出差补贴标准》<br>' +
      '补贴标准：柏林/汉堡 住 150 €、慕尼黑 170 €、法兰克福 180 €、其他城市 120 €；餐饮 60 €/天；其他 38 €/天';
  }

  /* ====================== 行程时间轴 ====================== */
  var ITIN_FILTERS = [
    { k: 'all', n: '全部' },
    { k: 'travel', n: '交通' },
    { k: 'field', n: '现场/仓库' },
    { k: 'work', n: '办公' },
    { k: 'weekend', n: '周末' },
    { k: 'hi', n: '重点' }
  ];
  function renderItinerary() {
    var days = (D.itinerary && D.itinerary.days) || [];
    var f = state.itinFilter;
    var list = days.filter(function (d) {
      if (f === 'all') return true;
      if (f === 'hi') return d.highlight;
      return d.type === f;
    });
    $('#itinFilter').innerHTML = ITIN_FILTERS.map(function (x) {
      return '<button class="chip' + (x.k === f ? ' is-active' : '') + '" data-ifilter="' + x.k + '">' + x.n + '</button>';
    }).join('');
    $('#timeline').innerHTML = list.map(function (d) {
      var dt = parseDate(d.date);
      return '<div class="titem' + (d.highlight ? ' is-hi' : '') + '" data-type="' + esc(d.type) + '">' +
        '<div class="tcard tap" data-day="' + esc(d.id) + '">' +
          '<div class="thead">' +
            '<span class="tdate">' + (dt.getMonth() + 1) + '月' + dt.getDate() + '日 · ' + esc(d.weekday) + '</span>' +
            '<span class="ttime">' + esc(d.timeBlock) + '</span>' +
          '</div>' +
          '<div class="ttitle">' + esc(d.title) + '</div>' +
          '<div class="ttags">' +
            (d.transport && d.transport !== '—' ? '<span class="badge">' + esc(d.transport) + '</span>' : '') +
            '<span class="badge blue">' + esc(d.stayCity) + '</span>' +
            (d.costCny ? '<span class="badge gold">' + cny(d.costCny) + '</span>' : '') +
            (d.tags || []).slice(0, 2).map(function (x) { return '<span class="badge">' + esc(x) + '</span>'; }).join('') +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('') || '<div class="notice">暂无符合条件的行程</div>';
  }

  function daySheet(id) {
    var days = (D.itinerary && D.itinerary.days) || [];
    var d = days.filter(function (x) { return x.id === id; })[0];
    if (!d) return;
    var dt = parseDate(d.date);
    var h = '';
    h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden;margin-bottom:13px">' +
      row(I.cal, '日期', dt.getFullYear() + '年' + (dt.getMonth() + 1) + '月' + dt.getDate() + '日 · ' + d.weekday, d.timeBlock) +
      row(I.pin, '住宿城市', d.stayCity, '') +
      row(d.transport === '飞机' ? I.plane : d.transport === '火车' ? I.train : d.transport === '开车' ? I.car : I.doc,
        '交通方式', d.transport || '—', '') +
      (d.costCny ? row(I.euro, '原表费用', cny(d.costCny), '行程原表【费用】列口径，人民币元') : '') +
      '</div>';
    h += '<div class="group-head"><span class="gi">' + I.doc + '</span><h3>安排详情</h3></div>';
    h += '<div class="notice info"><span class="ni">' + I.bulb + '</span><div>' + esc(d.detail) + '</div></div>';
    if (d.insight) {
      h += '<div class="notice warn"><span class="ni">' + I.sparkle + '</span><div><b>要点提示</b><br>' + esc(d.insight) + '</div></div>';
    }
    if (d.segments && d.segments.length) {
      h += '<div class="group-head"><span class="gi">' + I.clock + '</span><h3>时间节点</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        d.segments.map(function (s) {
          return '<div class="row"><div class="row-ic gold">' + I.clock + '</div><div class="row-tx">' +
            '<div class="row-t">' + esc(s.time) + ' <span class="badge">' + esc(s.tz) + '时间</span></div>' +
            '<div class="row-d">' + esc(s.text) + '</div></div></div>';
        }).join('') + '</div>';
    }
    if (d.city) {
      var cityKey = cityKeyOf(d.stayCity);
      if (cityKey) {
        h += '<div class="group-head"><span class="gi">' + I.bed + '</span><h3>该地食宿推荐</h3></div>';
        h += '<button class="seg" style="width:100%;text-align:center" data-goto-city="' + cityKey + '">查看 ' + esc(d.stayCity) + ' 酒店与餐饮 →</button>';
      }
    }
    openSheet('行程详情', d.title, h);
  }

  function row(icon, k, v, x) {
    return '<div class="row"><div class="row-ic">' + icon + '</div><div class="row-tx">' +
      '<div class="row-t">' + esc(k) + '</div><div class="row-d">' + esc(v) + '</div>' +
      (x ? '<div class="row-x">' + esc(x) + '</div>' : '') + '</div></div>';
  }

  /* ====================== 城市食宿 ====================== */
  var CITY_ORDER = ['dusseldorf', 'berlin', 'frankfurt', 'ingolstadt'];
  function cityData() { return D.cities || {}; }
  function cityKeyOf(name) {
    var c = cityData();
    var map = { '杜塞尔多夫': 'dusseldorf', '柏林': 'berlin', '法兰克福': 'frankfurt', '因戈尔施塔特': 'ingolstadt' };
    for (var k in c) { if (c[k].city === name || (name && name.indexOf(c[k].city) === 0)) return k; }
    return map[name] || null;
  }

  function renderStay() {
    var c = cityData();
    var keys = CITY_ORDER.filter(function (k) { return c[k]; });
    if (!state.stayCity || !c[state.stayCity]) state.stayCity = keys[0];
    $('#stayCityTabs').innerHTML = keys.map(function (k) {
      var nights = nightsOf(c[k].city);
      return '<button class="seg' + (k === state.stayCity ? ' is-active' : '') + '" data-city="' + k + '">' +
        esc(c[k].city) + (nights ? ' · ' + nights + '晚' : '') + '</button>';
    }).join('');
    var d = c[state.stayCity];
    if (!d) { $('#stayBody').innerHTML = '<div class="notice">数据加载中…</div>'; return; }
    $('#stayBody').innerHTML = cityBlock(d);
  }

  function nightsOf(city) {
    var acc = (D.itinerary && D.itinerary.accommodation) || [];
    var hit = acc.filter(function (a) { return a.city === city; });
    if (!hit.length) return 0;
    return hit.reduce(function (s, a) { return s + a.nights; }, 0);
  }

  function cityBlock(d) {
    var h = '';
    var nights = nightsOf(d.city);
    h += '<div class="city-head">' +
      '<div class="ch-top">' +
        '<div><h3>' + esc(d.city) + '</h3><div class="ch-en">' + esc(d.cityEn || '') + '</div></div>' +
        '<div class="budget-ring"><div class="brv">' + esc(d.budget_eur) + '€</div><div class="brk">单人间/晚</div></div>' +
      '</div>' +
      '<div class="ch-meta">' +
        (nights ? '<span class="badge gold">住宿 ' + nights + ' 晚</span>' : '') +
        '<span class="badge blue">每人单独一间</span>' +
        '<span class="badge">餐补 ' + esc(d.meal_eur || 60) + ' €/天</span>' +
        '<span class="badge">其他 ' + esc(d.other_eur || 38) + ' €/天</span>' +
      '</div>' +
    '</div>';

    h += '<div class="notice info"><span class="ni">' + I.bulb + '</span><div>' +
      '<b>预算口径</b><br>住宿按<b>每人每晚</b>计，团组为 4 间单人间，单间须 ≤ ' + esc(d.budget_eur) + ' €/晚；' +
      '餐补 ' + esc(d.meal_eur || 60) + ' €/天为<b>除早餐外</b>（午 + 晚），早餐在酒店解决。</div></div>';

    if (d.tips && d.tips.length) {
      h += '<div class="notice info"><span class="ni">' + I.bulb + '</span><div>' + d.tips.slice(0, 3).map(esc).join('<br>') + '</div></div>';
    }

    h += '<div class="group-head"><span class="gi">' + I.bed + '</span><h3>住宿推荐</h3><span class="gn">' +
      ((d.hotels || []).length) + ' 家 · 预算内优先</span></div>';
    h += '<div class="stack">' + ((d.hotels || []).map(hotelCard).join('') || empty('酒店数据加载中…')) + '</div>';

    h += '<div class="group-head"><span class="gi">' + I.food + '</span><h3>午餐 · 办公地附近简餐</h3><span class="gn">人均 €10–18</span></div>';
    h += '<div class="stack">' + ((d.lunch || []).map(function (x, i) { return eatCard(x, i + 1); }).join('') || empty('数据加载中…')) + '</div>';

    h += '<div class="group-head"><span class="gi">' + I.food + '</span><h3>晚餐 · 酒店附近正餐</h3><span class="gn">人均 €20–30</span></div>';
    h += '<div class="stack">' + ((d.dinner || []).map(function (x, i) { return eatCard(x, i + 1); }).join('') || empty('数据加载中…')) + '</div>';

    if (d.extraNote) {
      h += '<div class="notice warn" style="margin-top:16px"><span class="ni">' + I.alert + '</span><div>' + esc(d.extraNote) + '</div></div>';
    }
    return h;
  }

  function empty(t) { return '<div class="notice">' + esc(t) + '</div>'; }

  function hotelCard(x) {
    var inB = x.within_budget !== false;
    var single = x.single_price_eur || x.price_eur_low;
    return '<div class="card hotel-card">' +
      '<div class="hotel-top">' +
        '<div style="min-width:0">' +
          '<div class="hotel-name">' + esc(x.name_zh) + '</div>' +
          (x.name_en ? '<div class="hotel-en">' + esc(x.name_en) + '</div>' : '') +
        '</div>' +
        '<div class="hotel-price">' +
          '<div class="hp">' + esc(single) + '</div>' +
          '<div class="hpu">€ 单人间 / 晚</div>' +
        '</div>' +
      '</div>' +
      '<div class="hotel-tags">' +
        (inB ? '<span class="badge green">预算内</span>' : '<span class="badge red">超预算</span>') +
        (x.breakfast_included ? '<span class="badge gold">含早餐</span>' : '<span class="badge">早餐另计</span>') +
        (x.stars ? '<span class="badge">' + esc(x.stars) + ' 星</span>' : '') +
        (x.rating ? '<span class="badge blue">★ ' + esc(String(x.rating).replace(/^Google\s*/, '')) + '</span>' : '') +
        (x.price_eur_high && x.price_eur_high !== single
          ? '<span class="badge">区间 ' + esc(x.price_eur_low) + '–' + esc(x.price_eur_high) + ' €</span>' : '') +
      '</div>' +
      '<div class="hotel-line">' +
        (x.address ? hl(I.pin, '地址', x.address) : '') +
        (x.nearest_station ? hl(I.train, '交通', x.nearest_station + (x.walk_minutes ? ' · 步行约 ' + x.walk_minutes + ' 分钟' : '')) : '') +
      '</div>' +
      (x.why ? '<div class="hotel-why">' + esc(x.why) + '</div>' : '') +
      (x.booking_tip ? '<div class="hotel-line" style="margin-top:9px">' + hl(I.bulb, '订房提示', x.booking_tip) + '</div>' : '') +
    '</div>';
  }
  function hl(icon, k, v) {
    return '<div class="hl"><span class="hlk">' + esc(k) + '</span><span class="hlv">' + esc(v) + '</span></div>';
  }

  function eatCard(x, i) {
    return '<div class="card eat-card">' +
      '<div class="eat-idx">' + i + '</div>' +
      '<div class="eat-main">' +
        '<div class="eat-name">' + esc(x.name_zh || x.name_en) + '</div>' +
        '<div class="eat-sub">' + esc([x.name_en && x.name_zh ? x.name_en : '', x.address].filter(Boolean).join(' · ')) + '</div>' +
        (x.specialty ? '<div class="eat-sub" style="color:var(--c-text-3)">招牌：' + esc(x.specialty) + '</div>' : '') +
        '<div class="eat-meta">' +
          (x.cuisine ? '<span class="badge">' + esc(x.cuisine) + '</span>' : '') +
          (x.hours ? '<span class="badge">' + esc(x.hours) + '</span>' : '') +
          (x.open_sunday === true ? '<span class="badge green">周日营业</span>' : x.open_sunday === false ? '<span class="badge amber">周日休</span>' : '') +
          (x.reservation_needed ? '<span class="badge blue">建议预订</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="eat-price">€' + esc(x.price_eur) + '<small>人均</small></div>' +
    '</div>';
  }

  /* ====================== 出行 ====================== */
  function renderOutdoor() {
    $$('#outdoorTabs .seg').forEach(function (b) { b.classList.toggle('is-active', b.dataset.otab === state.outdoorTab); });
    var h = '';
    if (state.outdoorTab === 'weather') h = outdoorWeather();
    else if (state.outdoorTab === 'transport') h = outdoorTransport();
    else h = outdoorWeekend();
    $('#outdoorBody').innerHTML = h;
  }

  function outdoorWeather() {
    var w = D.weather || {};
    var h = '';
    if (w.dst) {
      h += '<div class="notice warn"><span class="ni">' + I.clock + '</span><div><b>夏令时提醒</b><br>' + esc(w.dst.note || '') +
        (w.dst.tzBefore ? '<br>10/11–10/24：比北京晚 ' + esc(w.dst.tzBefore) + ' 小时<br>10/25 起：比北京晚 ' + esc(w.dst.tzAfter) + ' 小时' : '') + '</div></div>';
    }
    if (w.cities && w.cities.length) {
      h += '<div class="group-head"><span class="gi">' + I.cloud + '</span><h3>各地气候详情</h3><span class="gn">10月中旬 – 11月初</span></div>';
      h += '<div class="stack">' + w.cities.map(function (c) {
        return '<div class="card pad-sm">' +
          '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">' +
            '<div><div class="hotel-name">' + esc(c.city) + '</div>' +
            '<div class="hotel-en">' + esc(c.period || '') + '</div></div>' +
            '<div class="hotel-price"><div class="hp">' + esc(c.temp_high) + '°</div><div class="hpu">最高 / 最低 ' + esc(c.temp_low) + '°</div></div>' +
          '</div>' +
          '<div class="hotel-tags">' +
            (c.rain_days ? '<span class="badge blue">月降雨 ' + esc(c.rain_days) + ' 天</span>' : '') +
            (c.rainfall_mm ? '<span class="badge">' + esc(c.rainfall_mm) + ' mm</span>' : '') +
            (c.sunshine_hours ? '<span class="badge amber">日照 ' + esc(c.sunshine_hours) + ' h/天</span>' : '') +
          '</div>' +
          (c.note ? '<div class="hotel-why" style="margin-top:10px">' + esc(c.note) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }
    if (w.clothingLevels && w.clothingLevels.length) {
      h += '<div class="group-head"><span class="gi">' + I.shirt + '</span><h3>穿衣指数</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        w.clothingLevels.map(function (l) {
          return '<div class="row"><div class="row-ic gold">' + I.shirt + '</div><div class="row-tx">' +
            '<div class="row-t">' + esc(l.temp_range) + '</div>' +
            '<div class="row-d">' + esc(l.advice) + '</div>' +
            (l.items && l.items.length ? '<div class="row-x">' + l.items.map(esc).join(' · ') + '</div>' : '') +
          '</div></div>';
        }).join('') + '</div>';
    }
    if (w.packing && w.packing.length) {
      h += '<div class="group-head"><span class="gi">' + I.bag + '</span><h3>行李清单（4 人商务团组）</h3></div>';
      h += '<div class="stack">' + w.packing.map(function (p) {
        return '<div class="acc is-open"><div class="acc-head" style="pointer-events:none">' +
          '<span class="ai">' + I.bag + '</span><span class="at"><span class="att">' + esc(p.category) + '</span>' +
          (p.note ? '<span class="ats">' + esc(p.note) + '</span>' : '') + '</span></div>' +
          '<div class="acc-body">' + (p.items || []).map(function (t) {
            return '<div class="check-item"><span class="check-tx">· ' + esc(t) + '</span></div>';
          }).join('') + '</div></div>';
      }).join('') + '</div>';
    }
    if (w.sunset && w.sunset.length) {
      h += '<div class="group-head"><span class="gi">' + I.cloud + '</span><h3>日落时间参考</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        w.sunset.map(function (s) {
          return '<div class="row"><div class="row-ic blue">' + I.clock + '</div><div class="row-tx">' +
            '<div class="row-t">' + esc(s.city) + '</div><div class="row-d">' + esc(s.date) + ' 日落 ' + esc(s.sunset) + '</div></div></div>';
        }).join('') + '</div>';
    }
    if (w.risks && w.risks.length) {
      h += '<div class="notice danger" style="margin-top:16px"><span class="ni">' + I.alert + '</span><div><b>秋季天气风险</b><br>' + w.risks.map(esc).join('<br>') + '</div></div>';
    }
    return h || empty('天气数据加载中…');
  }

  function outdoorTransport() {
    var t = D.transport || {};
    var h = '';
    if (t.intro) h += '<div class="notice info"><span class="ni">' + I.train + '</span><div>' + esc(t.intro) + '</div></div>';
    if (t.tickets && t.tickets.length) {
      h += '<div class="group-head"><span class="gi">' + I.card + '</span><h3>票种与省钱方案</h3></div>';
      h += '<div class="stack">' + t.tickets.map(function (x) {
        return '<div class="card pad-sm">' +
          '<div class="hotel-name">' + esc(x.name) + '</div>' +
          (x.name_de ? '<div class="hotel-en">' + esc(x.name_de) + '</div>' : '') +
          '<div class="hotel-why" style="margin-top:9px">' + esc(x.desc) + '</div>' +
          (x.price ? '<div class="hotel-tags" style="margin-top:9px"><span class="badge gold">' + esc(x.price) + '</span>' +
            (x.persons ? '<span class="badge">' + esc(x.persons) + '</span>' : '') + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }
    if (t.rules && t.rules.length) {
      h += '<div class="group-head"><span class="gi">' + I.alert + '</span><h3>乘车规则与红线</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        t.rules.map(function (x) {
          return '<div class="row"><div class="row-ic ' + (x.level || '') + '">' + (x.level === 'red' ? I.ban : I.alert) + '</div>' +
            '<div class="row-tx"><div class="row-t">' + esc(x.title) + '</div><div class="row-d">' + esc(x.text) + '</div></div></div>';
        }).join('') + '</div>';
    }
    if (t.routes && t.routes.length) {
      h += '<div class="group-head"><span class="gi">' + I.train + '</span><h3>本次行程主要路段</h3></div>';
      h += '<div class="stack">' + t.routes.map(function (r) {
        return '<div class="card pad-sm">' +
          '<div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline">' +
            '<div class="hotel-name">' + esc(r.from) + ' → ' + esc(r.to) + '</div>' +
            '<div class="hotel-price"><div class="hp">' + esc(r.distance_km) + ' km</div></div>' +
          '</div>' +
          '<div class="hotel-tags" style="margin-top:9px">' +
            (r.mode ? '<span class="badge gold">' + esc(r.mode) + '</span>' : '') +
            (r.duration ? '<span class="badge">' + esc(r.duration) + '</span>' : '') +
          '</div>' +
          (r.tip ? '<div class="hotel-why" style="margin-top:9px">' + esc(r.tip) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }
    return h || empty('交通数据加载中…');
  }

  function short(s, n) {
    var t = String(s == null ? '' : s).trim();
    if (t.length <= n) return t;
    return t.slice(0, n) + '…';
  }

  /** 从自由文本票价里抽出主金额，如 "24hTicket NRW 5 Personen 59.80 欧…" → "€59.80" */
  function fareShort(str) {
    var t = String(str || '');
    var m = t.match(/(\d+(?:[.,]\d+)?)\s*欧/);
    if (m) return '≈€' + m[1].replace(',', '.');
    m = t.match(/€\s*(\d+(?:[.,]\d+)?)/);
    if (m) return '≈€' + m[1].replace(',', '.');
    return t ? short(t, 8) : '参考';
  }

  /** 强度取括号前的部分，如 "低（全程平路…）" → "低" */
  function intensityShort(str) {
    var t = String(str || '适中').trim();
    var i = t.indexOf('（');
    if (i > 0) return t.slice(0, i);
    i = t.indexOf('(');
    if (i > 0) return t.slice(0, i);
    return short(t, 4);
  }

  var COVERS = {
    history: 'linear-gradient(135deg,#2A1F14,#0B1220)',
    river: 'linear-gradient(135deg,#122A33,#0B1220)',
    industrial: 'linear-gradient(135deg,#2B2418,#0B1220)',
    city: 'linear-gradient(135deg,#161B33,#0B1220)',
    castle: 'linear-gradient(135deg,#241A2E,#0B1220)'
  };
  function outdoorWeekend() {
    var trips = (D.weekend && D.weekend.weekend_trips) || [];
    if (!trips.length) return empty('周末线路数据加载中…');
    var groups = {};
    trips.forEach(function (t) { (groups[t.base_city] = groups[t.base_city] || []).push(t); });
    var h = '<div class="notice good"><span class="ni">' + I.sparkle + '</span><div><b>周末自助出行</b><br>' +
      '本次行程共有 3 个可用休息段：10/17–10/18（杜塞尔多夫）、10/25（法兰克福）、10/31（杜塞尔多夫）。以下线路均为当天往返、4 人团队可执行。</div></div>';
    Object.keys(groups).forEach(function (city) {
      h += '<div class="group-head"><span class="gi">' + I.mtn + '</span><h3>' + esc(city) + '出发</h3><span class="gn">' + groups[city].length + ' 条线路</span></div>';
      h += '<div class="stack">' + groups[city].map(function (t) {
        var cover = COVERS[t.cover] || COVERS.city;
        return '<div class="card trip-card tap" data-trip="' + esc(t.id) + '">' +
          '<div class="trip-cover" style="background-image:' + cover + '">' +
            '<div class="tc-in">' +
              '<h3>' + esc(t.title_zh) + '</h3>' +
              '<p>' + esc(t.subtitle || '') + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="trip-body">' +
            '<div class="trip-stats">' +
              '<div class="ts"><div class="tsk">单程</div><div class="tsv">' + esc(t.one_way_minutes) + ' 分</div></div>' +
              '<div class="ts"><div class="tsk">交通费用</div><div class="tsv">' + esc(fareShort(t.fare_eur)) + '</div></div>' +
              '<div class="ts"><div class="tsk">体力强度</div><div class="tsv">' + esc(intensityShort(t.intensity)) + '</div></div>' +
            '</div>' +
            '<div class="hotel-why">' + esc(short(t.highlight, 120)) + '</div>' +
            '<div class="hotel-tags" style="margin-top:10px">' +
              '<span class="badge gold">' + esc(t.theme || '人文历史') + '</span>' +
              (t.recommended !== false ? '<span class="badge green">推荐</span>' : '<span class="badge amber">偏紧</span>') +
              '<span class="badge">' + esc(t.transport || '') + '</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('') + '</div>';
    });
    return h;
  }

  function tripSheet(id) {
    var trips = (D.weekend && D.weekend.weekend_trips) || [];
    var t = trips.filter(function (x) { return x.id === id; })[0];
    if (!t) return;
    var h = '';
    h += '<div class="trip-stats" style="margin-bottom:13px">' +
      '<div class="ts"><div class="tsk">出发地</div><div class="tsv">' + esc(t.base_city) + '</div></div>' +
      '<div class="ts"><div class="tsk">单程耗时</div><div class="tsv">' + esc(t.one_way_minutes) + ' 分</div></div>' +
      '<div class="ts"><div class="tsk">强度</div><div class="tsv">' + esc(t.intensity || '适中') + '</div></div>' +
    '</div>';
    h += '<div class="notice info"><span class="ni">' + I.sparkle + '</span><div>' + esc(t.highlight || '') + '</div></div>';
    if (t.available_dates && t.available_dates.length) {
      h += '<div class="hotel-tags" style="margin-bottom:13px">' + t.available_dates.map(function (d) {
        return '<span class="badge gold">' + esc(d) + '</span>';
      }).join('') + '</div>';
    }
    h += '<div class="group-head"><span class="gi">' + I.train + '</span><h3>交通与费用</h3></div>';
    h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
      row(I.train, '交通方式', t.transport || '', '') +
      row(I.clock, '单程耗时', t.one_way_minutes + ' 分钟', '') +
      row(I.euro, '参考票价', t.fare_eur || '以 DB 官网为准', '') +
      (t.money_saving_tip ? row(I.bulb, '省钱方案', t.money_saving_tip, '') : '') +
    '</div>';
    if (t.schedule && t.schedule.length) {
      h += '<div class="group-head"><span class="gi">' + I.clock + '</span><h3>建议时间表</h3></div>';
      h += '<div class="sched">' + t.schedule.map(function (s) {
        return '<div class="sched-row"><span class="sr-time">' + esc(s.time) + '</span><span class="sr-tx">' + esc(s.item) + '</span></div>';
      }).join('') + '</div>';
    }
    if (t.tickets && t.tickets.length) {
      h += '<div class="group-head"><span class="gi">' + I.card + '</span><h3>门票参考</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        t.tickets.map(function (x) {
          return '<div class="row"><div class="row-ic">' + I.euro + '</div><div class="row-tx">' +
            '<div class="row-t">' + esc(x.name) + '</div><div class="row-d">' + esc(x.price_eur) + '</div></div></div>';
        }).join('') + '</div>';
    }
    if (t.restaurants && t.restaurants.length) {
      h += '<div class="group-head"><span class="gi">' + I.food + '</span><h3>沿线特色餐饮</h3></div>';
      h += '<div class="stack">' + t.restaurants.map(function (x, i) { return eatCard(x, i + 1); }).join('') + '</div>';
    }
    if (t.rainy_plan) {
      h += '<div class="notice info" style="margin-top:14px"><span class="ni">' + I.cloud + '</span><div><b>雨天备选</b><br>' + esc(t.rainy_plan) + '</div></div>';
    }
    if (t.caution) {
      h += '<div class="notice warn" style="margin-top:10px"><span class="ni">' + I.alert + '</span><div>' + esc(t.caution) + '</div></div>';
    }
    h += '<div class="footnote">票价与门票为参考价，请以 DB 官网及景点官方为准。返程建议：' + esc(t.return_time || '当日 19:00 前回到酒店') + '</div>';
    openSheet(t.theme || '周末出行', t.title_zh, h);
  }

  /* ====================== 锦囊 ====================== */
  function renderTips() {
    $$('#tipsTabs .seg').forEach(function (b) { b.classList.toggle('is-active', b.dataset.ttab === state.tipsTab); });
    var h = '';
    if (state.tipsTab === 'guide') h = tipsGuide();
    else if (state.tipsTab === 'customs') h = tipsCustoms();
    else if (state.tipsTab === 'checklist') h = tipsChecklist();
    else if (state.tipsTab === 'about') h = tipsAbout();
    else h = tipsGift();
    $('#tipsBody').innerHTML = h;
  }

  function tipsAbout() {
    var m = D.itinerary && D.itinerary.meta;
    var h = '<div class="card pad-sm">' +
      '<div class="hotel-name">德国长虹商务出行助手</div>' +
      '<div class="hotel-en">Changhong Germany Business Trip</div>' +
      '<div class="hotel-why" style="margin-top:10px">' +
      '面向' + esc((D.itinerary && D.itinerary.meta && D.itinerary.meta.team) || '审计工作组') + '的移动端出行助手，' +
      '整合航班、住宿、餐饮、行程、周末出行、天气穿衣与出入境锦囊。' +
      '全部数据离线内置，无追踪、无外部请求。</div>' +
      '<div class="hotel-tags" style="margin-top:10px">' +
        '<span class="badge gold">' + (m ? esc(m.startDate) + ' – ' + esc(m.endDate) : '') + '</span>' +
        '<span class="badge blue">离线可用</span>' +
        '<span class="badge green">可添加到主屏</span>' +
      '</div>' +
    '</div>';

    h += '<div class="group-head"><span class="gi">' + I.doc + '</span><h3>数据来源</h3></div>';
    h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
      row(I.cal, '行程与航班', '内部《德国境内行程安排》表', '含 CA431 / CA432、各地办公与仓库考察、住宿晚数') +
      row(I.euro, '补贴标准', '内部《出差补贴标准》表', '住宿按人每晚、每人单独一间；餐饮 60 € 为除早餐外餐补') +
      row(I.bulb, '出行注意事项', '《出国注意事项-德国篇》', '已整合核心与实用信息，并按 2026 年新规补充') +
      row(I.bed, '酒店与餐饮', '公开信息核实（官方酒店站点、德国黄页、旅游官方站）', '价格为参考区间，非实时报价') +
      row(I.clock, '日出日落', 'NOAA 太阳位置算法本地计算', '精度约 ±1 分钟，已含夏令时切换') +
      row(I.train, '铁路票制', 'DB（德铁）官方票价与优惠票种', '施工与车次变动频繁，出行前请用 DB Navigator 复核') +
    '</div>';

    h += '<div class="group-head"><span class="gi">' + I.alert + '</span><h3>免责说明</h3></div>';
    h += '<div class="notice warn"><span class="ni">' + I.alert + '</span><div>' +
      '1. 酒店房价、餐厅人均、机票与火车票价、景点门票均为<b>参考区间</b>，会随展会档期、汇率与预订时间波动，请以官方渠道实时信息为准。<br>' +
      '2. 德国铁路施工与车次调整频繁，本行程涉及的莱茵河右岸线路 2026/7/10–12/12 处于整修期，出行前务必用 DB Navigator 复核。' +
      '</div></div>';
    h += '<div class="notice danger"><span class="ni">' + I.ban + '</span><div>' +
      '3. 海关与安检规则以官方最新公告为准；肉类制品、新鲜果蔬、蛋奶制品严禁携带入境中国，刀具必须托运。<br>' +
      '4. 公务出行严禁携带涉密纸质材料与涉密存储介质出境，电子文档请提前脱敏。' +
      '</div></div>';

    h += '<div class="group-head"><span class="gi">' + I.phone + '</span><h3>使用提示</h3></div>';
    h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
      row(I.app, '添加到主屏', '浏览器菜单 → 添加到主屏幕', '即可像 App 一样全屏打开，行程中无需联网') +
      row(I.check, '核对清单进度', '保存在本机浏览器', '更换设备或清除浏览器数据会重置') +
      row(I.wifi, '离线使用', '首次打开后自动缓存', '地下车库、仓库等无信号场景可正常查看') +
    '</div>';

    h += '<div class="footnote">本页内容仅供本次出行参考，不构成任何商业或法律建议。</div>';
    return h;
  }

  var LEVEL_ICON = { must: 'id', danger: 'ban', warn: 'alert', good: 'sparkle', info: 'doc' };
  function tipsGuide() {
    var t = D.tips;
    if (!t || !t.sections) return empty('提示数据加载中…');
    return '<div class="stack">' + t.sections.map(function (s, i) {
      return '<div class="acc' + (i === 0 ? ' is-open' : '') + '" data-level="' + esc(s.level || 'info') + '">' +
        '<button class="acc-head" data-acc>' +
          '<span class="ai">' + (I[s.icon] || I.doc) + '</span>' +
          '<span class="at"><span class="att">' + esc(s.title) + '</span>' +
            (s.subtitle ? '<span class="ats">' + esc(s.subtitle) + '</span>' : '') + '</span>' +
          '<span class="ax">' + I.chev + '</span>' +
        '</button>' +
        '<div class="acc-body">' +
          (s.items || []).map(function (x) {
            var txt = typeof x === 'string' ? x : x.text;
            var lv = typeof x === 'object' && x.level ? x.level : (s.level === 'danger' ? 'danger' : '');
            return '<div class="check-item"><span class="check-box" style="border-color:transparent;background:none">' +
              '<span style="color:var(--c-text-4)">·</span></span><span class="check-tx">' + esc(txt) + '</span></div>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('') + '</div>';
  }

  function tipsCustoms() {
    var im = D.immigration;
    if (!im) return empty('海关数据加载中…');
    var h = '';
    if (im.alerts && im.alerts.length) {
      h += im.alerts.map(function (a) {
        return '<div class="notice ' + (a.level || 'warn') + '"><span class="ni">' + (a.level === 'danger' ? I.ban : I.alert) + '</span><div><b>' + esc(a.title) + '</b><br>' + esc(a.text) + '</div></div>';
      }).join('');
    }
    function sec(icon, title, list, note) {
      if (!list || !list.length) return '';
      return '<div class="group-head"><span class="gi">' + icon + '</span><h3>' + esc(title) + '</h3></div>' +
        (note ? '<div class="notice info" style="margin-bottom:10px"><span class="ni">' + I.bulb + '</span><div>' + esc(note) + '</div></div>' : '') +
        '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden;margin-bottom:6px">' +
        list.map(function (x) {
          var lv = x.level || '';
          var cls = lv === 'danger' ? 'red' : lv === 'warn' ? 'amber' : lv === 'good' ? 'green' : '';
          return '<div class="row"><div class="row-ic ' + cls + '">' + (lv === 'danger' ? I.ban : lv === 'warn' ? I.alert : I.shield) + '</div>' +
            '<div class="row-tx"><div class="row-t">' + esc(x.item || x.title) + '</div>' +
            '<div class="row-d">' + esc(x.rule || x.text || '') + '</div></div></div>';
        }).join('') + '</div>';
    }
    h += sec(I.globe, '入境德国 · 欧盟规定', im.euCustoms, im.euNote);
    h += sec(I.shield, '中国海关规定', im.chinaCustoms, im.chinaNote);
    if (im.ees || im.etias) {
      h += '<div class="group-head"><span class="gi">' + I.id + '</span><h3>申根入境新规</h3></div>';
      h += '<div class="stack">' +
        (im.ees ? '<div class="card pad-sm"><div class="hotel-name">EES 出入境系统</div>' +
          '<div class="hotel-why" style="margin-top:9px">' + esc(im.ees.note) + '</div></div>' : '') +
        (im.etias ? '<div class="card pad-sm"><div class="hotel-name">ETIAS 旅行授权</div>' +
          '<div class="hotel-why" style="margin-top:9px">' + esc(im.etias.note) + '</div></div>' : '') +
      '</div>';
    }
    if (im.security && im.security.length) {
      h += '<div class="group-head"><span class="gi">' + I.lock + '</span><h3>安检与行李禁忌</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        im.security.map(function (x) {
          return '<div class="row"><div class="row-ic ' + (x.level || '') + '">' + (x.level === 'red' ? I.ban : I.alert) + '</div>' +
            '<div class="row-tx"><div class="row-t">' + esc(x.title || x.item) + '</div>' +
            '<div class="row-d">' + esc(x.text || x.rule) + '</div></div></div>';
        }).join('') + '</div>';
    }
    if (im.flights && im.flights.length) {
      h += '<div class="group-head"><span class="gi">' + I.plane + '</span><h3>国航航班行李规定</h3></div>';
      h += '<div class="stack">' + im.flights.map(function (f) {
        return '<div class="card pad-sm">' +
          '<div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline">' +
            '<div class="hotel-name">' + esc(f.flight) + '</div>' +
            '<div class="hotel-price"><div class="hp" style="font-size:12px">' + esc(f.route) + '</div></div>' +
          '</div>' +
          '<div class="hotel-tags" style="margin-top:9px">' +
            (f.duration ? '<span class="badge blue">' + esc(f.duration) + '</span>' : '') +
            (f.aircraft ? '<span class="badge">' + esc(f.aircraft) + '</span>' : '') +
          '</div>' +
          (f.baggage ? '<div class="hotel-why" style="margin-top:9px">' + esc(f.baggage) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }
    if (im.emergency && im.emergency.length) {
      h += '<div class="group-head"><span class="gi">' + I.phone + '</span><h3>紧急联络</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        im.emergency.map(function (e) {
          return '<div class="row"><div class="row-ic red">' + I.phone + '</div><div class="row-tx">' +
            '<div class="row-t">' + esc(e.name) + '</div><div class="row-d" style="font-size:16px;font-weight:700;color:var(--c-gold-lt);letter-spacing:.04em">' + esc(e.number) + '</div>' +
            (e.note ? '<div class="row-x">' + esc(e.note) + '</div>' : '') + '</div></div>';
        }).join('') + '</div>';
    }
    return h || empty('海关数据加载中…');
  }

  var CHECK_KEY = 'changhong_de_checklist_v1';
  function getChecks() {
    try { return JSON.parse(localStorage.getItem(CHECK_KEY) || '{}'); } catch (e) { return {}; }
  }
  function setCheck(k, v) {
    var c = getChecks(); c[k] = v;
    try { localStorage.setItem(CHECK_KEY, JSON.stringify(c)); } catch (e) { }
  }
  function tipsChecklist() {
    var t = D.tips;
    if (!t || !t.checklist) return empty('清单加载中…');
    var c = getChecks();
    var all = 0, done = 0;
    var h = '<div class="notice info"><span class="ni">' + I.check + '</span><div>' +
      '<b>出发前逐项核对</b><br>点击方框勾选，进度自动保存在本机。建议出发前 1 天全部确认。</div></div>' +
      '<button class="seg" style="width:100%;text-align:center;margin-bottom:14px" id="btnResetCheck">重置全部勾选</button>';
    t.checklist.forEach(function (g, gi) {
      h += '<div class="group-head"><span class="gi">' + I.check + '</span><h3>' + esc(g.group) + '</h3></div>';
      h += '<div class="card pad-sm" style="padding:6px 14px">';
      (g.items || []).forEach(function (item, ii) {
        var key = gi + '_' + ii;
        var on = !!c[key];
        all++; if (on) done++;
        if (g.group === '禁止打包自查') {
          h += '<div class="check-item"><span class="check-box" style="background:rgba(227,107,98,.14);border-color:rgba(227,107,98,.34)">' +
            '<span style="color:#F09A93;font-size:11px">✕</span></span>' +
            '<span class="check-tx" style="color:#F09A93">' + esc(item) + ' — 严禁打包</span></div>';
        } else {
          h += '<button class="check-item' + (on ? ' is-done' : '') + '" data-check="' + key + '" style="width:100%;text-align:left;background:none;border:0;border-bottom:1px solid var(--c-line-soft)">' +
            '<span class="check-box">' + I.check + '</span>' +
            '<span class="check-tx">' + esc(item) + '</span></button>';
        }
      });
      h += '</div>';
    });
    h = '<div class="notice good"><span class="ni">' + I.check + '</span><div>已完成 <b>' + done + ' / ' + all + '</b> 项</div></div>' + h;
    return h;
  }

  function tipsGift() {
    var w = D.weekend;
    var gifts = (w && w.souvenirs) || D.souvenirs || [];
    if (!gifts.length) return empty('伴手礼数据加载中…');
    var cats = ['送家人', '送朋友同事', '送领导客户', '自用'];
    var h = '<div class="notice danger"><span class="ni">' + I.ban + '</span><div><b>入境中国必须注意</b><br>' +
      '肉类制品（香肠、火腿、肉干）、新鲜果蔬、蛋奶制品、燕窝严禁携带入境；' +
      '刀具必须托运；液体饮料须托运；超额物品需申报纳税。购买前先确认能否带回国。</div></div>';
    var byCat = {};
    gifts.forEach(function (g) {
      var c = g.category || '自用';
      (byCat[c] = byCat[c] || []).push(g);
    });
    cats.forEach(function (cat) {
      var list = byCat[cat];
      if (!list || !list.length) return;
      h += '<div class="group-head"><span class="gi">' + I.gift + '</span><h3>' + esc(cat) + '</h3><span class="gn">' + list.length + ' 项</span></div>';
      h += '<div class="stack">' + list.map(function (g) {
        return '<div class="card pad-sm">' +
          '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">' +
            '<div style="min-width:0"><div class="hotel-name">' + esc(g.name_zh) + '</div>' +
            (g.name_de ? '<div class="hotel-en">' + esc(g.name_de) + '</div>' : '') + '</div>' +
            '<div class="hotel-price"><div class="hp" style="font-size:13px">' + esc(g.price_range) + '</div></div>' +
          '</div>' +
          (g.why ? '<div class="hotel-why" style="margin-top:9px">' + esc(g.why) + '</div>' : '') +
          (g.where_to_buy && g.where_to_buy.length ? '<div class="hotel-tags" style="margin-top:9px">' +
            g.where_to_buy.map(function (x) { return '<span class="badge">' + esc(x) + '</span>'; }).join('') + '</div>' : '') +
          (g.customs_note ? '<div class="row-x" style="margin-top:9px;color:var(--c-amber)">⚠ ' + esc(g.customs_note) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    });
    if (w && w.taxRefund && w.taxRefund.length) {
      h += '<div class="group-head"><span class="gi">' + I.tax + '</span><h3>购物退税要点</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        w.taxRefund.map(function (x) {
          return '<div class="row"><div class="row-ic gold">' + I.tax + '</div><div class="row-tx">' +
            '<div class="row-d">' + esc(x) + '</div></div></div>';
        }).join('') + '</div>';
    }
    if (w && w.warnings && w.warnings.length) {
      h += '<div class="notice warn" style="margin-top:16px"><span class="ni">' + I.alert + '</span><div>' +
        w.warnings.map(esc).join('<br>') + '</div></div>';
    }
    return h;
  }

  /* ====================== 弹层内容 ====================== */
  function budgetSheet() {
    var b = D.budget;
    if (!b) return;
    var h = '<div class="notice info"><span class="ni">' + I.euro + '</span><div>' + esc(b.effective) + '<br>' + esc(b.rateNote) + '</div></div>';
    if (b.basis) {
      h += '<div class="notice warn"><span class="ni">' + I.alert + '</span><div><b>口径说明</b><br>' +
        esc(b.basis.hotel) + '<br>' + esc(b.basis.meal) + '<br>' + esc(b.basis.other) + '</div></div>';
    }
    h += '<div class="group-head"><span class="gi">' + I.euro + '</span><h3>补贴标准（欧元/人）</h3></div>';
    h += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:12.5px">' +
      '<thead><tr style="background:rgba(200,169,106,.10)">' +
        ['城市', '住宿', '餐饮', '其他'].map(function (x) {
          return '<th style="padding:9px 8px;text-align:left;color:var(--c-gold-lt);font-weight:660;border-bottom:1px solid var(--c-line)">' + x + '</th>';
        }).join('') + '</tr></thead><tbody>' +
      b.standards.map(function (s) {
        return '<tr>' +
          '<td style="padding:9px 8px;border-bottom:1px solid var(--c-line-soft)">' + esc(s.cities) + '</td>' +
          '<td style="padding:9px 8px;border-bottom:1px solid var(--c-line-soft);color:var(--c-gold-lt);font-weight:660">' + s.hotel + '</td>' +
          '<td style="padding:9px 8px;border-bottom:1px solid var(--c-line-soft)">' + s.meal + '</td>' +
          '<td style="padding:9px 8px;border-bottom:1px solid var(--c-line-soft)">' + s.other + '</td>' +
        '</tr>';
      }).join('') + '</tbody></table></div>';

    h += '<div class="group-head"><span class="gi">' + I.pin + '</span><h3>本次行程适用城市</h3></div>';
    h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
      (b.appliedCities || []).map(function (c) {
        return '<div class="row"><div class="row-ic gold">' + I.bed + '</div><div class="row-tx">' +
          '<div class="row-t">' + esc(c.city) + ' · ' + c.nights + ' 晚</div>' +
          '<div class="row-d">住宿 ≤ ' + c.hotel + ' € · 餐饮 ' + c.meal + ' €/天 · 其他 ' + c.other + ' €/天</div></div></div>';
      }).join('') + '</div>';

    if (b.estimates && b.estimates.detail) {
      h += '<div class="group-head"><span class="gi">' + I.euro + '</span><h3>全团预算测算（4 人）</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        b.estimates.detail.map(function (x) {
          return '<div class="row"><div class="row-ic">' + I.euro + '</div><div class="row-tx">' +
            '<div class="row-t">' + esc(x.item) + '</div>' +
            (x.calc ? '<div class="row-x">' + esc(x.calc) + '</div>' : '') +
            '<div class="row-d" style="color:var(--c-gold-lt);font-weight:680">' + x.eur + ' €</div></div></div>';
        }).join('') + '</div>';
    }
    var mp = b.mealPolicy;
    if (mp) {
      h += '<div class="group-head"><span class="gi">' + I.food + '</span><h3>餐饮安排原则</h3></div>';
      h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
        row(I.food, '早餐', mp.breakfast, '') +
        row(I.food, '午餐', mp.lunch, '') +
        row(I.food, '晚餐', mp.dinner, '') +
        row(I.euro, '每日上限', mp.dailyCap, '') +
      '</div>';
    }
    if (b.tips && b.tips.length) {
      h += '<div class="notice warn" style="margin-top:16px"><span class="ni">' + I.bulb + '</span><div>' +
        b.tips.map(esc).join('<br>') + '</div></div>';
    }
    openSheet('补贴标准', '出差补贴与预算控制', h);
  }

  function emergencySheet() {
    var im = D.immigration || {};
    var list = im.emergency || [];
    var h = '<div class="notice danger"><span class="ni">' + I.phone + '</span><div>遇到紧急情况先保证人身安全，再联系团组负责人与使领馆。</div></div>';
    h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
      (list.length ? list.map(function (e) {
        return '<div class="row"><div class="row-ic red">' + I.phone + '</div><div class="row-tx">' +
          '<div class="row-t">' + esc(e.name) + '</div>' +
          '<div class="row-d" style="font-size:19px;font-weight:740;color:var(--c-gold-lt);letter-spacing:.05em">' + esc(e.number) + '</div>' +
          (e.note ? '<div class="row-x">' + esc(e.note) + '</div>' : '') + '</div></div>';
      }).join('') : '<div class="row"><div class="row-tx"><div class="row-d">加载中…</div></div></div>') +
    '</div>';
    var s = D.safety;
    if (s) {
      if (s.medical && s.medical.length) {
        h += '<div class="group-head"><span class="gi">' + I.med + '</span><h3>就医与用药</h3></div>';
        h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
          s.medical.map(function (x) {
            return '<div class="row"><div class="row-ic blue">' + I.med + '</div><div class="row-tx">' +
              '<div class="row-t">' + esc(x.title) + '</div><div class="row-d">' + esc(x.text) + '</div></div></div>';
          }).join('') + '</div>';
      }
      if (s.medicineGlossary && s.medicineGlossary.length) {
        h += '<div class="group-head"><span class="gi">' + I.med + '</span><h3>常用药品德语对照</h3></div>';
        h += '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden">' +
          s.medicineGlossary.map(function (x) {
            return '<div class="row"><div class="row-ic">' + I.med + '</div><div class="row-tx">' +
              '<div class="row-t">' + esc(x.zh) + '</div><div class="row-d">' + esc(x.de) + '</div></div></div>';
          }).join('') + '</div>';
      }
      if (s.scams && s.scams.length) {
        h += '<div class="group-head"><span class="gi">' + I.ban + '</span><h3>防盗防骗</h3></div>';
        h += '<div class="notice warn"><span class="ni">' + I.alert + '</span><div>' + s.scams.map(esc).join('<br>') + '</div></div>';
      }
    }
    openSheet('紧急与安全', '紧急联络 · 医疗 · 安全', h);
  }

  /* ====================== 事件绑定 ====================== */
  function bind() {
    // 底部导航
    $$('.tab').forEach(function (t) {
      t.addEventListener('click', function () { go(t.dataset.view); });
    });

    // 顶栏分享
    $('#btnShare').addEventListener('click', function () {
      var data = { title: '德国长虹商务出行', text: '一键App在手，德国出行无忧', url: location.href };
      if (navigator.share) {
        navigator.share(data).catch(function () { });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href).then(function () { toast('链接已复制'); }, function () { toast('请手动复制地址栏链接'); });
      } else { toast('请手动复制地址栏链接'); }
    });

    // 事件委托
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      function up(sel) { return t.closest ? t.closest(sel) : null; }

      var goto = up('[data-goto]');
      if (goto) { ev.preventDefault(); go(goto.dataset.goto); return; }

      var q = up('[data-quick]');
      if (q) {
        var k = q.dataset.quick;
        if (k === 'stay') { state.stayCity = currentStayCity(); go('stay'); }
        else if (k === 'eat') { state.stayCity = currentStayCity(); go('stay'); setTimeout(function () { var b = $('#stayBody'); if (b) b.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); }
        else if (k === 'weekend') { state.outdoorTab = 'weekend'; go('outdoor'); }
        else if (k === 'weather') { state.outdoorTab = 'weather'; go('outdoor'); }
        else if (k === 'customs') { state.tipsTab = 'customs'; go('tips'); }
        else if (k === 'gift') { state.tipsTab = 'gift'; go('tips'); }
        else if (k === 'checklist') { state.tipsTab = 'checklist'; go('tips'); }
        else if (k === 'emergency') { emergencySheet(); }
        else if (k === 'budget') { budgetSheet(); }
        return;
      }

      var city = up('[data-city]');
      if (city) { state.stayCity = city.dataset.city; renderStay(); return; }

      var gc = up('[data-goto-city]');
      if (gc) { state.stayCity = gc.dataset.gotoCity; closeSheet(); go('stay'); return; }

      var ot = up('[data-otab]');
      if (ot) { state.outdoorTab = ot.dataset.otab; renderOutdoor(); return; }

      var tt = up('[data-ttab]');
      if (tt) { state.tipsTab = tt.dataset.ttab; renderTips(); return; }

      var ifl = up('[data-ifilter]');
      if (ifl) { state.itinFilter = ifl.dataset.ifilter; renderItinerary(); return; }

      var d = up('[data-day]');
      if (d) { daySheet(d.dataset.day); return; }

      var tr = up('[data-trip]');
      if (tr) { tripSheet(tr.dataset.trip); return; }

      var chk = up('[data-check]');
      if (chk) {
        var key = chk.dataset.check;
        var cur = getChecks();
        setCheck(key, !cur[key]);
        chk.classList.toggle('is-done', !cur[key]);
        return;
      }

      if (up('#btnResetCheck')) {
        try { localStorage.removeItem(CHECK_KEY); } catch (e) { }
        renderTips(); toast('已重置'); return;
      }

      var acc = up('[data-acc]');
      if (acc) { acc.parentElement.classList.toggle('is-open'); return; }

      var fl = up('[data-flight]');
      if (fl) { flightSheet(fl.dataset.flight); return; }

      var wc = up('[data-weather]');
      if (wc) { state.outdoorTab = 'weather'; go('outdoor'); return; }

      if (up('[data-sheet-close]')) { closeSheet(); return; }
    });

    // ESC 关闭弹层
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sheetOpen) closeSheet();
    });

    // 浏览器返回键关闭弹层
    window.addEventListener('popstate', function () {
      if (sheetOpen) closeSheet();
    });
  }

  function currentStayCity() {
    var d = nextDayItem();
    if (!d) return null;
    var k = cityKeyOf(d.stayCity);
    if (k) return k;
    var c = cityData();
    for (var key in c) { if (d.stayCity && d.stayCity.indexOf(c[key].city) >= 0) return key; }
    return CITY_ORDER[0];
  }

  function flightSheet(dir) {
    var m = D.itinerary.meta;
    var f = dir === 'out' ? m.outbound : m.inbound;
    var h = '<div class="rows" style="border:1px solid var(--c-line);border-radius:var(--r-md);overflow:hidden;margin-bottom:13px">' +
      row(I.plane, '航班号', f.flight + ' · ' + f.airline, '') +
      row(I.cal, '日期', f.date + (f.arriveDate ? '（抵达 ' + f.arriveDate + '）' : ''), '') +
      row(I.pin, '起飞', f.depart + ' ' + f.departTz + ' · ' + f.from, '') +
      row(I.pin, '抵达', f.arrive + ' ' + f.arriveTz + ' · ' + f.to, '') +
      (f.duration ? row(I.clock, '飞行时长', f.duration, '') : '') +
    '</div>';
    h += '<div class="notice info"><span class="ni">' + I.bulb + '</span><div>' +
      (dir === 'out'
        ? '<b>出发提醒</b><br>建议提前 3 小时到达成都天府国际机场；国际航班行李直挂需确认至 FRA。落地后先过边检再取行李。'
        : '<b>返程提醒</b><br>建议提前 3 小时到达法兰克福机场办理值机、海关盖章与退税；退税柜台排队较长，务必预留时间。') +
      '</div></div>';
    if (dir === 'out') {
      h += '<div class="notice warn"><span class="ni">' + I.alert + '</span><div><b>落地当天行程较满</b><br>' +
        '06:45 抵达法兰克福后需当日前往杜塞尔多夫（约 227 公里）。长途飞行后不建议自驾，优先选择火车（ICE/IC 约 1.5–2 小时）或包车。</div></div>';
    }
    openSheet('航班信息', f.flight + ' · ' + f.from.split(' ')[0] + ' ⇄ ' + f.to.split(' ')[0], h);
  }

  /* ====================== 启动 ====================== */
  function boot() {
    bind();
    applyInitialState();
    renderHero();
    renderFlights();
    renderNext();
    renderWeatherStrip();
    renderQuick();
    renderBudgetSummary();
    renderHomeFootnote();
    go(initialView(), true);
    renderItinerary();
    setTimeout(function () {
      var b = $('#boot');
      b.classList.add('is-out');
      setTimeout(function () { b.style.display = 'none'; }, 560);
    }, 520);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // 注册 Service Worker（离线可用；file:// 下自动跳过）
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* 忽略注册失败 */ });
    });
  }
})();
