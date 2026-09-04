/**
 * 点検そのものが止まっていないかを見る。
 *
 * ── なぜ必要か ──
 * 日次点検は「報告すべきことがある場合だけ Issue を立てる」設計である。
 * これは通知が無視されるのを防ぐために正しいが、**副作用がある。**
 *
 *   異常が無い       → Issue が立たない → 静か
 *   点検が止まった   → Issue が立たない → 静か
 *
 * **この2つが区別できない。** 点検が止まっても、誰も気づかない。
 *
 * ── 誰が見るのか ──
 * ワークフローは自分が動かなかったことを検知できない。動いていないのだから。
 * したがって**別のスケジューラが見る**必要がある。
 *
 *   GitHub Actions   → 記事が出ているかを見る（maintenance-report の 4b）
 *   Claude Routine   → 点検が動いているかを見る（この検査）
 *
 * 独立した2つの仕組みが互いを見る形にする。**片方が止まれば、もう片方が鳴る。**
 *
 * ── 心拍の置き場所 ──
 * 点検ワークフローが `scripts/maintenance-heartbeat.json` に日付を書いてコミットする。
 * 日付だけなので、1日に2回走っても**コミットは1日1回**に収まる。
 *
 * Usage:
 *   node scripts/check-maintenance-heartbeat.mjs
 *   node scripts/check-maintenance-heartbeat.mjs --write --run-url=<url>   # 点検側が呼ぶ
 *   node scripts/check-maintenance-heartbeat.mjs --json
 *
 * 終了コード: 既定は常に 0（Warn のみ）。--strict を付けると遅れているとき 1
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "maintenance-heartbeat.json");

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const doWrite = args.includes("--write");
const strict = args.includes("--strict");
const runUrl = args.find((a) => a.startsWith("--run-url="))?.slice(10) ?? "";

/** 東京日付 */
const todayJst = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());

if (doWrite) {
  const prev = existsSync(FILE) ? JSON.parse(readFileSync(FILE, "utf-8")) : {};
  const today = todayJst();
  if (prev.lastRunJst === today) {
    console.log(`心拍は今日（${today}）の分が既にあります。書き込みません。`);
    process.exit(0);
  }
  writeFileSync(
    FILE,
    JSON.stringify({ lastRunJst: today, runUrl, note: "daily-maintenance.yml が更新する。手で編集しない" }, null, 2) + "\n",
    "utf-8"
  );
  console.log(`心拍を更新しました: ${today}`);
  process.exit(0);
}

if (!existsSync(FILE)) {
  const msg = "心拍ファイルがありません。点検が一度も走っていない可能性があります。";
  if (asJson) console.log(JSON.stringify({ ok: false, reason: "missing" }, null, 2));
  else console.log(`⚠️  ${msg}`);
  process.exit(strict ? 1 : 0);
}

const hb = JSON.parse(readFileSync(FILE, "utf-8"));
const last = String(hb.lastRunJst ?? "");
const today = todayJst();
const days = Math.floor(
  (new Date(`${today}T00:00:00Z`) - new Date(`${last}T00:00:00Z`)) / 86400000
);

// 1日2回走る前提。スケジュールは実測で最大4時間半遅れるため、
// 「昨日の分まで」は正常とみなす。2日以上空いたら止まっている疑い。
const stale = !last || days >= 2;

if (asJson) {
  console.log(JSON.stringify({ ok: !stale, lastRunJst: last, days, runUrl: hb.runUrl ?? "" }, null, 2));
  process.exit(stale && strict ? 1 : 0);
}

if (stale) {
  console.log(`⚠️  日次点検が ${days} 日動いていません（最終 ${last}）`);
  console.log("");
  console.log("   GitHub Actions の schedule は負荷時に遅延しますが、**2日空くのは遅延では説明できません。**");
  console.log("   次を確認してください。");
  console.log("");
  console.log("   1. Actions が無効化されていないか（60日間リポジトリに動きが無いと schedule は自動停止する）");
  console.log("   2. daily-maintenance.yml が失敗し続けていないか");
  console.log("   3. ワークフローの権限（contents: write）が外れていないか");
  console.log("");
  console.log("   **点検が止まると、記事の消失も期限切れも誰も見ていない状態になります。**");
} else {
  console.log(`✅ 日次点検は動いています（最終 ${last}${days ? ` / ${days}日前` : "・本日"}）`);
}
process.exit(stale && strict ? 1 : 0);
