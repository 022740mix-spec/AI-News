/**
 * ガイドの陳腐化を、サイト自身を突き合わせ先にして検出する。
 *
 * ## なぜこれが成立するか
 *
 * ガイドの正しさには「照合先」が無い、というのがこの問題の難しさだった。
 * ニュースは一次ソースと突き合わせられ、レビューは現行条件と突き合わせられる。
 * ガイドの「この助言はまだ最善か」には、突き合わせる相手がいない。
 *
 * ただし**一部は突き合わせられる**。サイトは自分で現行世代を知っているからだ。
 * ガイドが「Sonnet 4.6」と書き、サイトが「Sonnet 5」の記事を持っているなら、
 * それは外部ネットワーク無しで検出できる。ここだけを機械に任せる。
 *
 * ## 検出する4つ
 *
 * 1. 対応レビューの lastReviewed が、ガイド節の lastReviewed より新しい
 *    → レビューを更新したのにガイドを見ていない
 * 2. モデル世代に依存した記述がある（同系列の最新より古い名前を含む）
 *
 *    **この検査は「最新の名前」を提示しない。** 提示すると名前だけの差し替えを
 *    誘うためである。差し替えは「新しく見えるのに誰も検証していない記述」を作り、
 *    古いままより質が悪い。実際、「Gemini 2.5 Pro の 200 万トークン」の数字は
 *    2.5 Pro に紐づいており、名前だけ変えると数字が根拠を失う。同ツールの
 *    レビューは「Pro 世代は GA 遅延が続く」と書いており、差し替えれば存在しない
 *    構成を書くことになる。「Team プラン + Sonnet 4.6 が条件」の条件部分も、
 *    モデル名とは独立に変わる。
 *
 *    記述はモデル世代に依存しているのだから、世代が変われば**記述ごと変わる**。
 *    説明用の例として過去のモデルを挙げている場合は、そのままで正しい。
 * 3. パッチバージョン（v2.1.90 のような3桁）がガイドに埋まっている
 *    → 日単位で古くなる値であり、ガイドに載せること自体が持続しない
 * 4. 同一の文が複数箇所に複製されている
 *    → 片方だけ直すと不整合になる
 *
 * ## 検出しないこと
 *
 * **「この助言はまだ最善か」は判定しない。** それは言語モデルと人間の仕事で
 * あり、機械的な照合では出ない。ここで出るのは「明らかに古い」だけである。
 *
 * Usage:
 *   node scripts/check-guide-freshness.mjs
 *   node scripts/check-guide-freshness.mjs --json
 */
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const asJson = process.argv.includes("--json");

const guide = await import(pathToFileURL(join(rootDir, "src/data/vibeCodingGuide.js")).href);
const metaMod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
const constants = await import(pathToFileURL(join(rootDir, "src/constants.js")).href);

const ARTICLES = metaMod.ARTICLES_META || [];
const SECTIONS = guide.GUIDE_SECTION_META || {};
const byId = new Map(ARTICLES.map((a) => [a.id, a]));

/** 節キー → その節の実データ */
function sectionData(key) {
  if (key.startsWith("tool:")) {
    const id = key.slice(5);
    return (guide.TOOL_REFERENCES || []).find((t) => t.id === id);
  }
  return guide[key];
}

/** 節の中の文字列をすべて拾う */
function strings(o, out = []) {
  if (typeof o === "string") { out.push(o); return out; }
  if (Array.isArray(o)) { for (const v of o) strings(v, out); return out; }
  if (o && typeof o === "object") { for (const v of Object.values(o)) strings(v, out); return out; }
  return out;
}

// ── モデル系列ごとの最新世代を、サイト自身のデータから作る ──
// MODEL_COMPARISON には旧世代も並んでいるため「載っている＝現行」ではない。
// 系列ごとの最大バージョンを取り、それより古い表記をガイド側で探す。
// v 接頭辞の有無を系列キーに含める。含めないと「Grok V9-Medium」と
// 「Grok 4.5」が同じ系列に見え、現行の 4.5 が「9 より古い」と誤判定される。
const FAMILY = /\b(Claude Opus|Claude Sonnet|Claude Haiku|Claude Fable|Claude Mythos|Opus|Sonnet|Haiku|Fable|Mythos|GPT|Gemini|Grok|Qwen|Kimi K|DeepSeek V|GLM|Ernie|MiniMax M|Muse Spark|LongCat)[ -]?(v?)(\d+(?:\.\d+)?)/gi;

function familyKey(name, vPrefix) {
  return name.replace(/^Claude /i, "").trim().toLowerCase() + (vPrefix ? "|v" : "");
}

