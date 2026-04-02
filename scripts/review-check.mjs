/**
 * 校閲チェックスクリプト
 * aiToolsData.js の記事品質を自動検証する。
 * コミット前に Hook で自動実行される。
 *
 * チェック項目:
 *  1.  primarySources が1件以上あるか
 *  2.  body が3段落以上か
 *  3.  newsDate が設定されているか（週刊・ガイド除外）
 *  4.  生の ?a= リンクが body に残っていないか
 *  5.  charts に推定値が含まれていないか
 *  6.  excerpt の太字が5箇所以下か
 *  7.  id が全記事で一意か
 *  8.  ?a= の参照先が ARTICLES に存在するか
 *  9.  取り下げ済み記事への ?a= 参照がないか
 *  10. category が定義済み値か
 *  11. type が定義済み値か
 *  12. heroScope:"week" に weekRoundupPeriod があるか
 *  13. 同日に pinned:true が2件以上ないか
 */

import { ARTICLES, CATEGORIES } from "../src/data/aiToolsData.js";

let errors = 0;
let warnings = 0;

function error(id, msg) {
  console.error(`❌ [${id}] ${msg}`);
  errors++;
}

function warn(id, msg) {
  console.warn(`⚠️  [${id}] ${msg}`);
  warnings++;
}

// 事前に全記事IDのセットを作成
const allIds = new Set();
const idDuplicates = new Set();
const retractedIds = new Set();
const validCategories = new Set(Object.keys(CATEGORIES));
const validTypes = new Set(["news", "feature", "review"]);

// 7. id 一意性チェック（事前パス）
for (const a of ARTICLES) {
  if (allIds.has(a.id)) {
    idDuplicates.add(a.id);
  }
  allIds.add(a.id);
  // 取り下げ済み記事を記録
  if (a.title && a.title.startsWith("【取り下げ】")) {
    retractedIds.add(a.id);
  }
}

// 13. 同日 pinned チェック（事前パス）
const pinnedByDate = {};
for (const a of ARTICLES) {
  if (a.pinned) {
    const d = a.newsDate || a.date;
    if (!pinnedByDate[d]) pinnedByDate[d] = [];
    pinnedByDate[d].push(a.id);
  }
}

for (const a of ARTICLES) {
  // 1. primarySources が1件以上あるか
  if (!a.primarySources || a.primarySources.length === 0) {
    warn(a.id, "primarySources がありません");
  }

  // 2. body が2段落以下か
  if (!a.body || a.body.length < 3) {
    warn(a.id, `body が ${a.body?.length ?? 0} 段落しかありません（3段落以上推奨）`);
  }

  // 3. newsDate が設定されているか（週刊まとめ・ガイド以外）
  const isWeekly = a.heroScope === "week";
  const isGuide = a.id.startsWith("guide-");
  if (!isWeekly && !isGuide && !a.newsDate) {
    warn(a.id, "newsDate が設定されていません");
  }

  // 4. 生の ?a= リンクが body に残っていないか
  for (const p of a.body ?? []) {
    // [text](?a=id) 形式は OK、裸の ?a= は NG
    const bare = p.replace(/\[[^\]]+\]\(\?a=[^)]+\)/g, "");
    if (/\?a=[a-z0-9-]+/.test(bare)) {
      error(a.id, `body に生の ?a= リンクが残っています: ${bare.match(/\?a=[a-z0-9-]+/)[0]}`);
    }
  }

  // 5. charts のデータにソースがあるか
  if (a.charts) {
    for (const chart of a.charts) {
      if (chart.subtitle && chart.subtitle.includes("推定")) {
        warn(a.id, `チャート「${chart.title}」に推定値が含まれています`);
      }
    }
  }

  // 6. excerpt の太字チェック
  const boldCount = (a.excerpt.match(/\*\*/g) || []).length / 2;
  if (boldCount > 5) {
    warn(a.id, `excerpt の太字が ${boldCount} 箇所あります（5箇所以下推奨）`);
  }

  // 7. id 重複チェック
  if (idDuplicates.has(a.id)) {
    error(a.id, "id が重複しています");
  }

  // 8. ?a= 参照先の存在チェック + 9. 取り下げ済み記事への参照チェック
  for (const p of a.body ?? []) {
    const refs = p.matchAll(/\?a=([a-z0-9-]+)/g);
    for (const m of refs) {
      const targetId = m[1];
      if (!allIds.has(targetId)) {
        error(a.id, `内部リンク ?a=${targetId} の参照先が存在しません`);
      }
      if (retractedIds.has(targetId)) {
        warn(a.id, `内部リンク ?a=${targetId} は取り下げ済み記事を参照しています`);
      }
    }
  }

  // 10. category が定義済み値か
  if (a.category && !validCategories.has(a.category)) {
    error(a.id, `category "${a.category}" は未定義です（有効値: ${[...validCategories].join(", ")}）`);
  }

  // 11. type が定義済み値か
  if (a.type && !validTypes.has(a.type)) {
    error(a.id, `type "${a.type}" は未定義です（有効値: ${[...validTypes].join(", ")}）`);
  }

  // 12. heroScope:"week" に weekRoundupPeriod があるか
  if (a.heroScope === "week" && !a.weekRoundupPeriod) {
    warn(a.id, 'heroScope が "week" ですが weekRoundupPeriod が設定されていません');
  }
}

// 13. 同日 pinned:true が2件以上
for (const [date, ids] of Object.entries(pinnedByDate)) {
  if (ids.length >= 2) {
    warn(ids[0], `${date} に pinned:true が ${ids.length} 件あります（${ids.join(", ")}）`);
  }
}

console.log("");
console.log(`校閲チェック完了: ${ARTICLES.length} 記事`);
console.log(`  エラー: ${errors} 件`);
console.log(`  警告: ${warnings} 件`);

if (errors > 0) {
  console.error("\n❌ エラーがあります。修正してからコミットしてください。");
  process.exit(1);
}

if (warnings > 0) {
  console.warn("\n⚠️  警告があります。確認してください。");
}

process.exit(0);
