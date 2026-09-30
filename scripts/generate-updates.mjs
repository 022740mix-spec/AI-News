/**
 * 記事本文の【訂正】【追記】【取り下げ】マーカーから「更新履歴」を機械的に抽出し、
 * public/updates.json と public/updates.xml（Atom）を出力する（vite build の前に実行）。
 *
 * ── なぜ必要か ──
 * 訂正・追記は本文末尾の段落に書かれているだけで、検索から来た読者は更新があったことを
 * 知らず、過去記事に戻ってくる読者もほぼいない。CLAUDE.md の訂正ポリシー
 * （`【訂正 YYYY-MM-DD】（誤）〜 →（正）〜`）で書かれた履歴を、読者が辿れる入口
 * （更新履歴ページ・記事冒頭の帯・一覧のバッジ・RSS）に変換する。
 *
 * ── 抽出の考え方 ──
 * 記事データは書き換えない。本文の段落（改行を含む段落は行ごと）を先頭から読み、
 * 行頭（`・` `**` `## ` を許容）にあるマーカーだけを拾う。実データにある表記ゆれ:
 *   【訂正 2026-09-02】 / **【訂正 2026-08-11】** / ・【訂正 …】     → 訂正
 *   【追記 …】 / **【追記 …】** / ・【追記 …】 / 【改訂 …】 / 【全面改稿 …】 → 追記
 *   【月次見直し …】、および先頭80字に「月次見直し」を含む【追記】   → 月次見直し
 *   【取り下げ …】 / 【取り下げのお知らせ（2026-06-05）】            → 取り下げ
 *   **【4/1 追記】**（年なし）                                      → 追記（年は記事の掲載年）
 *   ## 【追記】v2.1.91（…）（日付なし見出し）                        → 追記（日付は記事の掲載日）
 *   【追記1】【修正1】（同日の履歴。日付は同じ段落の【初版】YYYY年M月D日） → 追記／訂正
 * 【初版】【新規】【公開】【NNNN年N月時点の注記】など、更新ではないマーカーは拾わない。
 * 拾えなかった（種別が判定できない）更新らしいマーカーは、標準出力に警告として列挙する。
 *
 * ── 取り下げ記事 ──
 * status: "retracted" の記事は、本文が告知文に置き換わっているため、
 * 残っている他のマーカー（旧本文の残骸）は無視し、取り下げだけを拾う。
 *
 * Usage:
 *   node scripts/generate-updates.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ARTICLES, SITE_NAME } from "../src/data/aiToolsData.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_JSON = join(__dirname, "..", "public", "updates.json");
const OUT_XML = join(__dirname, "..", "public", "updates.xml");

/** 種別。数字が小さいほど重い（同じ日の複数更新を1行にまとめるときの代表になる）。 */
const KINDS = {
  retraction: { label: "取り下げ", rank: 0 },
  correction: { label: "訂正", rank: 1 },
  addendum: { label: "追記", rank: 2 },
  monthly: { label: "月次見直し", rank: 3 },
};

/** 要約の目安（文字数）。「（誤）〜 →（正）〜」は記号ぶんを含めてこの長さに収める。 */
const SUMMARY_LIMIT = 100;

const YMD = /^\d{4}-\d{2}-\d{2}$/;

function pad2(n) {
  return String(n).padStart(2, "0");
}