const newest = new Map();
for (const m of constants.MODEL_COMPARISON || []) {
  for (const mt of String(m.name).matchAll(FAMILY)) {
    const fam = familyKey(mt[1], mt[2]);
    const ver = parseFloat(mt[3]);
    if (!Number.isFinite(ver)) continue;
    if (!newest.has(fam) || newest.get(fam) < ver) newest.set(fam, ver);
  }
}

const findings = { drift: [], model: [], patch: [], dup: [], unreviewed: [], alias: [] };

// ── 節どうしが同じオブジェクトを共有していないか ──
// TOOL_REFERENCES[claude-code].ref は VIBE_CLAUDE_CODE そのものである。
// これは複製ではなく意図的な共有だが、素朴に走査すると同じ記述を2回数え、
// 「102件の複製」のような誤検出になる。所有者を1つに決めて二重計上を防ぐ。
const owner = new Map(); // object → 最初にその object を含んだ節キー
for (const key of Object.keys(SECTIONS)) {
  const data = sectionData(key);
  if (!data || typeof data !== "object") continue;
  const claim = (o) => {
    if (!o || typeof o !== "object") return;
    if (owner.has(o)) {
      const first = owner.get(o);
      if (first !== key && !findings.alias.some((a) => a.a === first && a.b === key)) {
        findings.alias.push({ a: first, b: key });
      }
      return;
    }
    owner.set(o, key);
    if (Array.isArray(o)) { for (const v of o) claim(v); return; }
    for (const v of Object.values(o)) claim(v);
  };
  claim(data);
}
/** その節が「所有」している文字列だけを返す（共有部分は所有者側で数える） */
function ownedStrings(key, o, out = []) {
  if (typeof o === "string") { out.push(o); return out; }
  if (!o || typeof o !== "object") return out;
  if (owner.get(o) !== key) return out;
  if (Array.isArray(o)) { for (const v of o) ownedStrings(key, v, out); return out; }
  for (const v of Object.values(o)) ownedStrings(key, v, out);
  return out;
}

// ── 1. レビューが更新されたのにガイドが見られていない ──
// ── 2. モデル世代の古さ / 3. パッチバージョン ──
const PATCH = /\bv\d+\.\d+\.\d+\b/g;

for (const [key, meta] of Object.entries(SECTIONS)) {
  const data = sectionData(key);
  if (!data) {
    findings.drift.push({ key, why: "節が見つからない（キー名がデータとずれている）" });
    continue;
  }
  const guideDate = meta.lastReviewed || null;

  for (const rid of meta.reviews || []) {
    const art = byId.get(rid);
    if (!art) {
      findings.drift.push({ key, why: `対応レビュー \`${rid}\` が存在しない` });
      continue;
    }
    if (!art.lastReviewed) continue;
    if (!guideDate || art.lastReviewed > guideDate) {
      findings.drift.push({
        key,
        review: rid,
        reviewDate: art.lastReviewed,
        guideDate,
        why: guideDate
          ? `レビューは ${art.lastReviewed} に更新、ガイドは ${guideDate} で止まっている`
          : `レビューは ${art.lastReviewed} に更新済み。ガイドは未点検`,
      });
    }
  }

  if (!guideDate) findings.unreviewed.push(key);

  const texts = ownedStrings(key, data);
  const seenModel = new Set();
  const seenPatch = new Set();
  for (const t of texts) {
    for (const mt of t.matchAll(FAMILY)) {
      const fam = familyKey(mt[1], mt[2]);
      const ver = parseFloat(mt[3]);
      const max = newest.get(fam);
      if (max === undefined || !Number.isFinite(ver) || ver >= max) continue;
      const sig = `${fam}|${ver}`;
      if (seenModel.has(sig)) continue;
      seenModel.add(sig);
      // 「最新は X」を出さない。出すと名前だけの差し替えを誘う。
      // 記述はモデル世代に依存しているので、世代が変われば記述ごと変わる。
      findings.model.push({ key, found: mt[0], excerpt: t.slice(0, 160) });
    }
    for (const pv of t.match(PATCH) || []) {
      if (seenPatch.has(pv)) continue;
      seenPatch.add(pv);
      findings.patch.push({ key, version: pv, excerpt: t.slice(0, 110) });
    }
  }
}

// ── 4. 複製された文 ──
// 片方だけ直すと不整合になる。長い文だけを対象にして偶然の一致を避ける。
const where = new Map();
for (const key of Object.keys(SECTIONS)) {
  const data = sectionData(key);
  if (!data) continue;
  for (const t of ownedStrings(key, data)) {
    if (t.length < 40) continue;
    if (!where.has(t)) where.set(t, new Set());
    where.get(t).add(key);
  }
}
for (const [text, keys] of where) {
  if (keys.size < 2) continue;
  findings.dup.push({ keys: [...keys], excerpt: text.slice(0, 110) });
}

