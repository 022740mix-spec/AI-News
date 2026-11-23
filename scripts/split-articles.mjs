/**
 * aiToolsData.js の ARTICLES 配列を
 *   - src/data/articlesMeta.js        (メタデータのみ)
 *   - src/data/articlesBody-YYYY-MM.js (掲載月ごとの本文)
 *   - src/data/articlesBody.js         (Node 用の集約モジュール)
 * に分割するワンショットスクリプト。
 *
 * 書き込みは serialize-articles.mjs の writeArticles に委譲する。
 * add-article.mjs / update-article.mjs と同じ経路を通すことで、
 * どちらから書いても同じ結果になることを保証する。
 *
 * Usage: node scripts/split-articles.mjs
 */
import { ARTICLES } from "../src/data/aiToolsData.js";
import { splitArticle, writeArticles } from "./serialize-articles.mjs";

const metaArr = [];
const bodyMap = {};
for (const a of ARTICLES) {
  const { meta, body } = splitArticle(a);
  metaArr.push(meta);
  if (Object.keys(body).length) bodyMap[meta.id] = body;
}

const result = writeArticles(metaArr, bodyMap);

console.log(`✓ articlesMeta.js  — ${result.meta} 件`);
console.log(`✓ articlesBody-*.js — ${result.body} 件 / ${result.months.length} か月 (${result.months.join(", ")})`);
console.log("✓ articlesBody.js  — 集約モジュールを再生成");
