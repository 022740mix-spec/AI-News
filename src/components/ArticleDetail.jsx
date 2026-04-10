import { Fragment, useState, useEffect, useCallback, useContext, useRef } from "react";
import { CATEGORIES, renderStars, getArticleNewsYmd } from "../data/articleHelpers.js";
import { LangContext } from "../context/LangContext.js";
import { getCategoryIcon } from "../constants.js";
import { richArticleText, richInlineLine, parseCodeBlock, CopyableCodeBlock } from "../utils/richText.jsx";
import { resolveMediaSrc } from "../utils/seo.js";
import { formatPickDate, formatWeekRoundupPeriodJp } from "../utils/dateUtils.js";
import { ShareBtn } from "./ArticleList.jsx";

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

/** 元報道・公式ドキュメント（2次サイトとしての出典明示） */
function ArticlePrimarySources({ sources }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  if (!sources?.length) return null;
  return (
    <section
      className="detail-primary-sources"
      aria-labelledby="primary-sources-heading"
    >
      <h2 id="primary-sources-heading" className="detail-section-title">
        {en ? "Primary Sources" : "元記事・一次情報"}
      </h2>
      <p className="detail-primary-sources__lead">
        {en
          ? "Our articles are summaries. For definitive information on facts, contracts, pricing, and terms, please refer to the primary sources below."
          : "当サイトの記事は要約・整理です。事実関係・契約・価格・提供条件の判断は、次の一次情報・報道原文・公式ドキュメントを優先してご確認ください。"}
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

/** X (Twitter) 埋め込み — widgets.js の createTweet API を使用 */
function XEmbed({ url, caption }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | loaded | failed
  const tweetId = url.match(/status\/(\d+)/)?.[1];

  useEffect(() => {
    if (!containerRef.current || !tweetId) return;
    const el = containerRef.current;
    el.innerHTML = "";
    setStatus("loading");

    let cancelled = false;
    let failTimer;

    const render = () => {
      if (cancelled) return;
      clearTimeout(failTimer);
      window.twttr.widgets
        .createTweet(tweetId, el, { dnt: true, theme: "dark" })
        .then((embedEl) => {
          if (cancelled) return;
          setStatus(embedEl ? "loaded" : "failed");
        })
        .catch(() => {
          if (!cancelled) setStatus("failed");
        });
    };

    // widgets.js をまだ読み込んでいなければ1回だけ追加
    if (!document.querySelector('script[src*="platform.twitter.com/widgets.js"]') &&
        !document.querySelector('script[src*="platform.x.com/widgets.js"]')) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.head.appendChild(script);
    }

    if (window.twttr?.widgets) {
      render();
    } else {
      const check = setInterval(() => {
        if (window.twttr?.widgets) {
          clearInterval(check);
          render();
        }
      }, 300);
      // widgets.js の読み込み自体が失敗した場合のみタイムアウト
      failTimer = setTimeout(() => {
        clearInterval(check);
        if (!cancelled) setStatus((prev) => prev !== "loaded" ? "failed" : prev);
      }, 15000);
      return () => { cancelled = true; clearInterval(check); clearTimeout(failTimer); };
    }

    return () => { cancelled = true; clearTimeout(failTimer); };
  }, [tweetId]);

  // tweetId が取れない or 読み込み失敗 → リンクボタンで表示
  if (!tweetId || status === "failed") {
    return (
      <figure className="article-embed article-embed--x">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-embed__x-link"
        >
          X（Twitter）でポストを見る
        </a>
        {caption ? <figcaption className="article-figure__caption">{caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <figure className="article-embed article-embed--x">
      <div ref={containerRef} />
      {status === "loading" && (
        <p className="article-embed__x-loading">ポストを読み込み中…</p>
      )}
      {caption ? <figcaption className="article-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}

/** YouTube 埋め込み */
function YouTubeEmbed({ url, caption }) {
  // youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID に対応
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/)?.[1];
  if (!videoId) return null;
  return (
    <figure className="article-embed article-embed--youtube">
      <div className="article-embed__ratio">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption ? <figcaption className="article-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}

/** 埋め込みの振り分け */
function ArticleEmbed({ embed }) {
  if (embed.type === "x") return <XEmbed url={embed.url} caption={embed.caption} />;
  if (embed.type === "youtube") return <YouTubeEmbed url={embed.url} caption={embed.caption} />;
  return null;
}

/** トップ：WEBデザインギャラリー風「本日の1本」 */
function ArticleProse({ article }) {
  const figures = article.figures ?? [];
  const tables = article.tables ?? [];
  const charts = article.charts ?? [];
  const embeds = article.embeds ?? [];
  const figuresAfter = (i) => figures.filter((f) => f.afterParagraph === i);
  const tablesAfter = (i) => tables.filter((t) => t.afterParagraph === i);
  const chartsAfter = (i) => charts.filter((c) => c.afterParagraph === i);
  const embedsAfter = (i) => embeds.filter((e) => e.afterParagraph === i);
  return (
    <div className="prose prose--article">
      {article.body.map((p, i) => {
        const cb = parseCodeBlock(p);
        const headingMatch = typeof p === "string" && p.match(/^(#{2,4})\s+(.+)$/);
        return (
        <Fragment key={i}>
          {cb.isCode
            ? <CopyableCodeBlock code={cb.code} lang={cb.lang} />
            : headingMatch
            ? (() => { const Tag = `h${headingMatch[1].length + 1}`; return <Tag className="prose-section-heading">{richArticleText(headingMatch[2], `p${i}-`)}</Tag>; })()
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
          {embedsAfter(i).map((e, ei) => (
            <ArticleEmbed key={`embed-${i}-${ei}`} embed={e} />
          ))}
        </Fragment>
      );
      })}
    </div>
  );
}

function ArticleDetail({
  article: articleMeta,
  onBack,
  onTagClick,
  relatedArticles,
  onOpenRelated,
}) {
  const [bodyData, setBodyData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    // 既に本文がある場合（互換レイヤー経由）はそのまま使う
    if (articleMeta.body) {
      setBodyData(null);
      return;
    }
    import("../data/articlesBody.js").then((mod) => {
      if (!cancelled) setBodyData(mod.default[articleMeta.id] || {});
    });
    return () => { cancelled = true; };
  }, [articleMeta.id, articleMeta.body]);

  // 本文がメタに含まれていればそのまま、なければ動的ロード分をマージ
  const article = articleMeta.body
    ? articleMeta
    : bodyData
      ? { ...articleMeta, ...bodyData }
      : null;

  const cat = CATEGORIES[articleMeta.category];
  const lang = useContext(LangContext);
  const en = lang === "en";

  if (!article) {
    return (
      <div className="loading" style={{ padding: "3rem", textAlign: "center" }}>
        {en ? "Loading article…" : "記事を読み込み中…"}
      </div>
    );
  }

  return (
    <div className="app-inner">
      <ReadingProgress />
      <div className="detail-wrap">
        <button
          type="button"
          className="detail-back-btn desktop-only"
          onClick={onBack}
        >
          {en ? "← Back" : "← 一覧へ"}
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
                    {en ? "Rating (5-point scale)" : "評価（5段階）"}
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
                    {en ? "Rating" : "評価"}
                  </div>
                  <div style={{ fontSize: 14, color: "#fbbf24" }}>
                    {renderStars(article.rating)}
                  </div>
                </div>
              ) : null}
              {article.company ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    {en ? "Developer" : "開発元"}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>
                    {article.company}
                  </div>
                </div>
              ) : null}
              {article.model ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    {en ? "Model" : "モデル"}
                  </div>
                  <div style={{ fontSize: 13, color: cat.color, fontWeight: 500 }}>
                    {article.model}
                  </div>
                </div>
              ) : null}
              {article.pricing ? (
                <div>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>
                    {en ? "Pricing" : "料金"}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text)" }}>{article.pricing}</div>
                </div>
              ) : null}
            </div>
          ) : null}

          <section className="detail-lead" aria-labelledby="detail-lead-heading">
            <h2 id="detail-lead-heading" className="detail-section-title">
              {en ? "Summary" : "概要"}
            </h2>
            <p className="detail-excerpt">
              {richArticleText(article.excerpt, "detail-ex-")}
            </p>
          </section>

          <section className="detail-body" aria-labelledby="detail-body-heading">
            <h2 id="detail-body-heading" className="detail-section-title">
              {en ? "Article" : "記事本文"}
            </h2>
            {en && (
              <p className="lang-notice" style={{ fontSize: 13, color: "var(--muted)", background: "var(--surface-solid)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0.75rem 1rem", marginBottom: "1rem" }}>
                Articles are written in Japanese. To read in English, please use your browser's built-in translation feature (e.g. Chrome: right-click → "Translate to English").
              </p>
            )}
            <ArticleProse article={article} />
          </section>

          {relatedArticles?.length ? (
            <section
              className="detail-related"
              aria-labelledby="detail-related-heading"
              style={{ marginBottom: "1.5rem" }}
            >
              <h2 id="detail-related-heading" className="detail-section-title">
                {en ? "Related Articles" : "関連記事"}
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

export default ArticleDetail;
export { ArticlePrimarySources, ReadingProgress };
