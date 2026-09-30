import { useContext, useMemo, useState } from "react";
import { LangContext } from "../context/LangContext.js";
import { getSiteTodayYmd } from "../data/articleHelpers.js";
import { CORRECTION_BADGE_DAYS, isWithinDays, useArticleUpdates, useUpdates } from "../utils/updatesData.js";

/**
 * 更新履歴ページ・記事冒頭の帯・一覧のバッジ。
 *
 * 強さの付け方（今日1日だけで40本近くが更新されており、全部を同じ強さで
 * 出すとノイズになるため）:
 *   訂正・取り下げ … 色付きの左線と種別ラベル、要約は本文色
 *   追記・月次見直し … 線なし、種別は文字だけ、要約は控えめな色
 */

const FILTERS = [
  { id: "all", label: "すべて", en: "All" },
  { id: "correction", label: "訂正", en: "Corrections" },
  { id: "addendum", label: "追記", en: "Additions" },
  { id: "monthly", label: "月次見直し", en: "Monthly reviews" },
  { id: "retraction", label: "取り下げ", en: "Retractions" },
];

const KIND_EN = { correction: "Correction", addendum: "Addition", monthly: "Monthly review", retraction: "Retraction" };

const PAGE_SIZE = 40;

/**
 * 種別で絞り込んだとき、同じ日の訂正にまとめられた追記・月次見直しは、
 * その種別の要約・強さで出し直す（「月次見直し」を選んだのに、訂正の強い行が並ばないように）。
 */
function asKind(item, kind) {
  if (kind === "all" || item.kind === kind) return item;
  const part = item.also?.find((x) => x.kind === kind);
  if (!part) return item;
  const rest = [{ kind: item.kind, kindLabel: item.kindLabel, summary: item.summary }, ...item.also.filter((x) => x !== part)];
  const base = { ...item };
  delete base.ratingChange;
  return { ...base, kind, kindLabel: part.kindLabel, summary: part.summary, also: rest };
}

function kindLabel(item, kind, en) {
  if (en) return KIND_EN[kind] ?? kind;
  return kind === item.kind ? item.kindLabel : item.also?.find((x) => x.kind === kind)?.kindLabel ?? kind;
}

function UpdateRow({ item, en, onOpen }) {
  const strong = item.kind === "correction" || item.kind === "retraction";
  const others = (item.also ?? []).map((x) => x.kind).filter((k, i, arr) => k !== item.kind && arr.indexOf(k) === i);
  const rating = item.ratingChange;
  return (
    <li className={`updates-row${strong ? " updates-row--strong" : ""}${item.kind === "retraction" ? " updates-row--retraction" : ""}`}>
      <div className="updates-row__meta">
        <span className={`updates-kind${strong ? ` updates-kind--${item.kind}` : ""}`}>{kindLabel(item, item.kind, en)}</span>
        {rating ? (
          <span className="updates-rating" title={en ? "Overall rating changed" : "総合評価（★）の変更"}>
            {`★${rating.from}→${rating.to}`}
          </span>
        ) : null}
        {others.length > 0 ? (
          <span className="updates-also">
            {en ? "also: " : "ほか "}
            {others.map((k) => kindLabel(item, k, en)).join("・")}
          </span>
        ) : null}
        {item.dateEstimated ? (
          <span className="updates-also" title={en ? "No date in the article; the publication date is used" : "本文に日付が無いため、掲載日で示しています"}>
            {en ? "date estimated" : "日付は推定"}
          </span>
        ) : null}
      </div>
      <a
        className="updates-row__title"
        href={`?a=${encodeURIComponent(item.id)}`}
        onClick={(e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
          e.preventDefault();
          onOpen(item.id);
        }}
      >
        {item.title}
      </a>
      <p className="updates-row__summary">{item.summary}</p>
    </li>
  );
}

