import { useContext } from "react";
import { CATEGORIES, getArticleNewsYmd } from "../data/articleHelpers.js";
import { LangContext } from "../context/LangContext.js";
import { resolveMediaSrc } from "../utils/seo.js";
import { parseDate } from "../utils/dateUtils.js";
import { handleKeyActivate } from "../utils/a11y.js";
import { IconNewspaper, IconStar, IconBook, IconWrench, IconBuilding } from "./Icons.jsx";

function HomePage({ articles, onSelect, onSection }) {
  const lang = useContext(LangContext);
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
        <section className={`home-hero${hero.coverImage?.src ? " home-hero--has-cover" : ""}`} role="button" tabIndex={0} onClick={() => onSelect(hero)} onKeyDown={handleKeyActivate(() => onSelect(hero))}>
          <div className="home-hero__aurora" aria-hidden="true" />
          {hero.coverImage?.src ? (
            <div className="home-hero__visual">
              <img src={resolveMediaSrc(hero.coverImage.src)} alt={hero.coverImage.alt} loading="eager" />
            </div>
          ) : null}
          <div className="home-hero__content">
            <span className="home-hero__label">{lang === "en" ? "Latest News" : "最新ニュース"}</span>
            <h2 className="home-hero__title">{hero.title}</h2>
            <p className="home-hero__excerpt">
              {hero.excerpt.length > 120
                ? hero.excerpt.replace(/\*\*/g, "").slice(0, 120) + "…"
                : hero.excerpt.replace(/\*\*/g, "")}
            </p>
            <span className="home-hero__cta">{lang === "en" ? "Read article →" : "記事を読む →"}</span>
          </div>
        </section>
      ) : null}

      <div className="home-page__body">
        {recentNews.length > 0 ? (
          <section className="home-section">
            <div className="home-section__header">
              <h2 className="home-section__title">{lang === "en" ? "Recent News" : "最近のニュース"}</h2>
              <button className="home-section__more" onClick={() => onSection("articles")}>
                {lang === "en" ? "View all →" : "すべて見る →"}
              </button>
            </div>
            <div className="home-cards">
              {recentNews.map((a) => (
                <article key={a.id} className={`home-card${a.coverImage?.src ? " home-card--has-thumb" : ""}`} role="button" tabIndex={0} onClick={() => onSelect(a)} onKeyDown={handleKeyActivate(() => onSelect(a))}>
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
          <h2 className="home-section__title">{lang === "en" ? "Content" : "コンテンツ"}</h2>
          <div className="home-nav-cards">
            <button className="home-nav-card" onClick={() => onSection("articles")}>
              <span className="home-nav-card__icon"><IconNewspaper /></span>
              <span className="home-nav-card__label">{lang === "en" ? "News" : "ニュース"}</span>
              <span className="home-nav-card__desc">{lang === "en" ? "Latest AI dev tool news" : "AI開発ツールの最新ニュース"}</span>
            </button>
            <button className="home-nav-card" onClick={() => onSection("reviews")}>
              <span className="home-nav-card__icon"><IconStar /></span>
              <span className="home-nav-card__label">{lang === "en" ? "Reviews" : "レビュー"}</span>
              <span className="home-nav-card__desc">{lang === "en" ? "Tool comparisons & ratings" : "ツール比較と評価"}</span>
            </button>
            <button className="home-nav-card" onClick={() => onSection("guide")}>
              <span className="home-nav-card__icon"><IconBook /></span>
              <span className="home-nav-card__label">{lang === "en" ? "Guide" : "ガイド"}</span>
              <span className="home-nav-card__desc">{lang === "en" ? "Setup & practical techniques" : "セットアップと実践テクニック"}</span>
            </button>
            <button className="home-nav-card" onClick={() => onSection("tools")}>
              <span className="home-nav-card__icon"><IconWrench /></span>
              <span className="home-nav-card__label">{lang === "en" ? "Tools" : "ツール別"}</span>
              <span className="home-nav-card__desc">Claude Code / Cursor / Codex / Copilot</span>
            </button>
            <button className="home-nav-card" onClick={() => onSection("companies")}>
              <span className="home-nav-card__icon"><IconBuilding /></span>
              <span className="home-nav-card__label">{lang === "en" ? "Companies" : "AI企業"}</span>
              <span className="home-nav-card__desc">{lang === "en" ? "AI company profiles" : "AI企業のプロファイル"}</span>
            </button>
          </div>
        </section>

        <section className="home-section">
          <h2 className="home-section__title">{lang === "en" ? "Recommended Podcasts" : "おすすめポッドキャスト"}</h2>
          <p className="home-section__desc">{lang === "en" ? "Top leaders in AI share candid insights and future predictions." : "AI 業界のトップリーダーが語る、公式発表では聞けない本音と未来予測。"}</p>
          <div className="home-podcast-links">
            {[
              { name: "Dwarkesh Podcast", desc: lang === "en" ? "Deep-dive AI CEO interviews" : "AI CEO の深掘りインタビュー", url: "https://open.spotify.com/show/4JH4tybY1zX6e5hjCwU6gF" },
              { name: "Lex Fridman Podcast", desc: lang === "en" ? "Technical talks with researchers" : "研究者・エンジニア視点の技術対談", url: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL" },
              { name: "TBPN", desc: lang === "en" ? "Silicon Valley live updates" : "シリコンバレーのライブ感速報", url: "https://open.spotify.com/show/2L6WMqY3GUPCGBD0dX6p00" },
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

export default HomePage;
