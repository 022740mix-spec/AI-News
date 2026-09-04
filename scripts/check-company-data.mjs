/**
 * 企業台帳（`src/data/aiCompanies.js`）の鮮度を見る。
 *
 * ── なぜ必要か ──
 * 71社すべてが**時間で腐るデータ**を持つ。従業員数、売上、評価額、株式の状況。
 * ところがこの台帳には**更新の経路も、鮮度の検査も無かった。**
 *
 * 記事の期限切れは `check-expired-content.mjs` が見ているが、あちらは
 * **料金・提供条件を示す語が近くにある期限**だけを拾う設計である。
 * 台帳で問題になるのは料金ではなく**事業イベント**（買収のクローズ、
 * 施設の稼働開始）なので、同じ検査では拾えない。だから別に立てる。
 *
 * ── 何を見るか ──
 *
 * 1. **過ぎた将来形。** 「Q3 2026 クローズ予定」のように、期日を過ぎれば
 *    「予定」が誤りになる記述。四半期・年月・年月日のいずれにも対応する
 * 2. **記述の古さ。** その社の記述に出てくる最も新しい年を見る。
 *    2026年の記述が一つも無い社は、台帳が止まっている可能性が高い
 *
 * ── しないこと ──
 * 自動では直さない。台帳は設計判断を伴うため Routine では Read のみで、
 * 更新は一次ソースを確認したうえで対話セッションで行う（CLAUDE.md）。
 *
 * Usage:
 *   node scripts/check-company-data.mjs
 *   node scripts/check-company-data.mjs --json
 *   node scripts/check-company-data.mjs --stale-years=2   # 何年古ければ報告するか
 *
 * 終了コード: 常に 0（Warn のみ）
 */
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const args = process.argv.slice(2);
const asJson = args.includes("--json");
const staleYears = Number(args.find((a) => a.startsWith("--stale-years="))?.slice(14) ?? 1);

const { AI_COMPANIES } = await import(
  pathToFileURL(join(rootDir, "src/data/aiCompanies.js")).href
);

const today = new Date(
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date()) + "T00:00:00Z"
);
const thisYear = today.getUTCFullYear();

/** 将来の約束を示す語。これが無い日付は単なる履歴なので対象外 */
const FUTURE_WORDS = /予定|見込み|交渉中|申請中|準備中|計画中|へ移行する|開始する/;

/**
 * 文字列から「その約束の期日」を取り出す。
 * 四半期は**その四半期の最終日**、年月は**その月の末日**として扱う。
 * 期日を過ぎた時点で「予定」が誤りになるためである。
 */
function findPromiseDates(text) {
  const out = [];
  const add = (date, raw, kind) => out.push({ date, raw, kind });

  // Q3 2026 / 2026 Q3 / 2026年Q3
  for (const m of text.matchAll(/Q([1-4])\s*(\d{4})/g)) {
    const q = Number(m[1]), y = Number(m[2]);
    add(new Date(Date.UTC(y, q * 3, 0)), m[0], "四半期");
  }
  for (const m of text.matchAll(/(\d{4})\s*年?\s*Q([1-4])/g)) {
    const y = Number(m[1]), q = Number(m[2]);
    add(new Date(Date.UTC(y, q * 3, 0)), m[0], "四半期");
  }
  // 2026年12月（日の指定なし）→ その月の末日
  for (const m of text.matchAll(/(\d{4})年(\d{1,2})月(?!\d*日)/g)) {
    const y = Number(m[1]), mo = Number(m[2]);
    if (mo >= 1 && mo <= 12) add(new Date(Date.UTC(y, mo, 0)), m[0], "年月");
  }
  // 2026年6月16日
  for (const m of text.matchAll(/(\d{4})年(\d{1,2})月(\d{1,2})日/g)) {
    const y = Number(m[1]), mo = Number(m[2]), d = Number(m[3]);
    if (mo >= 1 && mo <= 12 && d >= 1 && d <= 31) {
      add(new Date(Date.UTC(y, mo - 1, d)), m[0], "年月日");
    }
  }
  return out;
}

/** 会社の記述をすべて文字列で拾う（notes は配列、stock は入れ子） */
function stringsOf(company) {
  const out = [];
  const walk = (v, path) => {
    if (typeof v === "string") out.push({ path, text: v });
    else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
    else if (v && typeof v === "object") {
      for (const [k, x] of Object.entries(v)) walk(x, path ? `${path}.${k}` : k);
    }
  };
  for (const [k, v] of Object.entries(company)) {
    if (k === "id" || k === "officialUrl") continue;
    walk(v, k);
  }
  return out;
}

