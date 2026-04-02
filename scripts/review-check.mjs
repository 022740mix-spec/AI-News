/**
 * 校閲チェックスクリプト
 * aiToolsData.js の記事品質を自動検証する。
 * コミット前に Hook で自動実行される。
 *
 * チェック項目:
 *  1.  primarySources が1件以上あるか（Error）
 *  2.  body が3段落以上か（Error）
 *  3.  newsDate が設定されているか（news 記事のみ、週刊・ガイド除外）
 *  4.  生の ?a= リンクが body に残っていないか
 *  5.  charts に推定値が含まれていないか
 *  6.  excerpt の太字が5箇所以下か
 *  7.  id が全記事で一意か
 *  8.  ?a= の参照先が ARTICLES に存在するか
 *  9.  取り下げ済み記事への ?a= 参照がないか
 *  10. category が定義済み値か（必須）
 *  11. type が定義済み値か（必須）
 *  12. heroScope:"week" に weekRoundupPeriod があるか
 *  13. 同日に pinned:true が2件以上ないか
 *  14. 取り下げ記事の heroScope が "none" か
 *  15. 比較記事（review）に lastReviewed があるか
 *  16. date が YYYY-MM-DD 形式か
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

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

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
  // 取り下げ済み記事を記録（status フィールド or title 先頭で判定）
  if (a.status === "retracted" || (a.title && a.title.startsWith("【取り下げ】"))) {
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
  const isRetracted = retractedIds.has(a.id);

  // 1. primarySources が1件以上あるか（news は Error、feature/review は Warn）
  if (!isRetracted && (!a.primarySources || a.primarySources.length === 0)) {
    if (a.type === "news") {
      error(a.id, "primarySources がありません（news 記事は必須）");
    } else {
      warn(a.id, "primarySources がありません");
    }
  }

  // 2. body が3段落以上か（news は Error、feature/review は Warn）
  if (!isRetracted && (!a.body || a.body.length < 3)) {
    if (a.type === "news") {
      error(a.id, `body が ${a.body?.length ?? 0} 段落しかありません（news 記事は3段落以上必須）`);
    } else {
      warn(a.id, `body が ${a.body?.length ?? 0} 段落しかありません（3段落以上推奨）`);
    }
  }

  // 3. newsDate が設定されているか（news 記事のみ。feature/review/週刊/ガイドは除外）
  const isWeekly = a.heroScope === "week";
  const isGuide = a.id.startsWith("guide-");
  const isNews = a.type === "news";
  if (isNews && !isWeekly && !isGuide && !a.newsDate) {
    warn(a.id, "newsDate が設定されていません（news 記事は設定推奨）");
  }

  // 4. 生の ?a= リンクが body に残っていないか
  for (const p of a.body ?? []) {
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

  // 10. category が定義済み値か（必須）
  if (!a.category) {
    error(a.id, "category が未設定です");
  } else if (!validCategories.has(a.category)) {
    error(a.id, `category "${a.category}" は未定義です（有効値: ${[...validCategories].join(", ")}）`);
  }

  // 11. type が定義済み値か（必須）
  if (!a.type) {
    error(a.id, "type が未設定です");
  } else if (!validTypes.has(a.type)) {
    error(a.id, `type "${a.type}" は未定義です（有効値: ${[...validTypes].join(", ")}）`);
  }

  // 12. heroScope:"week" に weekRoundupPeriod があるか
  if (a.heroScope === "week" && !a.weekRoundupPeriod) {
    warn(a.id, 'heroScope が "week" ですが weekRoundupPeriod が設定されていません');
  }

  // 14. 取り下げ記事の heroScope が "none" か
  if (isRetracted) {
    if (a.heroScope !== "none") {
      error(a.id, '取り下げ記事の heroScope が "none" ではありません');
    }
    if (a.pinned) {
      error(a.id, "取り下げ記事に pinned: true が残っています");
    }
  }

  // 15. 比較記事（review）に lastReviewed があるか
  if (a.type === "review" && !a.lastReviewed) {
    warn(a.id, "review 記事に lastReviewed が設定されていません");
  }

  // 16. date が YYYY-MM-DD 形式か
  if (!a.date || !DATE_RE.test(a.date)) {
    error(a.id, `date "${a.date}" が YYYY-MM-DD 形式ではありません`);
  }
  if (a.newsDate && !DATE_RE.test(a.newsDate)) {
    error(a.id, `newsDate "${a.newsDate}" が YYYY-MM-DD 形式ではありません`);
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
