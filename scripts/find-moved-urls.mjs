/**
 * 到達できなくなった出典 URL の移転先を探す。
 *
 * ## なぜ必要か
 *
 * 404 の大半は「情報が消えた」のではなく「URL が変わった」だけである。
 * 出典を削除すれば記事の裏付けは薄くなるので、まず移転先を探す。
 *
 * ## なぜ Actions で走らせるのか
 *
 * agent の実行環境はネットワークポリシーで大半のホストを拒否する
 * （実測で930件中96件しか到達できない）。Actions には制限が無く、
 * 同じ検査で835件が到達できた。探索はネットワークが開いた側で行う。
 *
 * ## 自動で差し替えない
 *
 * このスクリプトは候補を提示するだけで、記事データを一切変更しない。
 * 実在しない URL を出典に掲げていた事故を起こしたばかりであり、
 * 「それらしい URL」を機械的に当てはめれば同じ事故を繰り返す。
 * 候補の採否は人間（または対話セッション）が判断する。
 *
 * Usage:
 *   node scripts/find-moved-urls.mjs --from-json=/tmp/urls.json
 *   node scripts/find-moved-urls.mjs --from-json=/tmp/urls.json --json
 */
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const fromJson = (args.find((a) => a.startsWith("--from-json=")) || "").split("=")[1];
const timeout = Number((args.find((a) => a.startsWith("--timeout=")) || "").split("=")[1] || 20000);

if (!fromJson) {
  console.error("使い方: node scripts/find-moved-urls.mjs --from-json=<check-source-urls --json の出力>");
  process.exit(2);
}

const UA = "Mozilla/5.0 (compatible; AI-News-linkcheck/1.0)";

async function head(url) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetch(url, {
        method,
        redirect: "follow",
        headers: { "user-agent": UA },
        signal: AbortSignal.timeout(timeout),
      });
      if (res.status !== 405) return { ok: res.ok, status: res.status, url: res.url };
    } catch {
      /* 次の方法を試す */
    }
  }
  return { ok: false, status: 0, url };
}

async function text(url, maxBytes = 8 * 1024 * 1024) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(timeout),
    });
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    if (buf.byteLength > maxBytes) return null;
    return new TextDecoder().decode(buf);
  } catch {
    return null;
  }
}

/**
 * slug を比較用のトークンに割る。
 *
 * 第1階層（/news/ 等）は候補を絞る条件として既に使っているため、
 * トークンからは外す。残すと全候補に共通して加点され、無関係な記事どうしが
 * 似て見える。実際 /news/claude-for-legal と /news/introducing-claude-code が
 * 50%で候補に入ってしまった。
 *
 * 純粋な数字（年・連番）も落とす。日付が同じだけの別記事が寄ってくるため。
 */
/**
 * 中身を持たない語。これを数えると、同シリーズの別記事どうしが似て見える。
 * 実際 /news/claude-for-legal と /news/claude-for-finance が「for」の一致で
 * 候補に残った。
 */
const STOPWORDS = new Set([
  "the", "and", "for", "with", "our", "your", "new", "how", "why", "what",
  "from", "that", "this", "are", "its", "has", "have", "was", "were", "will",
  "can", "all", "out", "get", "use", "using", "into", "not", "you", "its",
  "about", "more", "than", "over", "now", "but", "who", "why", "www", "com",
  "html", "index", "page", "post", "posts", "blog", "article", "articles",
]);

function tokens(pathname) {
  const segs = pathname.split("/").filter(Boolean).slice(1);
  return segs
    .join("-")
    .toLowerCase()
    .replace(/\.(html?|php|aspx)$/, "")
    .split(/[/\-_.]+/)
    .filter((t) => t && t.length > 2 && !/^\d+$/.test(t) && !STOPWORDS.has(t));
}

/**
 * 一致度。短いほうの長さで正規化する（長い記事名が不利にならないように）。
 * ただし一致が1語だけのものは、共通語がたまたま重なっただけなので採らない。
 */
function score(aTokens, bTokens) {
  if (!aTokens.length || !bTokens.length) return 0;
  const b = new Set(bTokens);
  const hit = aTokens.filter((t) => b.has(t)).length;
  if (hit < 2) return 0;
  return hit / Math.min(aTokens.length, bTokens.length);
}

