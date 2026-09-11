/**
 * 构建脚本：把 data/*.json 打包为单个 data/app-data.js
 * 目的：GitHub Pages 静态部署下避免 file:// 与 CORS 的 fetch 限制，
 *       同时保持 JSON 为唯一数据源（可读、可校验、可 diff）。
 *
 * 用法：node build.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const OUT_FILE = path.join(DATA_DIR, 'app-data.js');

/** 各 JSON 文件在 window.APP_DATA 下的挂载键 */
const MOUNT = {
  'itinerary.json': 'itinerary',
  'budget.json': 'budget',
  'tips.json': 'tips',
  'cities.json': 'cities',
  'weather.json': 'weather',
  'transport.json': 'transport',
  'weekend.json': 'weekend',
  'immigration.json': 'immigration',
  'safety.json': 'safety',
  'souvenirs.json': 'souvenirs'
};

function main() {
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).sort();
  const out = {};
  const report = [];

  for (const f of files) {
    const key = MOUNT[f] || path.basename(f, '.json');
    const raw = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      console.error(`✗ JSON 解析失败: ${f}\n  ${e.message}`);
      process.exitCode = 1;
      continue;
    }
    out[key] = parsed;
    const bytes = Buffer.byteLength(raw, 'utf8');
    report.push({ file: f, key, bytes, size: (bytes / 1024).toFixed(1) + ' KB' });
  }

  const banner =
    '/* 自动生成，请勿直接修改 —— 源文件位于 data/*.json，运行 `node build.js` 重新生成 */\n';
  const body = 'window.APP_DATA = ' + JSON.stringify(out, null, 2) + ';\n';

  fs.writeFileSync(OUT_FILE, banner + body, 'utf8');

  console.log('数据打包完成 → data/app-data.js');
  console.table(report);
  const total = report.reduce((s, r) => s + r.bytes, 0);
  console.log(`合计 ${report.length} 个数据文件，${(total / 1024).toFixed(1)} KB`);
}

main();
