/**
 * 出典 URL の到達性チェック
 *
 * ## なぜ必要か
 *
 * 2026年8月の棚卸で、記事が唯一の一次ソースとして挙げていた URL の存在を
 * 確認できず、記事ごと取り下げる事態が起きた（cursor-windsurf-merge）。
 * `review-check.mjs` の規則21は「primarySources が外部 https URL か」は
 * 検査するが、**その URL が実在するかは見ていない**。その穴を埋める。
 *
 * ## 設計上もっとも重要な点: 「到達できない = 死んでいる」ではない
 *
 * 次のいずれも、URL 自体は正常なのに到達に失敗する。
 *
 * - 実行環境のネットワークポリシーがホストを拒否している（本番の agent 環境では
 *   docs.cursor.com / developers.openai.com 等が CONNECT 段階で 403 になる）
 * - Cloudflare 等の bot 対策が非ブラウザからのアクセスを 403 で弾く
 * - レート制限（429）、一時的な 5xx
 *
 * これらを「リンク切れ」と報告すると、**正しい出典を誤って削除する**という、
 * 誤報を載せるのと同種の事故になる。したがって本スクリプトは
 * **DEAD（404 / 410 / 名前解決失敗）だけをエラーとして扱い**、
 * それ以外の失敗は INDETERMINATE として人間の目視に回す。
 *
 * 使い方:
 *   node scripts/check-source-urls.mjs                # 全記事の primarySources を検査
 *   node scripts/check-source-urls.mjs --file=u.txt   # 1行1URL のファイルを検査
 *   node scripts/check-source-urls.mjs --json         # JSON で出力
 *   node scripts/check-source-urls.mjs --concurrency=4 --timeout=20000
 *
 * 終了コード: DEAD が1件でもあれば 1、それ以外は 0
 */

import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, isAbsolute, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const args = process.argv.slice(2);
const getArg = (k, d) => {
  const a = args.find((x) => x.startsWith(`--${k}=`));
  return a ? a.split("=").slice(1).join("=") : d;
};
const asJson = args.includes("--json");
const fileArg = getArg("file", null);
const CONCURRENCY = Number(getArg("concurrency", 6));
const TIMEOUT_MS = Number(getArg("timeout", 20000));

/** 判定区分。DEAD だけが「直すべき」もの。 */
const DEAD = "DEAD";
const OK = "OK";
const INDETERMINATE = "INDETERMINATE";
const SERVER_ERROR = "SERVER_ERROR";

// ── 検査対象の収集 ──
async function collectTargets() {
  if (fileArg) {
    const path = isAbsolute(fileArg) ? fileArg : join(rootDir, fileArg);
    const lines = readFileSync(path, "utf8")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("#"));
    return lines.map((url) => ({ url, where: fileArg }));
  }

  const bodyMod = await import(pathToFileURL(join(rootDir, "src/data/articlesBody.js")).href);
  const body = bodyMod.default || bodyMod.ARTICLES_BODY || {};
  const metaMod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
  const meta = metaMod.ARTICLES_META || metaMod.default || [];
  const retracted = new Set(
    meta.filter((a) => a.status === "retracted" || a.title?.startsWith("【取り下げ】")).map((a) => a.id),
  );

  const seen = new Map(); // url -> Set(articleId)
  for (const [id, entry] of Object.entries(body)) {
    if (retracted.has(id)) continue; // 取り下げ記事の出典は追跡対象外
    for (const s of entry.primarySources || []) {
      if (!s?.url || !/^https?:\/\//i.test(s.url)) continue;
      if (!seen.has(s.url)) seen.set(s.url, new Set());
      seen.get(s.url).add(id);
    }
  }
  return [...seen.entries()].map(([url, ids]) => ({ url, where: [...ids].join(", ") }));
}

// ── ネットワークポリシーで拒否されているホストを事前に把握する ──
// 本番の agent 実行環境ではプロキシが一部ホストを CONNECT 段階で拒否する。
// これを掴んでおくと 403 の切り分け精度が上がる。取れなくても動作に影響しない。
async function fetchPolicyDeniedHosts() {
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  if (!proxy) return new Set();
  try {
    const r = await fetch(`${proxy}/__agentproxy/status`, { signal: AbortSignal.timeout(5000) });
    if (!r.ok) return new Set();
    const j = await r.json();
    return new Set((j.recentRelayFailures || []).map((f) => String(f.host).split(":")[0]));
  } catch {
    return new Set();
  }
}

