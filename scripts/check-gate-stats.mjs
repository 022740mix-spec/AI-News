/**
 * 公開の関門（CI）が、過去 N 日に何回・どの段で止めたかを数える。
 *
 * ── なぜ必要か ──
 * CLAUDE.md は「ルールは仮説である」とし、四半期ごとに「長く発火していない規則」と
 * 「二重になっている規則」を洗い出して整理することを求める。ところが、**どの検査が
 * 何回止めたかの記録が、どこにも残っていなかった。** 記録が無いまま規則を外せば、
 * 外してよい根拠が無い。逆に、止め続けている検査は残す理由になる。
 *
 * ここでは GitHub Actions の実行履歴（公開データ）から数える。
 *
 *   Content checks（checks.yml）     … PR と main の両方で走る
 *   Deploy to GitHub Pages（deploy.yml） … main への push で走る。ここが落ちると公開されない
 *
 * 失敗した実行について、落ちた「段（step）」の名前を集計する。
 * PR で落ちたものは**公開前に止まった**もの、main で落ちたものは**関門を抜けたあとで
 * 見つかった**ものとして分ける。
 *
 * ── 数えないもの（過小評価になる）──
 * - 手元の Stop フック（review-check）やルーティンの add-article.mjs による拒否。
 *   実行環境の中で完結し、記録が残らない
 * - 1つの段の中の、どの規則（review-check の 1〜23）が止めたか。ログの解析が要る
 * - インフラ由来の失敗（チェックアウト・依存のインストール）は、別に数えて関門の件数に含めない
 *
 * ── 読み方の注意 ──
 * **0 件は「要らない規則」の証拠ではない。** 規則があるから事故が起きていない
 * 可能性がある（セキュリティ・個人情報・当事者が否定しうる事実の条件は、この数字で
 * 外す対象にしない）。この数字は、整理の議論の**材料の1つ**にする。
 *
 * 取得できなかったときは「0 件」と書かず「判定不能」と書く。到達できないことと、
 * 止まっていないことは別である。
 *
 * Usage:
 *   node scripts/check-gate-stats.mjs            # 過去28日
 *   node scripts/check-gate-stats.mjs --days=90
 *   node scripts/check-gate-stats.mjs --json
 *
 * GITHUB_TOKEN があれば使う（Actions の上限を避けるため）。無くても公開リポジトリは読める。
 * リポジトリは GITHUB_REPOSITORY、無ければ git remote から導く（所有者名を書かない）。
 */
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const days = Number(args.find((a) => a.startsWith("--days="))?.slice(7)) || 28;

const WORKFLOWS = [
  { file: "checks.yml", label: "Content checks" },
  { file: "deploy.yml", label: "Deploy to GitHub Pages" },
];

/** 関門ではなくインフラ由来の段。失敗しても規則の発火には数えない */
const INFRA_STEP = /^(Set up job|Post |Complete job|Run actions\/|Run npm ci$|Run npm install$)/;

function repoFromEnvOrGit() {
  const fromCi = process.env.GITHUB_REPOSITORY;
  if (fromCi && fromCi.includes("/")) return fromCi;
  try {
    const url = execSync("git remote get-url origin", { cwd: rootDir, encoding: "utf8" }).trim();
    const m = url.match(/[:/]([^/:]+\/[^/]+?)(?:\.git)?$/);
    if (m) return m[1];
  } catch {
    /* リモート未設定 */
  }
  return null;
}

const repo = repoFromEnvOrGit();
let token = process.env.GITHUB_TOKEN;

async function api(path) {
  for (;;) {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: {
        accept: "application/vnd.github+json",
        "user-agent": "check-gate-stats",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    });
    // 失効したトークンが環境に残っていると、公開データでも 401 になる。
    // トークン無しで1回だけやり直す（公開リポジトリは無認証でも読める）
    if (res.status === 401 && token) {
      token = undefined;
      continue;
    }
    if (!res.ok) {
      const e = new Error(`HTTP ${res.status} ${path}`);
      e.status = res.status;
      throw e;
    }
    return res.json();
  }
}

function out(result) {
  if (asJson) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(render(result));
  }
}

