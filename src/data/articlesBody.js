/**
 * 記事本文データの集約（Node 用）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * 月別チャンク articlesBody-YYYY-MM.js を全て結合した default export。
 * ブラウザ側はこのファイルを import せず、loadArticleBody.js が
 * 記事の掲載月のチャンクだけを動的に読み込む。
 */
import BODY_2026_03 from "./articlesBody-2026-03.js?v=e24f2f1730ff";
import BODY_2026_04 from "./articlesBody-2026-04.js?v=9f9d6ed7a94a";
import BODY_2026_05 from "./articlesBody-2026-05.js?v=230d9409408e";
import BODY_2026_06 from "./articlesBody-2026-06.js?v=1cc0a2a61a48";
import BODY_2026_07 from "./articlesBody-2026-07.js?v=6c1cf8dcf42e";
import BODY_2026_08 from "./articlesBody-2026-08.js?v=c78b7bda5b0c";
import BODY_2026_09 from "./articlesBody-2026-09.js?v=35f2cad3c740";
import BODY_2026_10 from "./articlesBody-2026-10.js?v=0eb540090e5a";
import BODY_2026_11 from "./articlesBody-2026-11.js?v=0db1781e69ba";

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
