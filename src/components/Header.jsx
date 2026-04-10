import { useEffect, useRef, useContext } from "react";
import { SITE_NAME, SITE_DESCRIPTION } from "../data/articleHelpers.js";
import { LangContext, L } from "../context/LangContext.js";
import { ACCENT_PRESETS, SORTS } from "../constants.js";
import { handleKeyActivate } from "../utils/a11y.js";
import { IconSearch, IconSun, IconMoon } from "./Icons.jsx";

/* ══ ハンバーガーメニュー ══ */
function HamburgerMenu({ isOpen, onClose, onSection, currentSection, accentId, onAccent, query, setQuery }) {
  const lang = useContext(LangContext);
  const menuItems = [
    { id: "home", label: "ホーム", en: "Home" },
    { id: "articles", label: "ニュース", en: "News" },
    { id: "reviews", label: "レビュー", en: "Reviews" },
    { id: "guide", label: "ガイド", en: "Guide" },
    { id: "tools", label: "ツール別", en: "Tools" },
    { id: "companies", label: "AI企業", en: "Companies" },
  ];
  const mobileSearchRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="hamburger-overlay" onClick={onClose} />
      <nav className="hamburger-drawer" aria-label={lang === "en" ? "Main menu" : "メインメニュー"}>
        <div className="hamburger-drawer__header">
          <button className="hamburger-close" onClick={onClose} aria-label={lang === "en" ? "Close" : "閉じる"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="hamburger-search-field">
          <span className="hamburger-search-prefix"><IconSearch /></span>
          <input
            ref={mobileSearchRef}
            type="search"
            className="hamburger-search-input"
            placeholder={lang === "en" ? "Search articles…" : "記事を検索…"}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value && currentSection !== "articles") {
                onSection("articles");
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (query) onSection("articles");
                onClose();
              }
            }}
            aria-label={lang === "en" ? "Search articles" : "記事を検索"}
          />
          {query && (
            <button
              type="button"
              className="hamburger-search-clear"
              onClick={() => { setQuery(""); mobileSearchRef.current?.focus(); }}
              aria-label={lang === "en" ? "Clear search" : "検索をクリア"}
            >
              ✕
            </button>
          )}
        </div>
        <ul className="hamburger-list">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`hamburger-item${currentSection === item.id ? " is-active" : ""}`}
                onClick={() => { onSection(item.id); onClose(); }}
              >
                <span className="hamburger-item__label">{L(item, lang)}</span>
                <span className="hamburger-item__arrow">›</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="hamburger-accent">
          <span className="hamburger-accent__label">{lang === "en" ? "Theme Color" : "テーマカラー"}</span>
          <div className="hamburger-accent__dots">
            {ACCENT_PRESETS.map(p => (
              <button
                key={p.id}
                className={`hamburger-accent__dot${accentId === p.id ? " is-active" : ""}`}
                style={{ background: p.color }}
                onClick={() => onAccent(p.id)}
                title={L(p, lang)}
                aria-label={L(p, lang)}
              />
            ))}
          </div>
        </div>
        <div className="hamburger-footer">
          AI News<br />
          <span className="hamburger-footer__sub">{lang === "en" ? "No ads · No tracking" : "広告なし・個人情報収集なし"}</span>
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
  searchPlaceholder,
  searchAriaLabel,
  showSort = true,
  onGoHome,
  hideSearch = false,
  onToggleMenu,
  lang: langOverride,
  onToggleLang,
}) {
  const ctxLang = useContext(LangContext);
  const lang = langOverride ?? ctxLang;
  const defaultPlaceholder = lang === "en" ? "Search articles… (title, summary, tags)" : "記事を検索…（タイトル・概要・タグ）";
  const defaultAriaLabel = lang === "en" ? "Search" : "検索";
  const ph = searchPlaceholder ?? defaultPlaceholder;
  const al = searchAriaLabel ?? defaultAriaLabel;
  const siteDesc = lang === "en" ? "Latest news & guides on Claude Code, Cursor, Codex & Copilot" : SITE_DESCRIPTION;
  return (
    <header className="header-wrap">
      <div className="header-inner">
        <div className="header-top">
          <button
            type="button"
            className="icon-btn hamburger-btn"
            title={lang === "en" ? "Menu" : "メニュー"}
            aria-label={lang === "en" ? "Open menu" : "メニューを開く"}
            onClick={onToggleMenu}
          >
            ☰
          </button>
          <div className="header-center" role="button" tabIndex={0} onClick={onGoHome} onKeyDown={handleKeyActivate(onGoHome)} style={{ cursor: "pointer" }}>
            <h1 className="site-title">{SITE_NAME}</h1>
            <p className="site-tagline">{siteDesc}</p>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="icon-btn lang-toggle-btn"
              title={lang === "en" ? "日本語に切替" : "Switch to English"}
              aria-label={lang === "en" ? "日本語に切替" : "Switch to English"}
              onClick={onToggleLang}
            >
              {lang === "en" ? "JP" : "EN"}
            </button>
            <button
              type="button"
              className="icon-btn"
              title={theme === "dark" ? (lang === "en" ? "Light theme" : "ライトテーマ") : (lang === "en" ? "Dark theme" : "ダークテーマ")}
              aria-label={lang === "en" ? "Toggle theme" : "テーマ切替"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
        {!hideSearch ? (
          <>
            <div className="search-row">
              <div className="search-field">
                <span className="search-prefix"><IconSearch /></span>
                <input
                  ref={searchRef}
                  type="search"
                  placeholder={ph}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label={al}
                />
              </div>
              {showSort ? (
                <select
                  className="sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label={lang === "en" ? "Sort order" : "並び順"}
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {L(s, lang)}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="sort-select-placeholder" aria-hidden />
              )}
              <span className="hint-kbd" title={lang === "en" ? "Focus" : "フォーカス"}>
                <kbd>/</kbd> {lang === "en" ? "to search" : "で検索"}
              </span>
            </div>
            {query ? (
              <div className="toolbar-stats">
                <button
                  type="button"
                  className="stat-pill stat-pill--clearable"
                  onClick={() => { setQuery(""); searchRef.current?.focus(); }}
                  aria-label={lang === "en" ? `Clear filter "${query}"` : `フィルター「${query}」を解除`}
                >
                  {lang === "en" ? `Filter: "${query}" ✕` : `フィルター: 「${query}」 ✕`}
                </button>
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </header>
  );
}

export { Header, HamburgerMenu };
