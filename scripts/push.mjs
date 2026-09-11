/**
 * 通过 GitHub Git Data API 发布仓库内容
 * 背景：本机 git-upload-pack (https) 通道被重置，改用 API 通道推送。
 *
 * 用法：node scripts/push.mjs "提交信息"
 * 需要环境变量 GITHUB_TOKEN；仓库由 GITHUB_REPO 指定。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

// 注意：必须用 fileURLToPath，pathname 会把中文路径百分号编码
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = process.env.GITHUB_REPO || 'wangxing509/changhong-germany-trip';
const TOKEN = process.env.GITHUB_TOKEN;
const MESSAGE = process.argv[2] || 'chore: update';

if (!TOKEN) {
  console.error('缺少 GITHUB_TOKEN');
  process.exit(1);
}

const API = `https://api.github.com/repos/${REPO}`;

async function api(pathname, init = {}) {
  const res = await fetch(API + pathname, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'changhong-trip-publisher',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      ...(init.headers || {})
    }
  });
  const text = await res.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* 非 JSON */ }
  if (!res.ok) {
    const err = new Error(`${init.method || 'GET'} ${pathname} -> ${res.status}: ${text.slice(0, 400)}`);
    err.status = res.status;
    throw err;
  }
  return json;
}

/** 定位 git 可执行文件（避免 PATH 缺失导致 ENOENT） */
function gitBin() {
  const candidates = [
    process.env.GIT_BIN,
    'git',
    'C:\\Program Files\\Git\\cmd\\git.exe',
    'C:\\Program Files (x86)\\Git\\cmd\\git.exe'
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      execFileSync(c, ['--version'], { stdio: 'ignore' });
      return c;
    } catch { /* 试下一个 */ }
  }
  throw new Error('未找到 git 可执行文件，请设置 GIT_BIN 环境变量');
}

const GIT = gitBin();

/** 读取 git 跟踪的文件列表（关闭 quotepath，保证中文路径原样返回） */
function trackedFiles() {
  const out = execFileSync(
    GIT,
    ['-c', 'core.quotepath=false', 'ls-files'],
    { cwd: ROOT, encoding: 'utf8' }
  );
  return out.split('\n').map((s) => s.trim()).filter(Boolean);
}

async function ensureRepoInitialized() {
  try {
    await api('/git/ref/heads/main');
    return true;
  } catch (e) {
    if (e.status !== 404 && e.status !== 409) throw e;
  }
  // 空仓库无法调用 Blob API，先用 Contents API 写入一个种子文件
  console.log('[init] 空仓库，先用 Contents API 初始化…');
  const seed = fs.readFileSync(path.join(ROOT, 'README.md'));
  await api('/contents/README.md', {
    method: 'PUT',
    body: JSON.stringify({
      message: 'chore: initialize repository',
      content: seed.toString('base64'),
      branch: 'main'
    })
  });
  await new Promise((r) => setTimeout(r, 2000));
  console.log('[init] 完成');
  return true;
}

async function main() {
  await ensureRepoInitialized();

  const files = trackedFiles();
  console.log(`待上传 ${files.length} 个文件`);

  const tree = [];
  for (const rel of files) {
    const abs = path.join(ROOT, rel);
    const buf = fs.readFileSync(abs);
    const blob = await api('/git/blobs', {
      method: 'POST',
      body: JSON.stringify({ content: buf.toString('base64'), encoding: 'base64' })
    });
    const posix = rel.split(path.sep).join('/');
    tree.push({ path: posix, mode: '100644', type: 'blob', sha: blob.sha });
    console.log(`  ✓ ${posix}  ${(buf.length / 1024).toFixed(1)} KB  ${blob.sha.slice(0, 8)}`);
  }

  const treeRes = await api('/git/trees', {
    method: 'POST',
    body: JSON.stringify({ tree })
  });
  console.log(`tree: ${treeRes.sha}`);

  let parent = null;
  try {
    const ref = await api('/git/ref/heads/main');
    parent = ref.object.sha;
  } catch { /* 无 main */ }

  const commitBody = { message: MESSAGE, tree: treeRes.sha };
  if (parent) commitBody.parents = [parent];

  const commit = await api('/git/commits', {
    method: 'POST',
    body: JSON.stringify(commitBody)
  });
  console.log(`commit: ${commit.sha}`);

  if (parent) {
    await api('/git/refs/heads/main', {
      method: 'PATCH',
      body: JSON.stringify({ sha: commit.sha, force: false })
    });
  } else {
    await api('/git/refs', {
      method: 'POST',
      body: JSON.stringify({ ref: 'refs/heads/main', sha: commit.sha })
    });
  }
  console.log(`\n推送完成 → https://github.com/${REPO}/commit/${commit.sha}`);

  // 同步本地 ref，便于后续 git 操作
  try {
    execFileSync(GIT, ['update-ref', 'refs/heads/main', commit.sha], { cwd: ROOT });
    console.log('本地 main 已同步');
  } catch { /* 忽略 */ }
}

main().catch((e) => {
  console.error('推送失败:', e.message);
  process.exit(1);
});
