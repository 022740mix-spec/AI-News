/**
 * 累計訪問回数（CountAPI）。クライアントからのみ利用するためキーは公開前提。
 * 無効化: VITE_VISITOR_COUNTER_DISABLED=true
 * 上書き: VITE_VISITOR_COUNT_NS / VITE_VISITOR_COUNT_KEY
 */
const DISABLED =
  import.meta.env.VITE_VISITOR_COUNTER_DISABLED === "true" ||
  import.meta.env.VITE_VISITOR_COUNTER_DISABLED === "1";

const NAMESPACE =
  import.meta.env.VITE_VISITOR_COUNT_NS || "ai-tool-news-cebuilder";
const KEY = import.meta.env.VITE_VISITOR_COUNT_KEY || "site-visits-v1";

const BASE = "https://api.countapi.xyz";

export function isVisitorCounterEnabled() {
  if (DISABLED) return false;
  if (!NAMESPACE || !KEY) return false;
  return true;
}

/** @param {string} path e.g. hit/ns/key */
async function fetchCount(path) {
  const res = await fetch(`${BASE}/${path}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`countapi ${res.status}`);
  const data = await res.json();
  const value = data?.value;
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error("countapi bad payload");
  }
  return value;
}

/** インクリメントして返す */
export function hitVisitorCounter() {
  const path = `hit/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`;
  return fetchCount(path);
}

/** 増やさず現在値のみ */
export function getVisitorCounter() {
  const path = `get/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`;
  return fetchCount(path);
}
