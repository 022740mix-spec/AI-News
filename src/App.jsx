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
  LAST_UPDATED,
} from "./data/aiToolsData.js";
import { AI_COMPANIES, COMPANIES_DISCLAIMER } from "./data/aiCompanies.js";
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
 * プレーンテリー内の http(s) URL を <a> に展開（mk が一意キーを返す関数）
 */
function linkifyPlainToNodes(segment, mkKey) {
  if (!segment) return [];
  const re = /https?:\/\/[^\s<>"')」']+/gi;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(segment)) !== null) {
    if (m.index > last) {
      out.push(segment.slice(last, m.index));
    }
    const href = trimUrlForHref(m[0]);
    out.push(
      <a
        key={mkKey()}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
 * 1行分: **強調** + URL リンク化
 */
function richInlineLine(line, mkKey) {
  const reBold = /\*\*(.+?)\*\*/g;
  const parts = [];
  let last = 0;
  let m;
  while ((m = reBold.exec(line)) !== null) {
    if (m.index > last) {
      parts.push(...linkifyPlainToNodes(line.slice(last, m.index), mkKey));
    }
    parts.push(<strong key={mkKey()}>{m[1]}</strong>);
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

function syncDocumentSeo(selectedArticle) {
  const descRaw = stripMarkdownBoldMarkers(
    selectedArticle ? selectedArticle.excerpt : SITE_DESCRIPTION,
  );
  const desc = descRaw.length > 160 ? `${descRaw.slice(0, 157)}…` : descRaw;
  const title = selectedArticle
    ? `${selectedArticle.title} | ${SITE_NAME}`
    : DEFAULT_DOC_TITLE;

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

  const ogTitle = selectedArticle
    ? selectedArticle.title
    : `${SITE_NAME} | AI開発ツールニュース`;
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

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "special", label: "特集" },
  { id: "model", label: "モデル・API" },
  { id: "cli", label: "CLI・エージェント" },
  { id: "editor", label: "エディタ" },
  { id: "data", label: "データ・RAG" },
  { id: "product", label: "プロダクト" },
  { id: "voice", label: "音声" },
  { id: "vision", label: "画像・MM" },
  { id: "video", label: "動画" },
  { id: "ops", label: "評価・運用" },
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
    voice: "~",
    vision: "@",
    video: "▶",
    ops: "*",
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
    return parseDate(y.a.date) - parseDate(x.a.date);
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

function syncAppUrl({ articleId, siteSection, tagQuery }) {
  const u = new URL(window.location.href);
  if (articleId) {
    u.searchParams.set("a", articleId);
    u.searchParams.delete("view");
    u.searchParams.delete("tag");
  } else {
    u.searchParams.delete("a");
    if (siteSection === "companies") {
      u.searchParams.set("view", "companies");
      u.searchParams.delete("tag");
    } else {
      u.searchParams.delete("view");
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

function SiteSectionNav({ section, onSection }) {
  return (
    <nav className="section-site-nav" aria-label="サイト内切替">
      <div className="section-site-nav-inner">
        <button
          type="button"
          className={`section-site-tab${section === "articles" ? " is-active" : ""}`}
          onClick={() => onSection("articles")}
        >
          記事
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

function CompaniesSidebar({ companies }) {
  return (
    <aside className="desktop-sidebar" aria-label="企業一覧ナビ">
      <div className="sidebar-panel">
        <h3>企業一覧</h3>
        <p style={{ fontSize: 11, color: "var(--muted)", margin: "0 0 8px", lineHeight: 1.5 }}>
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

function CompanyCard({ company }) {
  const st = company.stock;
  return (
    <article id={`company-${company.id}`} className="company-card">
      <div className="company-card__head">
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
      {article.body.map((p, i) => (
        <Fragment key={i}>
          <p>{richArticleText(p, `p${i}-`)}</p>
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
      ))}
    </div>
  );
}

function HeroToday({ article, onClick, bookmarked, onToggleBookmark }) {
  const hasCover = Boolean(article.coverImage?.src);
  return (
    <section
      className="hero-today"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`特集記事: ${article.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="hero-today__inner">
        <div className="hero-today__text">
          <p className="hero-today__label">本日の特集 · Today&apos;s pick</p>
          <p className="hero-today__date">{formatPickDate(article.date)}</p>
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
        <span>{formatPickDate(article.date)}</span>
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
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{article.date}</span>
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
                        {formatPickDate(r.date)} · {r.readTime ?? ""}
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

function Sidebar({ articles, bookmarkIds, onSelect, onTagClick }) {
  const latest = articles.filter((a) => a.type === "review").slice(0, 5);
  const marked = articles.filter((a) => bookmarkIds.has(a.id));
  return (
    <aside className="desktop-sidebar">
      <div className="sidebar-panel">
        <h3>このサイトについて</h3>
        <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
          AI 開発ツールのニュース・レビューを要約・整理しています（2次情報）。各記事末尾の「元記事・一次情報」から原文・公式を確認してください。ブックマークはこのブラウザに保存されます。
        </p>
        <div style={{ marginTop: 10, fontSize: 11, color: "var(--muted)" }}>
          最終更新: {LAST_UPDATED}
        </div>
        <p style={{ marginTop: 12, marginBottom: 0 }}>
          <a href="./feed.xml" className="prose-link" target="_blank" rel="noopener noreferrer">
            Atom フィード（購読）
          </a>
        </p>
      </div>

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

      <div className="sidebar-panel">
        <h3>最新レビュー</h3>
        {latest.map((a) => (
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
            <div style={{ fontWeight: 500 }}>
              {a.title.split("—")[0].trim()}
            </div>
            <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2 }}>
              {a.rating ? (
                <span style={{ color: "#fbbf24" }}>{renderStars(a.rating)} </span>
              ) : null}
              {a.date}
            </div>
          </div>
        ))}
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
        に保存されます。第三者によるアクセス解析用 Cookie
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

/** 初回マウント時の URL（?a= / ?view= / ?tag=）から一覧・詳細状態を復元 */
function readInitialRouteState() {
  if (typeof window === "undefined") {
    return { selected: null, siteSection: "articles", query: "" };
  }
  const u = new URL(window.location.href);
  const aid = u.searchParams.get("a");
  if (aid) {
    const found = ARTICLES.find((x) => x.id === aid);
    if (found) {
      return { selected: found, siteSection: "articles", query: "" };
    }
  }
  const siteSection =
    u.searchParams.get("view") === "companies" ? "companies" : "articles";
  const tag = u.searchParams.get("tag");
  const query =
    siteSection === "companies" ? "" : tag && tag.trim() ? tag.trim() : "";
  return { selected: null, siteSection, query };
}

export default function App() {
  const initialRoute = useMemo(() => readInitialRouteState(), []);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState(initialRoute.query);
  const [sort, setSort] = useState("date-desc");
  const [selected, setSelected] = useState(initialRoute.selected);
  const [siteSection, setSiteSection] = useState(initialRoute.siteSection);
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
    });
  }, [selected, siteSection, query]);

  useEffect(() => {
    syncDocumentSeo(selected ?? null);
  }, [selected, siteSection]);

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
          c.legalName.toLowerCase().includes(q) ||
          c.country.includes(q) ||
          c.hq.toLowerCase().includes(q) ||
          c.products.some((p) => p.toLowerCase().includes(q)) ||
          c.stock.detail.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query]);

  const filtered = useMemo(() => {
    let list = ARTICLES;
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
    const featured = list.find((a) => a.pinned);
    const rest = list.filter((a) => !a.pinned);
    const sorted = [...rest].sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title, "ja");
      const da = parseDate(a.date);
      const db = parseDate(b.date);
      return sort === "date-asc" ? da - db : db - da;
    });
    return { featured, rest: sorted, list };
  }, [filter, query, sort]);

  const { featured, rest } = filtered;

  const switchSection = useCallback((next) => {
    setSiteSection(next);
    setSelected(null);
    window.scrollTo(0, 0);
  }, []);

  const articleCount =
    siteSection === "articles" ? (featured ? rest.length + 1 : rest.length) : 0;

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
                siteSection === "companies" ? filteredCompanies.length : articleCount
              }
              totalCount={
                siteSection === "companies" ? AI_COMPANIES.length : ARTICLES.length
              }
              searchPlaceholder={
                siteSection === "companies"
                  ? "企業名・国・本社・製品・証券コードで検索…"
                  : "記事を検索…（タイトル・概要・タグ）"
              }
              searchAriaLabel={siteSection === "companies" ? "企業検索" : "記事検索"}
              showSort={siteSection === "articles"}
            />
            <SiteSectionNav section={siteSection} onSection={switchSection} />
            {siteSection === "articles" ? (
              <FilterBar active={filter} setActive={setFilter} />
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
          <div className="blog-layout">
            <div className="blog-main">
              {siteSection === "articles" ? (
                <>
                  {featured ? (
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
                        <h2 className="section-feed__title">すべての記事</h2>
                        <p className="section-feed__meta">
                          最新の更新 · {LAST_UPDATED} ·{" "}
                          <strong style={{ color: "var(--text-secondary)" }}>
                            {rest.length}
                          </strong>{" "}
                          件
                          {query ? "（絞り込み中）" : ""}
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
                </>
              ) : (
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
              )}

              <footer className="site-footer">
                <div>
                  {SITE_NAME} — {SITE_DESCRIPTION}
                </div>
                <div>
                  最終更新: {LAST_UPDATED} · データは公開情報・報道を基に整理しています
                </div>
              </footer>
            </div>

            {siteSection === "articles" ? (
              <Sidebar
                articles={ARTICLES}
                bookmarkIds={bookmarkIds}
                onSelect={handleSelect}
                onTagClick={onTagClick}
              />
            ) : (
              <CompaniesSidebar companies={filteredCompanies} />
            )}
          </div>
        )}
        </main>
      </div>

      <ScrollTopFab
        visible={!selected && showFab}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
