/**
 * AI Tool News — ブログ風AIツール情報サイト
 */
import {
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

const STORAGE_THEME = "ai-news-theme";
const STORAGE_MARKS = "ai-news-bookmarks";

const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "special", label: "特集・ニュース" },
  { id: "cli", label: "CLI" },
  { id: "editor", label: "エディタ" },
];

const SORTS = [
  { id: "date-desc", label: "新着順" },
  { id: "date-asc", label: "日付（古い順）" },
  { id: "title", label: "タイトル A→Z" },
];

function getCategoryIcon(cat) {
  if (cat === "cli") return ">";
  if (cat === "editor") return "<>";
  return "★";
}

function parseDate(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d).getTime();
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

function syncUrlArticleId(id) {
  const u = new URL(window.location.href);
  if (id) u.searchParams.set("a", id);
  else u.searchParams.delete("a");
  const next = `${u.pathname}${u.search}${u.hash}`;
  window.history.replaceState({}, "", next);
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
              placeholder="記事を検索…（タイトル・概要・タグ）"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="記事検索"
            />
          </div>
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

function FeaturedCard({ article, onClick, bookmarked, onToggleBookmark }) {
  return (
    <article
      className="card-featured"
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
      <div className="watermark">★</div>
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
          style={{ background: "#f59e0b", color: "#fff" }}
        >
          特集
        </span>
        <span style={{ fontSize: 11, color: "var(--muted)" }}>{article.date}</span>
        <span style={{ fontSize: 11, color: "var(--muted)" }}>
          {article.readTime}で読める
        </span>
        <div style={{ marginLeft: "auto" }}>
          <BookmarkBtn
            active={bookmarked}
            onToggle={onToggleBookmark}
            stopOpen
          />
        </div>
      </div>
      <h2
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--text)",
          lineHeight: 1.5,
          margin: "0 0 10px",
        }}
      >
        {article.title}
      </h2>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {article.excerpt}
      </p>
      <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {article.tags.map((t) => (
          <span key={t} className="tag-chip" style={{ cursor: "inherit" }}>
            {t}
          </span>
        ))}
      </div>
    </article>
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
      <div
        className="cat-icon"
        style={{
          background: `${cat.color}18`,
          border: `1px solid ${cat.color}33`,
          color: cat.color,
        }}
      >
        {getCategoryIcon(article.category)}
      </div>
      <div className="card-article-header">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              marginBottom: 4,
              flexWrap: "wrap",
            }}
          >
            <span
              className="badge"
              style={{ color: cat.color, background: `${cat.color}18` }}
            >
              {cat.label}
            </span>
            <span style={{ fontSize: 11, color: "var(--muted)" }}>
              {article.date}
            </span>
            {article.rating ? (
              <span style={{ fontSize: 11, color: "#fbbf24" }}>
                {renderStars(article.rating)}
              </span>
            ) : null}
          </div>
          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.45,
              margin: "0 0 6px",
            }}
          >
            {article.title}
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--muted)",
              lineHeight: 1.55,
              margin: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.excerpt}
          </p>
          <div
            style={{
              marginTop: 8,
              display: "flex",
              gap: 6,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {article.model ? (
              <span style={{ fontSize: 10, color: cat.color, fontWeight: 500 }}>
                {article.model}
              </span>
            ) : null}
            {article.pricing ? (
              <span style={{ fontSize: 10, color: "var(--muted)" }}>
                {article.pricing}
              </span>
            ) : null}
            <span
              style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}
            >
              {article.readTime}
            </span>
          </div>
          <div style={{ marginTop: 8 }}>
            {article.tags.map((t) => (
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
        </div>
        <BookmarkBtn active={bookmarked} onToggle={onToggleBookmark} stopOpen />
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
}) {
  const cat = CATEGORIES[article.category];

  const share = useCallback(async () => {
    const u = new URL(window.location.href);
    u.searchParams.set("a", article.id);
    const url = u.toString();
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, text: article.excerpt, url });
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

          <div className="prose">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

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
          AI 開発ツールのニュース・レビューをまとめています。ブックマークはこのブラウザに保存されます。
        </p>
        <div style={{ marginTop: 10, fontSize: 11, color: "var(--muted)" }}>
          最終更新: {LAST_UPDATED}
        </div>
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
          {["CLI", "エディタ", "速報", "Anthropic", "おすすめ"].map((t) => (
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

export default function App() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("date-desc");
  const [selected, setSelected] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_THEME) || "dark");
  const [bookmarkIds, setBookmarkIds] = useState(loadBookmarks);
  const [showFab, setShowFab] = useState(false);
  const searchRef = useRef(null);
  const urlInitDone = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
  }, [theme]);

  useEffect(() => {
    persistBookmarks(bookmarkIds);
  }, [bookmarkIds]);

  useEffect(() => {
    if (urlInitDone.current) return;
    urlInitDone.current = true;
    const u = new URL(window.location.href);
    const id = u.searchParams.get("a");
    if (!id) return;
    const found = ARTICLES.find((x) => x.id === id);
    if (found) setSelected(found);
  }, []);

  useEffect(() => {
    syncUrlArticleId(selected?.id ?? null);
  }, [selected]);

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
    window.scrollTo(0, 0);
    setTimeout(() => searchRef.current?.focus(), 0);
  }, []);

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

  return (
    <div className="app-shell">
      <div className="app-inner">
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
              filteredCount={featured ? rest.length + 1 : rest.length}
              totalCount={ARTICLES.length}
            />
            <FilterBar active={filter} setActive={setFilter} />
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
          />
        ) : (
          <div className="blog-layout">
            <div className="blog-main">
              {featured ? (
                <FeaturedCard
                  article={featured}
                  onClick={() => handleSelect(featured)}
                  bookmarked={bookmarkIds.has(featured.id)}
                  onToggleBookmark={() => toggleBookmark(featured.id)}
                />
              ) : null}

              {rest.length > 0 ? (
                rest.map((a) => (
                  <ArticleCard
                    key={a.id}
                    article={a}
                    onClick={() => handleSelect(a)}
                    bookmarked={bookmarkIds.has(a.id)}
                    onToggleBookmark={() => toggleBookmark(a.id)}
                    onTagClick={onTagClick}
                  />
                ))
              ) : (
                <div className="empty-state">該当する記事がありません</div>
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

            <Sidebar
              articles={ARTICLES}
              bookmarkIds={bookmarkIds}
              onSelect={handleSelect}
              onTagClick={onTagClick}
            />
          </div>
        )}
      </div>

      <ScrollTopFab
        visible={!selected && showFab}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
