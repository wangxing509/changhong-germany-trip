/**
 * 启用并检查 GitHub Pages（分支模式：main / 根目录）
 * 用法：node scripts/pages.mjs
 * 需要 GITHUB_TOKEN 与 GITHUB_REPO。
 */
const REPO = process.env.GITHUB_REPO || 'wangxing509/changhong-germany-trip';
const TOKEN = process.env.GITHUB_TOKEN;
const API = `https://api.github.com/repos/${REPO}`;

async function api(pathname, init = {}) {
  const res = await fetch(API + pathname, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'changhong-trip-publisher',
      ...(init.body ? { 'Content-Type': 'application/json' } : {})
    }
  });
  const text = await res.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* ignore */ }
  return { ok: res.ok, status: res.status, json, text };
}

async function main() {
  if (!TOKEN) throw new Error('缺少 GITHUB_TOKEN');

  const existing = await api('/pages');
  if (existing.ok) {
    console.log('Pages 已启用:', JSON.stringify(existing.json.source), existing.json.html_url);
  } else if (existing.status === 404) {
    console.log('Pages 未启用，正在启用（main / 根目录）…');
    const created = await api('/pages', {
      method: 'POST',
      body: JSON.stringify({ source: { branch: 'main', path: '/' } })
    });
    if (!created.ok) throw new Error(`启用失败 ${created.status}: ${created.text.slice(0, 300)}`);
    console.log('已启用:', created.json.html_url);
  } else {
    throw new Error(`查询 Pages 失败 ${existing.status}: ${existing.text.slice(0, 300)}`);
  }

  // 轮询构建状态
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 6000));
    const b = await api('/pages/builds/latest');
    if (!b.ok) { console.log(`  [${i}] 构建状态查询失败 ${b.status}`); continue; }
    console.log(`  [${i}] status=${b.json.status} ${b.json.error?.message || ''}`);
    if (b.json.status === 'built') break;
    if (b.json.status === 'errored') throw new Error('Pages 构建失败: ' + JSON.stringify(b.json.error));
  }

  const final = await api('/pages');
  if (final.ok) console.log('\n访问地址:', final.json.html_url);
}

main().catch((e) => { console.error('失败:', e.message); process.exit(1); });
