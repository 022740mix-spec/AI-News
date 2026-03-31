import { SITE_NAME, SITE_DESCRIPTION } from "../data/aiToolsData.js";
import { BUNDLED_MEDIA_URL } from "../mediaUrls.js";
import { stripMarkdownBoldMarkers } from "./richText.jsx";

export const DEFAULT_DOC_TITLE = `${SITE_NAME} | AI開発ツール最新情報`;

export function canonicalFromLocation() {
  const u = new URL(window.location.href);
  u.hash = "";
  return u.toString();
}

export function absolutePublicAsset(filename) {
  const u = new URL(window.location.href);
  u.hash = "";
  u.search = "";
  let p = u.pathname;
  if (!p.endsWith("/")) p = p.replace(/\/[^/]*$/, "") || "/";
  if (!p.endsWith("/")) p += "/";
  return new URL(filename, `${u.origin}${p}`).href;
}

/**
 * 画像・SVG の URL。バンドル済みパスは import.meta.url 解決（404 / base ずれ防止）。
 * それ以外は Vite の base（サブディレクトリ配信）＋相対 or document.baseURI。
 */
export function resolveMediaSrc(src) {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  const path = src.replace(/^\.\//, "").replace(/^\/+/, "");
  const bundled = BUNDLED_MEDIA_URL[path];
  if (bundled) return bundled;

  const viteBase = import.meta.env.BASE_URL ?? "/";
  if (viteBase === "./") {
    return `./${path}`;
  }
  const prefix = viteBase.endsWith("/") ? viteBase : `${viteBase}/`;
  try {
    return new URL(path, new URL(prefix, window.location.href)).href;
  } catch {
    return new URL(path, document.baseURI).href;
  }
}

export function upsertMetaProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function upsertMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export const GUIDE_SEO = {
  setup: {
    titleSuffix: "ガイド：セットアップ",
    description:
      "バイブコーディングの概要と環境セットアップ手順。IDE・AI・CLI の初期設定をステップで解説。",
  },
  rules: {
    titleSuffix: "ガイド：基本ルール",
    description:
      "バイブコーディングの基本ルールとハマりやすいポイント。Git・プロンプト・セキュリティの注意点。",
  },
  practical: {
    titleSuffix: "ガイド：実践テクニック",
    description:
      "実務で使えるバイブコーディングのテクニック。スラッシュコマンド・スキル配置・ワークフロー。",
  },
  media: {
    titleSuffix: "ガイド：メディア生成ツール早見",
    description:
      "画像・動画・音楽・音声合成の代表ツール早見。著作権・料金は各公式で確認。",
  },
  glossary: {
    titleSuffix: "ガイド：用語集",
    description:
      "AI・RAG のパターン・Git・ターミナル・データレイクなど、記事で出る用語を短文で解説。バイブコーディング・開発ニュースの辞書代わり。",
  },
};

export const COMPANIES_SEO = {
  titleSuffix: "AI企業",
  description:
    "主要 AI・開発ツール企業の所在地・設立・規模・市場の骨子（公開情報ベース）。",
};

/**
 * @param {{ selectedArticle: object | null, siteSection: string, guideTab?: string }} ctx
 */
export function syncDocumentSeo(ctx) {
  const { selectedArticle, siteSection, guideTab = "setup" } = ctx;

  let title = DEFAULT_DOC_TITLE;
  let descRaw = SITE_DESCRIPTION;
  let ogTitle = `${SITE_NAME} | AI開発ツール最新情報`;

  if (selectedArticle) {
    descRaw = stripMarkdownBoldMarkers(selectedArticle.excerpt);
    title = `${selectedArticle.title} | ${SITE_NAME}`;
    ogTitle = selectedArticle.title;
  } else if (siteSection === "guide") {
    const g = GUIDE_SEO[guideTab] || GUIDE_SEO.setup;
    title = `${g.titleSuffix} | ${SITE_NAME}`;
    descRaw = g.description;
    ogTitle = `${g.titleSuffix} | ${SITE_NAME}`;
  } else if (siteSection === "companies") {
    title = `${COMPANIES_SEO.titleSuffix} | ${SITE_NAME}`;
    descRaw = COMPANIES_SEO.description;
    ogTitle = `${COMPANIES_SEO.titleSuffix} | ${SITE_NAME}`;
  }

  const desc =
    descRaw.length > 160 ? `${descRaw.slice(0, 157)}…` : descRaw;

  document.title = title;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute("content", desc);

  let canon = document.querySelector('link[rel="canonical"]');
  if (!canon) {
    canon = document.createElement("link");
    canon.rel = "canonical";
    document.head.appendChild(canon);
  }
  canon.href = canonicalFromLocation();

  const ogImage = selectedArticle?.coverImage?.src
    ? resolveMediaSrc(selectedArticle.coverImage.src)
    : absolutePublicAsset("og.svg");

  upsertMetaProperty("og:title", ogTitle);
  upsertMetaProperty("og:description", desc);
  upsertMetaProperty("og:type", selectedArticle ? "article" : "website");
  upsertMetaProperty("og:url", canonicalFromLocation());
  upsertMetaProperty("og:image", ogImage);
  upsertMetaProperty("og:site_name", SITE_NAME);
  upsertMetaProperty("og:locale", "ja_JP");

  upsertMetaName("twitter:title", ogTitle);
  upsertMetaName("twitter:description", desc);
}
