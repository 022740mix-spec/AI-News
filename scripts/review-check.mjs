/**
 * 校閲チェックスクリプト
 * aiToolsData.js の記事品質を自動検証する。
 * コミット前に Hook で自動実行される。
 */

import { ARTICLES } from "../src/data/aiToolsData.js";

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
        // 推定ラベルがあればOKだが警告は出す
        warn(a.id, `チャート「${chart.title}」に推定値が含まれています`);
      }
    }
  }

  // 6. excerpt の太字チェック
  const boldCount = (a.excerpt.match(/\*\*/g) || []).length / 2;
  if (boldCount > 5) {
    warn(a.id, `excerpt の太字が ${boldCount} 箇所あります（5箇所以下推奨）`);
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
