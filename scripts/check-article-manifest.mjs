/**
 * 記事の消失検知
 *
 * ## なぜ必要か
 *
 * `articlesBody.js` は18,000行・1.8MB ある。モデルがこのファイル全体を
 * 生成・再構築しようとすると、途中で切れて**記事が静かに消える**。
 * 実際に過去そうした事故が起きている。
 *
 * そして問題は、**既存のチェックが消失を検知できない**ことにある。
 * `review-check.mjs` は「ある記事が正しいか」を見るだけで、
 * 「**あるべき記事があるか**」を知らない。371本が361本になっても、
 * 残った361本が正しければエラー0で通る。
 *
 * 2026年9月の実測: 記事を10本削除して構文を正しく保ったまま
 * `review-check.mjs` と `check-private-info.mjs` を走らせたところ、
 * **両方ともエラー0で通過した**。しかも被リンクゼロの記事が139本あり、
 * **新しい記事ほど消えても気づかれない**。
 *
 * ## 何を保証するか
 *
 * コミット済みのマニフェスト（記事IDの一覧）と現在の記事を照合し、
 * **IDが1つでも消えていればエラーで止める**。
 *
 * 原因を問わない。編集ミス、スクリプトのバグ、マージ事故、rebase 事故 —
 * どれであっても消失そのものを捕まえる。予防（安全な追加スクリプト）は
 * 最善を尽くす仕組みにすぎず失敗しうるが、この検知は最後の砦になる。
 *
 * ## 記事を意図的に削除する場合
 *
 * まず取り下げポリシー（CLAUDE.md）を確認すること。取り下げ済み記事は
 * ページとして残るため、IDはマニフェストに残る。**本当に削除する場合のみ**
 * `--update` でマニフェストを再生成する。その差分はレビューで可視化される。
 *
 * 使い方:
 *   node scripts/check-article-manifest.mjs            # 照合
 *   node scripts/check-article-manifest.mjs --update   # 記事追加後に更新
 *   node scripts/check-article-manifest.mjs --json     # JSON 出力
 *
 * 終了コード: 消失が1件でもあれば 1
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const MANIFEST = join(__dirname, "article-manifest.json");

const args = process.argv.slice(2);
const doUpdate = args.includes("--update");
const asJson = args.includes("--json");

const metaMod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
const meta = metaMod.ARTICLES_META || metaMod.default || [];
const bodyMod = await import(pathToFileURL(join(rootDir, "src/data/articlesBody.js")).href);
const body = bodyMod.default || bodyMod.ARTICLES_BODY || {};

const currentIds = meta.map((a) => a.id);
const currentSet = new Set(currentIds);
const bodySet = new Set(Object.keys(body));

// ── マニフェストの更新 ──
if (doUpdate) {
  const next = {
    // 記事IDの一覧。この配列から ID が消えることは、記事の消失を意味する。
    // 意図的な削除以外でこのファイルを書き換えてはならない。
    note: "記事IDの一覧。check-article-manifest.mjs が照合する。記事追加後に --update で更新する。",
    generatedAt: new Date().toISOString().slice(0, 10),
    count: currentIds.length,
    ids: [...currentIds].sort(),
  };
  const prev = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : { ids: [] };
  const removed = prev.ids.filter((id) => !currentSet.has(id));
  writeFileSync(MANIFEST, JSON.stringify(next, null, 2) + "\n");
  console.log(`マニフェストを更新しました: ${prev.ids.length ?? 0} → ${next.count} 記事`);
  if (removed.length) {
    console.log("");
    console.log(`⚠️  ${removed.length} 件の ID をマニフェストから削除しました。意図した削除か確認してください:`);
    for (const id of removed) console.log(`   - ${id}`);
  }
  process.exit(0);
}

// ── 照合 ──
if (!existsSync(MANIFEST)) {
  console.error("マニフェストがありません。初回は --update で生成してください。");
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
const manifestIds = manifest.ids || [];

const missing = manifestIds.filter((id) => !currentSet.has(id));
const added = currentIds.filter((id) => !manifestIds.includes(id));
// 本文が欠けている記事（meta はあるが body がない）も消失の一形態
const bodyMissing = currentIds.filter((id) => !bodySet.has(id));
// meta が欠けている本文（body はあるが meta がない = 表示されない孤児）
const metaMissing = [...bodySet].filter((id) => !currentSet.has(id));

if (asJson) {
  console.log(JSON.stringify({ manifestCount: manifestIds.length, currentCount: currentIds.length, missing, added, bodyMissing, metaMissing }, null, 2));
  process.exit(missing.length || bodyMissing.length ? 1 : 0);
}

console.log(`記事マニフェスト照合（マニフェスト ${manifestIds.length} 件 / 現在 ${currentIds.length} 件）`);
console.log(`  マニフェスト生成日: ${manifest.generatedAt ?? "不明"}`);
console.log("");

if (missing.length) {
  console.log(`❌ マニフェストにあった記事が ${missing.length} 件、現在のデータから消えています:`);
  console.log("   （これらは articlesMeta.js から失われています）");
  for (const id of missing) console.log(`   - ${id}`);
  console.log("");
  console.log("   これは記事の消失です。意図した削除でなければ、直前の変更を取り消してください。");
  console.log("   意図した削除であれば --update でマニフェストを更新します（差分がレビューに残ります）。");
  console.log("");
}

if (bodyMissing.length) {
  console.log(`❌ meta はあるが本文がない記事が ${bodyMissing.length} 件あります（本文だけが消えた可能性）:`);
  for (const id of bodyMissing) console.log(`   - ${id}`);
  console.log("");
}

if (metaMissing.length) {
  console.log(`⚠️  本文はあるが meta がない記事が ${metaMissing.length} 件あります（一覧に出ない孤児）:`);
  for (const id of metaMissing) console.log(`   - ${id}`);
  console.log("");
}

if (added.length) {
  console.log(`ℹ️  マニフェストにない新しい記事が ${added.length} 件あります:`);
  for (const id of added) console.log(`   + ${id}`);
  console.log("");
  console.log("   記事を追加した場合は、コミット前に次を実行してください:");
  console.log("     node scripts/check-article-manifest.mjs --update");
  console.log("");
}

const failed = missing.length + bodyMissing.length;
console.log(failed ? `❌ 記事の消失が ${failed} 件あります。` : "✅ 記事の消失はありません。");
process.exit(failed ? 1 : 0);
