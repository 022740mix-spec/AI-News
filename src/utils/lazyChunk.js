/**
 * 遅延読み込みのチャンクが取れなかったときに、自力で立て直す。
 *
 * ── なぜ必要か ──
 * このサイトは記事本文・ガイド・ツール別を別チャンクに分けて遅延読み込みする。
 * チャンクのファイル名にはハッシュが付いており、**デプロイのたびに変わって
 * 古いファイルはサーバから消える**（GitHub Pages はサイト全体を置き換える）。
 *
 * ブラウザに古い `index.html` がキャッシュされていると、そこから参照される
 * **消えたハッシュのチャンク**を取りに行って 404 になる。
 *
 * 厄介なのは、壊れ方が部分的に見えることである。
 *
 * | ページ | 結果 |
 * |---|---|
 * | トップ | 表示される（必要なものが最初に読み込まれている） |
 * | ガイド | 表示される |
 * | **記事ページ** | **白紙**（ArticleDetail と本文データが別チャンク） |
 *
 * 2026年9月4日、朝の更新直後にこれが起きた。読者からは「記事だけ見れない」
 * という形で見える。エラー境界も無かったため、React がツリーごと落ちて
 * `<div id="root"></div>` だけが残っていた。
 *
 * iOS Safari で顕在化しやすいのは HTML のキャッシュが強いためで、
 * **原因は Safari ではなくデプロイとキャッシュの噛み合わせにある。**
 *
 * ── 直し方 ──
 * 取得に失敗したら、**新しい `index.html` を取り直す**。
 * ただの `location.reload()` では同じキャッシュを引く可能性があるため、
 * URL に使い捨てのクエリを付けて別 URL として取得させる。
 * このクエリはルーターが見ないため、画面の状態は変わらない。
 *
 * 無限ループを避けるため、やり直しは**セッション中1回だけ**にする。
 * 2回目は諦めて例外を投げ、呼び出し側のエラー境界に処理させる。
 */

/** 使い捨てのキャッシュ回避クエリ。ルーターはこの名前を見ない */
export const RELOAD_PARAM = "_r";
const ONCE_KEY = "ai-news:chunk-reloaded";

/** sessionStorage はプライベートブラウズ等で例外を投げうるので必ず包む */
function sessionFlag(key, value) {
  try {
    if (value === undefined) return window.sessionStorage.getItem(key);
    if (value === null) window.sessionStorage.removeItem(key);
    else window.sessionStorage.setItem(key, value);
    return value;
  } catch {
    // 読めない環境ではやり直しを1回だけ試みる余地が無いので、
    // 「既にやり直した」とみなして無限ループを防ぐ側に倒す
    return value === undefined ? "1" : value;
  }
}

/**
 * やり直し済みの印を消す。
 * アプリが正常に立ち上がった時点で呼ぶ。これをしないと、
 * 次にデプロイがあったときに1回目のやり直しが使えなくなる。
 */
export function clearChunkReloadFlag() {
  sessionFlag(ONCE_KEY, null);
}

/** URL から使い捨てクエリを取り除く（履歴は増やさない） */
export function stripReloadParam() {
  try {
    const u = new URL(window.location.href);
    if (!u.searchParams.has(RELOAD_PARAM)) return;
    u.searchParams.delete(RELOAD_PARAM);
    window.history.replaceState(window.history.state, "", u.toString());
  } catch {
    // URL を触れない環境では何もしない。表示には影響しない
  }
}

/**
 * `lazy()` に渡す import 関数を包む。
 * 失敗したら1回だけ、キャッシュを避けて読み直す。
 */
export function retryChunk(factory) {
  return () =>
    factory().catch((err) => {
      if (sessionFlag(ONCE_KEY) === "1") throw err;
      sessionFlag(ONCE_KEY, "1");
      try {
        const u = new URL(window.location.href);
        u.searchParams.set(RELOAD_PARAM, Date.now().toString(36));
        window.location.replace(u.toString());
      } catch {
        window.location.reload();
      }
      // 遷移が始まっているので、この Promise は解決させない。
      // ここで解決させると、消えるはずの画面が一瞬エラー表示になる
      return new Promise(() => {});
    });
}