const overdue = [];
const upcoming = [];
const stale = [];

for (const c of AI_COMPANIES) {
  const chunks = stringsOf(c);

  // 1. 過ぎた将来形
  //
  // **同じ文字列に将来語があるだけでは足りない。** 実例として Anysphere の
  // 「2026年1月の Series D で評価額 $29.3B。2026年6月16日に買収を発表、
  // Q3 2026 クローズ予定」では、約束は「Q3 2026」だけで、他の2つは
  // 過去の出来事である。**日付の直後に将来語が来る場合だけ**を約束とみなす。
  for (const ch of chunks) {
    if (!FUTURE_WORDS.test(ch.text)) continue;
    for (const p of findPromiseDates(ch.text)) {
      const at = ch.text.indexOf(p.raw);
      const after = at === -1 ? "" : ch.text.slice(at + p.raw.length, at + p.raw.length + 20);
      if (!FUTURE_WORDS.test(after)) continue;
      const diff = Math.round((p.date - today) / 86400000);
      const rec = {
        name: c.name, where: ch.path, raw: p.raw, kind: p.kind,
        date: p.date.toISOString().slice(0, 10), diff,
        snippet: ch.text.slice(0, 120),
      };
      if (diff < 0) overdue.push(rec);
      else if (diff <= 90) upcoming.push(rec);
    }
  }

  // 2. 記述の古さ。その社の記述に出てくる最も新しい年
  const years = [];
  for (const ch of chunks) {
    for (const m of ch.text.matchAll(/(20\d{2})年?/g)) {
      const y = Number(m[1]);
      if (y >= 2015 && y <= thisYear + 2) years.push(y);
    }
  }
  // **年の記載が無い社は「古い」ではない。** Adobe や Apple のように、
  // 年を書く性質の記述でない社が多い。年が入っている社だけを対象にする。
  // 「年が無いから古い」と鳴らすと57/71社が並び、検査そのものが無視される。
  const newest = years.length ? Math.max(...years) : null;
  if (newest !== null && thisYear - newest >= staleYears) {
    stale.push({ name: c.name, newestYear: newest });
  }
}

overdue.sort((a, b) => a.diff - b.diff);
upcoming.sort((a, b) => a.diff - b.diff);
stale.sort((a, b) => (a.newestYear ?? 0) - (b.newestYear ?? 0));

const result = { companies: AI_COMPANIES.length, thisYear, overdue, upcoming, stale };

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

console.log(`企業台帳の鮮度チェック（${AI_COMPANIES.length} 社 / 基準日 ${today.toISOString().slice(0, 10)}）`);
console.log("");

if (overdue.length) {
  console.log(`⚠️  期日を過ぎた将来形の記述: ${overdue.length} 件`);
  console.log("");
  for (const r of overdue) {
    console.log(`   ${r.name} — ${r.where}`);
    console.log(`     「${r.raw}」（${r.kind}）= ${r.date} → ${Math.abs(r.diff)}日前`);
    console.log(`     ${r.snippet}`);
    console.log("");
  }
  console.log("   期日を過ぎた「予定」は誤りになります。一次ソースで結果を確認し、");
  console.log("   成立したのか、延期されたのか、取りやめになったのかを書き直してください。");
  console.log("");
} else {
  console.log("✅ 期日を過ぎた将来形の記述はありません。");
  console.log("");
}

if (upcoming.length) {
  console.log(`📅 90日以内に期日を迎える記述: ${upcoming.length} 件`);
  for (const r of upcoming) {
    console.log(`   ${r.name} 「${r.raw}」= ${r.date}（あと${r.diff}日） — ${r.where}`);
  }
  console.log("");
}

if (stale.length) {
  console.log(`🕰  記述が ${staleYears} 年以上古い社: ${stale.length} / ${AI_COMPANIES.length}`);
  console.log(`   （年が書かれている社のみ。最も新しい年で判定。年の記載が無い社は対象外）`);
  console.log("");
  for (const r of stale.slice(0, 20)) {
    console.log(`   ${String(r.newestYear ?? "年の記載なし").padStart(12)}  ${r.name}`);
  }
  if (stale.length > 20) console.log(`   … 他 ${stale.length - 20} 社`);
  console.log("");
}

console.log("**台帳は Routine では直せません**（設計判断を伴うため Read のみ）。");
console.log("一次ソースを確認したうえで、対話セッションで更新してください。");