function render(r) {
  if (!r.ok) {
    return `判定不能: ${r.reason}\n（到達できないことは、止まっていないことを意味しない。0 件とは読まないこと）`;
  }
  const L = [];
  L.push(`対象: 過去${r.days}日（${r.since} 以降）の実行。`);
  for (const w of r.workflows) {
    L.push("");
    L.push(`■ ${w.label}（${w.file}）: 実行 ${w.runs} 回 / 失敗 ${w.failed} 回（うちインフラ由来 ${w.infraOnly} 回）`);
    if (w.steps.length === 0) {
      L.push("  関門の段で止まった記録はない。");
      continue;
    }
    for (const s of w.steps) {
      L.push(`  - ${s.step}: PR で ${s.pullRequest} 回（公開前に停止） / main で ${s.push} 回（関門を抜けたあとに発見）` +
        `${s.lastFailure ? ` / 最後に止めた日 ${s.lastFailure}` : ""}`);
    }
  }
  if (r.neverFailed.length) {
    L.push("");
    L.push(`期間内に一度も止めなかった段（${r.neverFailed.length} 件）: ${r.neverFailed.join(" / ")}`);
    L.push("  ※ 0 件は「要らない」の証拠ではない。セキュリティ・個人情報・当事者が否定しうる事実の条件は対象外。");
  }
  L.push("");
  L.push("数えていないもの: 手元の Stop フックや add-article.mjs による拒否、review-check の規則別の内訳。");
  return L.join("\n");
}

if (!repo) {
  out({ ok: false, reason: "リポジトリを特定できない（GITHUB_REPOSITORY も git remote も無い）" });
  process.exit(0);
}

const sinceDate = new Date(Date.now() - days * 86400000);
const since = sinceDate.toISOString().slice(0, 10);

try {
  const result = { ok: true, days, since, workflows: [], neverFailed: [] };
  const allSteps = new Set();
  const firedSteps = new Set();

  for (const wf of WORKFLOWS) {
    const runs = [];
    for (let page = 1; page <= 10; page++) {
      const d = await api(
        `/repos/${repo}/actions/workflows/${wf.file}/runs?per_page=100&page=${page}&created=%3E%3D${since}`
      );
      runs.push(...d.workflow_runs);
      if (d.workflow_runs.length < 100) break;
    }
    const failed = runs.filter((r) => r.conclusion === "failure");
    const byStep = new Map();
    let infraOnly = 0;

    for (const run of failed) {
      const jobs = await api(`/repos/${repo}/actions/runs/${run.id}/jobs?per_page=100`);
      const failedSteps = [];
      for (const job of jobs.jobs) {
        for (const s of job.steps ?? []) {
          if (s.conclusion === "failure") failedSteps.push(s.name);
        }
      }
      const gateSteps = failedSteps.filter((n) => !INFRA_STEP.test(n));
      if (gateSteps.length === 0) {
        infraOnly++;
        continue;
      }
      const day = (run.updated_at ?? run.created_at).slice(0, 10);
      for (const name of new Set(gateSteps)) {
        const cur = byStep.get(name) ?? { step: name, pullRequest: 0, push: 0, lastFailure: null };
        if (run.event === "pull_request") cur.pullRequest++;
        else cur.push++;
        if (!cur.lastFailure || day > cur.lastFailure) cur.lastFailure = day;
        byStep.set(name, cur);
        firedSteps.add(name);
      }
    }

    // 段の一覧（一度も落ちなかった段を出すため）。直近の成功した実行から取る
    const ok = runs.find((r) => r.conclusion === "success");
    if (ok) {
      const jobs = await api(`/repos/${repo}/actions/runs/${ok.id}/jobs?per_page=100`);
      for (const job of jobs.jobs)
        for (const s of job.steps ?? []) if (!INFRA_STEP.test(s.name)) allSteps.add(s.name);
    }

    result.workflows.push({
      file: wf.file,
      label: wf.label,
      runs: runs.length,
      failed: failed.length,
      infraOnly,
      steps: [...byStep.values()].sort((a, b) => b.pullRequest + b.push - (a.pullRequest + a.push)),
    });
  }

  result.neverFailed = [...allSteps].filter((n) => !firedSteps.has(n));
  out(result);
} catch (e) {
  const hint = e.status === 403 ? "（API の上限に達した可能性。GITHUB_TOKEN を渡すと緩和される）" : "";
  out({ ok: false, reason: `${e.message}${hint}` });
}
