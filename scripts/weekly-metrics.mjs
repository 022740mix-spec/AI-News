/**
 * 週次の「計器」を、サイト自身のデータから計算する。
 *
 * ── なぜこの形なのか ──
 * 週まとめは2026年3月〜6月に14本出たあと、74日間止まっていた。
 * 止まったことに誰も気づかなかった。**リンクを並べるだけの週次は、
 * 日次の公開（1日平均5本）と役割が重なるうえ、言語モデルが最も簡単に
 * 量産できる種類の記事**で、本数を埋めるための記事になりやすい。
 *
 * CLAUDE.md はニュースの位置づけをこう書いている。
 *
 *   ニュースは目的ではなく、バランスを測るための道具である。
 *   記事のタグ分布とガイドの厚みを突き合わせれば、補強すべき場所が数字で出る。
 *
 * **これは日次が構造的に書けない。** 1週間を見渡して初めて出る数字だからである。
 * そして**サイト自身のデータだけで計算できる**ため、外部サイトへの到達可否に
 * 左右されない。実行環境の egress で調査が詰まる日でも、この記事は必ず出せる。
 *
 * ── このスクリプトがしないこと ──
 * 文章を書かない。数字を出すだけである。何が起きているかの解釈は、
 * これを読んだうえで書く。数字の羅列で終わらせないため、意図的に分けている。
 *
 * Usage:
 *   node scripts/weekly-metrics.mjs                    # 直近の完了週（月〜日）
 *   node scripts/weekly-metrics.mjs --week=2026-08-31  # その週の月曜を指定
 *   node scripts/weekly-metrics.mjs --json
 */
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const weekArg = args.find((a) => a.startsWith("--week="))?.slice("--week=".length);

const load = (p) => import(pathToFileURL(join(rootDir, p)).href);
const { ARTICLES_META } = await load("src/data/articlesMeta.js");
const guide = await load("src/data/vibeCodingGuide.js");
const companies = await load("src/data/aiCompanies.js");

/** 掲載日。並びと同じ基準を使う（サイトが「新着」と呼ぶもの） */
function publishYmd(a) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(a?.date ?? ""))) return String(a.date);
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(a?.newsDate ?? ""))) return String(a.newsDate);
  return "";
}

/** 東京日付の「今日」 */
function todayJst() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