function UpdatesPage({ onOpenArticle }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  const { status, data } = useUpdates();
  const [filter, setFilter] = useState("all");
  const [shown, setShown] = useState(PAGE_SIZE);

  const items = useMemo(() => {
    if (!data) return [];
    return filter === "all" ? data.items : data.items.filter((it) => it.kinds.includes(filter)).map((it) => asKind(it, filter));
  }, [data, filter]);

  const groups = useMemo(() => {
    const out = [];
    for (const it of items.slice(0, shown)) {
      const last = out[out.length - 1];
      if (last && last.date === it.date) last.rows.push(it);
      else out.push({ date: it.date, rows: [it] });
    }
    return out;
  }, [items, shown]);

  const counts = data?.kindCountsAny ?? {};

  return (
    <section className="updates-page" aria-labelledby="updates-title">
      <div className="section-feed">
        <h2 className="section-feed__title" id="updates-title">
          {en ? "Update history" : "更新履歴"}
        </h2>
        <p className="section-feed__meta">
          {en
            ? "Corrections, additions, monthly reviews and retractions recorded at the end of each article, newest first."
            : "各記事の末尾に記録した訂正・追記・月次見直し・取り下げを、日付の新しい順に並べています。同じ記事の同じ日の更新は1行にまとめています。"}
        </p>
        <p className="section-feed__meta section-feed__meta--hint">
          {en ? "Subscribe: " : "購読: "}
          <a href="./updates.xml" className="prose-link" target="_blank" rel="noopener noreferrer">
            {en ? "Atom feed of updates" : "更新履歴の Atom フィード"}
          </a>
        </p>
      </div>

      <div className="updates-filter" role="group" aria-label={en ? "Filter by type" : "種別で絞り込み"}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`updates-filter__btn${filter === f.id ? " is-active" : ""}`}
            aria-pressed={filter === f.id}
            onClick={() => {
              setFilter(f.id);
              setShown(PAGE_SIZE);
            }}
          >
            {en ? f.en : f.label}
            {data ? <span className="updates-filter__count">{f.id === "all" ? data.count : counts[f.id] ?? 0}</span> : null}
          </button>
        ))}
      </div>

      {status === "loading" ? <div className="loading">{en ? "Loading…" : "読み込み中..."}</div> : null}
      {status === "error" ? (
        <div className="empty-state" role="alert">
          {en ? "Could not load the update history. Please reload." : "更新履歴を読み込めませんでした。時間をおいて再読み込みしてください。"}
        </div>
      ) : null}
      {data && items.length === 0 ? <div className="empty-state">{en ? "Nothing here." : "該当する更新はありません。"}</div> : null}

      {groups.map((g) => (
        <div key={g.date} className="updates-day">
          <h3 className="updates-day__head">
            {g.date}
            <span className="updates-day__count">{en ? `${g.rows.length}` : `${g.rows.length}件`}</span>
          </h3>
          <ul className="updates-list">
            {g.rows.map((it) => (
              <UpdateRow key={`${it.id}-${it.date}`} item={it} en={en} onOpen={onOpenArticle} />
            ))}
          </ul>
        </div>
      ))}

      {items.length > shown ? (
        <div className="updates-more">
          <button type="button" className="updates-more__btn" onClick={() => setShown((n) => n + PAGE_SIZE)}>
            {en ? `Show more (${items.length - shown} left)` : `さらに表示（残り ${items.length - shown} 件）`}
          </button>
        </div>
      ) : null}
    </section>
  );
}

/** 一覧のカード・ヒーローに出す小さなバッジ（直近の訂正だけ）。 */
function CorrectionBadge({ ymd }) {
  const lang = useContext(LangContext);
  if (!ymd) return null;
  const [, m, d] = ymd.split("-").map(Number);
  const en = lang === "en";
  return (
    <span
      className="correction-badge"
      title={en ? `Corrected on ${ymd}` : `${ymd} に訂正されました`}
    >
      {en ? `Corrected ${m}/${d}` : `訂正あり ${m}/${d}`}
    </span>
  );
}

/**
 * 一覧のカードのバッジ。**直近 CORRECTION_BADGE_DAYS 日以内に訂正された記事だけ**に出す。
 * 追記・月次見直しには出さない（毎日大量に発生し、全カードに付くとノイズになる）。
 * 取り下げ記事は、タイトルの「【取り下げ】」で分かるので付けない。
 */
function ArticleCorrectionBadge({ articleId }) {
  const entry = useArticleUpdates(articleId);
  if (!entry || entry.retraction || !entry.correction) return null;
  if (!isWithinDays(entry.correction, getSiteTodayYmd(), CORRECTION_BADGE_DAYS)) return null;
  return <CorrectionBadge ymd={entry.correction} />;
}

/**
 * 記事冒頭の帯。訂正または追記（月次見直しだけの記事は対象外）がある記事に出す。
 * 帯のリンクは2つ: この記事の末尾の履歴へ、更新履歴ページへ。
 */
function ArticleUpdateBar({ entry, articleId, onOpenUpdates }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  if (!entry || entry.retraction || (!entry.correction && !entry.addendum)) return null;

  let text;
  if (entry.correction) {
    text = en ? `This article was corrected on ${entry.correction}.` : `この記事は ${entry.correction} に訂正されました。`;
    if (entry.addendum && entry.addendum > entry.correction) {
      text += en ? ` Updated again on ${entry.addendum}.` : `その後 ${entry.addendum} に追記されました。`;
    }
  } else {
    text = en ? `This article was updated on ${entry.addendum}.` : `この記事は ${entry.addendum} に追記されました。`;
  }

  return (
    <div className={`article-update-bar${entry.correction ? " article-update-bar--correction" : ""}`} role="note">
      <span className="article-update-bar__text">{text}</span>
      <span className="article-update-bar__links">
        <a
          href={`?a=${encodeURIComponent(articleId)}#article-history`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("article-history")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {en ? "See this article's history" : "履歴を見る"}
        </a>
        <a
          href="?view=updates"
          onClick={(e) => {
            e.preventDefault();
            onOpenUpdates();
          }}
        >
          {en ? "All updates" : "更新履歴一覧"}
        </a>
      </span>
    </div>
  );
}

export { UpdatesPage, CorrectionBadge, ArticleCorrectionBadge, ArticleUpdateBar };
