/**
 * JSX で使っている className に、CSS の定義があるかを検査する。
 *
 * ── なぜ必要か ──
 * 2026年9月3日、ガイドの「ツールの組み合わせ早見表」を `.table-scroll` という
 * **存在しないクラス**で包んでいた。CSS が当たらないので `overflow-x: auto` が
 * 効かず、`min-width: 36rem` の表がそのまま置かれた結果、
 * **ページ全体が横に 435px はみ出し、モバイルで画面が縮小表示になっていた。**
 *
 * ビルドは通る。React も文句を言わない。既存のどの検査にも掛からない。
 * 見つけたのは読者（サイト運営者）の目視である。
 *
 * 正しいクラスは `.article-table-scroll` または `.vibe-tool-table-wrap` で、
 * **1文字ではなく単語ひとつ違っていた。** この種の取り違えは静かに壊れる。
 *
 * ── 検出できないこと ──
 * テンプレートリテラルや変数で組み立てた className は見ない。
 * 文字列リテラルだけを対象にする。取りこぼしはあるが、誤検知を出さないほうを取る。
 * 「CSS に定義がある」ことは「意図したスタイルが当たる」ことを意味しない。
 *
 * ── スタイルを持たないクラスは正常でありうる ──
 * 意味づけや目印としてのクラス、JS から参照するだけのクラスがある。
 * それらは `scripts/allowed-classless.txt` に**理由を添えて**登録する。
 * 一律にエラーにすると、登録が面倒で検査ごと無効化される。
 *
 * Usage:
 *   node scripts/check-css-classes.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, extname, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const srcDir = join(rootDir, "src");
const allowFile = join(__dirname, "allowed-classless.txt");

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(srcDir);

// CSS 側で定義されているクラス名を集める
const cssText = files
  .filter((f) => extname(f) === ".css")
  .map((f) => readFileSync(f, "utf-8"))
  .join("\n");
const defined = new Set([...cssText.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1]));

// 理由付きで許可されているもの
const allowed = new Set();
if (existsSync(allowFile)) {
  for (const line of readFileSync(allowFile, "utf-8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    allowed.add(t.split(/\s+/)[0]);
  }
}

// JSX の className="..." を集める。文字列リテラルのみを対象にする
const used = new Map();
for (const f of files.filter((f) => [".jsx", ".js"].includes(extname(f)))) {
  const s = readFileSync(f, "utf-8");
  for (const m of s.matchAll(/className=(?:"([^"{}]+)"|\{"([^"{}`]+)"\})/g)) {
    for (const c of (m[1] || m[2]).split(/\s+/).filter(Boolean)) {
      if (!used.has(c)) used.set(c, new Set());
      used.get(c).add(relative(rootDir, f));
    }
  }
}

const missing = [...used]
  .filter(([c]) => !defined.has(c) && !allowed.has(c))
  .sort((a, b) => a[0].localeCompare(b[0]));

console.log(`className の種類 ${used.size} / CSS 定義 ${defined.size} / 許可済み ${allowed.size}`);

if (!missing.length) {
  console.log("\n✅ CSS に定義の無い className はありません。");
  process.exit(0);
}

console.log(`\n❌ CSS に定義が無い className: ${missing.length} 件\n`);
for (const [c, where] of missing) {
  console.log(`  .${c}`);
  for (const w of where) console.log(`      ${w}`);
}
console.log(
  "\n対応は2つのどちらかです。\n" +
    "  1. クラス名の取り違えなら直す。**似た名前の既存クラスがないか必ず確認すること。**\n" +
    "     過去の事故は `.table-scroll` と `.article-table-scroll` の取り違えだった\n" +
    "  2. スタイルを持たないことが意図なら、scripts/allowed-classless.txt に\n" +
    "     **なぜ必要かを添えて**登録する"
);
process.exit(1);