const addDays = (ymd, n) => {
  const d = new Date(`${ymd}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

/** その日を含む週の月曜 */
function mondayOf(ymd) {
  const dow = new Date(`${ymd}T00:00:00Z`).getUTCDay(); // 0=日
  return addDays(ymd, dow === 0 ? -6 : 1 - dow);
}

// 対象週。既定は「直近の完了週」＝今週の月曜の1週間前
const thisMonday = mondayOf(todayJst());
const start = weekArg ? mondayOf(weekArg) : addDays(thisMonday, -7);
const end = addDays(start, 6);
const prevStart = addDays(start, -7);
const prevEnd = addDays(start, -1);

const inRange = (a, s, e) => {
  const d = publishYmd(a);
  return d >= s && d <= e;
};

const week = ARTICLES_META.filter((a) => inRange(a, start, end));
const prev = ARTICLES_META.filter((a) => inRange(a, prevStart, prevEnd));

/** 出現数を数える */
function tally(list, pick) {
  const m = new Map();
  for (const a of list) for (const v of pick(a) ?? []) m.set(v, (m.get(v) ?? 0) + 1);
  return m;
}

const tags = tally(week, (a) => a.tags);
const prevTags = tally(prev, (a) => a.tags);
const cats = tally(week, (a) => [a.category]);
const types = tally(week, (a) => [a.type]);

/** 掲載日と出来事の日の差。速報性の指標になる */
const lags = week
  .filter((a) => a.newsDate && a.date)
  .map((a) => Math.round((new Date(a.date) - new Date(a.newsDate)) / 86400000))
  .sort((x, y) => x - y);
const medianLag = lags.length ? lags[Math.floor(lags.length / 2)] : null;

/**
 * ニュースの厚みと、ツール別ページの厚みを突き合わせる。
 *
 * **これが週次の中心**である。「今週このツールの話題が N 件あったが、
 * ツール別の解説は M 項目しかない」という形で、補強すべき場所が数字で出る。
 * タグ名とツール id の対応は、tags の命名規則（ベンダー接頭辞を付けない）に合わせる。
 */
const TOOL_TAGS = {
  "claude-code": ["Claude Code"],
  cursor: ["Cursor"],
  codex: ["Codex", "OpenAI Codex"],
  "gemini-cli": ["Gemini CLI"],
  copilot: ["GitHub Copilot", "VS Code"],
  "power-apps": ["Power Apps"],
};

const countItems = (x) =>
  Array.isArray(x)
    ? x.length
    : x && typeof x === "object"
      ? Object.values(x).reduce((s, v) => s + countItems(v), 0)
      : 0;

const toolDepth = new Map(guide.TOOL_REFERENCES.map((t) => [t.id, countItems(t.ref)]));

// 直近90日のニュース量を分母にする。1週間だけだと0が並んで比較にならない
const since90 = addDays(todayJst(), -90);
const recent = ARTICLES_META.filter((a) => publishYmd(a) >= since90);

const balance = Object.entries(TOOL_TAGS).map(([id, names]) => {
  const hit = (list) => list.filter((a) => (a.tags ?? []).some((t) => names.includes(t))).length;
  return {
    id,
    label: guide.TOOL_REFERENCES.find((t) => t.id === id)?.label ?? id,
    weekArticles: hit(week),
    recent90: hit(recent),
    guideItems: toolDepth.get(id) ?? 0,
  };
});
// ニュースは多いのにツール別が薄いものを上に
balance.sort((a, b) => b.recent90 / Math.max(1, b.guideItems) - a.recent90 / Math.max(1, a.guideItems));

/**
 * **ここが週次の中心。** ニュースでよく出るのに、ガイドに項目が無い話題を出す。
 *
 * CLAUDE.md の例がこれである。
 *   「中国AI がニュースの17%を占めるのにガイドでは2件」
 *
 * ツール別の比だけでは弱い。ニュースのタグはモデルや企業が中心で、
 * ガイドの6ツールとは語彙が重ならないためである。
 * **ガイド全体（バイブ・用語集・メディア）の文字列と突き合わせる**ことで、
 * 「読者が記事で何度も見ているのに、ガイドを引いても説明が無い語」が出る。
 */
function guideCorpus(g) {
  const out = [];
  const walk = (x) => {
    if (typeof x === "string") out.push(x);
    else if (Array.isArray(x)) x.forEach(walk);
    else if (x && typeof x === "object") Object.values(x).forEach(walk);
  };
  for (const k of [
    "VIBE_SETUP_GUIDE", "VIBE_BASIC_RULES", "VIBE_CODING_PRACTICAL",
    "VIBE_GUIDE_PITFALLS", "VIBE_PROGRESSION_PATH", "VIBE_IDEAL_STACKS",
    "VIBE_TOOL_COMBO_TABLE", "VIBE_MEDIA_TAXONOMY", "GLOSSARY_BY_GENRE",
    "TOOL_REFERENCES",
  ]) walk(g[k]);
  return out.join("\n").toLowerCase();
}

const corpus = guideCorpus(guide);
const recentTagCount = tally(recent, (a) => a.tags);

/** タグがガイド本文に何回出るか。0 なら「読者が引いても説明が無い」 */
function guideMentions(tag) {
  const t = tag.toLowerCase();
  if (t.length < 2) return 0;
  let n = 0, i = 0;
  while ((i = corpus.indexOf(t, i)) !== -1) { n++; i += t.length; }
  return n;
}

/**
 * 固有名詞（企業名・製品名・モデル名）を分ける。
 *
 * **これを分けないと計器として使えない。** 「xAI がガイドに無い」は当たり前で、
 * 企業名はガイドに書くものではない。補強の対象になるのは**概念や技術の語**である。
 * 判定は aiCompanies.js の name / products を照合し、加えてモデル名の形
 * （英字＋数字）を見る。ここに入らなかったものを概念として扱う。
 */
const properNouns = new Set();
for (const c of companies.AI_COMPANIES ?? []) {
  if (c.name) properNouns.add(String(c.name).toLowerCase());
  for (const p of c.products ?? []) properNouns.add(String(p).toLowerCase());
}
/**
 * サイト内部の都合で付けるタグ。話題の分布を測る対象ではない。
 */
const META_TAGS = new Set(["週刊まとめ", "分析", "特集", "まとめ"]);

function isProperNoun(tag) {
  const t = tag.toLowerCase();
  if (properNouns.has(t)) return true;
  // **片方向だけ**にする。「タグが固有名詞で始まる」（Claude Code → Claude）は真だが、
  // 「固有名詞がタグを含む」は誤判定を生む。実際、製品名
  // 「Sakana Fugu（マルチエージェント・オーケストレーション）」の括弧内に一致して
  // 「マルチエージェント」が固有名詞に分類されていた。
  for (const n of properNouns) if (n.length >= 3 && t.startsWith(n)) return true;
  // モデル名らしい形（英字のあとに数字。GPT-5 / Fable 5 / Grok 4.5 など）
  return /^[A-Za-z][A-Za-z .-]*\s?\d/.test(tag);
}

const gapsAll = [...recentTagCount]
  .filter(([tag, n]) => n >= 3 && !META_TAGS.has(tag))
  .map(([tag, n]) => ({
    tag,
    articles90: n,
    guideMentions: guideMentions(tag),
    proper: isProperNoun(tag),
  }))
  .sort((a, b) => a.guideMentions - b.guideMentions || b.articles90 - a.articles90);

// 補強の候補になるのは概念のほうだけ
const gaps = gapsAll.filter((g0) => !g0.proper && g0.guideMentions === 0).slice(0, 10);
const gapsProper = gapsAll.filter((g0) => g0.proper && g0.guideMentions === 0).slice(0, 6);

/** 今週はじめて出たタグ。新しい話題の入り口になる */
const newTags = [...tags.keys()].filter((t) => {
  const everBefore = ARTICLES_META.some(
    (a) => publishYmd(a) < start && (a.tags ?? []).includes(t)
  );
  return !everBefore;
});

const result = {
  period: { start, end },
  prevPeriod: { start: prevStart, end: prevEnd },
  counts: {
    week: week.length,
    prev: prev.length,
    byType: Object.fromEntries([...types].sort((a, b) => b[1] - a[1])),
    byCategory: Object.fromEntries([...cats].sort((a, b) => b[1] - a[1])),
  },
  medianLagDays: medianLag,
  topTags: [...tags]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([tag, n]) => ({ tag, n, prev: prevTags.get(tag) ?? 0 })),
  newTags,
  balance,
  gaps,
  gapsProper,
  guideTotals: {
    vibe: guide.VIBE_GUIDE_ITEM_TOTAL,
    glossary: guide.GLOSSARY_GUIDE_ITEM_TOTAL,
    media: guide.MEDIA_GUIDE_ITEM_TOTAL,
    all: guide.GUIDE_ITEM_TOTAL,
  },
  articles: week
    .sort((a, b) => publishYmd(b).localeCompare(publishYmd(a)))
    .map((a) => ({ id: a.id, date: publishYmd(a), newsDate: a.newsDate ?? null, type: a.type, title: a.title })),
};

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

const L = [];
L.push(`# 週次の計器 — ${start} 〜 ${end}`);
L.push("");
L.push(`公開 ${result.counts.week} 本（前週 ${result.counts.prev} 本）`);
L.push(`種別: ${Object.entries(result.counts.byType).map(([k, v]) => `${k} ${v}`).join(" / ") || "—"}`);
L.push(`分野: ${Object.entries(result.counts.byCategory).map(([k, v]) => `${k} ${v}`).join(" / ") || "—"}`);
if (medianLag !== null) L.push(`出来事から掲載までの中央値: ${medianLag} 日`);
L.push("");

L.push("## タグ（今週 / 前週）");
if (result.topTags.length) {
  for (const t of result.topTags) {
    const d = t.n - t.prev;
    L.push(`  ${String(t.n).padStart(2)} (${t.prev}) ${d > 0 ? "↑" : d < 0 ? "↓" : " "} ${t.tag}`);
  }
} else L.push("  （該当なし）");
L.push("");

if (newTags.length) {
  L.push("## 今週はじめて出たタグ");
  L.push(`  ${newTags.join(" / ")}`);
  L.push("");
}

L.push("## ニュースの厚み と ツール別ページの厚み");
L.push("  直近90日の記事数 / ツール別ページの項目数（比が大きいほど、話題の割に解説が薄い）");
L.push("");
for (const b of balance) {
  const ratio = (b.recent90 / Math.max(1, b.guideItems)).toFixed(2);
  L.push(
    `  ${b.label.padEnd(18)} 今週 ${String(b.weekArticles).padStart(2)} / 90日 ${String(b.recent90).padStart(3)} / 解説 ${String(b.guideItems).padStart(3)} 項目  比 ${ratio}`
  );
}
L.push("");
L.push(`ガイド全体: バイブ ${result.guideTotals.vibe} / 用語 ${result.guideTotals.glossary} / メディア ${result.guideTotals.media} = ${result.guideTotals.all} 項目`);
L.push("");

L.push("## 記事で頻出するのに、ガイドに説明が無い概念");
L.push("  直近90日で3件以上。**ここが補強の候補**である");
L.push("  概念か固有名詞かの振り分けは機械的な推定なので、採否は読んで判断すること");
L.push("");
if (gaps.length) {
  for (const g0 of gaps) L.push(`  記事 ${String(g0.articles90).padStart(3)} 件  ${g0.tag}`);
} else L.push("  （該当なし）");
L.push("");
if (gapsProper.length) {
  L.push("  参考: 固有名詞でガイドに無いもの（ガイドに書く対象ではない）");
  L.push(`    ${gapsProper.map((g0) => `${g0.tag}(${g0.articles90})`).join(" / ")}`);
  L.push("");
}

L.push("## 今週の記事");
for (const a of result.articles) {
  const ev = a.newsDate && a.newsDate !== a.date ? `（出来事 ${a.newsDate}）` : "";
  L.push(`  ${a.date}${ev} [${a.type}] ${a.title}`);
}
L.push("");
L.push("この出力は数字だけである。**何が起きているかの解釈は、これを読んだうえで書くこと。**");
console.log(L.join("\n"));
