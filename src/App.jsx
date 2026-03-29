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
const STORAGE_ACCENT = "ai-news-accent";
const ACCENT_PRESETS = [
  { id: "blue",   label: "ブルー",  color: "#3b82f6", cyan: "#22d3ee", season: null },
  { id: "sakura", label: "桜",      color: "#ec4899", cyan: "#f472b6", season: "spring" },
  { id: "green",  label: "新緑",    color: "#22c55e", cyan: "#4ade80", season: "summer" },
  { id: "orange", label: "紅葉",    color: "#f97316", cyan: "#fb923c", season: "autumn" },
  { id: "purple", label: "冬",      color: "#8b5cf6", cyan: "#a78bfa", season: "winter" },
];
const STORAGE_LOCAL_NOTICE = "ai-news-local-notice-dismissed";
const DEFAULT_DOC_TITLE = `${SITE_NAME} | AI開発ツール最新情報`;

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

/* ══ ページネーション ══ */
function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }
  return (
    <nav className="pagination" aria-label="ページ送り">
      <button
        className="pagination__btn"
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        aria-label="前のページ"
      >
        ‹
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className="pagination__ellipsis">…</span>
        ) : (
          <button
            key={p}
            className={`pagination__num${p === current ? " is-active" : ""}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        )
      )}
      <button
        className="pagination__btn"
        disabled={current === total}
        onClick={() => onChange(current + 1)}
        aria-label="次のページ"
      >
        ›
      </button>
    </nav>
  );
}

/* ══ ハンバーガーメニュー ══ */
function HamburgerMenu({ isOpen, onClose, onSection, currentSection, searchRef, accentId, onAccent }) {
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
        <div className="hamburger-drawer__header">
          <button className="hamburger-close" onClick={onClose} aria-label="閉じる">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <button
            className="hamburger-search"
            onClick={() => { onSection("articles"); onClose(); setTimeout(() => searchRef?.current?.focus(), 200); }}
            aria-label="検索"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
        <ul className="hamburger-list">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`hamburger-item${currentSection === item.id ? " is-active" : ""}`}
                onClick={() => { onSection(item.id); onClose(); }}
              >
                <span className="hamburger-item__label">{item.label}</span>
                <span className="hamburger-item__arrow">›</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="hamburger-accent">
          <span className="hamburger-accent__label">テーマカラー</span>
          <div className="hamburger-accent__dots">
            {ACCENT_PRESETS.map(p => (
              <button
                key={p.id}
                className={`hamburger-accent__dot${accentId === p.id ? " is-active" : ""}`}
                style={{ background: p.color }}
                onClick={() => onAccent(p.id)}
                title={p.label}
                aria-label={p.label}
              />
            ))}
          </div>
        </div>
        <div className="hamburger-footer">
          AI News<br />
          <span className="hamburger-footer__sub">広告なし・個人情報収集なし</span>
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
          <button
            type="button"
            className="icon-btn hamburger-btn"
            title="メニュー"
            aria-label="メニューを開く"
            onClick={onToggleMenu}
          >
            ☰
          </button>
          <div className="header-center" onClick={onGoHome} style={{ cursor: "pointer" }}>
            <h1 className="site-title">{SITE_NAME}</h1>
            <p className="site-tagline">{SITE_DESCRIPTION}</p>
          </div>
          <div className="header-actions">
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

const TYPE_FILTERS = [
  { id: "all", label: "すべて" },
  { id: "news", label: "速報ニュース" },
  { id: "feature", label: "特集・コラム" },
];

function TypeFilterBar({ active, setActive }) {
  return (
    <nav className="type-filter-nav" aria-label="記事タイプ">
      <div className="type-filter-inner">
        {TYPE_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`type-filter-tab${active === f.id ? " is-active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </nav>
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
    .filter((a) => a.type !== "review" && a.id !== hero?.id && (a.heroScope ?? "day") !== "week")
    .slice(0, 4);

  return (
    <div className="home-page">
      {hero ? (
        <section className={`home-hero${hero.coverImage?.src ? " home-hero--has-cover" : ""}`} onClick={() => onSelect(hero)}>
          <div className="home-hero__aurora" aria-hidden="true" />
          {hero.coverImage?.src ? (
            <div className="home-hero__visual">
              <img src={resolveMediaSrc(hero.coverImage.src)} alt={hero.coverImage.alt} loading="eager" />
            </div>
          ) : null}
          <div className="home-hero__content">
            <span className="home-hero__label">最新ニュース</span>
            <h2 className="home-hero__title">{hero.title}</h2>
            <p className="home-hero__excerpt">
              {hero.excerpt.length > 120
                ? hero.excerpt.replace(/\*\*/g, "").slice(0, 120) + "…"
                : hero.excerpt.replace(/\*\*/g, "")}
            </p>
            <span className="home-hero__cta">記事を読む →</span>
          </div>
        </section>
      ) : null}

      <div className="home-page__body">
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
                <article key={a.id} className={`home-card${a.coverImage?.src ? " home-card--has-thumb" : ""}`} onClick={() => onSelect(a)}>
                  {a.coverImage?.src ? (
                    <div className="home-card__thumb">
                      <img src={resolveMediaSrc(a.coverImage.src)} alt={a.coverImage.alt} loading="lazy" />
                    </div>
                  ) : null}
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

        <section className="home-section">
          <h2 className="home-section__title">おすすめポッドキャスト</h2>
          <p className="home-section__desc">AI 業界のトップリーダーが語る、公式発表では聞けない本音と未来予測。</p>
          <div className="home-podcast-links">
            {[
              { name: "Dwarkesh Podcast", desc: "AI CEO の深掘りインタビュー", url: "https://open.spotify.com/show/4JH4tybY1zX6e5hjCwU6gF" },
              { name: "Lex Fridman Podcast", desc: "研究者・エンジニア視点の技術対談", url: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL" },
              { name: "TBPN", desc: "シリコンバレーのライブ感速報", url: "https://open.spotify.com/show/2L6WMqY3GUPCGBD0dX6p00" },
            ].map((p) => (
              <a key={p.name} className="home-podcast-card" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="home-podcast-card__body">
                  <span className="home-podcast-card__name">{p.name}</span>
                  <span className="home-podcast-card__desc">{p.desc}</span>
                </div>
                <span className="home-podcast-card__badge">Spotify</span>
              </a>
            ))}
          </div>
        </section>
      </div>
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

/** セクション名 → アンカーID（日本語をそのまま使用、ブラウザは UTF-8 ID に対応） */
function sectionAnchorId(name) {
  return "ref-sec-" + name.replace(/\s+/g, "-");
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
    <div className={`companies-guide-rail companies-guide-rail--full-tab${practical.length > 0 ? " has-practical" : ""}`} aria-label={referenceData.title}>
      <section className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{referenceData.title}</h2>
        <GuideLinkifiedP text={referenceData.lead} className="guide-section__lead" />

        {hasSections ? (
          <nav className="tool-ref-toc">
            <h3 className="tool-ref-toc__title">目次</h3>
            <ul className="tool-ref-toc__list">
              {sections.map((s) => (
                <li key={s.name}>
                  <button
                    type="button"
                    className="tool-ref-toc__link"
                    onClick={() => {
                      const el = document.getElementById(sectionAnchorId(s.name));
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    {s.name}
                    <span className="tool-ref-toc__count">{s.terms.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {sections.map((s) => (
          <div key={s.name} id={sectionAnchorId(s.name)} className="tool-ref-group">
            {s.name ? <h3 className="tool-ref-group__title">{s.name}</h3> : null}
            <dl className="glossary-dl">
              {s.terms.map((t) => (
                <Fragment key={t.word}>
                  <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                  <dd className="glossary-dl__body">
                    <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                    {t.code ? <CopyableCodeBlock code={t.code} lang={t.codeLang ?? "bash"} /> : null}
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

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SidebarJump({ id, children, nested }) {
  return (
    <button
      type="button"
      className={`sidebar-anchor${nested ? " sidebar-anchor--nested" : ""}`}
      onClick={() => scrollToId(id)}
    >
      {children}
    </button>
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
            <SidebarJump id="vibe-intro">バイブコーディングとは</SidebarJump>
            <SidebarJump id="vibe-setup">{VIBE_SETUP_GUIDE.title}</SidebarJump>
            {VIBE_SETUP_GUIDE.sections.map((s) => (
              <SidebarJump key={s.id} id={s.id} nested>
                {s.heading}
              </SidebarJump>
            ))}
          </>
        ) : guideTab === "rules" ? (
          <>
            <SidebarJump id="vibe-rules">基本ルール</SidebarJump>
            <SidebarJump id="vibe-pitfalls">ハマりやすいこと</SidebarJump>
          </>
        ) : guideTab === "practical" ? (
          <>
            <SidebarJump id="vibe-practical">
              {VIBE_CODING_PRACTICAL.title}
            </SidebarJump>
            {VIBE_CODING_PRACTICAL.sections.map((s) => (
              <SidebarJump key={s.id} id={s.id} nested>
                {s.heading}
              </SidebarJump>
            ))}
          </>
        ) : guideTab === "media" ? (
          <>
            <SidebarJump id="media-guide-intro">はじめに</SidebarJump>
            {VIBE_MEDIA_TAXONOMY.map((s) => (
              <SidebarJump key={s.id} id={s.id} nested>
                {s.title}
              </SidebarJump>
            ))}
          </>
        ) : (
          <>
            <SidebarJump id="glossary-guide">
              実用用語集（ジャンル別）
            </SidebarJump>
            {GLOSSARY_BY_GENRE.map((g) => (
              <SidebarJump key={g.id} id={`glossary-${g.id}`} nested>
                {g.title}
              </SidebarJump>
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
          <button
            type="button"
            key={sec}
            className="sidebar-anchor"
            onClick={() => {
              const el = document.getElementById(sectionAnchorId(sec));
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {sec}
          </button>
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
          <SidebarJump key={c.id} id={`company-${c.id}`}>
            {c.name}
          </SidebarJump>
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
  { id: "media", label: "メディア生成", description: "画像・動画・音楽の AI 生成ツール", subCategories: [
    { id: "image", label: "画像生成", description: "AI 画像生成ツール" },
    { id: "video", label: "動画生成", description: "AI 動画生成ツール" },
    { id: "music", label: "音楽生成", description: "AI 音楽生成ツール" },
  ]},
  { id: "product", label: "プロダクト", description: "AIエージェント・AI検索などの製品", subCategories: [
    { id: "agent", label: "AIエージェント", description: "自律的にタスクを遂行する AI エージェント" },
    { id: "search", label: "AI検索", description: "AI 搭載の検索・リサーチツール" },
  ]},
  { id: "other", label: "その他ツール", description: "音声入力・ターミナル等" },
];

const RATING_EXPLAINER = {
  models: {
    title: "モデル評価の基準",
    axes: [
      ["AI品質（30%）", "ベンチマークスコア、推論力、コード生成精度"],
      ["使いやすさ（25%）", "API の設計、ドキュメント、SDK の充実度"],
      ["コスパ（20%）", "トークン単価、無料枠、サブスクプランの妥当性"],
      ["拡張性（15%）", "ファインチューニング、関数呼び出し、マルチモーダル対応"],
      ["企業向け（10%）", "SLA、データ保護、コンプライアンス認証"],
    ],
  },
  cli: {
    title: "CLI ツール評価の基準",
    axes: [
      ["AI品質（30%）", "コード生成の正確さ、大規模コードベースの理解力"],
      ["使いやすさ（25%）", "インストールの手軽さ、コマンド体系、エラーメッセージ"],
      ["コスパ（20%）", "月額料金、API 従量課金、無料枠の範囲"],
      ["拡張性（15%）", "MCP 対応、Hooks、スキル、外部ツール連携"],
      ["企業向け（10%）", "権限モード、監査ログ、Privacy Mode、SSO"],
    ],
  },
  editor: {
    title: "エディタ評価の基準",
    axes: [
      ["AI品質（30%）", "コード補完の精度、Agent モードの自律性、バグ検出力"],
      ["使いやすさ（25%）", "UI/UX、既存ワークフローとの統合、学習コスト"],
      ["コスパ（20%）", "無料版の機能制限、Pro プランの価格対性能"],
      ["拡張性（15%）", "プラグイン・拡張機能、カスタムルール、MCP 対応"],
      ["企業向け（10%）", "チーム管理、集中設定、Ghost/Privacy Mode"],
    ],
  },
  image: {
    title: "画像生成ツール評価の基準",
    axes: [
      ["AI品質（30%）", "画質、プロンプト忠実度、スタイルの一貫性"],
      ["使いやすさ（25%）", "UI/UX、学習コスト、日本語プロンプト対応"],
      ["コスパ（20%）", "無料枠、サブスク料金、1枚あたりの生成コスト"],
      ["拡張性（15%）", "API 提供、インペインティング、ワークフロー統合"],
      ["企業向け（10%）", "商用ライセンス、コンテンツポリシー、SLA"],
    ],
  },
  video: {
    title: "動画生成ツール評価の基準",
    axes: [
      ["AI品質（30%）", "映像品質、物理シミュレーション、動きの自然さ"],
      ["使いやすさ（25%）", "UI/UX、カメラ制御、編集機能の直感性"],
      ["コスパ（20%）", "クレジット単価、サブスク料金、生成時間あたりのコスト"],
      ["拡張性（15%）", "API 提供、リップシンク、Motion Brush 等の制御機能"],
      ["企業向け（10%）", "商用ライセンス、コンテンツポリシー、解像度オプション"],
    ],
  },
  music: {
    title: "音楽生成ツール評価の基準",
    axes: [
      ["AI品質（30%）", "音質、ジャンル再現度、ボーカルの自然さ"],
      ["使いやすさ（25%）", "プロンプト操作、歌詞入力、生成速度"],
      ["コスパ（20%）", "無料枠、サブスク料金、1曲あたりのコスト"],
      ["拡張性（15%）", "API 提供、DAW 連携、パート別編集"],
      ["企業向け（10%）", "商用ライセンス、著作権の帰属、楽曲の権利関係"],
    ],
  },
  agent: {
    title: "AIエージェント評価の基準",
    axes: [
      ["AI品質（30%）", "タスク完遂率、推論の正確さ、自律性"],
      ["使いやすさ（25%）", "指示の自然さ、UI/UX、セットアップの容易さ"],
      ["コスパ（20%）", "料金プラン、無料枠、タスクあたりのコスト"],
      ["拡張性（15%）", "API 連携、外部ツール統合、カスタマイズ性"],
      ["企業向け（10%）", "セキュリティ、データ保護、チーム管理"],
    ],
  },
  search: {
    title: "AI検索ツール評価の基準",
    axes: [
      ["AI品質（30%）", "回答の正確さ、ソース引用、ハルシネーション抑制"],
      ["使いやすさ（25%）", "UI/UX、検索体験、日本語対応"],
      ["コスパ（20%）", "無料枠の範囲、Pro プランの妥当性"],
      ["拡張性（15%）", "API 提供、ワークフロー統合、カスタムソース"],
      ["企業向け（10%）", "プライバシー、データ保護、チーム利用"],
    ],
  },
  other: {
    title: "ツール評価の基準",
    axes: [
      ["AI品質（30%）", "音声認識精度、レスポンス速度、出力の自然さ"],
      ["使いやすさ（25%）", "セットアップの容易さ、日常的な操作感"],
      ["コスパ（20%）", "料金プランの妥当性、無料枠"],
      ["拡張性（15%）", "API 連携、他ツールとの組み合わせ"],
      ["企業向け（10%）", "セキュリティ、データ保護"],
    ],
  },
};

const MODEL_COMPARISON = [
  // スコアは各社の公式発表値のみ。null = 公式データなし（チャートに非表示）
  { name: "Claude Opus 4.6", rating: 4.5, summary: "Anthropic 最上位。1Mコンテキスト、高度な推論とコード生成に強い。$15/$75 per 1M tokens", swe: 81, aime: null, arc: 69, hle: null, mmmu: null },
  { name: "Claude Sonnet 4.6", rating: 4.0, summary: "Anthropic 中核。1Mコンテキスト、速度と品質のバランス型。日常のコーディングに最適。$3/$15", swe: 80, aime: null, arc: 58, hle: null, mmmu: 75 },
  { name: "Claude Haiku 4.5", rating: 3.5, summary: "Anthropic 軽量。200Kコンテキスト、最速・低コスト。大量処理やチャット向け。$0.80/$4", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-5.4", rating: 4.0, summary: "OpenAI 最新。128Kコンテキスト、推論・コーディング・エージェント統合モデル。$2.50/$10", swe: 75, aime: 95, arc: null, hle: null, mmmu: 84 },
  { name: "GPT-5.4 mini", rating: 3.5, summary: "OpenAI 軽量。128Kコンテキスト、無料層でも利用可能。Codex との連携向け。$0.40/$1.60", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-4o", rating: 3.5, summary: "OpenAI 前世代。安定性が高く依然として広く利用されている。$2.50/$10", swe: null, aime: null, arc: null, hle: null, mmmu: 69 },
  { name: "Gemini 3.1 Pro", rating: 4.0, summary: "Google 最上位。2Mコンテキストは業界最大。長大なコードベースの一括読み込みに強い。$1.25/$5", swe: null, aime: null, arc: 77, hle: null, mmmu: 81 },
  { name: "Gemini 3.1 Flash", rating: 3.5, summary: "Google 高速。1Mコンテキスト、極めて低コスト。速度重視の処理に向く。$0.075/$0.30", swe: 78, aime: null, arc: null, hle: null, mmmu: 81 },
  { name: "Gemini 2.5 Pro", rating: 3.5, summary: "Google 前世代。1Mコンテキスト、安定した実績。$1.25/$5", swe: 64, aime: null, arc: null, hle: null, mmmu: 84 },
  { name: "Kimi K2.5", rating: 4.0, summary: "Moonshot AI（中国）。1兆パラメータ MoE、256Kコンテキスト。Humanity's Last Exam で Opus 超え。オープンウェイト。", swe: 66, aime: 50, arc: null, hle: 32, mmmu: null },
  { name: "GLM-5", rating: 3.5, summary: "Zhipu AI（中国）。745Bパラメータ MoE、MIT ライセンス。Opus の約1/6のコスト。Huawei チップで学習。$0.80/$2.56", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "MiniMax M2.7", rating: 3.5, summary: "MiniMax（中国）。自己進化型モデル。SWE-Pro 56.2%で Opus に迫る。OpenClaw 上で自律最適化。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "KAT-Coder Pro V2", rating: 3.5, summary: "Kwai/快手（中国）。コーディング特化 MoE。SWE-Bench 73.4%。OpenClaw 対応。$0.30/$1.20 と低コスト。", swe: 73, aime: null, arc: null, hle: null, mmmu: null },
  { name: "DeepSeek R1", rating: 4.0, summary: "DeepSeek（中国）。671B MoE 推論特化。MIT ライセンス。数学・コーディングで Opus に迫る。$0.14/$2.19 と破格。", swe: 49, aime: 79, arc: null, hle: null, mmmu: null },
  { name: "Qwen 3 (235B)", rating: 4.0, summary: "Alibaba（中国）。235B MoE、Apache 2.0。ハイブリッド思考で推論/即答を切替。119言語対応。8サイズ展開。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "ERNIE 4.5", rating: 3.5, summary: "Baidu（中国）。中国最大の検索基盤を活かした知識量。中国語特化で1億ユーザー。マルチモーダル。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Composer 2", rating: 4.0, summary: "Cursor 独自。Kimi K2.5 ベース＋独自 RL。CursorBench で Opus 超え。$0.50/$2.50 と低コスト。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
];

const BENCHMARK_CONFIGS = [
  { key: "swe", label: "SWE-Bench", title: "SWE-Bench Verified（コーディング能力・公式発表値）", desc: "実際の GitHub Issue のバグ修正ができるか" },
  { key: "aime", label: "AIME", title: "AIME 2024/2025（数学的推論・公式発表値）", desc: "数学オリンピック予選レベルの問題を解けるか" },
  { key: "arc", label: "ARC-AGI", title: "ARC-AGI-2（適応的推論力・公式発表値）", desc: "初めて見るパズル問題に対応できるか" },
  { key: "hle", label: "HLE", title: "Humanity's Last Exam（学術的推論・公式発表値）", desc: "専門家レベルの難問に答えられるか" },
  { key: "mmmu", label: "MMMU", title: "MMMU / MMMU-Pro（視覚的理解力・公式発表値）", desc: "画像やグラフを理解できるか" },
];

/** ベンチマークスコアの横棒グラフ（SVG 自動生成・グラデーション付き） */
function BenchmarkChart({ data, title, maxScore = 100, scoreKey = "bench" }) {
  const sorted = [...data].filter((d) => d[scoreKey] != null).sort((a, b) => b[scoreKey] - a[scoreKey]);
  if (sorted.length === 0) return null;
  const topScore = sorted[0][scoreKey];
  const companyColors = {
    "Claude": ["#6366f1", "#a78bfa"],
    "GPT": ["#10b981", "#34d399"],
    "Gemini": ["#3b82f6", "#60a5fa"],
    "Kimi": ["#f59e0b", "#fbbf24"],
    "GLM": ["#ef4444", "#f87171"],
    "MiniMax": ["#ec4899", "#f472b6"],
    "KAT": ["#14b8a6", "#2dd4bf"],
    "DeepSeek": ["#8b5cf6", "#a78bfa"],
    "Qwen": ["#f97316", "#fb923c"],
    "ERNIE": ["#06b6d4", "#22d3ee"],
    "Composer": ["#7c3aed", "#a78bfa"],
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
            const pct = (d[scoreKey] / maxScore) * 100;
            const [c1, c2] = getColors(d.name);
            const isTop = d[scoreKey] === topScore;
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
                  <span className={`bench-row__score${isTop ? " bench-row__score--top" : ""}`}>{d[scoreKey]}</span>
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
  const [benchTab, setBenchTab] = useState("swe");
  const sorted = [...MODEL_COMPARISON].sort((a, b) => b.rating - a.rating);
  const activeBench = BENCHMARK_CONFIGS.find((c) => c.key === benchTab) || BENCHMARK_CONFIGS[0];
  return (
    <section className="review-comparison-section">
      <h2 className="section-feed__title">AI モデル比較</h2>
      <p className="section-feed__meta">主要モデルの現行世代と前世代。料金は入力/出力（1M トークンあたり）。公式価格を必ず確認のこと。</p>
      <details className="benchmark-explainer">
        <summary className="benchmark-explainer__summary">ベンチマークの見方（タップで開く）</summary>
        <div className="benchmark-explainer__body">
          <p>ベンチマークは AI モデルの性能を同じ基準で比較するためのテスト。測る対象によって種類が異なる:</p>
          <dl className="benchmark-explainer__list">
            {BENCHMARK_CONFIGS.map((c) => (
              <Fragment key={c.key}><dt>{c.label}</dt><dd>{c.desc}</dd></Fragment>
            ))}
          </dl>
          <p>下のタブでベンチマーク指標を切り替えられます。スコアは各社の公式発表値のみを掲載しており、公式データがないモデルはグラフに表示されません。指標によってモデルの順位が大きく変わるため、用途に合った指標を参考にしてください。</p>
        </div>
      </details>
      <nav className="filter-nav" aria-label="ベンチマーク指標">
        <div className="filter-nav-inner" role="tablist">
          {BENCHMARK_CONFIGS.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={benchTab === c.key}
              className={`filter-tab${benchTab === c.key ? " is-active" : ""}`}
              onClick={() => setBenchTab(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </nav>
      <BenchmarkChart data={MODEL_COMPARISON} title={activeBench.title} scoreKey={activeBench.key} />
      <RatingExplainer categoryId="models" />
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

function RatingExplainer({ categoryId }) {
  const data = RATING_EXPLAINER[categoryId];
  if (!data) return null;
  return (
    <details className="benchmark-explainer">
      <summary className="benchmark-explainer__summary">{data.title}（タップで開く）</summary>
      <div className="benchmark-explainer__body">
        <p>5つの軸で評価し、加重平均で総合スコアを算出しています:</p>
        <dl className="benchmark-explainer__list">
          {data.axes.map(([dt, dd]) => (
            <Fragment key={dt}><dt>{dt}</dt><dd>{dd}</dd></Fragment>
          ))}
        </dl>
        <p>評価は公式ドキュメント・ベンチマーク・ユーザーレビューに基づき、編集部が判断しています。</p>
      </div>
    </details>
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
      <RatingExplainer categoryId={category.id} />
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
            {article.lastReviewed ? (
              <span style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600 }}>最終確認 {article.lastReviewed}</span>
            ) : null}
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
              {article.ratings ? (
                <div style={{ flex: "1 1 100%", marginBottom: 4 }}>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 6 }}>
                    評価（5段階）
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "4px 16px" }}>
                    {Object.entries(article.ratings).map(([k, v]) => (
                      <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
                        <span style={{ color: "var(--muted)", minWidth: 56 }}>{k}</span>
                        <span style={{ color: "#fbbf24", letterSpacing: 1 }}>{renderStars(v)}</span>
                        <span style={{ color: "var(--text-secondary)", fontSize: 11 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : article.rating ? (
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

function SeasonalScene({ accent }) {
  const preset = ACCENT_PRESETS.find(p => p.id === accent);
  const season = preset?.season;
  if (!season) return null;
  const scenes = { spring: SpringScene, summer: SummerScene, autumn: AutumnScene, winter: WinterScene };
  const Scene = scenes[season];
  return (
    <div className="seasonal-scene-wrap" aria-hidden="true">
      <Scene side="left" />
      <Scene side="right" />
    </div>
  );
}

function SpringScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* 枝 */}
      <path d="M-10 400 Q30 300, 20 220 Q10 160, 40 100 Q55 60, 45 20" stroke="#8B6F47" strokeWidth="3" fill="none" opacity="0.35" />
      <path d="M40 100 Q70 80, 80 50" stroke="#8B6F47" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M20 220 Q55 200, 65 170" stroke="#8B6F47" strokeWidth="2" fill="none" opacity="0.25" />
      {/* 花 */}
      {[[45,18],[80,48],[65,168],[42,98],[28,218],[55,140],[70,85],[35,280],[50,60],[38,180]].map(([cx,cy],i) => {
        const fills = ["#fff5f7","#fce7f3","#fecdd3","#ffffff","#fbcfe8"];
        return <circle key={i} cx={cx} cy={cy} r={5+i%3*2} fill={fills[i%5]} opacity={0.3+i%3*0.08} />;
      })}
    </svg>
  );
}

function SummerScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* 竹 */}
      <line x1="30" y1="400" x2="25" y2="10" stroke="#16a34a" strokeWidth="3" opacity="0.2" />
      <line x1="60" y1="400" x2="55" y2="50" stroke="#22c55e" strokeWidth="2.5" opacity="0.15" />
      {/* 節 */}
      {[80,160,240,320].map((y,i) => (
        <line key={i} x1="28" y1={y} x2="32" y2={y} stroke="#16a34a" strokeWidth="4" opacity="0.2" strokeLinecap="round" />
      ))}
      {/* 葉 */}
      {[[25,60],[55,90],[20,150],[50,180],[28,250],[58,120],[22,320]].map(([x,y],i) => (
        <ellipse key={i} cx={x+15} cy={y} rx="18" ry="4" fill="#22c55e" opacity={0.15+i%2*0.05} transform={`rotate(${-20+i*8} ${x+15} ${y})`} />
      ))}
    </svg>
  );
}

function AutumnScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  const colors = ["#dc2626","#ea580c","#d97706","#ca8a04","#b45309"];
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* 枝 */}
      <path d="M-5 400 Q25 320, 30 250 Q35 180, 50 120 Q60 80, 55 30" stroke="#78716c" strokeWidth="2.5" fill="none" opacity="0.25" />
      <path d="M50 120 Q75 100, 85 70" stroke="#78716c" strokeWidth="1.5" fill="none" opacity="0.2" />
      {/* 紅葉の葉（簡略星形） */}
      {[[55,28],[85,68],[52,118],[32,248],[40,180],[60,300],[25,350]].map(([x,y],i) => (
        <polygon key={i} points={`${x},${y-6} ${x+3},${y-2} ${x+6},${y-4} ${x+4},${y+1} ${x+5},${y+5} ${x},${y+3} ${x-5},${y+5} ${x-4},${y+1} ${x-6},${y-4} ${x-3},${y-2}`}
          fill={colors[i%5]} opacity={0.25+i%3*0.08} />
      ))}
    </svg>
  );
}

function WinterScene({ side }) {
  const flip = side === "right" ? "scale(-1, 1)" : "";
  return (
    <svg className={`seasonal-scene seasonal-scene--${side}`} viewBox="0 0 120 400" xmlns="http://www.w3.org/2000/svg" style={{ transform: flip }}>
      {/* モミの木シルエット */}
      <polygon points="40,30 15,150 25,150 5,250 20,250 0,380 80,380 60,250 75,250 55,150 65,150" fill="currentColor" opacity="0.06" />
      {/* 星 */}
      <polygon points="40,22 42,28 48,28 43,32 45,38 40,34 35,38 37,32 32,28 38,28" fill="#fbbf24" opacity="0.15" />
      {/* オーナメント */}
      {[[30,120],[55,140],[20,200],[50,220],[35,280],[45,170]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill={["#ef4444","#3b82f6","#fbbf24"][i%3]} opacity={0.2} />
      ))}
    </svg>
  );
}

function getSeason() {
  const m = new Date().getMonth(); // 0-11
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "autumn";
  return "winter";
}

function SeasonalEffect({ visible, accent }) {
  if (!visible) return null;
  const preset = ACCENT_PRESETS.find(p => p.id === accent);
  const season = preset?.season;
  if (!season) return null;

  if (season === "spring") return <SpringEffect />;
  if (season === "summer") return <SummerEffect />;
  if (season === "autumn") return <AutumnEffect />;
  if (season === "winter") return <WinterEffect />;
  return null;
}

const SAKURA_GRADIENTS = [
  { id: "spg0", c1: "#fff5f7", c2: "#fce7f3", c3: "#f9a8d4" },  // ほぼ白〜淡ピンク
  { id: "spg1", c1: "#fff1f2", c2: "#fecdd3", c3: "#fda4af" },  // 白〜ローズ
  { id: "spg2", c1: "#fdf2f8", c2: "#fbcfe8", c3: "#f0abfc" },  // 白〜薄紫ピンク
  { id: "spg3", c1: "#ffffff", c2: "#fce7f3", c3: "#f9a8d4" },  // 純白〜ピンク
];
function SakuraPetalSvg({ size, style, className, variant = 0 }) {
  const w = size * 16;
  const g = SAKURA_GRADIENTS[variant % SAKURA_GRADIENTS.length];
  return (
    <svg className={className} style={style} width={w} height={w * 1.3} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0 C6 4, 0 8, 0 14 C0 20, 4 26, 10 26 C16 26, 20 20, 20 14 C20 8, 14 4, 10 0Z" fill={`url(#${g.id})`} />
      <path d="M10 4 C10 10, 9 18, 10 24" stroke={g.c2} strokeWidth="0.3" opacity="0.4" />
      <defs>
        <radialGradient id={g.id} cx="40%" cy="30%">
          <stop offset="0%" stopColor={g.c1} />
          <stop offset="55%" stopColor={g.c2} />
          <stop offset="100%" stopColor={g.c3} stopOpacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function SpringEffect() {
  const petals = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    key: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    fallDur: 10 + Math.random() * 8,
    swayDur: 3 + Math.random() * 4,
    size: 0.5 + Math.random() * 0.7,
    opacity: 0.25 + Math.random() * 0.45,
    drift: -60 + Math.random() * 120,
    rotEnd: 360 + Math.random() * 720,
    settle: i < 6,
  })), []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {petals.map(p => (
        <SakuraPetalSvg
          key={p.key}
          size={p.size}
          variant={p.key}
          className={`seasonal-particle sakura-anim${p.settle ? " sakura-anim--settle" : ""}`}
          style={{
            left: `${p.left}%`,
            "--fall-dur": `${p.fallDur}s`,
            "--sway-dur": `${p.swayDur}s`,
            "--drift": `${p.drift}px`,
            "--rot-end": `${p.rotEnd}deg`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
      <div className="sakura-ground" />
    </div>
  );
}

function SummerEffect() {
  const fireflies = useMemo(() => Array.from({ length: 14 }, (_, i) => ({
    key: i,
    left: 5 + Math.random() * 90,
    top: 20 + Math.random() * 70,
    delay: Math.random() * 8,
    dur: 4 + Math.random() * 6,
    driftX: -30 + Math.random() * 60,
    driftY: -40 + Math.random() * 30,
    size: 3 + Math.random() * 4,
  })), []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {fireflies.map(f => (
        <div
          key={f.key}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDelay: `${f.delay}s`,
            "--fly-dur": `${f.dur}s`,
            "--fly-x": `${f.driftX}px`,
            "--fly-y": `${f.driftY}px`,
          }}
        />
      ))}
    </div>
  );
}

function MomijiSvg({ size, color1, color2, style, className }) {
  const w = size * 18;
  return (
    <svg className={className} style={style} width={w} height={w} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2 L14 8 L8 6 L11 12 L4 12 L10 16 L6 22 L12 19 L12 26 L16 20 L20 26 L20 19 L26 22 L22 16 L28 12 L21 12 L24 6 L18 8 Z" fill={`url(#alg-${color1.replace("#","")})`} />
      <path d="M16 8 L16 22" stroke={color2} strokeWidth="0.5" opacity="0.4" />
      <path d="M12 12 L16 16 L20 12" stroke={color2} strokeWidth="0.3" opacity="0.3" fill="none" />
      <defs>
        <linearGradient id={`alg-${color1.replace("#","")}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AutumnEffect() {
  const leaves = useMemo(() => {
    const palettes = [
      ["#dc2626", "#991b1b"], ["#ea580c", "#c2410c"], ["#d97706", "#a16207"],
      ["#ca8a04", "#854d0e"], ["#ef4444", "#b91c1c"], ["#f97316", "#ea580c"],
    ];
    return Array.from({ length: 14 }, (_, i) => {
      const [c1, c2] = palettes[i % palettes.length];
      return {
        key: i, c1, c2,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        fallDur: 8 + Math.random() * 7,
        swayDur: 2.5 + Math.random() * 3,
        size: 0.55 + Math.random() * 0.55,
        opacity: 0.35 + Math.random() * 0.4,
        drift: -50 + Math.random() * 100,
        rotEnd: 200 + Math.random() * 500,
      };
    });
  }, []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {leaves.map(l => (
        <MomijiSvg
          key={l.key}
          size={l.size}
          color1={l.c1}
          color2={l.c2}
          className="seasonal-particle autumn-anim"
          style={{
            left: `${l.left}%`,
            "--fall-dur": `${l.fallDur}s`,
            "--sway-dur": `${l.swayDur}s`,
            "--drift": `${l.drift}px`,
            "--rot-end": `${l.rotEnd}deg`,
            animationDelay: `${l.delay}s`,
            opacity: l.opacity,
          }}
        />
      ))}
    </div>
  );
}

function SnowflakeSvg({ size, style, className }) {
  const w = size;
  return (
    <svg className={className} style={style} width={w} height={w} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 6本の枝 */}
      <g stroke="white" strokeWidth="0.8" strokeLinecap="round">
        <line x1="16" y1="2" x2="16" y2="30" />
        <line x1="3.9" y1="9" x2="28.1" y2="23" />
        <line x1="3.9" y1="23" x2="28.1" y2="9" />
        {/* 小枝 */}
        <line x1="16" y1="6" x2="13" y2="3" />
        <line x1="16" y1="6" x2="19" y2="3" />
        <line x1="16" y1="26" x2="13" y2="29" />
        <line x1="16" y1="26" x2="19" y2="29" />
        <line x1="7.5" y1="11" x2="5.5" y2="8" />
        <line x1="7.5" y1="11" x2="5" y2="13" />
        <line x1="24.5" y1="21" x2="27" y2="19" />
        <line x1="24.5" y1="21" x2="26.5" y2="24" />
        <line x1="7.5" y1="21" x2="5" y2="19" />
        <line x1="7.5" y1="21" x2="5.5" y2="24" />
        <line x1="24.5" y1="11" x2="26.5" y2="8" />
        <line x1="24.5" y1="11" x2="27" y2="13" />
      </g>
      <circle cx="16" cy="16" r="2" fill="white" opacity="0.5" />
    </svg>
  );
}

function WinterEffect() {
  const flakes = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    key: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    fallDur: 10 + Math.random() * 10,
    swayDur: 3 + Math.random() * 4,
    size: 10 + Math.random() * 14,
    opacity: 0.15 + Math.random() * 0.4,
    drift: -25 + Math.random() * 50,
  })), []);
  return (
    <div className="seasonal-container" aria-hidden="true">
      {flakes.map(f => (
        <SnowflakeSvg
          key={f.key}
          size={f.size}
          className="seasonal-particle snow-anim"
          style={{
            left: `${f.left}%`,
            "--fall-dur": `${f.fallDur}s`,
            "--sway-dur": `${f.swayDur}s`,
            "--drift": `${f.drift}px`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
          }}
        />
      ))}
      <div className="snow-ground" />
    </div>
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

function EditorialStatement({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="statement-overlay" onClick={onClose}>
      <div className="statement-card" onClick={(e) => e.stopPropagation()}>
        <button className="statement-close" onClick={onClose} aria-label="閉じる">✕</button>
        <h2 style={{ margin: "0 0 1rem", fontSize: "1.25rem" }}>運営方針・編集ステートメント</h2>

        <h3>このサイトについて</h3>
        <p>AI 開発ツールの最新情報を日本語で体系的に整理し、無料で公開しているニュース・ガイドサイトです。</p>

        <h3>AI による記事制作</h3>
        <p>本サイトの記事は主に <strong>AI（Claude Code を中心とした AI コーディングツール）</strong> を活用して制作しています。AI が下書き・構成・コード生成を担い、人間の編集者が事実確認・方針判断・最終承認を行う体制です。AI を活用していることを隠さず、透明に開示します。</p>

        <h3>情報源と検証</h3>
        <ul>
          <li><strong>公式発表・公式ドキュメント</strong>を1次情報とし、記事に primarySources として明記します</li>
          <li><strong>公式情報は1ソースで十分</strong>と判断します（公式自体が1次情報のため）</li>
          <li><strong>推定値・ユーザー体験談・論争的主張</strong>は複数ソースで裏取りを行います</li>
          <li>1次情報が確認できない情報は掲載しません。推測や憶測は記事に含めません</li>
        </ul>

        <h3>画像・図版</h3>
        <ul>
          <li>記事内の図版は<strong>自作の SVG</strong> で情報を図示し、1次情報に基づいて正確に作成します</li>
          <li>カバー画像には<strong>フリーライセンスの写真</strong>（Unsplash 等）や企業の公式ブランドカラーを編集目的で使用します</li>
          <li>チャートに掲載するベンチマークスコアは<strong>公式発表値のみ</strong>使用し、推定値は原則掲載しません</li>
          <li>データの出典は図のキャプションまたは本文に記載します</li>
        </ul>

        <h3>記事の更新と訂正</h3>
        <ul>
          <li><strong>比較記事・料金記事</strong>は毎月1回以上の見直しを実施し、「最終確認日」を記事に表示します</li>
          <li><strong>事実の誤り</strong>を発見した場合は記事上部に「Correction」として訂正を明記します（黙って修正しません）</li>
          <li><strong>情報の追加・更新</strong>は記事末尾に「Update」として追記します</li>
          <li>ニュース記事は原則として個別に保持し、削除は行いません</li>
        </ul>

        <h3>レビュー評価</h3>
        <ul>
          <li>5軸（AI品質・使いやすさ・コスパ・拡張性・企業向け）の加重平均で総合スコアを算出します</li>
          <li>評価基準と重みはデータファイルに明記し、誰でも確認できます</li>
          <li>特定のツールや企業から金銭的な対価を受け取っていません</li>
        </ul>

        <h3>プライバシーと広告</h3>
        <ul>
          <li><strong>個人情報を一切収集しません</strong>。Cookie、アクセス解析、トラッキングは使用していません</li>
          <li><strong>広告を一切掲載しません</strong>。完全無料で運営しています</li>
          <li>アフィリエイトリンクは使用していません</li>
        </ul>

        <h3>オープンソース</h3>
        <p>本サイトのソースコードは <a href="https://github.com/022740mix-spec/AI-News" target="_blank" rel="noopener">GitHub で公開</a> しています。記事データ、評価基準、ビルド設定を含めて誰でも確認・検証できます。</p>
      </div>
    </div>
  );
}

function SiteFooter({ onOpenStatement }) {
  return (
    <footer className="site-footer">
      <div>
        {SITE_NAME} — {SITE_DESCRIPTION}
      </div>
      <div>
        最終更新: {getSiteTodayYmd()}
        {" · "}
        <button
          type="button"
          className="footer-link"
          onClick={onOpenStatement}
        >
          運営方針・編集ステートメント
        </button>
      </div>
      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>
        記事は主に AI で制作 · 広告なし · 個人情報収集なし · 完全無料
      </div>
    </footer>
  );
}

/** 初回マウント時の URL（?a= / ?view= / ?tag=）から一覧・詳細状態を復元 */
function readInitialRouteState() {
  if (typeof window === "undefined") {
    return { selected: null, siteSection: "home", query: "", guideTab: "setup", toolTab: "claude-code" };
  }
  // 統合済み記事の旧ID → 新IDリダイレクト
  const REDIRECTS = {
    "mcp-servers-deep-dive": "mcp-comprehensive-guide-2026",
    "mcp-practical-guide-2026": "mcp-comprehensive-guide-2026",
    "agent-skills-skill-md": "ai-config-files-comprehensive-guide-2026",
    "markdown-ai-context-agents-llms": "ai-config-files-comprehensive-guide-2026",
    "claude-md-design-patterns-2026": "ai-config-files-comprehensive-guide-2026",
  };
  const u = new URL(window.location.href);
  let aid = u.searchParams.get("a");
  if (aid && REDIRECTS[aid]) aid = REDIRECTS[aid];
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
  const [typeFilter, setTypeFilter] = useState("all");
  const [query, setQuery] = useState(initialRoute.query);
  const [sort, setSort] = useState("date-desc");
  const [selected, setSelected] = useState(initialRoute.selected);
  const [siteSection, setSiteSection] = useState(initialRoute.siteSection);
  const [guideTab, setGuideTab] = useState(initialRoute.guideTab);
  const [toolTab, setToolTab] = useState(initialRoute.toolTab ?? "claude-code");
  const [reviewTab, setReviewTab] = useState("models");
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_THEME) || "light");
const [showFab, setShowFab] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [statementOpen, setStatementOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [accentId, setAccentId] = useState(() => localStorage.getItem(STORAGE_ACCENT) || "blue");
  const searchRef = useRef(null);
  const ITEMS_PER_PAGE = 15;

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const preset = ACCENT_PRESETS.find(p => p.id === accentId) || ACCENT_PRESETS[0];
    const r = document.documentElement;
    r.style.setProperty("--accent", preset.color);
    r.style.setProperty("--cyan", preset.cyan);
    r.style.setProperty("--accent-dim", `${preset.color}18`);
    r.style.setProperty("--shadow-glow", `0 0 40px ${preset.color}1f`);
    r.style.setProperty("--progress-bg", `linear-gradient(90deg, ${preset.color}, ${preset.cyan})`);
    localStorage.setItem(STORAGE_ACCENT, accentId);
  }, [accentId]);

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
    const REDIRECTS = {
      "mcp-servers-deep-dive": "mcp-comprehensive-guide-2026",
      "mcp-practical-guide-2026": "mcp-comprehensive-guide-2026",
      "agent-skills-skill-md": "ai-config-files-comprehensive-guide-2026",
      "markdown-ai-context-agents-llms": "ai-config-files-comprehensive-guide-2026",
      "claude-md-design-patterns-2026": "ai-config-files-comprehensive-guide-2026",
    };
    const onPop = () => {
      const u = new URL(window.location.href);
      let aid = u.searchParams.get("a");
      if (aid && REDIRECTS[aid]) aid = REDIRECTS[aid];
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
    setPage(1);
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
      if (reviewTab !== "all") {
        const tab = reviewTab === "models" ? "model" : reviewTab;
        const cat = REVIEW_CATEGORIES.find((c) => c.id === tab);
        const subIds = cat?.subCategories?.map((s) => s.id);
        list = list.filter((a) => subIds ? subIds.includes(a.reviewCategory) : a.reviewCategory === tab);
      }
    } else if (siteSection === "articles") {
      list = list.filter((a) => a.type !== "review");
    }
    if (siteSection === "articles" && filter !== "all") list = list.filter((a) => a.category === filter);
    if (siteSection === "articles" && typeFilter !== "all") list = list.filter((a) => a.type === typeFilter);
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
    // 今日の記事がなければカテゴリの最新記事をフォールバック
    const featured = sortedToday[0]
      ?? [...list].sort((a, b) => parseDate(getArticleNewsYmd(b)) - parseDate(getArticleNewsYmd(a)))[0]
      ?? null;
    const restRaw = featured
      ? list.filter((a) => a.id !== featured.id)
      : list;
    const sorted = [...restRaw].sort((a, b) => compareArticleOrder(a, b, sort));
    return { featured, rest: sorted, list };
  }, [filter, typeFilter, query, sort, siteSection, reviewTab]);

  const { featured, rest } = filtered;

  const switchSection = useCallback((next) => {
    setSiteSection(next);
    setSelected(null);
    setPage(1);
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
              searchRef={searchRef}
              accentId={accentId}
              onAccent={setAccentId}
            />
            {siteSection !== "home" ? (
              <>
                <SiteSectionNav section={siteSection} onSection={switchSection} />
                {siteSection === "articles" ? (
                  <>
                  <TypeFilterBar active={typeFilter} setActive={setTypeFilter} />
                  <FilterBar active={filter} setActive={setFilter} />
                  </>
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
          <>
            <Header
              query=""
              setQuery={() => {}}
              theme={theme}
              toggleTheme={toggleTheme}
              sort={sort}
              setSort={setSort}
              searchRef={searchRef}
              onGoHome={() => { setSelected(null); switchSection("home"); }}
              filteredCount={0}
              totalCount={0}
              searchPlaceholder=""
              searchAriaLabel="記事検索"
              showSort={false}
              hideSearch={true}
              onToggleMenu={toggleMenu}
            />
            <HamburgerMenu
              isOpen={menuOpen}
              onClose={closeMenu}
              onSection={(section) => { setSelected(null); switchSection(section); }}
              currentSection={siteSection}
              searchRef={searchRef}
              accentId={accentId}
              onAccent={setAccentId}
            />
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
          </>
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
                      {reviewTab === "models" ? (
                        <ModelComparisonSection />
                      ) : null}
                      {REVIEW_CATEGORIES
                        .filter((cat) => reviewTab === cat.id)
                        .map((cat) => cat.subCategories ? (
                          <Fragment key={cat.id}>
                            {cat.subCategories.map((sub) => (
                              <ReviewComparisonTable
                                key={sub.id}
                                articles={ARTICLES.filter((a) => a.type === "review")}
                                category={sub}
                                onSelect={handleSelect}
                              />
                            ))}
                          </Fragment>
                        ) : (
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
                        {rest.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((a) => (
                          <ArticleCard
                            key={a.id}
                            article={a}
                            onClick={() => handleSelect(a)}
                            onTagClick={onTagClick}
                          />
                        ))}
                      </div>
                      {rest.length > ITEMS_PER_PAGE && (
                        <Pagination current={page} total={Math.ceil(rest.length / ITEMS_PER_PAGE)} onChange={(p) => { setPage(p); window.scrollTo(0, 0); }} />
                      )}
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
                  {[{ id: "models", label: "モデル比較" }, ...REVIEW_CATEGORIES.map((c) => ({ id: c.id, label: c.label }))].map((t) => (
                    <button
                      key={t.id}
                      className={`sidebar-anchor${reviewTab === t.id ? " sidebar-anchor--active" : ""}`}
                      onClick={() => { setReviewTab(t.id); window.scrollTo(0, 0); }}
                      type="button"
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
        <SiteFooter onOpenStatement={() => setStatementOpen(true)} />
        <EditorialStatement isOpen={statementOpen} onClose={() => setStatementOpen(false)} />
        </main>
      </div>

      <SeasonalEffect visible={!selected && siteSection === "home"} accent={accentId} />
      {!selected && siteSection === "home" && <SeasonalScene accent={accentId} />}
      <ScrollTopFab
        visible={!selected && showFab}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
