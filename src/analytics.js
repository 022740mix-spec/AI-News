/**
 * Cloudflare Web Analytics ローダー
 *
 * ## なぜ Cloudflare Web Analytics か
 *
 * 本サイトは「個人を特定しない」ことを前提にアクセス傾向のみを把握する。
 * Cloudflare Web Analytics は以下の性質を持つため、この方針に適合する:
 *
 * - **Cookie を使用しない**（同意バナー不要 / ePrivacy 指令の同意要件対象外）
 * - **localStorage / sessionStorage に書き込まない**
 * - **個人を横断的に追跡するフィンガープリントを生成しない**
 * - 収集するのは集計値のみ: ページビュー、リファラー、国、デバイス種別、ブラウザ
 *
 * 取得しないもの: 個人識別子、IP アドレスの保存、行動履歴の紐付け。
 *
 * ## トークンについて
 *
 * `CF_BEACON_TOKEN` は「サイト識別子」であり、**秘密情報ではない**。
 * Cloudflare Web Analytics を導入した全サイトで、この値はページのソースに
 * そのまま出力される（Google Analytics の測定 ID と同じ性質）。
 * この値だけでは Cloudflare アカウントへのアクセスも解析データの閲覧もできない。
 * したがって CLAUDE.md の「認証情報をコミットしない」ポリシーには抵触しない。
 *
 * ## 設定方法
 *
 * 1. https://dash.cloudflare.com → Web Analytics → Add a site
 * 2. サイト URL（https://022740mix-spec.github.io/AI-News/）を登録
 * 3. 発行される JS スニペット内の `token` の値を下の CF_BEACON_TOKEN に設定
 *    （または環境変数 VITE_CF_BEACON_TOKEN を設定）
 *
 * トークン未設定の間はスクリプトを一切読み込まないため、外部への通信は発生しない。
 */

/** Cloudflare Web Analytics のサイト識別子（秘密情報ではない / 未設定なら計測しない） */
const CF_BEACON_TOKEN = import.meta.env?.VITE_CF_BEACON_TOKEN ?? "";

const BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

/**
 * アクセス解析を初期化する。
 * トークンが未設定の場合は何もしない（＝ 外部通信ゼロ）。
 */
export function initAnalytics() {
  if (!CF_BEACON_TOKEN) return;
  if (typeof document === "undefined") return;
  // 二重読み込み防止（StrictMode の再実行対策）
  if (document.querySelector(`script[src="${BEACON_SRC}"]`)) return;

  const script = document.createElement("script");
  script.src = BEACON_SRC;
  script.defer = true;
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
  document.head.appendChild(script);
}

/** 解析が有効かどうか（Footer の表示切り替えに使用） */
export const analyticsEnabled = Boolean(CF_BEACON_TOKEN);
