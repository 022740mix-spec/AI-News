import { useState, useCallback, useContext } from "react";
import { CATEGORIES, renderStars, getArticleNewsYmd } from "../data/articleHelpers.js";
import { LangContext, L } from "../context/LangContext.js";
import { FILTERS, TYPE_FILTERS, getCategoryIcon } from "../constants.js";
import { richArticleText } from "../utils/richText.jsx";
import { resolveMediaSrc } from "../utils/seo.js";
import { formatPickDate, formatWeekRoundupPeriodJp } from "../utils/dateUtils.js";

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

function TypeFilterBar({ active, setActive }) {
  const lang = useContext(LangContext);
  return (
    <nav className="type-filter-nav" aria-label={lang === "en" ? "Article type" : "記事タイプ"}>
      <div className="type-filter-inner">
        {TYPE_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`type-filter-tab${active === f.id ? " is-active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {L(f, lang)}
          </button>
        ))}
      </div>
    </nav>
  );
}

function FilterBar({ active, setActive }) {
  const lang = useContext(LangContext);
  return (
    <nav className="filter-nav" aria-label={lang === "en" ? "Category" : "カテゴリ"}>
      <div className="filter-nav-inner">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-tab${active === f.id ? " is-active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {L(f, lang)}
          </button>
        ))}
      </div>
    </nav>
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

export { Pagination, TypeFilterBar, FilterBar, ShareBtn, HeroToday, ArticleCard };
