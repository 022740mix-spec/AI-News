import { useContext } from "react";
import { CATEGORIES, getArticleNewsYmd, getArticlePublishYmd } from "../data/articleHelpers.js";
import { LangContext } from "../context/LangContext.js";
import { resolveMediaSrc } from "../utils/seo.js";
import { parseDate } from "../utils/dateUtils.js";
import { handleKeyActivate } from "../utils/a11y.js";
import { IconNewspaper, IconStar, IconBook, IconWrench, IconBuilding } from "./Icons.jsx";

function HomePage({ articles, onSelect, onSection }) {
  const lang = useContext(LangContext);
  // トップは「サイトに何が増えたか」を見せる場所なので、**掲載日**で並べる。
  // 出来事の日で並べると、今日公開した記事が数日前の記事の下に埋もれ、
  // 読者からは何も増えていないように見える（2026年9月4日に実際に起きた）。
  // 出来事の日は下のカードに併記するので、どちらも隠していない。
  const sorted = [...articles].sort((a, b) => {
    const da = parseDate(getArticlePublishYmd(a));
    const db = parseDate(getArticlePublishYmd(b));
    if (db !== da) return db - da;
    // 同じ日に複数公開したときは、出来事の新しいほうを上にする
    return parseDate(getArticleNewsYmd(b)) - parseDate(getArticleNewsYmd(a));
  });

  const hero = sorted.find((a) => {
    const scope = a.heroScope ?? "day";
    return scope !== "none";
  });

  // 朝刊（7時の回）・夕刊（15時の回）ごとに、その回で公開した記事を全件並べる。
  // 従来は最新4件しか出ず、1日に十数件公開しても大半がトップで見えなかった。
  // 版の判定はメタの edition（朝の回=morning / 午後の回=afternoon）。
  // edition が無い記事は掲載日だけのグループに落とす。
  // ヒーロー（最新1件）は直上に大きく出るため、各版の一覧からは除く。
  const CATEGORY_WEIGHT = { model: 30, cli: 20, product: 15, media: 10, regulation: 10, editor: 5, data: 5, special: 0 };
  const importance = (a) =>
    (a.pinned ? 1000 : 0) +
    (a.type === "feature" ? 40 : 0) +
    (CATEGORY_WEIGHT[a.category] ?? 0) +
    (a.coverImage?.src ? 10 : 0);
  const editionRank = (e) => (e === "afternoon" ? 0 : e === "morning" ? 1 : 2);
  const editionGroups = (() => {
    const pool = sorted.filter(
      (a) => a.type !== "review" && a.id !== hero?.id && (a.heroScope ?? "day") !== "week"
    );
    const byKey = new Map();
    for (const a of pool) {
      const ymd = getArticlePublishYmd(a);
      const key = `${ymd}|${a.edition ?? ""}`;
      if (!byKey.has(key)) byKey.set(key, { ymd, edition: a.edition ?? null, items: [] });
      byKey.get(key).items.push(a);
    }
    const groups = [...byKey.values()];
    for (const g of groups) {
      g.items.sort((x, y) => importance(y) - importance(x));
    }
    groups.sort((g1, g2) => {
      if (g1.ymd !== g2.ymd) return g2.ymd.localeCompare(g1.ymd, "en");
      return editionRank(g1.edition) - editionRank(g2.edition);
    });
    return groups.slice(0, 2);
  })();

  const WEEKDAYS_JA = ["日", "月", "火", "水", "木", "金", "土"];
  const formatEditionDate = (ymd) => {
    const d = parseDate(ymd);
    if (lang === "en") {
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${WEEKDAYS_JA[d.getDay()]}）`;
  };
  const editionLabel = (edition) =>
    edition === "morning"
      ? (lang === "en" ? "Morning Edition" : "朝刊")
      : edition === "afternoon"
        ? (lang === "en" ? "Evening Edition" : "夕刊")
        : (lang === "en" ? "Articles" : "その日の記事");

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
        {editionGroups.length > 0 ? (
          <section className="home-section">
            <div className="home-section__header">
              <h2 className="home-section__title">{lang === "en" ? "Latest Editions" : "最新の朝刊・夕刊"}</h2>
              <button className="home-section__more" onClick={() => onSection("articles")}>
                {lang === "en" ? "View all →" : "すべて見る →"}
              </button>
            </div>
            {editionGroups.map((g) => {
              const lead = g.items.slice(0, 3);
              const restItems = g.items.slice(3);
              return (
                <div className="home-edition" key={`${g.ymd}|${g.edition ?? ""}`}>
                  <div className="home-edition__header">
                    <h3 className="home-edition__title">
                      {formatEditionDate(g.ymd)} {editionLabel(g.edition)}
                    </h3>
                    <span className="home-edition__count">
                      {lang === "en" ? `${g.items.length} articles` : `${g.items.length}件`}
                    </span>
                  </div>
                  <div className="home-cards home-cards--lead">
                    {lead.map((a, i) => (
                      <article key={a.id} className={`home-card home-card--lead${a.coverImage?.src ? " home-card--has-thumb" : ""}`} role="button" tabIndex={0} onClick={() => onSelect(a)} onKeyDown={handleKeyActivate(() => onSelect(a))}>
                        {i === 0 ? (
                          <span className="home-card__badge">{lang === "en" ? "Top Story" : "一面トップ"}</span>
                        ) : null}
                        {a.coverImage?.src ? (
                          <div className="home-card__thumb">
                            <img src={resolveMediaSrc(a.coverImage.src)} alt={a.coverImage.alt} loading="lazy" />
                          </div>
                        ) : null}
                        <span className="home-card__category">{CATEGORIES[a.category]?.label}</span>
                        <h3 className="home-card__title">{a.title}</h3>
                        <span className="home-card__date">
                          {getArticlePublishYmd(a)}
                          {getArticleNewsYmd(a) && getArticleNewsYmd(a) !== getArticlePublishYmd(a) ? (
                            <span className="home-card__newsdate">
                              {lang === "en"
                                ? ` (event ${getArticleNewsYmd(a)})`
                                : `（出来事 ${getArticleNewsYmd(a)}）`}
                            </span>
                          ) : null}
                        </span>
                      </article>
                    ))}
                  </div>
                  {restItems.length > 0 ? (
                    <ul className="home-edition__rows">
                      {restItems.map((a) => (
                        <li key={a.id} className="home-row" role="button" tabIndex={0} onClick={() => onSelect(a)} onKeyDown={handleKeyActivate(() => onSelect(a))}>
                          <span className="home-row__category">{CATEGORIES[a.category]?.label}</span>
                          <span className="home-row__title">{a.title}</span>
                          {getArticleNewsYmd(a) && getArticleNewsYmd(a) !== getArticlePublishYmd(a) ? (
                            <span className="home-row__date">
                              {lang === "en" ? `event ${getArticleNewsYmd(a)}` : `出来事 ${getArticleNewsYmd(a)}`}
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
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
