#!/usr/bin/env node
/**
 * 公開の関門の効果を、発火回数ではなく「通過して公開された後の事故」と「誤停止の負担」で見る（Issue #155）。
 *
 *   node scripts/check-escaped-incidents.mjs
 *
 * 入力:
 *   scripts/escaped-incidents.json … 公開後に material な訂正・取り下げが出た記事の登録簿
 *   scripts/gate-samples.json      … 止めた件の少数サンプル（should_stop / harmless / unknown）
 *   public/updates.json            … 訂正・取り下げの一覧（generate-updates.mjs の出力）
 *
 * 守ること:
 *   - 数字しか出さない。「規則が効いている／不要」の解釈は書く人が行う
 *   - 帰属できないものは unknown のまま数える。自動でどこかの関門へ帰属させない
 *   - 登録が無いことは「事故が無い」ことではない。updates.json にある訂正のうち、登録も
 *     notMaterial（見たうえで material ではないと判断した記事 id）への記載もされていない件数を
 *     『未分類』として出す
 *   - 「CI 成功・関門が止めなかった」と「公開内容が正しかった」を同義にしない
 * 終了コード: 入力ファイルが壊れているときだけ 1。事故が登録されていても 0（通知の疲れを避ける）。
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const GATES = new Set(["source_root", "review", "other", "unknown"]);
const DISPOSITIONS = new Set(["correction", "retraction"]);
const CONFIDENCE = new Set(["confirmed", "candidate", "unknown"]);
const VERDICTS = new Set(["should_stop", "harmless", "unknown"]);

const problems = [];
const bad = (m) => problems.push(m);

function load(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, "utf8"));
  } catch (e) {
    bad(`${rel} を読めません: ${e.message}`);
    return null;
  }
}

const reg = load("scripts/escaped-incidents.json");
const samp = load("scripts/gate-samples.json");
const upd = load("public/updates.json");

// 記事 id の一覧（実在確認用）
let ids = new Set();
try {
  const mod = await import(pathToFileURL(join(root, "src/data/articlesMeta.js")).href);
  const arr = mod.articlesMeta || mod.default || Object.values(mod).find(Array.isArray) || [];
  ids = new Set(arr.map((a) => a.id));
} catch {
  /* 判定不能。実在確認を省く */
}

const incidents = reg?.incidents || [];
const byGate = {};
for (const inc of incidents) {
  const where = `escaped-incidents.json の ${inc.article ?? "(article 無し)"}`;
  if (!inc.article) bad(`${where}: article がありません`);
  else if (ids.size && !ids.has(inc.article)) bad(`${where}: 記事が存在しません`);
  if (!DISPOSITIONS.has(inc.disposition)) bad(`${where}: disposition は correction / retraction`);
  if (!CONFIDENCE.has(inc.attributionConfidence)) bad(`${where}: attributionConfidence は confirmed / candidate / unknown`);
  const gates = Array.isArray(inc.expectedGate) && inc.expectedGate.length ? inc.expectedGate : ["unknown"];
  for (const g of gates) {
    if (!GATES.has(g)) bad(`${where}: expectedGate に不明な値 ${g}`);
    byGate[g] = (byGate[g] || 0) + 1;
  }
}

const samples = samp?.samples || [];
const sampleByGate = {};
for (const s of samples) {
  if (!VERDICTS.has(s.verdict)) bad(`gate-samples.json の ${s.gate ?? "?"}: verdict は should_stop / harmless / unknown`);
  const g = (sampleByGate[s.gate] ||= { should_stop: 0, harmless: 0, unknown: 0 });
  if (VERDICTS.has(s.verdict)) g[s.verdict]++;
}

// 未分類: updates.json の訂正・取り下げのうち、登録簿に無いもの
const registered = new Set(incidents.map((i) => i.article));
const corrections = new Set(
  (upd?.items || []).filter((i) => i.kind === "correction" || i.kind === "retraction").map((i) => i.id),
);
const notMaterial = new Set(reg?.notMaterial || []);
const unclassified = [...corrections].filter((id) => !registered.has(id) && !notMaterial.has(id));

console.log("公開の関門の効果（発火回数以外の2方向）");
console.log("");
console.log(`A. 公開後に material な訂正・取り下げが出た件（登録簿）: ${incidents.length} 件`);
for (const g of ["source_root", "review", "other", "unknown"]) {
  if (byGate[g]) console.log(`   本来止められたはずの関門 = ${g}: ${byGate[g]}`);
}
console.log(
  `   訂正・取り下げの記録がある記事 ${corrections.size} 本のうち、登録も「material ではない」の判定もしていないもの（未分類）: ${unclassified.length} 本`,
);
console.log("   （未分類は事故ではなく『まだ見ていない』という意味。月次で material かを見て、該当するものを登録する）");
console.log("");
console.log(`B. 止めた件の少数サンプル: ${samples.length} 件`);
if (!samples.length) console.log("   サンプルなし。誤停止の負担は判定材料が弱い（『誤停止が無い』ではない）");
for (const [g, c] of Object.entries(sampleByGate)) {
  console.log(`   ${g}: 止めるべきだった ${c.should_stop} / 止めなくてもよかった ${c.harmless} / 判定不能 ${c.unknown}`);
}
console.log("");
console.log("読み方: 発火が多く事故が少ない→有効の可能性。発火が少なく事故がある→範囲の不足を疑う。");
console.log("発火が多くサンプルの『止めなくてもよかった』も多い→精度を見直す。発火0・事故0は『不要』ではなく判定材料が弱い。");
console.log("低い発火回数だけを理由に規則を外さない（CLAUDE.md「ルールは仮説である」）。");

if (problems.length) {
  console.log("");
  console.log("入力に問題があります:");
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
