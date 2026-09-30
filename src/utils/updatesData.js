/**
 * 更新履歴データ（public/updates.json）の取得。
 *
 * 更新履歴ページ・記事冒頭の帯・一覧のバッジが同じ1本のデータを見る。
 * 一覧のカードは十数枚あるので、取得は1回だけにして、結果を共有する。
 * 取得に失敗しても、帯とバッジは何も出さないだけで本文は読める
 * （更新履歴ページだけは、失敗したことを画面に出す）。
 *
 * データは scripts/generate-updates.mjs が本文から生成する。
 */
import { useEffect, useSyncExternalStore } from "react";

/** 一覧のカードに「訂正あり」を出す期間（日）。理由は PR の説明を参照。 */
export const CORRECTION_BADGE_DAYS = 14;

let cached = null; // { status: "loading" | "ready" | "error", data }
let inflight = null;
const listeners = new Set();

function publish(next) {
  cached = next;
  listeners.forEach((fn) => fn(next));
}

function updatesUrl() {
  const base = import.meta.env.BASE_URL ?? "/";
  return base === "./" ? "./updates.json" : `${base.endsWith("/") ? base : `${base}/`}updates.json`;
}

export function loadUpdates() {
  if (cached?.status === "ready") return Promise.resolve(cached.data);
  if (inflight) return inflight;
  publish({ status: "loading", data: null });
  inflight = fetch(updatesUrl(), { credentials: "omit" })
    .then((res) => {
      if (!res.ok) throw new Error(`updates.json ${res.status}`);
      return res.json();
    })
    .then((data) => {
      publish({ status: "ready", data });
      return data;
    })
    .catch(() => {
      inflight = null; // 次に開いたときにやり直せるようにする
      publish({ status: "error", data: null });
      return null;
    });
  return inflight;
}

const LOADING = { status: "loading", data: null };

function subscribe(fn) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

function getSnapshot() {
  return cached ?? LOADING;
}

/** { status, data }。マウント時に取得を始める。 */
export function useUpdates() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  useEffect(() => {
    loadUpdates();
  }, []);
  return state;
}

/** 記事1本ぶんの索引（無ければ null）。 */
export function useArticleUpdates(articleId) {
  const { data } = useUpdates();
  return data?.articles?.[articleId] ?? null;
}

function ymdToUtcDay(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / 86400000;
}

/** 日付（YYYY-MM-DD）が today から数えて days 日以内か。未来日は「今日」扱い。 */
export function isWithinDays(ymd, todayYmd, days) {
  if (!ymd) return false;
  return ymdToUtcDay(todayYmd) - ymdToUtcDay(ymd) < days;
}

/** "2026-09-30" → "9/30" */
export function shortMd(ymd) {
  const [, m, d] = ymd.split("-").map(Number);
  return `${m}/${d}`;
}
