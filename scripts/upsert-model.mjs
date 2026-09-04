/**
 * ベンチマーク比較表（`src/constants.js` の `MODEL_COMPARISON`）に
 * モデルを1件だけ追加・更新する。
 *
 * ── なぜスクリプトを通すのか ──
 * 記事データと同じ理由である。モデルが扱う対象を**1件ぶんの JSON**に限定すれば、
 * 既存データを読んで書き戻す過程で起きる欠損が原理的に発生しない。
 *
 * ただし記事データとは**決定的に違う点が1つ**ある。
 * `MODEL_COMPARISON` の配列の中には**コメントが入っている**。
 *
 *   // === Anthropic ===
 *   // スコアは各社の公式発表値のみ。null = 公式データなし（チャートに非表示）
 *
 * そのため `serialize-articles.mjs` のような**配列ごとの再生成は使えない。**
 * 再生成するとベンダーごとの区切りも、値の出どころの但し書きも消える。
 * ここでは**該当する1行だけ**を差し替え、他の行とコメントには一切触れない。
 *
 * ── 安全のしかた ──
 * 書き込んだあとに実際に import し直し、次を検査する。
 *
 *   - 変更前にあったモデルが全部残っているか
 *   - 件数の変化が「追加なら +1、更新なら 0」に一致するか
 *   - 対象モデルの値が、渡した JSON と一致するか
 *
 * **1つでも合わなければ元のバイト列に戻す。** 半分書けた状態を作らない。
 *
 * Usage:
 *   node scripts/upsert-model.mjs model.json --dry-run
 *   node scripts/upsert-model.mjs model.json
 *
 * model.json の形（数値は公式発表値のみ。無いものは null）:
 *   {
 *     "name": "Claude Fable 5.1",
 *     "rating": 5,
 *     "summary": "...",
 *     "swe": 95, "swePro": 80, "terminalBench": null, "osworld": null,
 *     "browseComp": null, "gpqa": null, "aime": null, "hle": null,
 *     "after": "Claude Fable 5"
 *   }
 *
 * `after` は挿入位置（この行の直後に入れる）。省略すると同じ系列の最後を探す。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const CONSTANTS = join(rootDir, "src/constants.js");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const inputPath = args.find((a) => !a.startsWith("--"));

if (!inputPath) {
  console.error("使い方: node scripts/upsert-model.mjs <model.json> [--dry-run]");
  process.exit(2);
}

/** 表の列。順序も既存行に合わせる */
const KEYS = [
  "name", "rating", "summary",
  "swe", "swePro", "terminalBench", "osworld", "browseComp", "gpqa", "aime", "hle",
];
const NUMERIC = KEYS.slice(3);

const fail = (msg) => {
  console.error(`❌ ${msg}`);
  process.exit(1);
};

let input;
try {
  input = JSON.parse(readFileSync(resolve(inputPath), "utf-8"));
} catch (e) {
  fail(`JSON を読めません: ${e.message}`);
}

// ── 入力の検査 ──
if (typeof input.name !== "string" || !input.name.trim()) fail("name が必要です。");
if (typeof input.rating !== "number" || input.rating < 0 || input.rating > 5) {
  fail("rating は 0〜5 の数値です。**ベンチマークのみの総合値**であり、レビューの★とは別の尺度です。");
}
if (typeof input.summary !== "string" || !input.summary.trim()) fail("summary が必要です。");
for (const k of NUMERIC) {
  const v = input[k];
  if (v !== null && v !== undefined && typeof v !== "number") fail(`${k} は数値か null です。`);
}
// 期限付きの記述は表に置かない（期限後に誤情報になる）
if (/まで無料|期間限定|今だけ|キャンペーン/.test(input.summary)) {
  fail("summary に期限付きの記述は書けません。期限後に誤情報になります。記事側に書いてください。");
}
const unknown = Object.keys(input).filter((k) => !KEYS.includes(k) && k !== "after");
if (unknown.length) fail(`知らないキーがあります: ${unknown.join(", ")}`);

/** 1行ぶんの表記。既存行と同じ形にする */
function renderRow(m) {
  const parts = KEYS.map((k) => {
    const v = m[k];
    if (k === "name" || k === "summary") return `${k}: ${JSON.stringify(String(v))}`;
    if (k === "rating") return `rating: ${v}`;
    return `${k}: ${v === undefined || v === null ? "null" : v}`;
  });
  return `  { ${parts.join(", ")} },`;
}