// ── 出力 ──
if (asJson) {
  console.log(JSON.stringify({ findings, newest: Object.fromEntries(newest) }, null, 2));
  process.exit(0);
}

const n = (a) => a.length;
console.log(`ガイドの鮮度チェック（節 ${Object.keys(SECTIONS).length} / 記事 ${ARTICLES.length}）\n`);

if (n(findings.drift)) {
  // 1つの節が複数のレビューに紐づくと同じ行が並ぶため、節ごとにまとめる
  const byKey = new Map();
  for (const f of findings.drift) {
    if (!byKey.has(f.key)) byKey.set(f.key, []);
    byKey.get(f.key).push(f);
  }
  console.log(`🟡 レビューが更新されたのにガイドが点検されていない: ${byKey.size} 節`);
  for (const [key, fs] of [...byKey].slice(0, 20)) {
    const revs = fs.filter((x) => x.review).map((x) => `${x.review}（${x.reviewDate}）`);
    console.log(`   ${key} — ${revs.length ? `対応レビュー ${revs.join(" / ")} が更新済み、ガイドは${fs[0].guideDate ? ` ${fs[0].guideDate} で停止` : "未点検"}` : fs[0].why}`);
  }
  console.log("");
}
if (n(findings.model)) {
  console.log(`🟡 モデル世代に依存した記述: ${n(findings.model)} 件`);
  console.log("");
  console.log("   **名前だけを差し替えてはいけません。** 差し替えると「新しく見えるのに");
  console.log("   誰も検証していない記述」ができ、古いままより質が悪くなります。");
  console.log("");
  console.log("   実例: 「Gemini 2.5 Pro の 200 万トークン」の数字は 2.5 Pro に紐づいており、");
  console.log("   名前だけ 3.5 にすると数字が根拠を失う。しかもサイト自身のレビューは");
  console.log("   「Pro 世代は GA 遅延が続く」と書いており、存在しない構成を書くことになる。");
  console.log("");
  console.log("   取りうる対応は3つ。**どれを選ぶかは記述ごとの判断です。**");
  console.log("     (a) 世代に依存しない書き方に直す（ガイドでは多くの場合これ）");
  console.log("     (b) 可変部分をレビュー記事へのリンクに置き換える");
  console.log("     (c) そのままでよい（説明用の例として過去のモデルを挙げている場合）");
  console.log("");
  for (const f of findings.model.slice(0, 20)) console.log(`   ${f.key} — 「${f.found}」を含む\n      ${f.excerpt}`);
  console.log("");
}
if (n(findings.patch)) {
  console.log(`🟡 パッチバージョンがガイドに埋まっている: ${n(findings.patch)} 件`);
  console.log("   日単位で古くなる値です。載せ続けるか、記述を落とすかの判断が要ります。");
  for (const f of findings.patch.slice(0, 20)) console.log(`   ${f.key} — ${f.version}\n      ${f.excerpt}`);
  console.log("");
}
if (n(findings.alias)) {
  console.log(`ℹ️  同じデータを共有している節: ${n(findings.alias)} 組`);
  console.log("   複製ではなく意図的な共有です。記述は所有者側の節で1回だけ数えています。");
  for (const f of findings.alias) console.log(`   ${f.a} ⇔ ${f.b}`);
  console.log("");
}
if (n(findings.dup)) {
  console.log(`⚠️  複数の節に複製されている記述: ${n(findings.dup)} 件`);
  console.log("   片方だけ直すと不整合になります。");
  for (const f of findings.dup.slice(0, 15)) console.log(`   ${f.keys.join(" / ")}\n      ${f.excerpt}`);
  console.log("");
}
if (n(findings.unreviewed)) {
  console.log(`ℹ️  この仕組みの下でまだ点検していない節: ${n(findings.unreviewed)} / ${Object.keys(SECTIONS).length}`);
  console.log(`   ${findings.unreviewed.join(", ")}`);
  console.log("");
}

const actionable = n(findings.drift) + n(findings.model) + n(findings.patch) + n(findings.dup);
console.log(actionable ? `対応が必要: ${actionable} 件` : "✅ 対応が必要な項目はありません。");

// 終了コードは常に 0。これは「助言の質」ではなく「明らかな古さ」の報告であり、
// ビルドや公開を止める性質のものではない。
if (process.env.GITHUB_OUTPUT) {
  const { appendFileSync } = await import("node:fs");
  appendFileSync(process.env.GITHUB_OUTPUT, `guide_actionable=${actionable}\n`);
}