/** Markdown の装飾を落として1行の平文にする。 */
export function toPlain(text) {
  return String(text ?? "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    // 生の URL は長く、要約の字数を食うだけなので、ホスト名だけにする。
    .replace(/https?:\/\/([^\s/）)」`]+)[^\s）)」`]*/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** 上限を超えるときだけ、読点・空白の切れ目を優先して「…」で切る。 */
export function clip(text, max) {
  if (text.length <= max) return text;
  const head = text.slice(0, max);
  const floor = Math.floor(max * 0.6);
  let cut = -1;
  for (const ch of ["、", "，", " ", "）", "」"]) {
    const i = head.lastIndexOf(ch);
    if (i >= floor && i > cut) cut = i + (ch === "）" || ch === "」" ? 1 : 0);
  }
  const body = cut >= floor ? head.slice(0, cut) : head;
  return `${body.replace(/[、，\s]+$/, "")}…`;
}

/**
 * 「。」で文に分ける。（）「」の中の「。」では切らない
 * （「（この追記は…訂正済み。下の…参照）」のような前置きを、途中で切らないため）。
 */
export function splitSentences(text) {
  const out = [];
  let depth = 0;
  let cur = "";
  for (const ch of text) {
    cur += ch;
    if (ch === "（" || ch === "「") depth++;
    else if ((ch === "）" || ch === "」") && depth > 0) depth--;
    else if (ch === "。" && depth === 0) {
      out.push(cur.trim());
      cur = "";
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

/** 先頭の文。短すぎるときは次の文まで足す（上限は超えない）。 */
export function firstSentences(text, max) {
  const parts = splitSentences(text);
  if (parts.length === 0) return "";
  let out = parts[0];
  for (let i = 1; i < parts.length && out.length < 30; i++) {
    if ((out + parts[i]).length > max) break;
    out += parts[i];
  }
  return clip(out.replace(/。$/, ""), max);
}

/**
 * 「（誤）A →（正）B」を、A も B も残したまま max 字に収める。
 * 片方が短ければ、余った字数をもう片方に回す。
 */
export function clipCorrection(wrong, right, max) {
  const overhead = "（誤）".length + " →（正）".length;
  const room = Math.max(max - overhead, 20);
  const half = Math.floor(room / 2);
  let wMax = half;
  let rMax = half;
  if (wrong.length < half) rMax = room - wrong.length;
  else if (right.length < half) wMax = room - right.length;
  return `（誤）${clip(wrong, wMax)} →（正）${clip(right, rMax)}`;
}

/** マーカーの中身から { kind, date, sameDay } を得る。更新でなければ null。 */
export function parseLabel(label, articleDate) {
  let m;
  if ((m = label.match(/^(訂正|追記|改訂|全面改稿|月次見直し|取り下げ)(?:\s+(\d{4}-\d{2}-\d{2}))?$/))) {
    const kind = { 訂正: "correction", 取り下げ: "retraction", 月次見直し: "monthly" }[m[1]] ?? "addendum";
    return { kind, date: m[2] ?? null, sameDay: false };
  }
  if ((m = label.match(/^取り下げのお知らせ（(\d{4}-\d{2}-\d{2})）$/))) {
    return { kind: "retraction", date: m[1], sameDay: false };
  }
  if ((m = label.match(/^(\d{1,2})\/(\d{1,2})\s*追記$/))) {
    const year = articleDate.slice(0, 4);
    return { kind: "addendum", date: `${year}-${pad2(m[1])}-${pad2(m[2])}`, sameDay: false };
  }
  if ((m = label.match(/^(追記|修正)\d+$/))) {
    return { kind: m[1] === "修正" ? "correction" : "addendum", date: null, sameDay: true };
  }
  return null;
}

/** 更新らしいのに parseLabel が拾えなかったものを警告するための判定。 */
const UPDATE_LIKE = /(訂正|追記|取り下げ|改訂|全面改稿|月次見直し|修正)/;
/** 更新ではないと分かっているもの（警告しない）。 */
const KNOWN_NON_UPDATE = /^(当サイトの訂正について|編集履歴|初版|新規|公開)/;

const LINE_MARKER = /^[・*#\s-]*【([^】]+)】/;

function ratingChange(text) {
  const m = text.match(
    /(?:総合評価|総合スコア|総合★|総合|rating|★評価)\s*(?:を)?\s*★?\s*(\d(?:\.\d+)?)\s*(?:→|->|から)\s*★?\s*(\d(?:\.\d+)?)/i,
  );
  return m ? { from: m[1], to: m[2] } : null;
}

function summarize({ kind, rest, headingNext }) {
  const plain = toPlain(rest).replace(/^同日\s*[—–-]\s*/, "").replace(/^[—–\-:：\s]+/, "");
  let summary;
  const rc = ratingChange(plain);
  if (kind === "correction") {
    const m = plain.match(/（誤）\s*(.+?)\s*[→⇒]\s*（正）\s*(.+)/);
    if (m) {
      const right = (splitSentences(m[2])[0] ?? m[2]).replace(/。$/, "");
      summary = clipCorrection(m[1], right, SUMMARY_LIMIT + 10);
    }
  }
  if (!summary && headingNext) {
    // 見出しだけのマーカー（## 【追記】v2.1.91（…））は、直後の本文の先頭文を足す。
    const lead = plain ? `${plain}：` : "";
    summary = clip(lead + firstSentences(toPlain(headingNext), SUMMARY_LIMIT), SUMMARY_LIMIT + 10);
  }
  if (!summary) summary = firstSentences(plain, SUMMARY_LIMIT);
  if (rc) {
    const tag = `★${rc.from}→${rc.to}`;
    if (!summary.includes(tag)) {
      // 「総合評価を 4 → 3.5 に修正しました」だけで1文が終わる訂正は、理由の文を続ける。
      const sentences = splitSentences(plain);
      const first = sentences[0] ?? "";
      const onlyRating = /^(?:総合評価|総合スコア|rating)\s*を?\s*[\d.]+\s*(?:→|->)\s*[\d.]+\s*に[^。]{0,12}。?$/i.test(first);
      summary = onlyRating && sentences[1]
        ? `${tag} に修正。${firstSentences(sentences.slice(1).join(""), SUMMARY_LIMIT - tag.length - 5)}`
        : `${tag}：${summary}`;
    }
  }
  return { summary, rating: rc };
}

export function extract(articles) {
  const parts = [];
  const unmatched = [];
  for (const a of articles) {
    const body = Array.isArray(a.body) ? a.body : [];
    const retracted = a.status === "retracted";
    body.forEach((para, i) => {
      if (typeof para !== "string") return;
      const lines = para.split("\n");
      // 【初版】YYYY年M月D日 — 同日の【追記N】【修正N】の日付になる。
      let firstDate = null;
      for (const line of lines) {
        const m = line.match(/【初版[^】]*】\s*(\d{4})年(\d{1,2})月(\d{1,2})日/);
        if (m) firstDate = `${m[1]}-${pad2(m[2])}-${pad2(m[3])}`;
      }
      lines.forEach((line) => {
        const mm = line.match(LINE_MARKER);
        if (!mm) return;
        const label = mm[1].trim();
        const parsed = parseLabel(label, a.date);
        if (!parsed) {
          if (UPDATE_LIKE.test(label) && !KNOWN_NON_UPDATE.test(label)) unmatched.push({ id: a.id, para: i, label });
          return;
        }
        if (retracted && parsed.kind !== "retraction") return;
        const date = parsed.date ?? (parsed.sameDay ? firstDate : null) ?? a.date;
        const dateEstimated = !parsed.date && !(parsed.sameDay && firstDate);
        const rest = line.slice(mm[0].length);
        const isHeading = /^\s*#/.test(line);
        let headingNext = null;
        if (isHeading) {
          for (let j = i + 1; j < body.length; j++) {
            if (typeof body[j] === "string" && !/^\s*#/.test(body[j])) { headingNext = body[j]; break; }
          }
        }
        const isMonthly =
          parsed.kind === "monthly" || (parsed.kind === "addendum" && /月次見直し/.test(toPlain(rest).slice(0, 80)));
        const kind = isMonthly ? "monthly" : parsed.kind;
        const { summary, rating } = summarize({ kind, rest, headingNext });
        parts.push({ id: a.id, para: i, date, dateEstimated, kind, summary, rating, articleDate: a.date });
      });
    });
  }
  return { parts, unmatched };
}

/** 同じ記事・同じ日の更新を1行にまとめる。 */
export function merge(parts, titleOf) {
  const byKey = new Map();
  for (const p of parts) {
    const key = `${p.id}\t${p.date}`;
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(p);
  }
  const items = [];
  for (const group of byKey.values()) {
    group.sort((x, y) => KINDS[x.kind].rank - KINDS[y.kind].rank || x.para - y.para);
    const head = group[0];
    const rating = group.find((g) => g.rating)?.rating ?? null;
    const item = {
      id: head.id,
      title: titleOf(head.id),
      date: head.date,
      kind: head.kind,
      kindLabel: KINDS[head.kind].label,
      // この日に含まれる種別すべて（絞り込みで「月次見直し」を選んだとき、
      // 同じ日の訂正にまとめられた月次見直しも拾うため）。
      kinds: [...new Set(group.map((g) => g.kind))],
      summary: head.summary,
    };
    if (rating) item.ratingChange = rating;
    if (group.some((g) => g.dateEstimated)) item.dateEstimated = true;
    if (group.length > 1) {
      item.also = group.slice(1).map((g) => ({ kind: g.kind, kindLabel: KINDS[g.kind].label, summary: g.summary }));
    }
    items.push(item);
  }
  items.sort(
    (x, y) =>
      y.date.localeCompare(x.date) ||
      KINDS[x.kind].rank - KINDS[y.kind].rank ||
      x.id.localeCompare(y.id),
  );
  return items;
}

/** 記事ごとの索引（記事冒頭の帯・一覧のバッジ用）。 */
export function buildArticleIndex(parts, articles) {
  const bodyOf = new Map(articles.map((a) => [a.id, a.body ?? []]));
  const index = {};
  for (const p of parts) {
    const e = (index[p.id] ??= { correction: null, addendum: null, monthly: null, retraction: null, historyIndex: p.para });
    if (!e[p.kind] || p.date > e[p.kind]) e[p.kind] = p.date;
    e.historyIndex = Math.min(e.historyIndex, p.para);
  }
  for (const [id, e] of Object.entries(index)) {
    // 直前に「編集履歴」の見出しがあれば、そこへ飛ぶ（読者にとって履歴の始まりはそこ）。
    const body = bodyOf.get(id);
    for (const back of [1, 2]) {
      const q = body[e.historyIndex - back];
      if (typeof q === "string" && /^(?:#{1,4}\s*)?【?編集履歴】?\s*$/.test(q.trim())) {
        e.historyIndex -= back;
        break;
      }
    }
  }
  return index;
}

function escapeXml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function atomDateFromYmd(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 15, 0, 0)).toISOString().replace(/\.\d{3}Z$/, "Z");
}

/** RSS には新しい順に最大この件数を載せる（全件は updates.json にある）。 */
const XML_MAX_ENTRIES = 150;

function buildXml(items) {
  const shown = items.slice(0, XML_MAX_ENTRIES);
  const updated = shown[0] ? atomDateFromYmd(shown[0].date) : atomDateFromYmd("2026-01-01");
  const entries = shown
    .map((it) => {
      const rating = it.ratingChange && !it.summary.includes("★") ? `★${it.ratingChange.from}→${it.ratingChange.to} ` : "";
      const also = it.also?.length ? `（同日に ${it.also.map((x) => x.kindLabel).join("・")} もあり）` : "";
      return `  <entry>
    <title>${escapeXml(`【${it.kindLabel}】${it.title}`)}</title>
    <link rel="alternate" type="text/html" href="?a=${encodeURIComponent(it.id)}#article-history"/>
    <id>tag:ai-tool-news.jp,2026:update:${escapeXml(it.id)}:${it.date}</id>
    <updated>${atomDateFromYmd(it.date)}</updated>
    <category term="${escapeXml(it.kind)}" label="${escapeXml(it.kindLabel)}"/>
    <summary>${escapeXml(rating + it.summary + also)}</summary>
  </entry>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(SITE_NAME)} 更新履歴</title>
  <subtitle>記事の訂正・追記・月次見直し・取り下げの一覧</subtitle>
  <link rel="alternate" type="text/html" href="./?view=updates"/>
  <link rel="self" type="application/atom+xml" href="./updates.xml"/>
  <id>tag:ai-tool-news.jp,2026:updates</id>
  <updated>${updated}</updated>
  <generator>ai-news-generate-updates</generator>
${entries}
</feed>
`;
}

function main() {
  const { parts, unmatched } = extract(ARTICLES);
  const titles = new Map(ARTICLES.map((a) => [a.id, String(a.title).replace(/\*\*/g, "")]));
  const items = merge(parts, (id) => titles.get(id));
  const articles = buildArticleIndex(parts, ARTICLES);

  // kindCounts は行の代表種別、kindCountsAny は「その種別を含む行」の数。
  const kindCounts = Object.fromEntries(Object.keys(KINDS).map((k) => [k, items.filter((i) => i.kind === k).length]));
  const kindCountsAny = Object.fromEntries(Object.keys(KINDS).map((k) => [k, items.filter((i) => i.kinds.includes(k)).length]));
  const json = {
    // 生成日時は入れない。同じデータからは同じファイルができるようにして、無関係な差分を出さない。
    count: items.length,
    kindCounts,
    kindCountsAny,
    items,
    articles,
  };

  mkdirSync(dirname(OUT_JSON), { recursive: true });
  writeFileSync(OUT_JSON, `${JSON.stringify(json)}\n`, "utf8");
  writeFileSync(OUT_XML, buildXml(items), "utf8");

  const early = parts.filter((p) => YMD.test(p.date) && p.date < p.articleDate);
  console.log(
    "Wrote public/updates.json + public/updates.xml",
    `(${items.length} rows from ${parts.length} markers in ${Object.keys(articles).length} articles;`,
    Object.entries(kindCounts).map(([k, n]) => `${KINDS[k].label} ${n}`).join(" / ") + ")",
  );
  for (const u of unmatched) console.warn(`WARN 種別を判定できないマーカー: ${u.id} [段落${u.para}] 【${u.label}】`);
  for (const p of early) console.warn(`WARN 掲載日より前の更新日: ${p.id} ${p.date} < ${p.articleDate}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