const original = readFileSync(CONSTANTS, "utf-8");
const lines = original.split("\n");

const startIdx = lines.findIndex((l) => l.startsWith("export const MODEL_COMPARISON = ["));
if (startIdx === -1) fail("MODEL_COMPARISON の開始行が見つかりません。");
const endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith("];"));
if (endIdx === -1) fail("MODEL_COMPARISON の終了行が見つかりません。");

/** 配列内の「モデル行」だけを拾う。コメント行は対象外 */
const rowIdx = [];
for (let i = startIdx + 1; i < endIdx; i++) {
  if (/^\s*\{\s*name:\s*"/.test(lines[i])) rowIdx.push(i);
}
const nameAt = (i) => lines[i].match(/name:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "";

const before = await import(`${pathToFileURL(CONSTANTS).href}?v=${Date.now()}`);
const beforeNames = before.MODEL_COMPARISON.map((m) => m.name);

const existingIdx = rowIdx.find((i) => nameAt(i) === input.name);
const isUpdate = existingIdx !== undefined;

let next;
if (isUpdate) {
  next = [...lines];
  next[existingIdx] = renderRow(input);
} else {
  // 挿入位置。after 指定があればその直後、無ければ同じ系列の最後の行の直後
  let anchor;
  if (input.after) {
    anchor = rowIdx.find((i) => nameAt(i) === input.after);
    if (anchor === undefined) fail(`after に指定した "${input.after}" が表にありません。`);
  } else {
    const family = input.name.split(/\s+/).slice(0, -1).join(" ");
    if (!family) fail("系列を判定できません。after で挿入位置を指定してください。");
    const same = rowIdx.filter((i) => nameAt(i).startsWith(family));
    if (!same.length) {
      fail(`"${family}" 系列が表にありません。after で挿入位置を指定してください。`);
    }
    anchor = same[same.length - 1];
  }
  next = [...lines.slice(0, anchor + 1), renderRow(input), ...lines.slice(anchor + 1)];
}

const output = next.join("\n");

if (dryRun) {
  console.log(`${isUpdate ? "更新" : "追加"}予定: ${input.name}`);
  console.log("");
  console.log(renderRow(input));
  console.log("");
  console.log("--dry-run のため書き込みません。");
  process.exit(0);
}

writeFileSync(CONSTANTS, output, "utf-8");

// ── 書いたあとに読み直して検査する。合わなければ戻す ──
const restore = (msg) => {
  writeFileSync(CONSTANTS, original, "utf-8");
  fail(`${msg}\n   **ファイルは元に戻しました。**`);
};

let after;
try {
  after = await import(`${pathToFileURL(CONSTANTS).href}?v=${Date.now()}`);
} catch (e) {
  restore(`書き込み後に読み込めませんでした: ${e.message}`);
}

const afterNames = after.MODEL_COMPARISON.map((m) => m.name);
const lost = beforeNames.filter((n) => !afterNames.includes(n));
if (lost.length) restore(`モデルが消えました: ${lost.join(", ")}`);

const expected = beforeNames.length + (isUpdate ? 0 : 1);
if (afterNames.length !== expected) {
  restore(`件数が合いません（期待 ${expected} / 実際 ${afterNames.length}）`);
}

const wrote = after.MODEL_COMPARISON.find((m) => m.name === input.name);
if (!wrote) restore(`追加したはずの "${input.name}" が見つかりません。`);
for (const k of KEYS) {
  const want = k in input ? (input[k] ?? null) : null;
  const got = wrote[k] ?? null;
  if (want !== got) restore(`${k} が一致しません（期待 ${JSON.stringify(want)} / 実際 ${JSON.stringify(got)}）`);
}

console.log(`✅ ${isUpdate ? "更新" : "追加"}しました: ${input.name}`);
console.log(`   モデル: ${beforeNames.length} → ${afterNames.length} 件`);
console.log("");
console.log("次を実行してください:");
console.log("  node scripts/review-check.mjs");
console.log("  npm run build");
console.log("");
console.log("**レビュー記事の★は別の尺度です。** モデル比較表の rating を変えても、");
console.log("レビュー記事の rating / ratings は自動では変わりません。必要なら別途更新してください。");
