import { Fragment, useState, useContext } from "react";
import { ARTICLES, renderStars } from "../data/aiToolsData.js";
import { LangContext } from "../context/LangContext.js";
import { REVIEW_CATEGORIES, RATING_EXPLAINER, MODEL_COMPARISON, BENCHMARK_CONFIGS } from "../constants.js";
import { resolveMediaSrc } from "../utils/seo.js";

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
  const lang = useContext(LangContext);
  const en = lang === "en";
  const st = company.stock;
  return (
    <article id={`company-${company.id}`} className="company-card">
      <div className="company-card__head">
        {company.logo ? (
          <img
            src={resolveMediaSrc(company.logo)}
            alt={`${company.name} ${en ? "logo" : "ロゴ"}`}
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
          {en ? "Official Site" : "公式サイト"}
          <span className="official-tab-ext" aria-hidden>
            ↗
          </span>
        </a>
      </div>
      {company.legalName ? (
        <p className="company-card__legal">{company.legalName}</p>
      ) : null}
      <dl className="company-dl">
        <dt>{en ? "Country" : "国・地域"}</dt>
        <dd>{company.country}</dd>
        <dt>{en ? "Headquarters" : "本社・拠点"}</dt>
        <dd>{company.hq}</dd>
        <dt>{en ? "Founded" : "設立"}</dt>
        <dd>{company.foundedYear}{en ? "" : "年"}</dd>
        <dt>{en ? "Employees" : "従業員規模"}</dt>
        <dd>{company.employees}</dd>
        <dt>{en ? "Revenue / Scale" : "売上・事業規模"}</dt>
        <dd>{company.revenue}</dd>
        <dt>{en ? "Stock / Capital" : "株式・資本市場"}</dt>
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
        <dt>{en ? "Key Products" : "主要プロダクト"}</dt>
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

export {
  BenchmarkChart,
  ModelComparisonSection,
  RatingExplainer,
  ReviewComparisonTable,
  ReviewTabBar,
  CompanyCard,
};
