/**
 * 公開前の個人情報・環境固有情報チェック
 *
 * ## なぜ必要か
 *
 * 2026年8月、記事本文にサイト運営者の名前を書いたまま push しかけた。
 * プレビューを目視して気づいたが、**人間の目視に依存する防御は仕組みとして弱い**。
 * 公開経路の手前に機械的な関門を置く。
 *
 * ## 設計方針
 *
 * **このスクリプト自身に個人情報を書かない。** 検出対象をハードコードすると、
 * それ自体がリポジトリへの個人情報の記載になる。したがって:
 *
 * - リポジトリ所有者名は実行時に導出する（CI は GITHUB_REPOSITORY、
 *   ローカルは git remote から）
 * - それ以外の固有語は環境変数 PRIVATE_TERMS から受け取る
 *   （CI では GitHub Secrets 経由で渡す。改行またはカンマ区切り）
 * - ローカル実行用に、gitignore 済みの .private-terms ファイルも読む
 *
 * ## 判定
 *
 * - **Error**: 所有者名、環境固有パス、セッション/成果物URL、資格情報らしき文字列
 * - **Warn**: 一般のメールアドレス（記事が取材対象として引用する場合がある。
 *   実例: サプライチェーン攻撃の記事で攻撃者のアドレスを引用している）
 *   レビュー済みのものは scripts/allowed-emails.txt に記載すると Warn からも外れる
 *
 * 使い方:
 *   node scripts/check-private-info.mjs           # 記事データを検査
 *   node scripts/check-private-info.mjs --dist    # ビルド成果物も検査
 *
 * 終了コード: Error が1件でもあれば 1
 */

import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { execSync } from "child_process";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join, relative, extname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const scanDist = process.argv.includes("--dist");

const errors = [];
const warns = [];
const err = (where, msg) => errors.push({ where, msg });
const warn = (where, msg) => warns.push({ where, msg });

// ── 検出語の導出（ハードコードしない） ──
function ownerFromEnvOrGit() {
  const fromCi = process.env.GITHUB_REPOSITORY; // "owner/repo"
  if (fromCi && fromCi.includes("/")) return fromCi.split("/")[0];
  try {
    const url = execSync("git remote get-url origin", { cwd: rootDir, encoding: "utf8" }).trim();
    const m = url.match(/[:/]([^/:]+)\/[^/]+?(?:\.git)?$/);
    if (m) return m[1];
  } catch {
    /* リモート未設定なら諦める */
  }
  return null;
}

function extraTerms() {
  const out = [];
  const env = process.env.PRIVATE_TERMS;
  if (env) out.push(...env.split(/[\n,]/));
  const f = join(rootDir, ".private-terms");
  if (existsSync(f)) out.push(...readFileSync(f, "utf8").split("\n"));
  return out.map((s) => s.trim()).filter((s) => s && !s.startsWith("#"));
}

const owner = ownerFromEnvOrGit();
const terms = extraTerms();

// ── レビュー済みメールアドレス ──
const allowedEmails = new Set();
{
  const f = join(rootDir, "scripts/allowed-emails.txt");
  if (existsSync(f)) {
    for (const line of readFileSync(f, "utf8").split("\n")) {
      const s = line.trim();
      if (s && !s.startsWith("#")) allowedEmails.add(s.toLowerCase());
    }
  }
}

// ── パターン ──
const HARD = [
  {
    name: "環境固有のパス（/home/... または /Users/...）",
    re: /(?:\/home\/|\/Users\/)[A-Za-z0-9._-]+\//g,
  },
  { name: "環境固有のパス（Windows のユーザーディレクトリ）", re: /[A-Za-z]:\\+Users\\+[A-Za-z0-9._-]+/g },
  { name: "作業セッション・成果物の URL", re: /claude\.ai\/code\/(?:session_[A-Za-z0-9]+|artifact\/[0-9a-f-]+)/g },
  { name: "資格情報らしき文字列", re: /\b(?:sk-ant-[A-Za-z0-9_-]{8,}|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16})\b/g },
  { name: "秘密鍵ブロック", re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
];

const EMAIL_RE = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

// サイト自身の公開アドレスには所有者名が必ず含まれる。
// GitHub Pages の URL（<owner>.github.io）やリポジトリ URL は漏洩ではないため、
// 所有者名の照合の前にこれらを打ち消す。打ち消さないと feed.xml / sitemap.xml /
// ビルド成果物の canonical URL が毎回引っかかり、デプロイが常に落ちる。
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const selfRefs = owner
  ? [
      new RegExp(`${esc(owner)}\\.github\\.io`, "gi"),
      new RegExp(`github\\.com/${esc(owner)}(?=[/"'\\s]|$)`, "gi"),
      new RegExp(`raw\\.githubusercontent\\.com/${esc(owner)}(?=[/"'\\s]|$)`, "gi"),
    ]
  : [];

