/**
 * AI Tool News — ブログ風AIツール情報サイト
 */
import {
  Fragment,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  ARTICLES,
  CATEGORIES,
  renderStars,
  SITE_NAME,
  SITE_DESCRIPTION,
  getArticleNewsYmd,
  getSiteTodayYmd,
} from "./data/aiToolsData.js";
import { AI_COMPANIES, COMPANIES_DISCLAIMER } from "./data/aiCompanies.js";
import {
  filterVibeCodingGuide,
  filterMediaGuide,
  filterGlossaryGuide,
  GLOSSARY_BY_GENRE,
  MEDIA_GUIDE_INTRO,
  VIBE_BASIC_RULES_LEAD,
  VIBE_BASIC_RULES,
  VIBE_CODING_DEFINITION,
  VIBE_CODING_PRACTICAL,
  VIBE_GUIDE_PITFALLS,
  VIBE_MEDIA_TAXONOMY,
  VIBE_SETUP_GUIDE,
  TOOL_REFERENCES,
  filterToolReference,
} from "./data/vibeCodingGuide.js";
import { BUNDLED_MEDIA_URL } from "./mediaUrls.js";

const STORAGE_THEME = "ai-news-theme";
const STORAGE_LOCAL_NOTICE = "ai-news-local-notice-dismissed";
const DEFAULT_DOC_TITLE = `${SITE_NAME} | AI開発ツールニュース 2026`;

function canonicalFromLocation() {
  const u = new URL(window.location.href);
  u.hash = "";
  return u.toString();
}

function absolutePublicAsset(filename) {
  const u = new URL(window.location.href);
  u.hash = "";
  u.search = "";
  let p = u.pathname;
  if (!p.endsWith("/")) p = p.replace(/\/[^/]*$/, "") || "/";
  if (!p.endsWith("/")) p += "/";
  return new URL(filename, `${u.origin}${p}`).href;
}

/** データ内の **強調** を OGP・共有テキスト用のプレーン文に */
function stripMarkdownBoldMarkers(text) {
  if (!text) return "";
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

/** 文末の句読点だけ URL から外す（本文にくっついた「。」など） */
function trimUrlForHref(raw) {
  return raw.replace(/[。、，．]+$/u, "");
}

/**
 * プレーンテリー内の http(s) URL とサイト内記事クエリ (?a=slug) を <a> に展開（mk が一意キーを返す関数）
 */
function linkifyPlainToNodes(segment, mkKey) {
  if (!segment) return [];
  const re = /\[([^\]]+)\]\((\?a=[a-z0-9-]+)\)|https?:\/\/[^\s<>"')」']+|\?a=[a-z0-9-]+/gi;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(segment)) !== null) {
    if (m.index > last) {
      out.push(segment.slice(last, m.index));
    }
    // [テキスト](?a=id) 形式のマークダウンリンク
    if (m[1] && m[2]) {
      const href = typeof window !== "undefined"
        ? new URL(m[2], window.location.href).href
        : m[2];
      out.push(
        <a key={mkKey()} href={href} className="prose-link">{m[1]}</a>,
      );
      last = m.index + m[0].length;
      continue;
    }
    const raw = m[0];
    const isInternal = raw.startsWith("?a=");
    let href = isInternal
      ? (typeof window !== "undefined"
          ? new URL(raw, window.location.href).href
          : raw)
      : trimUrlForHref(raw);
    const displayText = isInternal ? "→ 関連記事" : href;
    out.push(
      <a
        key={mkKey()}
        href={href}
        {...(isInternal
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
        className="prose-link"
      >
        {displayText}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < segment.length) {
    out.push(segment.slice(last));
  }
  return out.length ? out : [segment];
}

/**
 * 1行分: **強調** + ==ハイライト== + !!警告!! + URL リンク化
 */
function richInlineLine(line, mkKey) {
  const reInline = /\*\*(.+?)\*\*|==(.+?)==|!!(.+?)!!|`([^`]+)`/g;
  const parts = [];
  let last = 0;
  let m;
  while ((m = reInline.exec(line)) !== null) {
    if (m.index > last) {
      parts.push(...linkifyPlainToNodes(line.slice(last, m.index), mkKey));
    }
    if (m[1] != null) {
      parts.push(<strong key={mkKey()}>{m[1]}</strong>);
    } else if (m[2] != null) {
      parts.push(<mark key={mkKey()} className="prose-highlight">{m[2]}</mark>);
    } else if (m[3] != null) {
      const inner = m[3];
      const codeMatch = inner.match(/^`(.+)`$/);
      if (codeMatch) {
        parts.push(<code key={mkKey()} className="prose-code prose-warning">{codeMatch[1]}</code>);
      } else {
        parts.push(<span key={mkKey()} className="prose-warning">{inner}</span>);
      }
    } else if (m[4] != null) {
      parts.push(<code key={mkKey()} className="prose-code">{m[4]}</code>);
    }
    last = m.index + m[0].length;
  }
  if (last < line.length) {
    parts.push(...linkifyPlainToNodes(line.slice(last), mkKey));
  }
  return parts.length ? parts : linkifyPlainToNodes(line, mkKey);
}

/**
 * 本文・抜粋用: 改行は <br />、http(s) はリンク、** は太字
 */
function richArticleText(text, keyPrefix = "") {
  if (text == null || text === "") return null;
  const keyRef = { n: 0 };
  const mkKey = () => `${keyPrefix}x${keyRef.n++}`;
  const lines = text.split("\n");
  const out = [];
  for (let li = 0; li < lines.length; li++) {
    if (li > 0) {
      out.push(<br key={mkKey()} />);
    }
    const lineParts = richInlineLine(lines[li], mkKey);
    out.push(...lineParts);
  }
  return out.length ? out : null;
}

/**
 * 段落がコードブロック（```で始まる）かどうかを判定し、コード本体を返す。
 * 戻り値: { isCode: true, code, lang } | { isCode: false }
 */
function parseCodeBlock(paragraph) {
  if (!paragraph.startsWith("```")) return { isCode: false };
  const firstNewline = paragraph.indexOf("\n");
  if (firstNewline === -1) return { isCode: false };
  const lang = paragraph.slice(3, firstNewline).trim();
  let code = paragraph.slice(firstNewline + 1);
  if (code.endsWith("```")) code = code.slice(0, -3);
  if (code.endsWith("\n")) code = code.slice(0, -1);
  return { isCode: true, code, lang };
}

/** コピーボタン付きコードブロック */
function CopyableCodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);
  return (
    <div className="code-block">
      <div className="code-block__header">
        {lang && <span className="code-block__lang">{lang}</span>}
        <button
          className="code-block__copy"
          onClick={handleCopy}
          aria-label="コードをコピー"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="code-block__pre"><code>{code}</code></pre>
    </div>
  );
}

/**
 * 画像・SVG の URL。バンドル済みパスは import.meta.url 解決（404 / base ずれ防止）。
 * それ以外は Vite の base（サブディレクトリ配信）＋相対 or document.baseURI。
 */
function resolveMediaSrc(src) {
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

function upsertMetaProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const GUIDE_SEO = {
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

const COMPANIES_SEO = {
  titleSuffix: "AI企業",
  description:
    "主要 AI・開発ツール企業の所在地・設立・規模・市場の骨子（公開情報ベース）。",
};

/**
 * @param {{ selectedArticle: object | null, siteSection: string, guideTab?: string }} ctx
 */
function syncDocumentSeo(ctx) {
  const { selectedArticle, siteSection, guideTab = "setup" } = ctx;

  let title = DEFAULT_DOC_TITLE;
  let descRaw = SITE_DESCRIPTION;
  let ogTitle = `${SITE_NAME} | AI開発ツールニュース`;

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

/** プレーンテキスト段落内の URL をリンク化（用語集リードや CLI 案内向け） */
function GuideLinkifiedP({ text, className }) {
  let k = 0;
  const mkKey = () => `glp-${k++}`;
  const lines = String(text).split("\n");
  if (lines.length <= 1) {
    return <p className={className}>{richInlineLine(text, mkKey)}</p>;
  }
  return (
    <p className={className}>
      {lines.map((line, i) => (
        <Fragment key={mkKey()}>
          {i > 0 && <br />}
          {richInlineLine(line, mkKey)}
        </Fragment>
      ))}
    </p>
  );
}

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "special", label: "特集" },
  { id: "model", label: "モデル・API" },
  { id: "cli", label: "CLI・エージェント" },
  { id: "editor", label: "エディタ" },
  { id: "data", label: "データ・RAG" },
  { id: "product", label: "プロダクト" },
  { id: "media", label: "メディア生成" },
  { id: "regulation", label: "社会・規制" },
];

const SORTS = [
  { id: "date-desc", label: "新着順" },
  { id: "date-asc", label: "日付（古い順）" },
  { id: "title", label: "タイトル A→Z" },
];

function getCategoryIcon(cat) {
  const icons = {
    special: "★",
    model: "◇",
    cli: ">",
    editor: "<>",
    data: "≡",
    product: "◆",
    media: "♪",
    regulation: "§",
  };
  return icons[cat] ?? "·";
}

const MONTHS_EN = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

function parseDate(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d).getTime();
}

function compareArticleOrder(a, b, sort) {
  if (sort === "title") return a.title.localeCompare(b.title, "ja");
  const da = parseDate(getArticleNewsYmd(a));
  const db = parseDate(getArticleNewsYmd(b));
  return sort === "date-asc" ? da - db : db - da;
}

