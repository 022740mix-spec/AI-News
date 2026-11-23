/**
 * 記事本文データの集約（Node 用）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * 月別チャンク articlesBody-YYYY-MM.js を全て結合した default export。
 * ブラウザ側はこのファイルを import せず、loadArticleBody.js が
 * 記事の掲載月のチャンクだけを動的に読み込む。
 */
import BODY_2026_03 from "./articlesBody-2026-03.js?v=33c741a96208";
import BODY_2026_04 from "./articlesBody-2026-04.js?v=9f9d6ed7a94a";
import BODY_2026_05 from "./articlesBody-2026-05.js?v=93764b92677e";
import BODY_2026_06 from "./articlesBody-2026-06.js?v=d3455de8e69f";
import BODY_2026_07 from "./articlesBody-2026-07.js?v=6c1cf8dcf42e";
import BODY_2026_08 from "./articlesBody-2026-08.js?v=0b5429753a2a";
import BODY_2026_09 from "./articlesBody-2026-09.js?v=ca64dddc31ed";
import BODY_2026_10 from "./articlesBody-2026-10.js?v=0eb540090e5a";
import BODY_2026_11 from "./articlesBody-2026-11.js?v=ee4c4349d587";

const ARTICLES_BODY = {
  ...BODY_2026_03,
  ...BODY_2026_04,
  ...BODY_2026_05,
  ...BODY_2026_06,
  ...BODY_2026_07,
  ...BODY_2026_08,
  ...BODY_2026_09,
  ...BODY_2026_10,
  ...BODY_2026_11,
};

export default ARTICLES_BODY;