function scanText(rawText, where) {
  let text = rawText;
  for (const re of selfRefs) text = text.replace(re, "«site»");

  for (const { name, re } of HARD) {
    for (const m of text.match(new RegExp(re.source, re.flags)) || []) {
      err(where, `${name}: ${m}`);
    }
  }
  if (owner) {
    const re = new RegExp(esc(owner), "gi");
    if (re.test(text)) err(where, `リポジトリ所有者名が本文に含まれています: ${owner}`);
  }
  for (const t of terms) {
    if (text.toLowerCase().includes(t.toLowerCase())) {
      err(where, `PRIVATE_TERMS に登録された語が含まれています（語そのものは表示しません。長さ ${t.length}）`);
    }
  }
  for (const m of text.match(EMAIL_RE) || []) {
    if (!allowedEmails.has(m.toLowerCase())) {
      warn(where, `メールアドレス: ${m}（取材対象として意図的なら scripts/allowed-emails.txt に追加してください）`);
    }
  }
}

// ── 記事データを検査 ──
const bodyMod = await import(pathToFileURL(join(rootDir, "src/data/articlesBody.js")).href);
const body = bodyMod.default || bodyMod.ARTICLES_BODY || {};
const metaMod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
const meta = metaMod.ARTICLES_META || metaMod.default || [];

for (const a of meta) {
  scanText(`${a.title ?? ""}\n${a.excerpt ?? ""}\n${(a.tags || []).join(" ")}`, `meta:${a.id}`);
}
for (const [id, entry] of Object.entries(body)) {
  const parts = [
    ...(entry.body || []),
    ...(entry.primarySources || []).flatMap((s) => [s.title, s.site, s.url, s.note].filter(Boolean)),
    ...(entry.tables || []).flatMap((t) => [t.caption, ...(t.headers || []), ...(t.rows || []).flat()]),
    ...(entry.charts || []).flatMap((c) => [c.title, c.subtitle].filter(Boolean)),
    ...(entry.figures || []).flatMap((f) => [f.alt, f.caption].filter(Boolean)),
  ];
  scanText(parts.join("\n"), `body:${id}`);
}

// ── ビルド成果物も検査（--dist） ──
if (scanDist) {
  const dist = join(rootDir, "dist");
  if (!existsSync(dist)) {
    console.error("dist/ がありません。先に npm run build を実行してください。");
    process.exit(1);
  }
  const TEXT_EXT = new Set([".html", ".js", ".css", ".json", ".xml", ".txt", ".svg"]);
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (TEXT_EXT.has(extname(p))) scanText(readFileSync(p, "utf8"), `dist:${relative(rootDir, p)}`);
    }
  };
  walk(dist);
  // feed / sitemap も公開物
  for (const f of ["public/feed.xml", "public/sitemap.xml"]) {
    const p = join(rootDir, f);
    if (existsSync(p)) scanText(readFileSync(p, "utf8"), f);
  }
}

// ── 出力 ──
console.log(`個人情報・環境固有情報チェック（記事 ${meta.length} 件${scanDist ? " + ビルド成果物" : ""}）`);
console.log(`  所有者名の照合: ${owner ? "有効" : "無効（GITHUB_REPOSITORY も git remote も取得できず）"}`);
console.log(`  追加の検出語: ${terms.length} 件${terms.length ? "" : "（PRIVATE_TERMS 未設定）"}`);
console.log("");

const seen = new Set();
for (const e of errors) {
  const k = `${e.where}|${e.msg}`;
  if (seen.has(k)) continue;
  seen.add(k);
  console.log(`❌ [${e.where}] ${e.msg}`);
}
for (const w of warns) {
  const k = `${w.where}|${w.msg}`;
  if (seen.has(k)) continue;
  seen.add(k);
  console.log(`⚠️  [${w.where}] ${w.msg}`);
}

console.log("");
console.log(`  エラー: ${errors.length} 件 / 警告: ${warns.length} 件`);
if (!owner && !terms.length) {
  console.log("");
  console.log("  ⚠️  照合対象が1つもありません。CI では GITHUB_REPOSITORY が自動で入ります。");
  console.log("     固有語を追加したい場合は Secrets に PRIVATE_TERMS を設定してください。");
}
console.log(errors.length ? "\n❌ 公開してはならない情報が含まれています。" : "\n✅ 問題は見つかりませんでした。");

process.exit(errors.length ? 1 : 0);