/** タグ・カテゴリの重なりで関連記事を最大 limit 件 */
function pickRelatedArticles(current, articles, limit = 3) {
  const others = articles.filter((a) => a.id !== current.id);
  const tagSet = new Set(current.tags ?? []);
  const scored = others.map((a) => {
    let score = 0;
    if (a.category === current.category) score += 3;
    for (const t of a.tags ?? []) {
      if (tagSet.has(t)) score += 2;
    }
    return { a, score };
  });
  scored.sort((x, y) => {
    if (y.score !== x.score) return y.score - x.score;
    return (
      parseDate(getArticleNewsYmd(y.a)) - parseDate(getArticleNewsYmd(x.a))
    );
  });
  const withScore = scored.filter((x) => x.score > 0).map((x) => x.a);
  if (withScore.length >= limit) return withScore.slice(0, limit);
  const picked = new Set(withScore.map((a) => a.id));
  const rest = scored.filter((x) => !picked.has(x.a.id)).map((x) => x.a);
  return [...withScore, ...rest].slice(0, limit);
}

/** ギャラリーサイト風の日付表記 */
function formatPickDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}

/** 週刊まとめの対象7日間（東京・曜日付き） */
function formatWeekRoundupPeriodJp(startYmd, endYmd) {
  const fmt = (ymd) =>
    new Intl.DateTimeFormat("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
    }).format(new Date(`${ymd}T12:00:00+09:00`));
  return `${fmt(startYmd)}〜${fmt(endYmd)}`;
}


function syncAppUrl({ articleId, siteSection, tagQuery, guideTab, toolTab, usePush = false }) {
  const u = new URL(window.location.href);
  if (articleId) {
    u.searchParams.set("a", articleId);
    u.searchParams.delete("view");
    u.searchParams.delete("tag");
    u.searchParams.delete("tab");
  } else {
    u.searchParams.delete("a");
    if (siteSection === "companies") {
      u.searchParams.set("view", "companies");
      u.searchParams.delete("tag");
      u.searchParams.delete("tab");
    } else if (siteSection === "reviews") {
      u.searchParams.set("view", "reviews");
      u.searchParams.delete("tag");
      u.searchParams.delete("tab");
    } else if (siteSection === "tools") {
      u.searchParams.set("view", "tools");
      u.searchParams.delete("tag");
      if (toolTab !== "claude-code") u.searchParams.set("tab", toolTab);
      else u.searchParams.delete("tab");
    } else if (siteSection === "guide") {
      u.searchParams.set("view", "guide");
      u.searchParams.delete("tag");
      if (guideTab && guideTab !== "setup") u.searchParams.set("tab", guideTab);
      else u.searchParams.delete("tab");
    } else if (siteSection === "home") {
      u.searchParams.delete("view");
      u.searchParams.delete("tag");
      u.searchParams.delete("tab");
    } else {
      u.searchParams.set("view", "articles");
      u.searchParams.delete("tab");
      const t = tagQuery?.trim();
      if (t) u.searchParams.set("tag", t);
      else u.searchParams.delete("tag");
    }
  }
  const url = `${u.pathname}${u.search}${u.hash}`;
  if (usePush) {
    window.history.pushState({}, "", url);
  } else {
    window.history.replaceState({}, "", url);
  }
}

/* ══ ハンバーガーメニュー ══ */
function HamburgerMenu({ isOpen, onClose, onSection, currentSection }) {
  const menuItems = [
    { id: "home", label: "ホーム" },
    { id: "articles", label: "ニュース" },
    { id: "reviews", label: "レビュー" },
    { id: "guide", label: "ガイド" },
    { id: "tools", label: "ツール別" },
    { id: "companies", label: "AI企業" },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="hamburger-overlay" onClick={onClose} />
      <nav className="hamburger-drawer" aria-label="メインメニュー">
        <button className="hamburger-close" onClick={onClose} aria-label="閉じる">✕</button>
        <div className="hamburger-drawer-title">Menu</div>
        <ul className="hamburger-list">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`hamburger-item${currentSection === item.id ? " is-active" : ""}`}
                onClick={() => { onSection(item.id); onClose(); }}
              >
                <span className="hamburger-item__label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="hamburger-footer">
          個人情報は収集しません。<br />
          データは公開情報に基づきます。
        </div>
      </nav>
    </>
  );
}

