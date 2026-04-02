/**
 * aiToolsData.js の ARTICLES 配列を
 *   - src/data/articlesMeta.js  (メタデータのみ)
 *   - src/data/articlesBody.js  (本文データのみ)
 * に分割するワンショットスクリプト。
 *
 * Usage: node scripts/split-articles.mjs
 */
import { ARTICLES } from "../src/data/aiToolsData.js";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(__dirname, "../src/data");

const META_KEYS = [
  "id", "type", "category", "title", "excerpt", "date", "newsDate",
  "author", "readTime", "tags", "coverImage", "heroScope", "pinned",
  "weekRoundupPeriod", "lastReviewed", "ratings", "rating", "status",
  "reviewCategory",
];
const BODY_KEYS = ["body", "tables", "figures", "charts", "primarySources"];

// ── メタデータ配列 ──
const metaArr = ARTICLES.map((a) => {
  const meta = {};
  for (const k of META_KEYS) {
    if (a[k] !== undefined) meta[k] = a[k];
  }
  return meta;
});

// ── 本文マップ (id → { body, tables, ... }) ──
const bodyMap = {};
for (const a of ARTICLES) {
  const entry = {};
  let hasBody = false;
  for (const k of BODY_KEYS) {
    if (a[k] !== undefined) {
      entry[k] = a[k];
      hasBody = true;
    }
  }
  if (hasBody) bodyMap[a.id] = entry;
}

// ── ファイル出力 ──
const metaContent = `/**
 * 記事メタデータ（軽量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * body, tables, figures, charts, primarySources は含まない
 */
export const ARTICLES_META = ${JSON.stringify(metaArr, null, 2)};
`;

const bodyContent = `/**
 * 記事本文データ（重量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY = ${JSON.stringify(bodyMap, null, 2)};
export default ARTICLES_BODY;
`;

writeFileSync(resolve(dataDir, "articlesMeta.js"), metaContent, "utf-8");
writeFileSync(resolve(dataDir, "articlesBody.js"), bodyContent, "utf-8");

console.log(`✓ articlesMeta.js  — ${metaArr.length} 件`);
console.log(`✓ articlesBody.js  — ${Object.keys(bodyMap).length} 件`);
console.log("  出力先:", dataDir);
