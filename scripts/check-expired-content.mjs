/**
 * 期限切れの記述を検出する
 *
 * ## なぜ必要か
 *
 * 記事には「〜8/31 導入価格」「9月以降は $3/$15」のような、
 * **ある日を境に誤情報になる記述**が入る。書いた時点では正しいが、
 * 期日を過ぎると読者が見る数字が間違ったものになる。
 *
 * 2026年9月の実測: Claude Sonnet 5 の導入価格が8月31日に終了したが、
 * **14記事が `$2/$10（〜8/31 導入価格）` のまま残っていた**。
 * 誰も気づかないまま、採用判断に使われる数字が誤った状態で公開され続けた。
 *
 * CLAUDE.md はモデル比較表について「期限付きの記述を書かない」と定めているが、
 * 記事本文には同じ規律がなく、また**書いてしまったものを見つける手段**がなかった。
 *
 * ## 何を検出するか
 *
 * 本文・excerpt から日付を伴う期限表現を拾い、**その日付が過去なら報告する**。
 * 判定は Warn（機械的に消してよい種類のものではないため）。
 * 人間が読んで、更新するか、過去形に直すか、履歴として残すかを決める。
 *
 * ## 誤検出について
 *
 * 過去の出来事を述べる文（「7月31日に値下げされた」）は期限ではないため、
 * **期限を示す語（まで / 以降 / 予定 / 見込み / 期限）を伴う場合のみ**拾う。
 * それでも歴史的記述が混ざるので、`scripts/allowed-expired.txt` に
 * 記事IDを理由付きで登録すると除外できる。
 *
 * 使い方:
 *   node scripts/check-expired-content.mjs
 *   node scripts/check-expired-content.mjs --days=30   # 30日以内に来る期限も表示
 *
 * 終了コード: 常に 0（Warn のみ。CI を止めない）
 */