/* ══ ヘッダー ══ */
function Header({
  query,
  setQuery,
  theme,
  toggleTheme,
  sort,
  setSort,
  searchRef,
  filteredCount,
  totalCount,
  searchPlaceholder = "記事を検索…（タイトル・概要・タグ）",
  searchAriaLabel = "検索",
  showSort = true,
  onGoHome,
  hideSearch = false,
  onToggleMenu,
}) {
  return (
    <header className="header-wrap">
      <div className="header-inner">
        <div className="header-top">
          <div>
            <h1 className="site-title" onClick={onGoHome} style={{ cursor: "pointer" }}>{SITE_NAME}</h1>
            <p className="site-tagline">{SITE_DESCRIPTION}</p>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="icon-btn hamburger-btn"
              title="メニュー"
              aria-label="メニューを開く"
              onClick={onToggleMenu}
            >
              ☰
            </button>
            <button
              type="button"
              className="icon-btn"
              title={theme === "dark" ? "ライトテーマ" : "ダークテーマ"}
              aria-label="テーマ切替"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
        {!hideSearch ? (
          <>
            <div className="search-row">
              <div className="search-field">
                <span className="search-prefix">🔎</span>
                <input
                  ref={searchRef}
                  type="search"
                  placeholder={searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label={searchAriaLabel}
                />
              </div>
              {showSort ? (
                <select
                  className="sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label="並び順"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="sort-select-placeholder" aria-hidden />
              )}
              <span className="hint-kbd" title="フォーカス">
                <kbd>/</kbd> で検索
              </span>
            </div>
            {query ? (
              <div className="toolbar-stats">
                <button
                  type="button"
                  className="stat-pill stat-pill--clearable"
                  onClick={() => { setQuery(""); searchRef.current?.focus(); }}
                  aria-label={`フィルター「${query}」を解除`}
                >
                  フィルター: 「{query}」 ✕
                </button>
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </header>
  );
}

function FilterBar({ active, setActive }) {
  return (
    <nav className="filter-nav" aria-label="カテゴリ">
      <div className="filter-nav-inner">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-tab${active === f.id ? " is-active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function GuideTabBar({ guideTab, onSelect }) {
  const tabs = [
    { id: "setup", label: "セットアップ" },
    { id: "rules", label: "基本ルール" },
    { id: "practical", label: "実践テクニック" },
    { id: "media", label: "メディア生成" },
    { id: "glossary", label: "用語集" },
  ];
  return (
    <nav className="filter-nav" aria-label="ガイドの表示切替">
      <div className="filter-nav-inner" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`guide-subtab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={guideTab === t.id}
            aria-controls="guide-subtab-panel"
            className={`filter-tab${guideTab === t.id ? " is-active" : ""}`}
            onClick={() => onSelect(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HomePage({ articles, onSelect, onSection }) {
  const sorted = [...articles].sort((a, b) => {
    const da = parseDate(getArticleNewsYmd(a));
    const db = parseDate(getArticleNewsYmd(b));
    return db - da;
  });

  const hero = sorted.find((a) => {
    const scope = a.heroScope ?? "day";
    return scope !== "none";
  });

  const recentNews = sorted
    .filter((a) => a.type !== "review" && a.id !== hero?.id)
    .slice(0, 4);

  return (
    <div className="home-page">
      {hero ? (
        <section className="home-hero" onClick={() => onSelect(hero)}>
          <span className="home-hero__label">最新ニュース</span>
          <h2 className="home-hero__title">{hero.title}</h2>
          <p className="home-hero__excerpt">
            {hero.excerpt.length > 120
              ? hero.excerpt.replace(/\*\*/g, "").slice(0, 120) + "…"
              : hero.excerpt.replace(/\*\*/g, "")}
          </p>
        </section>
      ) : null}

      {recentNews.length > 0 ? (
        <section className="home-section">
          <div className="home-section__header">
            <h2 className="home-section__title">最近のニュース</h2>
            <button className="home-section__more" onClick={() => onSection("articles")}>
              すべて見る →
            </button>
          </div>
          <div className="home-cards">
            {recentNews.map((a) => (
              <article key={a.id} className="home-card" onClick={() => onSelect(a)}>
                <span className="home-card__category">{CATEGORIES[a.category]?.label}</span>
                <h3 className="home-card__title">{a.title}</h3>
                <span className="home-card__date">{a.newsDate ?? a.date}</span>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="home-section">
        <h2 className="home-section__title">コンテンツ</h2>
        <div className="home-nav-cards">
          <button className="home-nav-card" onClick={() => onSection("articles")}>
            <span className="home-nav-card__icon">📰</span>
            <span className="home-nav-card__label">ニュース</span>
            <span className="home-nav-card__desc">AI開発ツールの最新ニュース</span>
          </button>
          <button className="home-nav-card" onClick={() => onSection("reviews")}>
            <span className="home-nav-card__icon">⭐</span>
            <span className="home-nav-card__label">レビュー</span>
            <span className="home-nav-card__desc">ツール比較と評価</span>
          </button>
          <button className="home-nav-card" onClick={() => onSection("guide")}>
            <span className="home-nav-card__icon">📖</span>
            <span className="home-nav-card__label">ガイド</span>
            <span className="home-nav-card__desc">セットアップと実践テクニック</span>
          </button>
          <button className="home-nav-card" onClick={() => onSection("tools")}>
            <span className="home-nav-card__icon">🔧</span>
            <span className="home-nav-card__label">ツール別</span>
            <span className="home-nav-card__desc">Claude Code / Cursor / Codex / Copilot</span>
          </button>
          <button className="home-nav-card" onClick={() => onSection("companies")}>
            <span className="home-nav-card__icon">🏢</span>
            <span className="home-nav-card__label">AI企業</span>
            <span className="home-nav-card__desc">AI企業のプロファイル</span>
          </button>
        </div>
      </section>
    </div>
  );
}

function SiteSectionNav({ section, onSection }) {
  return (
    <nav className="section-site-nav" aria-label="サイト内切替">
      <div className="section-site-nav-inner">
        <button
          type="button"
          className={`section-site-tab${section === "articles" ? " is-active" : ""}`}
          onClick={() => onSection("articles")}
        >
          ニュース
        </button>
        <button
          type="button"
          className={`section-site-tab${section === "reviews" ? " is-active" : ""}`}
          onClick={() => onSection("reviews")}
        >
          レビュー
        </button>
        <button
          type="button"
          className={`section-site-tab${section === "guide" ? " is-active" : ""}`}
          onClick={() => onSection("guide")}
        >
          ガイド
        </button>
        <button
          type="button"
          className={`section-site-tab${section === "tools" ? " is-active" : ""}`}
          onClick={() => onSection("tools")}
        >
          ツール別
        </button>
        <button
          type="button"
          className={`section-site-tab${section === "companies" ? " is-active" : ""}`}
          onClick={() => onSection("companies")}
        >
          AI企業
        </button>
      </div>
    </nav>
  );
}

function ToolTabBar({ toolTab, onSelect }) {
  return (
    <nav className="filter-nav" aria-label="ツール別リファレンスの切替">
      <div className="filter-nav-inner" role="tablist">
        {TOOL_REFERENCES.map((t) => (
          <button
            key={t.id}
            id={`tool-subtab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={toolTab === t.id}
            aria-controls="tool-subtab-panel"
            className={`filter-tab${toolTab === t.id ? " is-active" : ""}`}
            onClick={() => onSelect(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function ToolReferencePanel({ referenceData, practical }) {
  let k = 0;
  const mkKey = () => `tr-${k++}`;
  if (!referenceData) return <div className="empty-state">ツールが見つかりません</div>;

  // section でグループ化（順序を保持）
  const sections = [];
  const seen = new Set();
  for (const t of referenceData.terms) {
    const sec = t.section ?? "";
    if (!seen.has(sec)) {
      seen.add(sec);
      sections.push({ name: sec, terms: [] });
    }
    sections.find((s) => s.name === sec).terms.push(t);
  }
  const hasSections = sections.length > 1 || (sections.length === 1 && sections[0].name);

  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label={referenceData.title}>
      <section className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{referenceData.title}</h2>
        <GuideLinkifiedP text={referenceData.lead} className="guide-section__lead" />

        {hasSections ? (
          <nav className="tool-ref-toc">
            <h3 className="tool-ref-toc__title">目次</h3>
            <ul className="tool-ref-toc__list">
              {sections.map((s) => (
                <li key={s.name}>
                  <a href={`#ref-sec-${s.name.replace(/\s/g, "-")}`} className="tool-ref-toc__link">
                    {s.name}
                    <span className="tool-ref-toc__count">{s.terms.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {sections.map((s) => (
          <div key={s.name} id={`ref-sec-${s.name.replace(/\s/g, "-")}`} className="tool-ref-group">
            {s.name ? <h3 className="tool-ref-group__title">{s.name}</h3> : null}
            <dl className="glossary-dl">
              {s.terms.map((t) => (
                <Fragment key={t.word}>
                  <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                  <dd className="glossary-dl__body">
                    <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                    {t.code ? <CopyableCodeBlock code={t.code} lang={t.codeLang ?? "bash"} /> : null}
                    {t.mem ? <GuideLinkifiedP text={t.mem} className="glossary-dl__mem" /> : null}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </div>
        ))}
      </section>
      {practical.length > 0 ? (
        <section className="guide-section guide-section--vibe">
          <h2 className="guide-section__title">実務での扱い</h2>
          {practical.map((sec) => (
            <div key={sec.id} id={sec.id} className="vibe-practical-sub">
              <h3 className="vibe-practical-sub__title">{sec.heading}</h3>
              <p className="vibe-practical-sub__body">{richInlineLine(sec.body, mkKey)}</p>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}

function GuideSidebar({ guideTab }) {
  const labelMap = {
    setup: "セットアップの目次",
    rules: "基本ルールの目次",
    practical: "実践テクニックの目次",
    media: "メディア生成ガイドの目次",
    glossary: "用語集の目次",
  };
  const sidebarLabel = labelMap[guideTab] || labelMap.setup;
  return (
    <aside className="desktop-sidebar" aria-label={sidebarLabel}>
      <div className="sidebar-panel">
        <h3>このページ内</h3>
        <p className="sidebar-panel-hint">見出しへジャンプします。</p>
        {guideTab === "setup" ? (
          <>
            <a href="#vibe-intro" className="sidebar-anchor">
              バイブコーディングとは
            </a>
            <a href="#vibe-setup" className="sidebar-anchor">
              {VIBE_SETUP_GUIDE.title}
            </a>
            {VIBE_SETUP_GUIDE.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="sidebar-anchor sidebar-anchor--nested"
              >
                {s.heading}
              </a>
            ))}
          </>
        ) : guideTab === "rules" ? (
          <>
            <a href="#vibe-rules" className="sidebar-anchor">
              基本ルール
            </a>
            <a href="#vibe-pitfalls" className="sidebar-anchor">
              ハマりやすいこと
            </a>
          </>
        ) : guideTab === "practical" ? (
          <>
            <a href="#vibe-practical" className="sidebar-anchor">
              {VIBE_CODING_PRACTICAL.title}
            </a>
            {VIBE_CODING_PRACTICAL.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="sidebar-anchor sidebar-anchor--nested"
              >
                {s.heading}
              </a>
            ))}
          </>
        ) : guideTab === "media" ? (
          <>
            <a href="#media-guide-intro" className="sidebar-anchor">
              はじめに
            </a>
            {VIBE_MEDIA_TAXONOMY.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="sidebar-anchor sidebar-anchor--nested"
              >
                {s.title}
              </a>
            ))}
          </>
        ) : (
          <>
            <a href="#glossary-guide" className="sidebar-anchor">
              実用用語集（ジャンル別）
            </a>
            {GLOSSARY_BY_GENRE.map((g) => (
              <a
                key={g.id}
                href={`#glossary-${g.id}`}
                className="sidebar-anchor sidebar-anchor--nested"
              >
                {g.title}
              </a>
            ))}
          </>
        )}
      </div>
    </aside>
  );
}

function ToolSidebar({ toolTab, toolRef }) {
  const ref = toolRef?.ref;
  // section でグループ化して目次を生成
  const sections = [];
  const seen = new Set();
  if (ref?.terms) {
    for (const t of ref.terms) {
      const sec = t.section ?? "";
      if (sec && !seen.has(sec)) {
        seen.add(sec);
        sections.push(sec);
      }
    }
  }
  const label = TOOL_REFERENCES.find((t) => t.id === toolTab)?.label ?? "ツール";
  return (
    <aside className="desktop-sidebar" aria-label={`${label} の目次`}>
      <div className="sidebar-panel">
        <h3>{label} リファレンス</h3>
        <p className="sidebar-panel-hint">セクションへジャンプします。</p>
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#ref-sec-${sec.replace(/\s/g, "-")}`}
            className="sidebar-anchor"
          >
            {sec}
          </a>
        ))}
      </div>
    </aside>
  );
}

function CompaniesSidebar({ companies }) {
  return (
    <aside className="desktop-sidebar" aria-label="企業ページの目次">
      <div className="sidebar-panel">
        <h3>企業一覧</h3>
        <p className="sidebar-panel-hint">
          項目をクリックで該当カードへスクロールします。
        </p>
        {companies.map((c) => (
          <a key={c.id} className="sidebar-anchor" href={`#company-${c.id}`}>
            {c.name}
          </a>
        ))}
      </div>
    </aside>
  );
}

/** セットアップステップを描画する共通ヘルパー */
function SetupStepList({ sections, mkKey }) {
  return sections.map((sec) => (
    <div key={sec.id} id={sec.id} className="vibe-practical-sub">
      <h3 className="vibe-practical-sub__title">{sec.heading}</h3>
      <p className="vibe-practical-sub__body">
        {richInlineLine(sec.body, mkKey)}
      </p>
      {sec.steps?.map((step, si) => (
        <div key={si} className="setup-step">
          <h4 className="setup-step__label">{richInlineLine(step.label, mkKey)}</h4>
          {step.detail ? (
            <p className="setup-step__detail">{richInlineLine(step.detail, mkKey)}</p>
          ) : null}
          {step.code ? (
            <CopyableCodeBlock code={step.code} lang={step.codeLang ?? "bash"} />
          ) : null}
        </div>
      ))}
    </div>
  ));
}

function GuideSetupPanel() {
  let k = 0;
  const mkKey = () => `gs-${k++}`;
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label="セットアップ">
      <section id="vibe-intro" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">バイブコーディングとは</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_CODING_DEFINITION, mkKey)}
        </p>
      </section>
      <section id="vibe-setup" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_SETUP_GUIDE.title}</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_SETUP_GUIDE.lead, mkKey)}
        </p>
        <SetupStepList sections={VIBE_SETUP_GUIDE.sections} mkKey={mkKey} />
      </section>
    </div>
  );
}

function GuideRulesPanel() {
  let k = 0;
  const mkKey = () => `gr-${k++}`;
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label="基本ルール">
      <section id="vibe-rules" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">基本ルール</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_BASIC_RULES_LEAD, mkKey)}
        </p>
        {VIBE_BASIC_RULES.length > 0 ? (
          <dl className="glossary-dl">
            {VIBE_BASIC_RULES.map((r) => (
              <Fragment key={r.title}>
                <dt className="glossary-dl__term">{richInlineLine(r.title, mkKey)}</dt>
                <dd className="glossary-dl__body">
                  <GuideLinkifiedP text={r.mean} className="glossary-dl__mean" />
                  {r.mem ? (
                    <GuideLinkifiedP text={r.mem} className="glossary-dl__mem" />
                  ) : null}
                </dd>
              </Fragment>
            ))}
          </dl>
        ) : null}
      </section>

      <section id="vibe-pitfalls" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_GUIDE_PITFALLS.title}</h2>
        <GuideLinkifiedP text={VIBE_GUIDE_PITFALLS.lead} className="guide-section__lead" />
        {VIBE_GUIDE_PITFALLS.terms.length > 0 ? (
          <dl className="glossary-dl">
            {VIBE_GUIDE_PITFALLS.terms.map((t) => (
              <Fragment key={t.word}>
                <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                <dd className="glossary-dl__body">
                  <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                  {t.mem ? (
                    <GuideLinkifiedP text={t.mem} className="glossary-dl__mem" />
                  ) : null}
                </dd>
              </Fragment>
            ))}
          </dl>
        ) : null}
      </section>
    </div>
  );
}

function GuidePracticalPanel() {
  let k = 0;
  const mkKey = () => `gp-${k++}`;
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label="実践テクニック">
      <section id="vibe-practical" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_CODING_PRACTICAL.title}</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_CODING_PRACTICAL.lead, mkKey)}
        </p>
        {VIBE_CODING_PRACTICAL.sections.map((sec) => (
          <div key={sec.id} id={sec.id} className="vibe-practical-sub">
            <h3 className="vibe-practical-sub__title">{sec.heading}</h3>
            <p className="vibe-practical-sub__body">
              {richInlineLine(sec.body, mkKey)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

function MediaToolsGuidePanel({ mediaTaxonomy }) {
  let k = 0;
  const mkKey = () => `mg-${k++}`;
  return (
    <div
      className="companies-guide-rail companies-guide-rail--full-tab"
      aria-label="メディア生成ツール早見"
    >
      <section id="media-guide-intro" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">メディア生成ツール早見</h2>
        <p className="guide-section__lead">
          {richInlineLine(MEDIA_GUIDE_INTRO, mkKey)}
        </p>
      </section>
      {mediaTaxonomy.length > 0 ? (
        <div className="vibe-media-taxonomy-stack">
          {mediaTaxonomy.map((block) => {
            const [c0, c1, c2, c3] = block.columns;
            return (
              <div key={block.id} id={block.id} className="vibe-media-block">
                <h3 className="vibe-media-block__title">{block.title}</h3>
                <GuideLinkifiedP
                  text={block.lead}
                  className="vibe-media-block__lead"
                />
                <div className="vibe-tool-table-wrap">
                  <table className="vibe-tool-table vibe-tool-table--dense">
                    <caption className="visually-hidden">
                      {block.title}のツール早見表
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">{c0}</th>
                        <th scope="col">{c1}</th>
                        <th scope="col">{c2}</th>
                        <th scope="col">{c3}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((r) => (
                        <tr key={`${block.id}-${r.tool}`}>
                          <th scope="row">{r.tool}</th>
                          <td>{r.company}</td>
                          <td>{r.traits}</td>
                          <td>{r.since}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">該当するツール行がありません。検索語を変えてください。</div>
      )}
    </div>
  );
}

function GlossaryGuidePanel({ glossaryGenres }) {
  let k = 0;
  const mkKey = () => `gl-${k++}`;
  return (
    <div
      className="companies-guide-rail companies-guide-rail--full-tab"
      aria-label="実用用語集"
    >
      <section id="glossary-guide" className="guide-section guide-section--glossary">
        <h2 className="guide-section__title">実用用語集（ジャンル別）</h2>
        <p className="guide-section__lead">
          専門用語を「業務で使える一言」に圧縮しました。記事を読むときの辞書代わりにどうぞ。公式 URL
          が載っている項目はそのままクリックできます。
        </p>
        {glossaryGenres.map((g) => (
          <section
            key={g.id}
            id={`glossary-${g.id}`}
            className="glossary-genre"
          >
            <h3 className="glossary-genre__title">{g.title}</h3>
            <GuideLinkifiedP
              text={g.lead}
              className="glossary-genre__lead"
            />
            <dl className="glossary-dl">
              {g.terms.map((t) => (
                <Fragment key={t.word}>
                  <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                  <dd className="glossary-dl__body">
                    <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                    {t.mem ? (
                      <GuideLinkifiedP text={t.mem} className="glossary-dl__mem" />
                    ) : null}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </section>
        ))}
      </section>
    </div>
  );
}

/** レビュータブ冒頭のカテゴリ別比較表 */
const REVIEW_CATEGORIES = [
  { id: "cli", label: "CLI ツール", description: "ターミナルから AI にコードを書かせる CLI ツール" },
  { id: "editor", label: "エディタ", description: "AI 統合エディタ・IDE" },
  { id: "other", label: "その他ツール", description: "音声入力・ターミナル等" },
];

const MODEL_COMPARISON = [
  { name: "Claude Opus 4.6", rating: 4.5, summary: "Anthropic 最上位。1Mコンテキスト、高度な推論とコード生成に強い。$15/$75 per 1M tokens", bench: 72 },
  { name: "Claude Sonnet 4.6", rating: 4.0, summary: "Anthropic 中核。1Mコンテキスト、速度と品質のバランス型。日常のコーディングに最適。$3/$15", bench: 65 },
  { name: "Claude Haiku 4.5", rating: 3.5, summary: "Anthropic 軽量。200Kコンテキスト、最速・低コスト。大量処理やチャット向け。$0.80/$4", bench: 45 },
  { name: "GPT-5.4", rating: 4.0, summary: "OpenAI 最新。128Kコンテキスト、推論・コーディング・エージェント統合モデル。$2.50/$10", bench: 70 },
  { name: "GPT-5.4 mini", rating: 3.5, summary: "OpenAI 軽量。128Kコンテキスト、無料層でも利用可能。Codex との連携向け。$0.40/$1.60", bench: 50 },
  { name: "GPT-4o", rating: 3.5, summary: "OpenAI 前世代。安定性が高く依然として広く利用されている。$2.50/$10", bench: 55 },
  { name: "Gemini 3.1 Pro", rating: 4.0, summary: "Google 最上位。2Mコンテキストは業界最大。長大なコードベースの一括読み込みに強い。$1.25/$5", bench: 68 },
  { name: "Gemini 3.1 Flash", rating: 3.5, summary: "Google 高速。1Mコンテキスト、極めて低コスト。速度重視の処理に向く。$0.075/$0.30", bench: 48 },
  { name: "Gemini 2.5 Pro", rating: 3.5, summary: "Google 前世代。1Mコンテキスト、安定した実績。$1.25/$5", bench: 58 },
  { name: "Kimi K2.5", rating: 4.0, summary: "Moonshot AI（中国）。1兆パラメータ MoE、256Kコンテキスト。Humanity's Last Exam で Opus 超え。オープンウェイト。", bench: 77 },
  { name: "GLM-5", rating: 3.5, summary: "Zhipu AI（中国）。745Bパラメータ MoE、MIT ライセンス。Opus の約1/6のコスト。Huawei チップで学習。$0.80/$2.56", bench: 60 },
  { name: "MiniMax M2.7", rating: 3.5, summary: "MiniMax（中国）。自己進化型モデル。SWE-Pro 56.2%で Opus に迫る。OpenClaw 上で自律最適化。", bench: 56 },
  { name: "KAT-Coder Pro V2", rating: 3.5, summary: "Kwai/快手（中国）。コーディング特化 MoE。SWE-Bench 73.4%。OpenClaw 対応。$0.30/$1.20 と低コスト。", bench: 73 },
];

/** ベンチマークスコアの横棒グラフ（SVG 自動生成・グラデーション付き） */
function BenchmarkChart({ data, title, maxScore = 100 }) {
  const sorted = [...data].filter((d) => d.bench != null).sort((a, b) => b.bench - a.bench);
  if (sorted.length === 0) return null;
  const topScore = sorted[0].bench;
  const companyColors = {
    "Claude": ["#6366f1", "#a78bfa"],
    "GPT": ["#10b981", "#34d399"],
    "Gemini": ["#3b82f6", "#60a5fa"],
    "Kimi": ["#f59e0b", "#fbbf24"],
    "GLM": ["#ef4444", "#f87171"],
    "MiniMax": ["#ec4899", "#f472b6"],
    "KAT": ["#14b8a6", "#2dd4bf"],
  };
  const getColors = (name) => {
    for (const [key, val] of Object.entries(companyColors)) {
      if (name.includes(key)) return val;
    }
    return ["#6b7280", "#9ca3af"];
  };
  return (
    <div className="benchmark-chart">
      {title ? <h3 className="benchmark-chart__title">{title}</h3> : null}
      <div className="benchmark-chart__wrap">
        <div className="benchmark-chart__grid">
          {[0, 25, 50, 75, 100].map((v) => (
            <div key={v} className="benchmark-chart__gridline" style={{ left: `${v}%` }}>
              <span className="benchmark-chart__gridlabel">{v}</span>
            </div>
          ))}
        </div>
        <div className="benchmark-chart__bars">
          {sorted.map((d, i) => {
            const pct = (d.bench / maxScore) * 100;
            const [c1, c2] = getColors(d.name);
            const isTop = d.bench === topScore;
            return (
              <div key={d.name} className="bench-row" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="bench-row__label">{d.name}</span>
                <div className="bench-row__track">
                  <div
                    className={`bench-row__bar${isTop ? " bench-row__bar--top" : ""}`}
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${c1}, ${c2})`,
                    }}
                  />
                  <span className={`bench-row__score${isTop ? " bench-row__score--top" : ""}`}>{d.bench}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** 記事内埋め込み用の縦棒グラフ */
function VerticalBarChart({ chart }) {
  const { title, subtitle, bars, maxValue = 100, unit = "%" } = chart;
  if (!bars || bars.length === 0) return null;
  const max = maxValue || Math.max(...bars.map((b) => b.value)) * 1.15;
  return (
    <div className="vchart">
      {title ? <h4 className="vchart__title">{title}</h4> : null}
      {subtitle ? <p className="vchart__subtitle">{subtitle}</p> : null}
      <div className="vchart__area">
        <div className="vchart__gridlines">
          {[0, 25, 50, 75, 100].map((v) => {
            const pct = (v / 100) * 100;
            return (
              <div key={v} className="vchart__gridline" style={{ bottom: `${pct}%` }}>
                <span className="vchart__gridlabel">{Math.round((v / 100) * max)}</span>
              </div>
            );
          })}
        </div>
        <div className="vchart__bars">
          {bars.map((b, i) => {
            const pct = (b.value / max) * 100;
            return (
              <div key={b.label} className="vchart__col" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="vchart__val">{b.value}{unit}</div>
                <div className="vchart__bar-wrap">
                  <div
                    className="vchart__bar"
                    style={{
                      height: `${pct}%`,
                      background: b.color || `hsl(${210 + i * 30}, 70%, 55%)`,
                    }}
                  />
                </div>
                <div className="vchart__label">{b.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ModelComparisonSection() {
  const sorted = [...MODEL_COMPARISON].sort((a, b) => b.rating - a.rating);
  return (
    <section className="review-comparison-section">
      <h2 className="section-feed__title">AI モデル比較</h2>
      <p className="section-feed__meta">主要モデルの現行世代と前世代。料金は入力/出力（1M トークンあたり）。公式価格を必ず確認のこと。</p>
      <details className="benchmark-explainer">
        <summary className="benchmark-explainer__summary">ベンチマークの見方（タップで開く）</summary>
        <div className="benchmark-explainer__body">
          <p>ベンチマークは AI モデルの性能を同じ基準で比較するためのテスト。測る対象によって種類が異なる:</p>
          <dl className="benchmark-explainer__list">
            <dt>SWE-Bench</dt><dd>実際のバグ修正ができるか（コーディング能力）</dd>
            <dt>ARC-AGI</dt><dd>初めて見る問題に対応できるか（適応的推論力）</dd>
            <dt>Humanity{"'"}s Last Exam</dt><dd>専門家レベルの難問に答えられるか（学術的推論）</dd>
            <dt>MMMU</dt><dd>画像やグラフを理解できるか（視覚的理解力）</dd>
          </dl>
          <p>下のグラフは SWE-Bench 系を中心とした推定統合値。コーディング以外の用途（文章作成、分析等）ではスコアの順位が変わることがある。</p>
        </div>
      </details>
      <BenchmarkChart data={MODEL_COMPARISON} title="ベンチマークスコア（SWE-Bench 系・推定統合値）" />
      <div className="review-comparison-table-wrap">
        <table className="review-comparison-table">
          <thead>
            <tr>
              <th scope="col">モデル</th>
              <th scope="col">評価</th>
              <th scope="col">概要</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((m) => (
              <tr key={m.name} className="review-comparison-row" style={{ cursor: "default" }}>
                <td className="review-comparison-name">{m.name}</td>
                <td className="review-comparison-rating">
                  <span className="review-stars">{renderStars(m.rating)}</span>
                  <span className="review-score">{m.rating}</span>
                </td>
                <td className="review-comparison-excerpt">{m.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ReviewComparisonTable({ articles, category, onSelect }) {
  const items = articles
    .filter((a) => a.reviewCategory === category.id)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  if (items.length === 0) return null;
  return (
    <section className="review-comparison-section">
      <h2 className="section-feed__title">{category.label}比較</h2>
      <p className="section-feed__meta">{category.description}</p>
      <div className="review-comparison-table-wrap">
        <table className="review-comparison-table">
          <thead>
            <tr>
              <th scope="col">ツール</th>
              <th scope="col">評価</th>
              <th scope="col">概要</th>
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr
                key={a.id}
                className="review-comparison-row"
                onClick={() => onSelect(a)}
                style={{ cursor: "pointer" }}
              >
                <td className="review-comparison-name">
                  {a.title.split(/[—–\s]/)[0].replace(/レビュー$/, "").trim()}
                </td>
                <td className="review-comparison-rating">
                  <span className="review-stars">{renderStars(a.rating)}</span>
                  <span className="review-score">{a.rating}</span>
                </td>
                <td className="review-comparison-excerpt">
                  {a.excerpt.length > 80 ? a.excerpt.slice(0, 80) + "…" : a.excerpt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ReviewTabBar({ reviewTab, onSelect }) {
  const tabs = [
    { id: "all", label: "すべて" },
    { id: "models", label: "モデル" },
    ...REVIEW_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  ];
  return (
    <nav className="filter-nav" aria-label="レビューカテゴリ">
      <div className="filter-nav-inner" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={reviewTab === t.id}
            className={`filter-tab${reviewTab === t.id ? " is-active" : ""}`}
            onClick={() => onSelect(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function CompanyCard({ company }) {
  const st = company.stock;
  return (
    <article id={`company-${company.id}`} className="company-card">
      <div className="company-card__head">
        {company.logo ? (
          <img
            src={resolveMediaSrc(company.logo)}
            alt={`${company.name} ロゴ`}
            className="company-card__logo"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <h2 className="company-card__title">{company.name}</h2>
        <a
          href={company.officialUrl}
          className="official-tab"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式サイト
          <span className="official-tab-ext" aria-hidden>
            ↗
          </span>
        </a>
      </div>
      {company.legalName ? (
        <p className="company-card__legal">{company.legalName}</p>
      ) : null}
      <dl className="company-dl">
        <dt>国・地域</dt>
        <dd>{company.country}</dd>
        <dt>本社・拠点</dt>
        <dd>{company.hq}</dd>
        <dt>設立</dt>
        <dd>{company.foundedYear}年</dd>
        <dt>従業員規模</dt>
        <dd>{company.employees}</dd>
        <dt>売上・事業規模</dt>
        <dd>{company.revenue}</dd>
        <dt>株式・資本市場</dt>
        <dd>
          {st.listed && st.tickers?.length ? (
            <ul className="company-ticker-list">
              {st.tickers.map((t) => (
                <li key={t.symbol}>
                  <strong>{t.exchange}</strong> {t.symbol}
                  {t.name ? `（${t.name}）` : ""}
                </li>
              ))}
            </ul>
          ) : null}
          <span className="company-stock-note">{st.detail}</span>
        </dd>
        <dt>主要プロダクト</dt>
        <dd>{company.products.join("、")}</dd>
      </dl>
      {company.notes?.length ? (
        <ul className="company-notes">
          {company.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ShareBtn({ articleId, articleTitle }) {
  const handleShare = useCallback((e) => {
    e.stopPropagation();
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("a", articleId);
    if (navigator.share) {
      navigator.share({ title: articleTitle ?? "", url: url.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url.href).catch(() => {});
    }
  }, [articleId, articleTitle]);
  return (
    <button
      type="button"
      className="btn-share"
      title="共有"
      aria-label="共有"
      onClick={handleShare}
    >
      {"↗"}
    </button>
  );
}

/** 元報道・公式ドキュメント（2次サイトとしての出典明示） */
function ArticlePrimarySources({ sources }) {
  if (!sources?.length) return null;
  return (
    <section
      className="detail-primary-sources"
      aria-labelledby="primary-sources-heading"
    >
      <h2 id="primary-sources-heading" className="detail-section-title">
        元記事・一次情報
      </h2>
      <p className="detail-primary-sources__lead">
        当サイトの記事は要約・整理です。事実関係・契約・価格・提供条件の判断は、次の一次情報・報道原文・公式ドキュメントを優先してご確認ください。
      </p>
      <ul className="detail-primary-sources__list">
        {sources.map((s, i) => (
          <li key={s.url || `ps-${i}`} className="detail-primary-sources__item">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-primary-sources__link"
            >
              {s.title || s.url}
            </a>
            {s.site ? (
              <span className="detail-primary-sources__site">{s.site}</span>
            ) : null}
            {s.note ? (
              <span className="detail-primary-sources__note">{s.note}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** 本文中の比較表（Markdown の ** はセル内で太字に変換） */
function ArticleTableBlock({ table, keyPrefix }) {
  const { caption, headers, rows } = table;
  if (!headers?.length || !rows?.length) return null;
  const mk = { n: 0 };
  const mkKey = () => `${keyPrefix}-t${mk.n++}`;
  return (
    <figure className="article-table-figure">
      <div className="article-table-scroll" role="region" aria-label={caption || "比較表"}>
        <table className="article-table">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} scope="col">
                  {richInlineLine(String(h), mkKey)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) =>
                  ci === 0 ? (
                    <th key={ci} scope="row" className="article-table__rowhead">
                      {richInlineLine(String(cell), mkKey)}
                    </th>
                  ) : (
                    <td key={ci}>{richInlineLine(String(cell), mkKey)}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="article-figure__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** トップ：WEBデザインギャラリー風「本日の1本」 */
function ArticleProse({ article }) {
  const figures = article.figures ?? [];
  const tables = article.tables ?? [];
  const charts = article.charts ?? [];
  const figuresAfter = (i) => figures.filter((f) => f.afterParagraph === i);
  const tablesAfter = (i) => tables.filter((t) => t.afterParagraph === i);
  const chartsAfter = (i) => charts.filter((c) => c.afterParagraph === i);
  return (
    <div className="prose prose--article">
      {article.body.map((p, i) => {
        const cb = parseCodeBlock(p);
        return (
        <Fragment key={i}>
          {cb.isCode
            ? <CopyableCodeBlock code={cb.code} lang={cb.lang} />
            : <p>{richArticleText(p, `p${i}-`)}</p>}
          {figuresAfter(i).map((f, fi) => (
            <figure key={`fig-${i}-${fi}`} className="article-figure">
              <img
                src={resolveMediaSrc(f.src)}
                alt={f.alt}
                loading="lazy"
                decoding="async"
                {...(typeof f.width === "number" ? { width: f.width } : {})}
                {...(typeof f.height === "number" ? { height: f.height } : {})}
              />
              {f.caption ? (
                <figcaption className="article-figure__caption">{f.caption}</figcaption>
              ) : null}
            </figure>
          ))}
          {tablesAfter(i).map((t, ti) => (
            <ArticleTableBlock key={`tbl-${i}-${ti}`} table={t} keyPrefix={`p${i}-${ti}`} />
          ))}
          {chartsAfter(i).map((c, ci) => (
            <VerticalBarChart key={`chart-${i}-${ci}`} chart={c} />
          ))}
        </Fragment>
      );
      })}
    </div>
  );
}

function HeroToday({ article, onClick }) {
  const hasCover = Boolean(article.coverImage?.src);
  const heroScope = article.heroScope ?? "day";
  const isWeekRoundup = heroScope === "week";
  const roundupPeriod =
    article.weekRoundupPeriod?.start && article.weekRoundupPeriod?.end
      ? formatWeekRoundupPeriodJp(
          article.weekRoundupPeriod.start,
          article.weekRoundupPeriod.end,
        )
      : null;
  const ariaLead = isWeekRoundup
    ? `週刊まとめ記事: ${article.title}`
    : `本日のニュース: ${article.title}`;
  return (
    <section
      className={`hero-today${isWeekRoundup ? " hero-today--week-roundup" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={ariaLead}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="hero-today__inner">
        <div className="hero-today__text">
          <p className="hero-today__label">
            {isWeekRoundup
              ? "週刊まとめ（毎週月曜公開・先週分）· Weekly Mon"
              : "本日のニュース（東京日付）· Today in the news"}
          </p>
          {isWeekRoundup && roundupPeriod ? (
            <p className="hero-today__date">対象週 {roundupPeriod}</p>
          ) : !isWeekRoundup ? (
            <p className="hero-today__date">
              {formatPickDate(getArticleNewsYmd(article))}
            </p>
          ) : null}
          <h2 className="hero-today__title">{article.title}</h2>
          <p className="hero-today__excerpt">
            {richArticleText(article.excerpt, "hero-ex-")}
          </p>
          <div className="hero-today__row">
            <span className="hero-today__cta">記事を読む</span>
            <ShareBtn articleId={article.id} articleTitle={article.title} />
          </div>
          <div className="hero-today__tags">
            {article.tags.slice(0, 5).map((t) => (
              <span key={t} className="tag-chip" style={{ cursor: "inherit" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`hero-today__visual${hasCover ? " hero-today__visual--has-cover" : ""}`}
        >
          {hasCover ? (
            <img
              className="hero-today__cover-img"
              src={resolveMediaSrc(article.coverImage.src)}
              alt={article.coverImage.alt}
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  onClick,
  onTagClick,
}) {
  const cat = CATEGORIES[article.category];
  const hasCover = Boolean(article.coverImage?.src);
  return (
    <article
      className="card-article"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {hasCover ? (
        <div className="card-article__thumb-wrap">
          <img
            className="card-article__thumb"
            src={resolveMediaSrc(article.coverImage.src)}
            alt={article.coverImage.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="card-article__top">
        <div className="card-article__meta">
          <div
            className="cat-icon cat-icon--sm"
            style={{
              background: `${cat.color}18`,
              border: `1px solid ${cat.color}33`,
              color: cat.color,
            }}
          >
            {getCategoryIcon(article.category)}
          </div>
          <span
            className="badge"
            style={{ color: cat.color, background: `${cat.color}18` }}
          >
            {cat.label}
          </span>
        </div>
        <ShareBtn articleId={article.id} articleTitle={article.title} />
      </div>
      <h3 className="card-article__title">{article.title}</h3>
      <p className="card-article__excerpt">
        {richArticleText(article.excerpt, `card-${article.id}-`)}
      </p>
      <div className="card-article__foot">
        <span>{formatPickDate(getArticleNewsYmd(article))}</span>
        {article.rating ? (
          <span style={{ color: "#fbbf24" }}>{renderStars(article.rating)}</span>
        ) : null}
        <span style={{ marginLeft: "auto" }}>{article.readTime}</span>
      </div>
      {(article.model || article.pricing) ? (
        <div className="card-article__foot" style={{ borderTop: "none", paddingTop: 0 }}>
          {article.model ? (
            <span style={{ color: cat.color, fontWeight: 600 }}>{article.model}</span>
          ) : null}
          {article.pricing ? <span>{article.pricing}</span> : null}
        </div>
      ) : null}
      <div className="card-article__tags">
        {article.tags.slice(0, 4).map((t) => (
          <button
            key={t}
            type="button"
            className="tag-chip"
            onClick={(e) => {
              e.stopPropagation();
              onTagClick(t);
            }}
          >
            #{t}
          </button>
        ))}
      </div>
    </article>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - el.clientHeight;
      setPct(h > 0 ? Math.min(100, (el.scrollTop / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="read-progress"
      style={{ width: `${pct}%` }}
      aria-hidden
    />
  );
}

function ArticleDetail({
  article,
  onBack,
  onTagClick,
  relatedArticles,
  onOpenRelated,
}) {
  const cat = CATEGORIES[article.category];

  return (
    <div className="app-inner">
      <ReadingProgress />
      <div className="detail-wrap">
        <button
          type="button"
          className="detail-back-btn desktop-only"
          onClick={onBack}
        >
          ← 一覧へ
        </button>

        <article>
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              className="badge"
              style={{ color: cat.color, background: `${cat.color}18` }}
            >
              {cat.label}
            </span>
            <span
              style={{ fontSize: 12, color: "var(--muted)" }}
              title={
                article.heroScope === "week"
                  ? "週刊の公開日。この号の集計対象は weekRoundupPeriod"
                  : "報道・公式発表など、ニュースの基準日"
              }
            >
              {article.heroScope === "week" &&
              article.weekRoundupPeriod?.start &&
              article.weekRoundupPeriod?.end
                ? `対象週 ${formatWeekRoundupPeriodJp(article.weekRoundupPeriod.start, article.weekRoundupPeriod.end)} · 公開 ${getArticleNewsYmd(article)}`
                : `ニュース日 ${getArticleNewsYmd(article)}`}
            </span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{article.author}</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{article.readTime}</span>
          </div>

          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--text)",
              lineHeight: 1.45,
              margin: "0 0 1rem",
              letterSpacing: "-0.02em",
            }}
          >
            {article.title}
          </h1>

          {article.coverImage?.src ? (
            <figure className="detail-cover">
              <img
                src={resolveMediaSrc(article.coverImage.src)}
                alt={article.coverImage.alt}
                loading="eager"
                decoding="async"
              />
              {article.coverImage.caption ? (
                <figcaption className="article-figure__caption">
                  {article.coverImage.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          {article.type === "review" ? (
            <div
              style={{
                background: "var(--surface-solid)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "1rem",
                marginBottom: "1.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {article.rating ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    評価
                  </div>
                  <div style={{ fontSize: 14, color: "#fbbf24" }}>
                    {renderStars(article.rating)}
                  </div>
                </div>
              ) : null}
              {article.company ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    開発元
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>
                    {article.company}
                  </div>
                </div>
              ) : null}
              {article.model ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    モデル
                  </div>
                  <div style={{ fontSize: 13, color: cat.color, fontWeight: 500 }}>
                    {article.model}
                  </div>
                </div>
              ) : null}
              {article.pricing ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    料金
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text)" }}>{article.pricing}</div>
                </div>
              ) : null}
            </div>
          ) : null}

          <section className="detail-lead" aria-labelledby="detail-lead-heading">
            <h2 id="detail-lead-heading" className="detail-section-title">
              概要
            </h2>
            <p className="detail-excerpt">
              {richArticleText(article.excerpt, "detail-ex-")}
            </p>
          </section>

          <section className="detail-body" aria-labelledby="detail-body-heading">
            <h2 id="detail-body-heading" className="detail-section-title">
              記事本文
            </h2>
            <ArticleProse article={article} />
          </section>

          {relatedArticles?.length ? (
            <section
              className="detail-related"
              aria-labelledby="detail-related-heading"
              style={{ marginBottom: "1.5rem" }}
            >
              <h2 id="detail-related-heading" className="detail-section-title">
                関連記事
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {relatedArticles.map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      className="related-article-link"
                      onClick={() => onOpenRelated(r)}
                    >
                      <span
                        style={{
                          display: "block",
                          fontWeight: 600,
                          color: "var(--text)",
                          textAlign: "left",
                          lineHeight: 1.4,
                        }}
                      >
                        {r.title}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--muted)",
                          marginTop: 4,
                          display: "block",
                        }}
                      >
                        {formatPickDate(getArticleNewsYmd(r))} · {r.readTime ?? ""}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <ArticlePrimarySources sources={article.primarySources} />

          {article.features ? (
            <div style={{ marginBottom: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 10,
                }}
              >
                主な特徴
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {article.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 6,
                      fontSize: 12,
                      color: cat.color,
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}33`,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              paddingTop: 16,
              borderTop: "1px solid var(--border)",
            }}
          >
            {article.tags.map((t) => (
              <button
                key={t}
                type="button"
                className="tag-chip"
                onClick={() => onTagClick(t)}
              >
                #{t}
              </button>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

function WeekRoundupNav({ articles, onSelect, onTagClick, className }) {
  if (articles.length === 0) return null;
  return (
    <div className={`sidebar-panel${className ? ` ${className}` : ""}`}>
      <h3>週刊まとめ（特集）</h3>
      <p className="sidebar-panel-hint" style={{ marginTop: 0 }}>
        毎週の振り返り。新しい公開順です。
      </p>
      {articles.map((a) => (
        <div
          key={a.id}
          className="sidebar-link"
          role="button"
          tabIndex={0}
          onClick={() => onSelect(a)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(a);
            }
          }}
        >
          <span style={{ display: "block", fontWeight: 600 }}>
            {formatPickDate(getArticleNewsYmd(a))} 公開
          </span>
          {a.weekRoundupPeriod?.start && a.weekRoundupPeriod?.end ? (
            <span
              style={{
                display: "block",
                fontSize: 11,
                color: "var(--muted)",
                marginTop: 2,
              }}
            >
              対象{" "}
              {formatWeekRoundupPeriodJp(
                a.weekRoundupPeriod.start,
                a.weekRoundupPeriod.end,
              )}
            </span>
          ) : null}
        </div>
      ))}
      <p style={{ marginTop: 10, marginBottom: 0, fontSize: 12 }}>
        <button
          type="button"
          className="btn"
          style={{ fontSize: 12, padding: "6px 10px" }}
          onClick={() => onTagClick("週刊まとめ")}
        >
          タグ「週刊まとめ」で記事を検索
        </button>
      </p>
    </div>
  );
}

function Sidebar({ articles, onSelect, onTagClick, weekRoundups }) {
  return (
    <aside className="desktop-sidebar">
      <div className="sidebar-panel">
        <h3>このサイトについて</h3>
        <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
          AI 開発ツールのニュース・レビューを要約・整理しています（2次情報）。各記事末尾の「元記事・一次情報」から原文・公式を確認してください。
        </p>
        <div style={{ marginTop: 10, fontSize: 11, color: "var(--muted)" }}>
          最終更新: {getSiteTodayYmd()}
        </div>
        <p style={{ marginTop: 12, marginBottom: 0 }}>
          <a href="./feed.xml" className="prose-link" target="_blank" rel="noopener noreferrer">
            Atom フィード（購読）
          </a>
        </p>
      </div>

      <WeekRoundupNav
        articles={weekRoundups}
        onSelect={onSelect}
        onTagClick={onTagClick}
      />

      <div className="sidebar-panel">
        <h3>よく使うタグ</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["MCP", "動画生成", "スキル", "Markdown", "RAG", "音声", "CLI", "Anthropic"].map((t) => (
            <button
              key={t}
              type="button"
              className="tag-chip"
              onClick={() => onTagClick(t)}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ScrollTopFab({ visible, onClick }) {
  if (!visible) return null;
  return (
    <button
      type="button"
      className="fab-top"
      title="先頭へ"
      aria-label="先頭へスクロール"
      onClick={onClick}
    >
      ↑
    </button>
  );
}

function StorageLocalNotice() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_LOCAL_NOTICE) === "1",
  );
  if (dismissed) return null;
  return (
    <div className="storage-notice" role="status" aria-live="polite">
      <p>
        テーマとブックマークはブラウザの localStorage
        に保存されます。広告追跡用の第三者 Cookie
        は使用していません。
      </p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem(STORAGE_LOCAL_NOTICE, "1");
          setDismissed(true);
        }}
      >
        閉じる
      </button>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        {SITE_NAME} — {SITE_DESCRIPTION}
      </div>
      <div>
        最終更新: {getSiteTodayYmd()}{" "}
        · データは公開情報・報道を基に整理しています
      </div>
    </footer>
  );
}

/** 初回マウント時の URL（?a= / ?view= / ?tag=）から一覧・詳細状態を復元 */
function readInitialRouteState() {
  if (typeof window === "undefined") {
    return { selected: null, siteSection: "home", query: "", guideTab: "setup", toolTab: "claude-code" };
  }
  const u = new URL(window.location.href);
  const aid = u.searchParams.get("a");
  if (aid) {
    const found = ARTICLES.find((x) => x.id === aid);
    if (found) {
      return { selected: found, siteSection: "articles", query: "", guideTab: "setup", toolTab: "claude-code" };
    }
  }
  const view = u.searchParams.get("view");
  const siteSection =
    view === "companies"
      ? "companies"
      : view === "reviews"
        ? "reviews"
        : view === "tools"
          ? "tools"
          : view === "guide"
            ? "guide"
            : view === "articles"
              ? "articles"
              : "home";
  const tab = u.searchParams.get("tab");
  const VALID_GUIDE_TABS = ["setup", "rules", "practical", "media", "glossary"];
  const guideTab =
    siteSection === "guide" && VALID_GUIDE_TABS.includes(tab)
      ? tab
      : "setup";
  const toolTab = siteSection === "tools"
    ? (tab && TOOL_REFERENCES.some(t => t.id === tab) ? tab : "claude-code")
    : "claude-code";
  const tag = u.searchParams.get("tag");
  const query =
    siteSection === "articles" && tag && tag.trim()
      ? tag.trim()
      : "";
  return { selected: null, siteSection, query, guideTab, toolTab };
}

export default function App() {
  const initialRoute = useMemo(() => readInitialRouteState(), []);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState(initialRoute.query);
  const [sort, setSort] = useState("date-desc");
  const [selected, setSelected] = useState(initialRoute.selected);
  const [siteSection, setSiteSection] = useState(initialRoute.siteSection);
  const [guideTab, setGuideTab] = useState(initialRoute.guideTab);
  const [toolTab, setToolTab] = useState(initialRoute.toolTab ?? "claude-code");
  const [reviewTab, setReviewTab] = useState("all");
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_THEME) || "light");
const [showFab, setShowFab] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
    const tc = theme === "dark" ? "#050810" : "#fafafa";
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", tc);
  }, [theme]);

  useEffect(() => {
    syncAppUrl({
      articleId: selected?.id ?? null,
      siteSection: selected ? "articles" : siteSection,
      tagQuery: selected ? "" : query,
      guideTab,
      toolTab,
    });
  }, [selected, siteSection, query, guideTab, toolTab]);

  // selected が変わったらレンダリング後にページ先頭へスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  useEffect(() => {
    syncDocumentSeo({
      selectedArticle: selected ?? null,
      siteSection,
      guideTab,
    });
  }, [selected, siteSection, guideTab]);

  // ブラウザの戻る/進むボタンで記事を開閉する
  useEffect(() => {
    const onPop = () => {
      const u = new URL(window.location.href);
      const aid = u.searchParams.get("a");
      if (aid) {
        const found = ARTICLES.find((x) => x.id === aid);
        setSelected(found ?? null);
      } else {
        setSelected(null);
      }
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (document.getElementById("ld-json-website")) return;
    const script = document.createElement("script");
    script.id = "ld-json-website";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "ja",
    });
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && selected) {
        setSelected(null);
        window.scrollTo(0, 0);
      }
      if (
        e.key === "/" &&
        !e.ctrlKey &&
        !e.metaKey &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA" &&
        !selected
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [selected]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);


  const handleSelect = useCallback((article) => {
    setSelected(article);
    syncAppUrl({
      articleId: article.id,
      siteSection: "articles",
      tagQuery: "",
      guideTab,
      toolTab,
      usePush: true,
    });
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [guideTab, toolTab]);

  const onTagClick = useCallback((tag) => {
    setQuery(tag);
    setSelected(null);
    setSiteSection("articles");
    window.scrollTo(0, 0);
    setTimeout(() => searchRef.current?.focus(), 0);
  }, []);

  const filteredCompanies = useMemo(() => {
    let list = AI_COMPANIES;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.legalName || "").toLowerCase().includes(q) ||
          c.country.includes(q) ||
          (c.hq || "").toLowerCase().includes(q) ||
          c.products.some((p) => p.toLowerCase().includes(q)) ||
          (c.stock?.detail || "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [query]);

  const vibeGuide = useMemo(() => filterVibeCodingGuide(query), [query]);
  const mediaGuide = useMemo(() => filterMediaGuide(query), [query]);
  const glossaryGuide = useMemo(() => filterGlossaryGuide(query), [query]);

  const toolRef = useMemo(
    () => filterToolReference(query, toolTab),
    [query, toolTab]
  );

  const guideMatchCount =
    siteSection !== "guide" ? 0 : 1;

  const guideTotal =
    siteSection !== "guide" ? 0 : 1;

  const filtered = useMemo(() => {
    let list = ARTICLES;
    if (siteSection === "reviews") {
      list = list.filter((a) => a.type === "review");
      if (reviewTab !== "all") list = list.filter((a) => a.reviewCategory === reviewTab);
    } else if (siteSection === "articles") {
      list = list.filter((a) => a.type !== "review");
    }
    if (siteSection === "articles" && filter !== "all") list = list.filter((a) => a.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    const todayYmd = getSiteTodayYmd();
    const todayPool = list.filter((a) => {
      if (getArticleNewsYmd(a) !== todayYmd) return false;
      const scope = a.heroScope ?? "day";
      return scope !== "none";
    });
    const sortedToday = [...todayPool].sort((a, b) => {
      const o = compareArticleOrder(a, b, sort);
      if (o !== 0) return o;
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return a.id.localeCompare(b.id, "ja");
    });
    const featured = sortedToday[0] ?? null;
    const restRaw = featured
      ? list.filter((a) => a.id !== featured.id)
      : list;
    const sorted = [...restRaw].sort((a, b) => compareArticleOrder(a, b, sort));
    return { featured, rest: sorted, list };
  }, [filter, query, sort, siteSection, reviewTab]);

  const { featured, rest } = filtered;

  const switchSection = useCallback((next) => {
    setSiteSection(next);
    setSelected(null);
    if (next === "guide") setGuideTab("setup");
    if (next === "tools") setToolTab("claude-code");
    window.scrollTo(0, 0);
  }, []);

  const selectGuideTab = useCallback((next) => {
    setGuideTab(next);
    window.scrollTo(0, 0);
  }, []);

  const selectToolTab = useCallback((next) => {
    setToolTab(next);
    window.scrollTo(0, 0);
  }, []);

  const articleCount =
    siteSection === "articles" || siteSection === "reviews"
      ? (featured && siteSection === "articles" ? rest.length + 1 : rest.length)
      : 0;

  const weekRoundups = useMemo(() => {
    const list = ARTICLES.filter((a) => (a.heroScope ?? "day") === "week");
    list.sort((a, b) =>
      getArticleNewsYmd(b).localeCompare(getArticleNewsYmd(a), "en"),
    );
    return list;
  }, []);

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        本文へスキップ
      </a>
      <StorageLocalNotice />
      <div className="app-inner">
        <main id="main-content" className="main-region" tabIndex={-1}>
        {selected ? (
          <header className="header-wrap header-wrap--compact">
            <div className="header-inner">
              <div className="header-top">
                <div>
                  <h1 className="site-title" onClick={() => { setSelected(null); switchSection("home"); }} style={{ cursor: "pointer" }}>{SITE_NAME}</h1>
                </div>
                <div className="header-actions">
                  <button
                    type="button"
                    className="icon-btn hamburger-btn"
                    title="メニュー"
                    aria-label="メニューを開く"
                    onClick={toggleMenu}
                  >
                    ☰
                  </button>
                  <button
                    type="button"
                    className="icon-btn"
                    title={theme === "dark" ? "ライトテーマ" : "ダークテーマ"}
                    aria-label="テーマ切替"
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? "☀️" : "🌙"}
                  </button>
                </div>
              </div>
            </div>
            <HamburgerMenu
              isOpen={menuOpen}
              onClose={closeMenu}
              onSection={(section) => { setSelected(null); switchSection(section); }}
              currentSection={siteSection}
            />
          </header>
        ) : null}
        {!selected ? (
          <>
            <Header
              query={query}
              setQuery={setQuery}
              theme={theme}
              toggleTheme={toggleTheme}
              sort={sort}
              setSort={setSort}
              searchRef={searchRef}
              onGoHome={() => switchSection("home")}
              filteredCount={
                siteSection === "companies"
                  ? filteredCompanies.length
                  : siteSection === "guide"
                    ? guideMatchCount
                    : siteSection === "tools"
                      ? toolRef.matchCount
                      : articleCount
              }
              totalCount={
                siteSection === "companies"
                  ? AI_COMPANIES.length
                  : siteSection === "guide"
                    ? guideTotal
                    : siteSection === "tools"
                      ? toolRef.total
                      : ARTICLES.length
              }
              searchPlaceholder={
                siteSection === "companies"
                  ? "企業名・国・本社・製品・証券コードで検索…"
                  : siteSection === "guide"
                    ? "ツール・ルール・用語を検索…"
                    : siteSection === "reviews"
                      ? "レビューを検索…（ツール名・タグ）"
                      : siteSection === "tools"
                        ? "コマンド・機能を検索…"
                        : "記事を検索…（タイトル・概要・タグ）"
              }
              searchAriaLabel={
                siteSection === "companies"
                  ? "企業検索"
                  : siteSection === "guide"
                    ? "ガイド内検索"
                    : siteSection === "tools"
                      ? "ツール別検索"
                      : "記事検索"
              }
              showSort={siteSection === "articles" || siteSection === "reviews"}
              hideSearch={siteSection === "home"}
              onToggleMenu={toggleMenu}
            />
            <HamburgerMenu
              isOpen={menuOpen}
              onClose={closeMenu}
              onSection={(section) => { switchSection(section); }}
              currentSection={siteSection}
            />
            {siteSection !== "home" ? (
              <>
                <SiteSectionNav section={siteSection} onSection={switchSection} />
                {siteSection === "articles" ? (
                  <FilterBar active={filter} setActive={setFilter} />
                ) : siteSection === "reviews" ? (
                  <ReviewTabBar reviewTab={reviewTab} onSelect={setReviewTab} />
                ) : siteSection === "guide" ? (
                  <GuideTabBar guideTab={guideTab} onSelect={selectGuideTab} />
                ) : siteSection === "tools" ? (
                  <ToolTabBar toolTab={toolTab} onSelect={selectToolTab} />
                ) : null}
              </>
            ) : null}
          </>
        ) : null}

        {selected ? (
          <ArticleDetail
            article={selected}
            onBack={() => {
              setSelected(null);
              window.scrollTo(0, 0);
            }}
            onTagClick={onTagClick}
            relatedArticles={pickRelatedArticles(selected, ARTICLES, 3)}
            onOpenRelated={handleSelect}
          />
        ) : siteSection === "home" ? (
          <HomePage
            articles={ARTICLES}
            onSelect={handleSelect}
            onSection={switchSection}
          />
        ) : (
          <div
            className={`blog-layout${siteSection === "guide" ? " blog-layout--guide" : ""}`}
          >
            <div className="blog-main">
              {siteSection === "articles" || siteSection === "reviews" ? (
                <>
                  {siteSection === "reviews" && !query ? (
                    <div className="review-comparisons">
                      {(reviewTab === "all" || reviewTab === "models") ? (
                        <ModelComparisonSection />
                      ) : null}
                      {REVIEW_CATEGORIES
                        .filter((cat) => reviewTab === "all" || reviewTab === cat.id)
                        .map((cat) => (
                          <ReviewComparisonTable
                            key={cat.id}
                            articles={ARTICLES.filter((a) => a.type === "review")}
                            category={cat}
                            onSelect={handleSelect}
                          />
                        ))}
                    </div>
                  ) : null}

                  {featured && siteSection === "articles" ? (
                    <HeroToday
                      article={featured}
                      onClick={() => handleSelect(featured)}
                    />
                  ) : null}

                  {rest.length > 0 ? (
                    <>
                      <div className="section-feed">
                        <h2 className="section-feed__title">
                          {siteSection === "reviews" ? "個別レビュー" : "記事一覧"}
                        </h2>
                        <p className="section-feed__meta">
                          {siteSection === "reviews" ? "各ツールの詳細レビュー" : "掲載記事"}を
                          <span title="報道・公式発表など、事実が表に出た日の目安">
                            ニュース日
                          </span>
                          の新しい順に並べています（
                          <strong style={{ color: "var(--text-secondary)" }}>
                            {rest.length}
                          </strong>
                          件）
                          {query ? " · 検索で絞り込み中" : ""}
                          。
                        </p>
                        <p className="section-feed__meta section-feed__meta--hint">
                          <strong>週刊まとめ</strong>
                          は右（または下）の
                          <strong>サイドバー「週刊まとめ（特集）」</strong>
                          から時系列で開けます。タグ検索は
                          <button
                            type="button"
                            className="inline-linkish"
                            onClick={() => onTagClick("週刊まとめ")}
                          >
                            「週刊まとめ」
                          </button>
                          でも絞れます。
                        </p>
                      </div>
                      <div className="articles-grid">
                        {rest.map((a) => (
                          <ArticleCard
                            key={a.id}
                            article={a}
                            onClick={() => handleSelect(a)}
                            onTagClick={onTagClick}
                          />
                        ))}
                      </div>
                    </>
                  ) : featured ? null : (
                    <div className="empty-state">該当する記事がありません</div>
                  )}
                  <WeekRoundupNav
                    className="week-roundups-mobile"
                    articles={weekRoundups}
                    onSelect={handleSelect}
                    onTagClick={onTagClick}
                  />
                </>
              ) : siteSection === "tools" ? (
                <>
                  <ToolReferencePanel
                    referenceData={toolRef.ref}
                    practical={toolRef.practical}
                  />
                </>
              ) : siteSection === "companies" ? (
                <>
                  <div className="section-feed companies-page-intro">
                    <h2 className="section-feed__title">AI企業</h2>
                    <p className="section-feed__meta">
                      主要プレイヤーの所在地・設立・規模・市場の骨子（公開情報ベース）
                    </p>
                    <p className="companies-disclaimer">{COMPANIES_DISCLAIMER}</p>
                  </div>
                  {filteredCompanies.length > 0 ? (
                    <div className="companies-stack">
                      {filteredCompanies.map((c) => (
                        <CompanyCard key={c.id} company={c} />
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">該当する企業がありません</div>
                  )}
                </>
              ) : (
                <div
                  id="guide-subtab-panel"
                  role="tabpanel"
                  aria-labelledby={`guide-subtab-${guideTab}`}
                >
                  {guideTab === "setup" ? (
                    <GuideSetupPanel />
                  ) : guideTab === "rules" ? (
                    <GuideRulesPanel />
                  ) : guideTab === "practical" ? (
                    <GuidePracticalPanel />
                  ) : guideTab === "media" ? (
                    <MediaToolsGuidePanel
                      mediaTaxonomy={VIBE_MEDIA_TAXONOMY}
                    />
                  ) : (
                    <GlossaryGuidePanel
                      glossaryGenres={GLOSSARY_BY_GENRE}
                    />
                  )}
                </div>
              )}
            </div>

            {siteSection === "articles" ? (
              <Sidebar
                articles={ARTICLES}
                onSelect={handleSelect}
                onTagClick={onTagClick}
                weekRoundups={weekRoundups}
              />
            ) : siteSection === "reviews" ? (
              <aside className="desktop-sidebar" aria-label="レビューの目次">
                <div className="sidebar-panel">
                  <h3>レビューカテゴリ</h3>
                  <p className="sidebar-panel-hint">カテゴリを切り替えます。</p>
                  {[{ id: "all", label: "すべて" }, { id: "models", label: "モデル比較" }, ...REVIEW_CATEGORIES.map((c) => ({ id: c.id, label: c.label }))].map((t) => (
                    <button
                      key={t.id}
                      className={`sidebar-anchor${reviewTab === t.id ? " sidebar-anchor--active" : ""}`}
                      onClick={() => { setReviewTab(t.id); window.scrollTo(0, 0); }}
                      style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", font: "inherit" }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </aside>
            ) : siteSection === "tools" ? (
              <ToolSidebar toolTab={toolTab} toolRef={toolRef} />
            ) : siteSection === "companies" ? (
              <CompaniesSidebar companies={filteredCompanies} />
            ) : siteSection === "guide" ? (
              <GuideSidebar guideTab={guideTab} />
            ) : null}
          </div>
        )}
        <SiteFooter />
        </main>
      </div>

      <ScrollTopFab
        visible={!selected && showFab}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
