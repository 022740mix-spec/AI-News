/**
 * AI Tool News — ブログ風AIツール情報サイト
 */
import {
  Fragment,
  lazy,
  Suspense,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  ARTICLES,
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
  filterToolReference,
} from "./data/vibeCodingGuide.js";

import { LangContext } from "./context/LangContext.js";
import {
  STORAGE_THEME,
  STORAGE_ACCENT,
  STORAGE_LANG,
  ACCENT_PRESETS,
  REVIEW_CATEGORIES,
} from "./constants.js";
import { syncDocumentSeo } from "./utils/seo.js";
import { syncAppUrl, readInitialRouteState } from "./utils/routing.js";
import { parseDate, compareArticleOrder, pickRelatedArticles } from "./utils/dateUtils.js";

import { Header, HamburgerMenu } from "./components/Header.jsx";
import { StorageLocalNotice, EditorialStatement, SiteFooter, ScrollTopFab, SiteSectionNav } from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import { TypeFilterBar, FilterBar, Pagination, HeroToday, ArticleCard } from "./components/ArticleList.jsx";
const ArticleDetail = lazy(() => import("./components/ArticleDetail.jsx"));
import { Sidebar, WeekRoundupNav } from "./components/Sidebars.jsx";
import { GuideSidebar, ToolSidebar, CompaniesSidebar } from "./components/Sidebars.jsx";
const GuideTabBar = lazy(() => import("./components/Guide.jsx").then(m => ({ default: m.GuideTabBar })));
const GuideSetupPanel = lazy(() => import("./components/Guide.jsx").then(m => ({ default: m.GuideSetupPanel })));
const GuideRulesPanel = lazy(() => import("./components/Guide.jsx").then(m => ({ default: m.GuideRulesPanel })));
const GuidePracticalPanel = lazy(() => import("./components/Guide.jsx").then(m => ({ default: m.GuidePracticalPanel })));
const MediaToolsGuidePanel = lazy(() => import("./components/Guide.jsx").then(m => ({ default: m.MediaToolsGuidePanel })));
const GlossaryGuidePanel = lazy(() => import("./components/Guide.jsx").then(m => ({ default: m.GlossaryGuidePanel })));
const ReviewTabBar = lazy(() => import("./components/Reviews.jsx").then(m => ({ default: m.ReviewTabBar })));
const ModelComparisonSection = lazy(() => import("./components/Reviews.jsx").then(m => ({ default: m.ModelComparisonSection })));
const ReviewComparisonTable = lazy(() => import("./components/Reviews.jsx").then(m => ({ default: m.ReviewComparisonTable })));
const CompanyCard = lazy(() => import("./components/Reviews.jsx").then(m => ({ default: m.CompanyCard })));
const ToolTabBar = lazy(() => import("./components/Tools.jsx").then(m => ({ default: m.ToolTabBar })));
const ToolReferencePanel = lazy(() => import("./components/Tools.jsx").then(m => ({ default: m.ToolReferencePanel })));
import { SeasonalScene, SeasonalEffect } from "./components/Seasonal.jsx";

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
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_LANG) || "ja");
  const searchRef = useRef(null);
  const ITEMS_PER_PAGE = 15;

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === "ja" ? "en" : "ja";
      localStorage.setItem(STORAGE_LANG, next);
      return next;
    });
  }, []);

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
    siteSection !== "guide" || !query
      ? 0
      : vibeGuide.matchCount + mediaGuide.matchCount + glossaryGuide.matchCount;

  const guideTotal =
    siteSection !== "guide"
      ? 0
      : vibeGuide.total + mediaGuide.total + glossaryGuide.total;

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
    <LangContext.Provider value={lang}>
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        {lang === "en" ? "Skip to content" : "本文へスキップ"}
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
                  ? (lang === "en" ? "Search companies…" : "企業名・国・本社・製品・証券コードで検索…")
                  : siteSection === "guide"
                    ? (lang === "en" ? "Search guide…" : "ツール・ルール・用語を検索…")
                    : siteSection === "reviews"
                      ? (lang === "en" ? "Search reviews…" : "レビューを検索…（ツール名・タグ）")
                      : siteSection === "tools"
                        ? (lang === "en" ? "Search commands…" : "コマンド・機能を検索…")
                        : null
              }
              searchAriaLabel={
                siteSection === "companies"
                  ? (lang === "en" ? "Search companies" : "企業検索")
                  : siteSection === "guide"
                    ? (lang === "en" ? "Search guide" : "ガイド内検索")
                    : siteSection === "tools"
                      ? (lang === "en" ? "Search tools" : "ツール別検索")
                      : null
              }
              showSort={siteSection === "articles" || siteSection === "reviews"}
              hideSearch={siteSection === "home"}
              onToggleMenu={toggleMenu}
              onToggleLang={toggleLang}
            />
            <HamburgerMenu
              isOpen={menuOpen}
              onClose={closeMenu}
              onSection={(section) => { switchSection(section); }}
              currentSection={siteSection}
              searchRef={searchRef}
              accentId={accentId}
              onAccent={setAccentId}
              query={query}
              setQuery={setQuery}
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
                  <Suspense fallback={null}>
                  <ReviewTabBar reviewTab={reviewTab} onSelect={setReviewTab} />
                  </Suspense>
                ) : siteSection === "guide" ? (
                  <Suspense fallback={null}>
                  <GuideTabBar guideTab={guideTab} onSelect={selectGuideTab} />
                  </Suspense>
                ) : siteSection === "tools" ? (
                  <Suspense fallback={null}>
                  <ToolTabBar toolTab={toolTab} onSelect={selectToolTab} />
                  </Suspense>
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
              searchAriaLabel={lang === "en" ? "Search articles" : "記事検索"}
              showSort={false}
              hideSearch={true}
              onToggleMenu={toggleMenu}
              onToggleLang={toggleLang}
            />
            <HamburgerMenu
              isOpen={menuOpen}
              onClose={closeMenu}
              onSection={(section) => { setSelected(null); switchSection(section); }}
              currentSection={siteSection}
              searchRef={searchRef}
              accentId={accentId}
              onAccent={setAccentId}
              query={query}
              setQuery={setQuery}
            />
          <Suspense fallback={<div className="loading">読み込み中...</div>}>
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
          </Suspense>
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
                    <Suspense fallback={<div className="loading">読み込み中...</div>}>
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
                    </Suspense>
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
                          {siteSection === "reviews"
                            ? (lang === "en" ? "Individual Reviews" : "個別レビュー")
                            : (lang === "en" ? "Articles" : "記事一覧")}
                        </h2>
                        <p className="section-feed__meta">
                          {lang === "en" ? (
                            <>
                              {siteSection === "reviews" ? "Detailed tool reviews" : "Articles"} sorted by newest first ({rest.length} items){query ? " · Filtered by search" : ""}
                            </>
                          ) : (
                            <>
                              {siteSection === "reviews" ? "各ツールの詳細レビュー" : "掲載記事"}を
                              <span title="報道・公式発表など、事実が表に出た日の目安">ニュース日</span>
                              の新しい順に並べています（
                              <strong style={{ color: "var(--text-secondary)" }}>{rest.length}</strong>
                              件）{query ? " · 検索で絞り込み中" : ""}。
                            </>
                          )}
                        </p>
                        <p className="section-feed__meta section-feed__meta--hint">
                          {lang === "en" ? (
                            <>
                              <strong>Weekly roundups</strong> are available in the sidebar. You can also filter by{" "}
                              <button type="button" className="inline-linkish" onClick={() => onTagClick("週刊まとめ")}>
                                "Weekly Roundup"
                              </button> tag.
                            </>
                          ) : (
                            <>
                              <strong>週刊まとめ</strong>は右（または下）の
                              <strong>サイドバー「週刊まとめ（特集）」</strong>
                              から時系列で開けます。タグ検索は
                              <button type="button" className="inline-linkish" onClick={() => onTagClick("週刊まとめ")}>
                                「週刊まとめ」
                              </button>
                              でも絞れます。
                            </>
                          )}
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
                    <div className="empty-state">{lang === "en" ? "No matching articles" : "該当する記事がありません"}</div>
                  )}
                  <WeekRoundupNav
                    className="week-roundups-mobile"
                    articles={weekRoundups}
                    onSelect={handleSelect}
                    onTagClick={onTagClick}
                  />
                </>
              ) : siteSection === "tools" ? (
                <Suspense fallback={<div className="loading">読み込み中...</div>}>
                  <ToolReferencePanel
                    referenceData={toolRef.ref}
                    practical={toolRef.practical}
                  />
                </Suspense>
              ) : siteSection === "companies" ? (
                <>
                  <div className="section-feed companies-page-intro">
                    <h2 className="section-feed__title">{lang === "en" ? "AI Companies" : "AI企業"}</h2>
                    <p className="section-feed__meta">
                      {lang === "en" ? "Key players: location, founding, scale & market overview (public data)" : "主要プレイヤーの所在地・設立・規模・市場の骨子（公開情報ベース）"}
                    </p>
                    <p className="companies-disclaimer">{COMPANIES_DISCLAIMER}</p>
                  </div>
                  <Suspense fallback={<div className="loading">読み込み中...</div>}>
                  {filteredCompanies.length > 0 ? (
                    <div className="companies-stack">
                      {filteredCompanies.map((c) => (
                        <CompanyCard key={c.id} company={c} />
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">{lang === "en" ? "No matching companies" : "該当する企業がありません"}</div>
                  )}
                  </Suspense>
                </>
              ) : (
                <div
                  id="guide-subtab-panel"
                  role="tabpanel"
                  aria-labelledby={`guide-subtab-${guideTab}`}
                >
                  <Suspense fallback={<div className="loading">読み込み中...</div>}>
                  {guideTab === "setup" ? (
                    <GuideSetupPanel />
                  ) : guideTab === "rules" ? (
                    <GuideRulesPanel vibeGuide={vibeGuide} />
                  ) : guideTab === "practical" ? (
                    <GuidePracticalPanel vibeGuide={vibeGuide} />
                  ) : guideTab === "media" ? (
                    <MediaToolsGuidePanel
                      mediaTaxonomy={mediaGuide.mediaTaxonomy}
                    />
                  ) : (
                    <GlossaryGuidePanel
                      glossaryGenres={glossaryGuide.glossary}
                    />
                  )}
                  </Suspense>
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
    </LangContext.Provider>
  );
}