import { readFileSync, existsSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const args = process.argv.slice(2);
const lookAhead = Number((args.find((a) => a.startsWith("--days=")) || "--days=0").split("=")[1]);

const today = new Date();
today.setUTCHours(0, 0, 0, 0);

const allowed = new Set();
{
  const f = join(__dirname, "allowed-expired.txt");
  if (existsSync(f)) {
    for (const line of readFileSync(f, "utf8").split("\n")) {
      const s = line.trim();
      if (s && !s.startsWith("#")) allowed.add(s);
    }
  }
}

// 期限表現の検出 — 再現率より精度を優先する
//
// 素朴な「日付 + 期限語」では誤検出だらけになる。実測の経過:
//   初回（段落単位で日付と期限語を照合）      → 122件、大半が誤検出
//   2回目（日付と期限語を隣接に限定）          →  49件、まだ分数「1/6〜1/7」や
//                                                 「3月以降」のような過去の記述を拾う
//   現在（下記）                                → 条件語との共起を必須にした
//
// **誤検出の多いチェックは無視されるようになる。** そのため、実際に事故を
// 起こした形だけを狙う。2026年8月31日に Claude Sonnet 5 の導入価格が終了した際、
// 14記事が `$2/$10（〜8/31 導入価格）` のまま残った。この形である。
//
// 条件:
//   (1) 「X月Y日まで」または「〜X月Y日」（年は省略時に記事の年で補う）
//   (2) その前後40文字以内に、料金・提供条件を示す語がある
//   (3) 過去形の文ではない
//
// 「以降」形と「M/D」形は使わない。前者は「3月以降〜が起きた」という
// 過去の記述と区別できず、後者は分数（1/6、2/3）と衝突するため。
const DEADLINE_PATTERNS = [
  { kind: "まで", re: /(?:(\d{4})年)?(\d{1,2})月(\d{1,2})日\s*(?:まで|迄)/g },
  { kind: "〜",   re: /[〜~]\s*(?:(\d{4})年)?(\d{1,2})月(\d{1,2})日/g },
  // 「〜8/31」「8/31まで」の並記形。実際の事故ではこの形が最も多かった
  // （31箇所中20箇所以上）。分数と衝突するため FRACTION_GUARD で除外する。
  { kind: "〜", re: /[〜~]\s*(\d{1,2})\/(\d{1,2})(?![\d/])/g, md: true },
  { kind: "まで", re: /(?<![\d/])(\d{1,2})\/(\d{1,2})\s*(?:まで|迄)/g, md: true },
];

/**
 * 分数・比率との衝突を避ける。
 * 「約 1/6〜1/7」「2/3 の性能」のような表記は日付ではない。
 * 料金の記事では分数が価格の近くに現れるため、条件語だけでは切り分けられない。
 */
const FRACTION_GUARD = /約\s*\d+\s*\/|\d+\s*\/\s*\d+\s*[〜~]\s*\d+\s*\/|分の\d/;

/** 料金・提供条件を示す語。これが近くにない期限は対象外 */
const CONDITION_WORDS = /価格|料金|単価|無料|割引|キャンペーン|導入|提供|プラン|上限|枠|課金|ドル|\$/;

/** 過去を述べる文は期限ではない */
const PAST_MARKERS = /していた|だった|でした|済み|完了した|終了した|されていた|移行した|公開された|明らかに|報じられた|だっ た/;

function findDeadlines(text, fallbackYear) {
  const out = [];
  for (const pat of DEADLINE_PATTERNS) {
    const { kind, re } = pat;
    for (const m of text.matchAll(new RegExp(re.source, re.flags))) {
      const isMd = Boolean(pat.md);
      const y = !isMd && m[1] ? Number(m[1]) : Number(fallbackYear);
      const mo = Number(isMd ? m[1] : m[2]);
      const d = Number(isMd ? m[2] : m[3]);
      if (mo < 1 || mo > 12 || d < 1 || d > 31) continue;
      const dt = new Date(Date.UTC(y, mo - 1, d));
      if (isNaN(dt)) continue;
      const at = m.index ?? 0;
      const ctx = text.slice(Math.max(0, at - 40), at + m[0].length + 40);
      if (isMd && FRACTION_GUARD.test(ctx)) continue;  // 分数・比率は日付ではない
      if (!CONDITION_WORDS.test(ctx)) continue;   // 料金・提供条件の話でなければ対象外
      if (PAST_MARKERS.test(ctx)) continue;        // 過去の記述は対象外
      out.push({ date: dt, raw: m[0].trim(), kind });
    }
  }
  return out;
}

const metaMod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
const meta = metaMod.ARTICLES_META || metaMod.default || [];
const bodyMod = await import(pathToFileURL(join(rootDir, "src/data/articlesBody.js")).href);
const body = bodyMod.default || bodyMod.ARTICLES_BODY || {};

const expired = [];
const upcoming = [];

for (const a of meta) {
  if (allowed.has(a.id)) continue;
  if (a.status === "retracted") continue;
  const year = (a.date || "2026").slice(0, 4);
  const chunks = [
    ...(a.excerpt ? [{ where: "excerpt", text: a.excerpt }] : []),
    ...((body[a.id]?.body || []).map((p, i) => ({ where: `p${i}`, text: p }))),
    ...((body[a.id]?.tables || []).flatMap((t, i) =>
      [{ where: `table${i}`, text: [t.caption, ...(t.rows || []).flat()].join(" ") }])),
  ];
  for (const c of chunks) {
    // 編集履歴・訂正記録は対象外（過去の記録なので当然日付が古い）
    if (/^【(訂正|追記|全面改稿|取り下げ|新規|月次見直し)/.test(c.text)) continue;
    for (const { date, raw, kind } of findDeadlines(c.text, year)) {
      const diff = Math.round((date - today) / 86400000);
      const rec = { id: a.id, where: c.where, raw, kind, date: date.toISOString().slice(0, 10), diff, snippet: c.text.slice(0, 110) };
      if (diff < 0) expired.push(rec);
      else if (lookAhead > 0 && diff <= lookAhead) upcoming.push(rec);
    }
  }
}

// 記事ごとにまとめ、最も古い期限を代表にする
const byArticle = new Map();
for (const r of expired) {
  const cur = byArticle.get(r.id);
  if (!cur || r.diff < cur.diff) byArticle.set(r.id, r);
}

console.log(`期限切れの記述チェック（基準日 ${today.toISOString().slice(0, 10)} / 記事 ${meta.length} 件）`);
console.log("");

if (byArticle.size) {
  console.log(`⚠️  期限を過ぎた記述を含む可能性のある記事: ${byArticle.size} 件`);
  console.log("");
  for (const r of [...byArticle.values()].sort((a, b) => a.diff - b.diff)) {
    console.log(`   [${r.id}] ${r.where}`);
    console.log(`     「${r.raw}」（${r.kind}形）= ${r.date} → ${Math.abs(r.diff)}日前`);
    console.log(`     ${r.snippet}`);
    console.log("");
  }
  console.log("   これらは自動では直せません。内容を読み、次のいずれかを選んでください:");
  console.log("     (a) 現行の値に更新する（採用判断に使われる数字は必ずこれ）");
  console.log("     (b) 過去形に書き換える（「〜だった」）");
  console.log("     (c) 歴史的記述として残す → scripts/allowed-expired.txt に理由付きで登録");
  console.log("");
} else {
  console.log("✅ 期限を過ぎた記述は見つかりませんでした。");
  console.log("");
}

if (upcoming.length) {
  const up = new Map();
  for (const r of upcoming) { const c = up.get(r.id); if (!c || r.diff < c.diff) up.set(r.id, r); }
  console.log(`📅 ${lookAhead}日以内に期限を迎える記述: ${up.size} 件`);
  for (const r of [...up.values()].sort((a, b) => a.diff - b.diff)) {
    console.log(`   [${r.id}] 「${r.raw}」= ${r.date}（あと${r.diff}日）`);
  }
  console.log("");
}
