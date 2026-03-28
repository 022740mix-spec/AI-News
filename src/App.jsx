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
  VIBE_CODING_DEFINITION,
  VIBE_CODING_PRACTICAL,
  VIBE_MEDIA_TAXONOMY,
  VIBE_PROGRESSION_PATH,
  TOOL_REFERENCES,
  filterToolReference,
} from "./data/vibeCodingGuide.js";
import { BUNDLED_MEDIA_URL } from "./mediaUrls.js";

const STORAGE_THEME = "ai-news-theme";
const STORAGE_MARKS = "ai-news-bookmarks";
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
  const re = /https?:\/\/[^\s<>"')」']+|\?a=[a-z0-9-]+/gi;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(segment)) !== null) {
    if (m.index > last) {
      out.push(segment.slice(last, m.index));
    }
    const raw = m[0];
    const isInternal = raw.startsWith("?a=");
    let href = isInternal
      ? (typeof window !== "undefined"
          ? new URL(raw, window.location.href).href
          : raw)
      : trimUrlForHref(raw);
    out.push(
      <a
        key={mkKey()}
        href={href}
        {...(isInternal
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
        className="prose-link"
      >
        {href}
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
  const reInline = /\*\*(.+?)\*\*|==(.+?)==|!!(.+?)!!/g;
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
      parts.push(<span key={mkKey()} className="prose-warning">{m[3]}</span>);
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
  vibe: {
    titleSuffix: "ガイド：バイブコーディング",
    description:
      "Claude チャットからの段階道筋、IDE・音声・Copilot／Cowork・CLI の組み合わせ表。実務のスラッシュ・スキル配置の後、ハマり／ルール／CLI リファレンス。メディア生成は別タブ。",
  },
  media: {
    titleSuffix: "ガイド：メディア生成ツール早見",
    description:
      "画像・動画・音楽・音声合成の代表ツール早見。著作権・料金は各公式で。開発の組み合わせはバイブコーディングタブ。",
  },
  glossary: {
    titleSuffix: "ガイド：用語集",
    description:
      "AI・RAG のパターン・Git・ターミナル・データレイクなど、記事で出る用語を短文で解説。バイブコーディング・開発ニュースの辞書代わり。",
  },
};

const COMPANIES_SEO = {
  titleSuffix: "企業情報",
  description:
    "主要 AI・開発ツール企業の所在地・設立・規模・市場の骨子（公開情報ベース）。",
};

/**
 * @param {{ selectedArticle: object | null, siteSection: string, guideTab?: string }} ctx
 */
function syncDocumentSeo(ctx) {
  const { selectedArticle, siteSection, guideTab = "vibe" } = ctx;

  let title = DEFAULT_DOC_TITLE;
  let descRaw = SITE_DESCRIPTION;
  let ogTitle = `${SITE_NAME} | AI開発ツールニュース`;

  if (selectedArticle) {
    descRaw = stripMarkdownBoldMarkers(selectedArticle.excerpt);
    title = `${selectedArticle.title} | ${SITE_NAME}`;
    ogTitle = selectedArticle.title;
  } else if (siteSection === "guide") {
    const g =
      guideTab === "glossary"
        ? GUIDE_SEO.glossary
        : guideTab === "media"
          ? GUIDE_SEO.media
          : GUIDE_SEO.vibe;
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
  const nodes = linkifyPlainToNodes(text, mkKey);
  return <p className={className}>{nodes}</p>;
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

function loadBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_MARKS);
    const a = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(a) ? a : []);
  } catch {
    return new Set();
  }
}

function persistBookmarks(set) {
  localStorage.setItem(STORAGE_MARKS, JSON.stringify([...set]));
}

function syncAppUrl({ articleId, siteSection, tagQuery, guideTab, toolTab }) {
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
      if (guideTab === "glossary") u.searchParams.set("tab", "glossary");
      else if (guideTab === "media") u.searchParams.set("tab", "media");
      else u.searchParams.delete("tab");
    } else {
      u.searchParams.delete("view");
      u.searchParams.delete("tab");
      const t = tagQuery?.trim();
      if (t) u.searchParams.set("tag", t);
      else u.searchParams.delete("tag");
    }
  }
  window.history.replaceState({}, "", `${u.pathname}${u.search}${u.hash}`);
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
}) {
  return (
    <header className="header-wrap">
      <div className="header-inner">
        <div className="header-top">
          <div>
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
        <div className="toolbar-stats">
          <span className="stat-pill">
            表示 <strong>{filteredCount}</strong> / {totalCount} 件
          </span>
          {query ? (
            <span className="stat-pill">フィルター: 「{query}」</span>
          ) : null}
        </div>
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
  return (
    <nav className="filter-nav" aria-label="ガイドの表示切替">
      <div className="filter-nav-inner" role="tablist">
        <button
          id="guide-subtab-vibe"
          type="button"
          role="tab"
          aria-selected={guideTab === "vibe"}
          aria-controls="guide-subtab-panel"
          className={`filter-tab${guideTab === "vibe" ? " is-active" : ""}`}
          onClick={() => onSelect("vibe")}
        >
          バイブコーディング
        </button>
        <button
          id="guide-subtab-media"
          type="button"
          role="tab"
          aria-selected={guideTab === "media"}
          aria-controls="guide-subtab-panel"
          className={`filter-tab${guideTab === "media" ? " is-active" : ""}`}
          onClick={() => onSelect("media")}
        >
          メディア生成
        </button>
        <button
          id="guide-subtab-glossary"
          type="button"
          role="tab"
          aria-selected={guideTab === "glossary"}
          aria-controls="guide-subtab-panel"
          className={`filter-tab${guideTab === "glossary" ? " is-active" : ""}`}
          onClick={() => onSelect("glossary")}
        >
          用語集
        </button>
      </div>
    </nav>
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
          企業情報
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
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label={referenceData.title}>
      <section className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{referenceData.title}</h2>
        <GuideLinkifiedP text={referenceData.lead} className="guide-section__lead" />
        {referenceData.terms.length > 0 ? (
          <dl className="glossary-dl">
            {referenceData.terms.map((t) => (
              <Fragment key={t.word}>
                <dt className="glossary-dl__term">{t.word}</dt>
                <dd className="glossary-dl__body">
                  <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                  {t.mem ? <GuideLinkifiedP text={t.mem} className="glossary-dl__mem" /> : null}
                </dd>
              </Fragment>
            ))}
          </dl>
        ) : null}
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
  const sidebarLabel =
    guideTab === "vibe"
      ? "バイブコーディングの目次"
      : guideTab === "media"
        ? "メディア生成ガイドの目次"
        : "用語集の目次";
  return (
    <aside className="desktop-sidebar" aria-label={sidebarLabel}>
      <div className="sidebar-panel">
        <h3>このページ内</h3>
        <p className="sidebar-panel-hint">見出しへジャンプします。</p>
        {guideTab === "vibe" ? (
          <>
            <a href="#vibe-intro" className="sidebar-anchor">
              バイブコーディングとは
            </a>
            <a href="#vibe-progression" className="sidebar-anchor">
              おすすめの道筋
            </a>
            <a href="#vibe-reading-map" className="sidebar-anchor">
              記事・ガイド・特集
            </a>
            <a href="#vibe-tool-table" className="sidebar-anchor">
              ツールの組み合わせ表
            </a>
            <a href="#vibe-stacks" className="sidebar-anchor">
              環境の組み合わせ例
            </a>
            <a href="#vibe-practical" className="sidebar-anchor">
              実務の扱い
            </a>
            <a href="#vibe-pitfalls" className="sidebar-anchor">
              ハマりやすいこと
            </a>
            <a href="#vibe-rules" className="sidebar-anchor">
              基本ルール
            </a>
            <a href="#vibe-claude-code" className="sidebar-anchor">
              Claude Code（CLI）
            </a>
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

function VibeCodingGuidePanel({
  stacks,
  toolTable,
  basicRules,
  claudeCode,
  pitfalls,
}) {
  let k = 0;
  const mkKey = () => `vc-${k++}`;
  const [colA, colB, colC, colD, colE] = toolTable.columns;
  return (
    <div
      className="companies-guide-rail companies-guide-rail--full-tab"
      aria-label="バイブコーディング"
    >
      <section id="vibe-intro" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">バイブコーディングとは</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_CODING_DEFINITION, mkKey)}
        </p>
      </section>

      <section id="vibe-progression" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_PROGRESSION_PATH.title}</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_PROGRESSION_PATH.lead, mkKey)}
        </p>
        <ol className="vibe-progression-steps">
          {VIBE_PROGRESSION_PATH.steps.map((step) => (
            <li key={step.heading} className="vibe-progression-steps__item">
              <h3 className="vibe-progression-steps__heading">{step.heading}</h3>
              <p className="vibe-progression-steps__body">
                {richInlineLine(step.body, mkKey)}
              </p>
            </li>
          ))}
        </ol>
        <p className="companies-guide-note">{VIBE_PROGRESSION_PATH.footnote}</p>
      </section>

      <section id="vibe-rules" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">基本ルール</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_BASIC_RULES_LEAD, mkKey)}
        </p>
        {basicRules.length > 0 ? (
          <dl className="glossary-dl">
            {basicRules.map((r) => (
              <Fragment key={r.title}>
                <dt className="glossary-dl__term">{r.title}</dt>
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

      <section id="vibe-tool-table" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">
          IDE・AI・音声入力の組み合わせ表（道筋に対応）
        </h2>
        <GuideLinkifiedP text={toolTable.lead} className="guide-section__lead" />
        {toolTable.rows.length > 0 ? (
          <div className="vibe-tool-table-wrap">
            <table className="vibe-tool-table">
              <caption className="visually-hidden">
                バイブコーディング向け IDE・AI・音声入力の組み合わせ一覧
              </caption>
              <thead>
                <tr>
                  <th scope="col">{colA}</th>
                  <th scope="col">{colB}</th>
                  <th scope="col">{colC}</th>
                  <th scope="col">{colD}</th>
                  <th scope="col">{colE}</th>
                </tr>
              </thead>
              <tbody>
                {toolTable.rows.map((r) => (
                  <tr key={r.pattern}>
                    <th scope="row">{r.pattern}</th>
                    <td>{r.ide}</td>
                    <td>{r.ai}</td>
                    <td>{r.voice}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>

      <section id="vibe-stacks" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">環境の組み合わせ例</h2>
        <p className="guide-section__lead">
          {richInlineLine(
            "上の **道筋・表**と同じく、**段階が浅い順**にカードを並べています。いまの自分に近いところから読み、足りない道具だけ拾えば十分です。",
            mkKey,
          )}
        </p>
        {stacks.length > 0 ? (
          <div className="vibe-stack-list">
            {stacks.map((s) => (
              <article key={s.id} className="vibe-stack-card">
                <header className="vibe-stack-card__head">
                  <span className="vibe-stack-card__emoji" aria-hidden>
                    {s.emoji}
                  </span>
                  <div>
                    <h3 className="vibe-stack-card__title">{s.title}</h3>
                    <p className="vibe-stack-card__for">{s.forWho}</p>
                  </div>
                </header>
                <p className="vibe-stack-card__summary">{s.summary}</p>
                <ul className="vibe-stack-card__combo">
                  {s.combo.map((row) => (
                    <li key={row.role}>
                      <strong className="vibe-stack-card__role">{row.role}</strong>
                      <span className="vibe-stack-card__picks">{row.picks}</span>
                      <span className="vibe-stack-card__tip">{row.tip}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : null}
      </section>

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

      <section id="vibe-pitfalls" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{pitfalls.title}</h2>
        <GuideLinkifiedP text={pitfalls.lead} className="guide-section__lead" />
        {pitfalls.terms.length > 0 ? (
          <dl className="glossary-dl">
            {pitfalls.terms.map((t) => (
              <Fragment key={t.word}>
                <dt className="glossary-dl__term">{t.word}</dt>
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

      <section id="vibe-claude-code" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{claudeCode.title}</h2>
        <GuideLinkifiedP text={claudeCode.lead} className="guide-section__lead" />
        {claudeCode.terms.length > 0 ? (
          <dl className="glossary-dl">
            {claudeCode.terms.map((t) => (
              <Fragment key={t.word}>
                <dt className="glossary-dl__term">{t.word}</dt>
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
        <p className="companies-guide-note">
          {richInlineLine(
            "補足の特集記事はフィードの「ガイド」関連からも開けます。IDE・CLI の道筋は **バイブコーディング** タブへ。",
            mkKey,
          )}
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
                  <dt className="glossary-dl__term">{t.word}</dt>
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

function BookmarkBtn({ active, onToggle, stopOpen }) {
  return (
    <button
      type="button"
      className={`btn-bookmark${active ? " is-on" : ""}`}
      title={active ? "ブックマーク解除" : "ブックマーク"}
      aria-pressed={active}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
        if (stopOpen) e.preventDefault();
      }}
    >
      {active ? "♥" : "♡"}
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
  const figuresAfter = (i) => figures.filter((f) => f.afterParagraph === i);
  const tablesAfter = (i) => tables.filter((t) => t.afterParagraph === i);
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
        </Fragment>
      );
      })}
    </div>
  );
}

function HeroToday({ article, onClick, bookmarked, onToggleBookmark }) {
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
            <BookmarkBtn
              active={bookmarked}
              onToggle={onToggleBookmark}
              stopOpen
            />
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
  bookmarked,
  onToggleBookmark,
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
        <BookmarkBtn active={bookmarked} onToggle={onToggleBookmark} stopOpen />
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
  bookmarked,
  onToggleBookmark,
  onTagClick,
  relatedArticles,
  onOpenRelated,
}) {
  const cat = CATEGORIES[article.category];

  const share = useCallback(async () => {
    const u = new URL(window.location.href);
    u.searchParams.set("a", article.id);
    const url = u.toString();
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: stripMarkdownBoldMarkers(article.excerpt),
          url,
        });
        return;
      }
    } catch {
      /* user cancelled */
    }
    try {
      await navigator.clipboard.writeText(url);
      window.alert("記事へのリンクをコピーしました。");
    } catch {
      window.prompt("リンクをコピーしてください", url);
    }
  }, [article]);

  return (
    <div className="app-inner">
      <ReadingProgress />
      <div className="detail-wrap">
        <div className="detail-toolbar">
          <button type="button" className="btn" onClick={onBack}>
            ← 一覧へ
          </button>
          <button
            type="button"
            className={`btn${bookmarked ? " btn-primary" : ""}`}
            onClick={onToggleBookmark}
          >
            {bookmarked ? "♥ ブックマーク済" : "♡ ブックマーク"}
          </button>
          <button type="button" className="btn btn-primary" onClick={share}>
            共有 / リンクコピー
          </button>
          <span style={{ fontSize: 12, color: "var(--muted)", marginLeft: "auto" }}>
            Esc で一覧
          </span>
        </div>

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

function Sidebar({ articles, bookmarkIds, onSelect, onTagClick, weekRoundups }) {
  const marked = articles.filter((a) => bookmarkIds.has(a.id));

  return (
    <aside className="desktop-sidebar">
      <div className="sidebar-panel">
        <h3>このサイトについて</h3>
        <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
          AI 開発ツールのニュース・レビューを要約・整理しています（2次情報）。各記事末尾の「元記事・一次情報」から原文・公式を確認してください。ブックマークはこのブラウザに保存されます。
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

      {marked.length > 0 ? (
        <div className="sidebar-panel">
          <h3>♥ ブックマーク ({marked.length})</h3>
          {marked.map((a) => (
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
              {a.title.length > 42 ? `${a.title.slice(0, 42)}…` : a.title}
            </div>
          ))}
        </div>
      ) : null}

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
    return { selected: null, siteSection: "articles", query: "", guideTab: "vibe", toolTab: "claude-code" };
  }
  const u = new URL(window.location.href);
  const aid = u.searchParams.get("a");
  if (aid) {
    const found = ARTICLES.find((x) => x.id === aid);
    if (found) {
      return { selected: found, siteSection: "articles", query: "", guideTab: "vibe", toolTab: "claude-code" };
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
            : "articles";
  const tab = u.searchParams.get("tab");
  const guideTab =
    siteSection === "guide"
      ? tab === "glossary"
        ? "glossary"
        : tab === "media"
          ? "media"
          : "vibe"
      : "vibe";
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
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_THEME) || "light");
  const [bookmarkIds, setBookmarkIds] = useState(loadBookmarks);
  const [showFab, setShowFab] = useState(false);
  const searchRef = useRef(null);

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
    persistBookmarks(bookmarkIds);
  }, [bookmarkIds]);

  useEffect(() => {
    syncAppUrl({
      articleId: selected?.id ?? null,
      siteSection: selected ? "articles" : siteSection,
      tagQuery: selected ? "" : query,
      guideTab,
      toolTab,
    });
  }, [selected, siteSection, query, guideTab, toolTab]);

  useEffect(() => {
    syncDocumentSeo({
      selectedArticle: selected ?? null,
      siteSection,
      guideTab,
    });
  }, [selected, siteSection, guideTab]);

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

  const toggleBookmark = useCallback((id) => {
    setBookmarkIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleSelect = useCallback((article) => {
    setSelected(article);
    window.scrollTo(0, 0);
  }, []);

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
    siteSection !== "guide"
      ? 0
      : guideTab === "vibe"
        ? vibeGuide.matchCount
        : guideTab === "media"
          ? mediaGuide.matchCount
          : glossaryGuide.matchCount;

  const guideTotal =
    siteSection !== "guide"
      ? 0
      : guideTab === "vibe"
        ? vibeGuide.total
        : guideTab === "media"
          ? mediaGuide.total
          : glossaryGuide.total;

  const filtered = useMemo(() => {
    let list = ARTICLES;
    if (siteSection === "reviews") {
      list = list.filter((a) => a.type === "review");
    } else if (siteSection === "articles") {
      list = list.filter((a) => a.type !== "review");
    }
    if (filter !== "all") list = list.filter((a) => a.category === filter);
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
  }, [filter, query, sort, siteSection]);

  const { featured, rest } = filtered;

  const switchSection = useCallback((next) => {
    setSiteSection(next);
    setSelected(null);
    if (next === "guide") setGuideTab("vibe");
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
            />
            <SiteSectionNav section={siteSection} onSection={switchSection} />
            {siteSection === "articles" || siteSection === "reviews" ? (
              <FilterBar active={filter} setActive={setFilter} />
            ) : siteSection === "guide" ? (
              <GuideTabBar guideTab={guideTab} onSelect={selectGuideTab} />
            ) : siteSection === "tools" ? (
              <ToolTabBar toolTab={toolTab} onSelect={selectToolTab} />
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
            bookmarked={bookmarkIds.has(selected.id)}
            onToggleBookmark={() => toggleBookmark(selected.id)}
            onTagClick={onTagClick}
            relatedArticles={pickRelatedArticles(selected, ARTICLES, 3)}
            onOpenRelated={handleSelect}
          />
        ) : (
          <div
            className={`blog-layout${siteSection === "guide" ? " blog-layout--guide" : ""}`}
          >
            <div className="blog-main">
              {siteSection === "articles" || siteSection === "reviews" ? (
                <>
                  {featured && siteSection === "articles" ? (
                    <HeroToday
                      article={featured}
                      onClick={() => handleSelect(featured)}
                      bookmarked={bookmarkIds.has(featured.id)}
                      onToggleBookmark={() => toggleBookmark(featured.id)}
                    />
                  ) : null}

                  {rest.length > 0 ? (
                    <>
                      <div className="section-feed">
                        <h2 className="section-feed__title">記事一覧</h2>
                        <p className="section-feed__meta">
                          掲載記事を
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
                            bookmarked={bookmarkIds.has(a.id)}
                            onToggleBookmark={() => toggleBookmark(a.id)}
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
                    <h2 className="section-feed__title">企業情報</h2>
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
                <>
                  {guideMatchCount === 0 ? (
                    <div
                      id="guide-subtab-panel"
                      role="tabpanel"
                      aria-labelledby={
                        guideTab === "vibe"
                          ? "guide-subtab-vibe"
                          : guideTab === "media"
                            ? "guide-subtab-media"
                            : "guide-subtab-glossary"
                      }
                      className="empty-state"
                    >
                      このタブに該当がありません。別タブに切り替えるか、検索語を変えてください。
                    </div>
                  ) : (
                    <div
                      id="guide-subtab-panel"
                      role="tabpanel"
                      aria-labelledby={
                        guideTab === "vibe"
                          ? "guide-subtab-vibe"
                          : guideTab === "media"
                            ? "guide-subtab-media"
                            : "guide-subtab-glossary"
                      }
                    >
                      {guideTab === "vibe" ? (
                        <VibeCodingGuidePanel

                          stacks={vibeGuide.stacks}
                          toolTable={vibeGuide.toolTable}
                          basicRules={vibeGuide.basicRules}
                          claudeCode={vibeGuide.claudeCode}
                          pitfalls={vibeGuide.pitfalls}
                        />
                      ) : guideTab === "media" ? (
                        <MediaToolsGuidePanel
                          mediaTaxonomy={mediaGuide.mediaTaxonomy}
                        />
                      ) : glossaryGuide.glossary.length === 0 ||
                        glossaryGuide.glossary.every(
                          (g) => g.terms.length === 0,
                        ) ? (
                        <div className="empty-state">
                          用語が見つかりません。検索語を変えてください。
                        </div>
                      ) : (
                        <GlossaryGuidePanel
                          glossaryGenres={glossaryGuide.glossary}
                        />
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {siteSection === "articles" ? (
              <Sidebar
                articles={ARTICLES}
                bookmarkIds={bookmarkIds}
                onSelect={handleSelect}
                onTagClick={onTagClick}
                weekRoundups={weekRoundups}
              />
            ) : siteSection === "companies" ? (
              <CompaniesSidebar companies={filteredCompanies} />
            ) : (
              <GuideSidebar guideTab={guideTab} />
            )}
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