// ── 1件の検査 ──
async function checkOne(url, deniedHosts) {
  let host = "";
  try {
    host = new URL(url).hostname;
  } catch {
    return { url, status: DEAD, detail: "URL として解釈できません" };
  }

  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        // 素の fetch を弾く実装が多いため、一般的な UA を名乗る。
        // それでも弾かれる場合は INDETERMINATE に落ちる。
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,*/*;q=0.8",
      },
    });
    const code = res.status;
    if (code >= 200 && code < 300) {
      const moved = res.url && res.url !== url ? `→ ${res.url}` : "";
      return { url, status: OK, detail: `HTTP ${code} ${moved}`.trim() };
    }
    if (code === 404 || code === 410) {
      return { url, status: DEAD, detail: `HTTP ${code}（ページが存在しません）` };
    }
    if (code >= 500) {
      return { url, status: SERVER_ERROR, detail: `HTTP ${code}（サーバ側の一時障害の可能性）` };
    }
    // 401 / 403 / 405 / 429 など。ポリシー拒否か bot 対策かの区別がつかない。
    const why = deniedHosts.has(host)
      ? "実行環境のネットワークポリシーがこのホストを拒否しています"
      : "bot 対策・認証要求・レート制限の可能性";
    return { url, status: INDETERMINATE, detail: `HTTP ${code}（${why}）` };
  } catch (e) {
    const code = e?.cause?.code || e?.name || "";
    if (code === "ENOTFOUND" || code === "EAI_AGAIN") {
      return { url, status: DEAD, detail: `名前解決に失敗（${code}）` };
    }
    const why = deniedHosts.has(host) ? "ネットワークポリシーによる拒否の可能性" : "";
    return { url, status: INDETERMINATE, detail: `接続失敗 ${code} ${why}`.trim() };
  }
}

// ── 並列実行（同時接続数を絞る） ──
async function runAll(targets, deniedHosts) {
  const out = [];
  let i = 0;
  const workers = Array.from({ length: Math.max(1, CONCURRENCY) }, async () => {
    while (i < targets.length) {
      const t = targets[i++];
      const r = await checkOne(t.url, deniedHosts);
      out.push({ ...r, where: t.where });
      if (!asJson && out.length % 20 === 0) {
        process.stderr.write(`  ...${out.length}/${targets.length}\n`);
      }
    }
  });
  await Promise.all(workers);
  return out;
}

// ── 実行 ──
const targets = await collectTargets();
const deniedHosts = await fetchPolicyDeniedHosts();

if (!asJson) {
  console.log(`出典 URL の到達性チェック: ${targets.length} 件`);
  if (deniedHosts.size) {
    console.log(`（実行環境のポリシーが拒否しているホスト: ${[...deniedHosts].join(", ")}）`);
  }
  console.log("");
}

const results = await runAll(targets, deniedHosts);
const by = (s) => results.filter((r) => r.status === s);

if (asJson) {
  console.log(JSON.stringify({ total: results.length, results }, null, 2));
} else {
  const dead = by(DEAD);
  const ind = by(INDETERMINATE);
  const srv = by(SERVER_ERROR);

  if (dead.length) {
    console.log(`❌ 到達できません（要対応）: ${dead.length} 件`);
    for (const r of dead) console.log(`   ${r.url}\n     ${r.detail}\n     掲載記事: ${r.where}`);
    console.log("");
  }
  if (srv.length) {
    console.log(`⚠️  サーバ側エラー（時間をおいて再検査）: ${srv.length} 件`);
    for (const r of srv) console.log(`   ${r.url} — ${r.detail}`);
    console.log("");
  }
  if (ind.length) {
    console.log(`❓ 判定不能（人間の目視が必要 / リンク切れとは限らない）: ${ind.length} 件`);
    for (const r of ind) console.log(`   ${r.url}\n     ${r.detail}`);
    console.log("");
  }

  console.log("── 集計 ──");
  console.log(`  到達 OK   : ${by(OK).length}`);
  console.log(`  判定不能  : ${ind.length}`);
  console.log(`  サーバ障害: ${srv.length}`);
  console.log(`  到達不可  : ${dead.length}`);
  console.log("");
  console.log(
    dead.length
      ? "❌ 到達できない URL があります。出典を差し替えるか、記事の訂正を検討してください。"
      : "✅ 到達できない URL はありません。",
  );
  if (ind.length) {
    console.log(
      "   判定不能のものは、ブラウザで開けば見られる場合がほとんどです。**リンク切れとして機械的に削除しないでください。**",
    );
  }
}

process.exit(by(DEAD).length ? 1 : 0);