/** 手法1: 表記ゆれを総当たりする */
async function tryVariants(u) {
  const url = new URL(u);
  const cands = new Set();
  const p = url.pathname;
  const alt = p.endsWith("/") ? p.slice(0, -1) : p + "/";
  cands.add(new URL(alt, url).toString());
  if (url.hostname.startsWith("www.")) {
    cands.add(u.replace("://www.", "://"));
  } else {
    cands.add(u.replace("://", "://www."));
  }
  if (url.search) cands.add(url.origin + url.pathname);

  const out = [];
  for (const c of cands) {
    if (c === u) continue;
    const r = await head(c);
    if (r.ok) out.push({ url: r.url, how: "表記ゆれ", confidence: "高" });
  }
  return out;
}

/** 手法2: サイトマップから同じ第1階層の URL を集め、slug の重なりで採点する */
async function trySitemap(u) {
  const url = new URL(u);
  const seeds = [
    `${url.origin}/sitemap.xml`,
    `${url.origin}/sitemap_index.xml`,
    `${url.origin}/sitemap-index.xml`,
  ];

  let locs = [];
  for (const seed of seeds) {
    const xml = await text(seed);
    if (!xml) continue;
    const found = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
    if (!found.length) continue;

    // サイトマップインデックスなら、関係のありそうな子だけ辿る
    if (/<sitemapindex/i.test(xml)) {
      const seg = url.pathname.split("/").filter(Boolean)[0] || "";
      const children = found
        .filter((c) => !seg || c.toLowerCase().includes(seg.toLowerCase()))
        .slice(0, 5);
      for (const child of children.length ? children : found.slice(0, 3)) {
        const cx = await text(child);
        if (!cx) continue;
        locs.push(...[...cx.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]));
      }
    } else {
      locs.push(...found);
    }
    if (locs.length) break;
  }
  if (!locs.length) return [];

  const seg = url.pathname.split("/").filter(Boolean)[0] || "";
  const want = tokens(url.pathname);
  const scored = locs
    .filter((l) => {
      try {
        const lu = new URL(l);
        if (lu.origin !== url.origin) return false;
        if (!seg) return true;
        return lu.pathname.split("/").filter(Boolean)[0] === seg;
      } catch {
        return false;
      }
    })
    .map((l) => ({ url: l, s: score(want, tokens(new URL(l).pathname)) }))
    .filter((x) => x.s >= 0.5)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);

  const out = [];
  for (const c of scored) {
    const r = await head(c.url);
    if (r.ok) {
      out.push({
        url: r.url,
        how: `サイトマップ照合（一致度 ${(c.s * 100).toFixed(0)}%）`,
        confidence: c.s >= 0.8 ? "中" : "低",
      });
    }
  }
  return out;
}

// ── 実行 ──
const data = JSON.parse(readFileSync(fromJson, "utf8"));
const dead = (data.results || []).filter((r) => r.status === "DEAD");

if (!dead.length) {
  console.log("到達できない URL はありません。");
  process.exit(0);
}

const report = [];
for (const d of dead) {
  let cands = [];
  try {
    cands = await tryVariants(d.url);
    if (!cands.length) cands = await trySitemap(d.url);
  } catch (e) {
    cands = [];
  }
  report.push({ ...d, candidates: cands });
  if (!asJson) {
    console.log(`\n■ ${d.url}`);
    console.log(`  掲載記事: ${d.where}`);
    if (cands.length) {
      for (const c of cands) console.log(`  → 候補[確度${c.confidence}] ${c.url}  (${c.how})`);
    } else {
      console.log("  → 候補は見つかりませんでした。出典の削除を検討してください。");
    }
  }
}

if (asJson) {
  console.log(JSON.stringify({ checked: dead.length, report }, null, 2));
} else {
  const found = report.filter((r) => r.candidates.length).length;
  console.log(`\n── 集計 ──`);
  console.log(`  対象: ${dead.length} 件 / 候補あり: ${found} 件 / 候補なし: ${dead.length - found} 件`);
  console.log("");
  console.log("候補は自動で適用しません。実在しない URL を出典に掲げる事故を繰り返さないため、");
  console.log("採否は必ず内容を確認したうえで判断してください。");
}
