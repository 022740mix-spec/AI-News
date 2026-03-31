import { useState, useContext } from "react";
import { SITE_NAME, SITE_DESCRIPTION, getSiteTodayYmd } from "../data/aiToolsData.js";
import { LangContext, L } from "../context/LangContext.js";
import { STORAGE_LOCAL_NOTICE } from "../constants.js";

function ScrollTopFab({ visible, onClick }) {
  if (!visible) return null;
  return (
    <button
      type="button"
      className="fab-top"
      title="先頭へ"
      aria-label="先頭へスクロール"
      onClick={onClick}
    >
      ↑
    </button>
  );
}

function StorageLocalNotice() {
  const lang = useContext(LangContext);
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_LOCAL_NOTICE) === "1",
  );
  if (dismissed) return null;
  return (
    <div className="storage-notice" role="status" aria-live="polite">
      <p>
        {lang === "en"
          ? "Theme and bookmarks are stored in your browser\u2019s localStorage. No third-party tracking cookies are used."
          : "テーマとブックマークはブラウザの localStorage に保存されます。広告追跡用の第三者 Cookie は使用していません。"}
      </p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem(STORAGE_LOCAL_NOTICE, "1");
          setDismissed(true);
        }}
      >
        {lang === "en" ? "Close" : "閉じる"}
      </button>
    </div>
  );
}

function EditorialStatement({ isOpen, onClose }) {
  const lang = useContext(LangContext);
  if (!isOpen) return null;

  const en = lang === "en";
  return (
    <div className="statement-overlay" onClick={onClose}>
      <div className="statement-card" onClick={(e) => e.stopPropagation()}>
        <button className="statement-close" onClick={onClose} aria-label={en ? "Close" : "閉じる"}>✕</button>
        <h2 style={{ margin: "0 0 1rem", fontSize: "1.25rem" }}>
          {en ? "Editorial Policy & Statement" : "運営方針・編集ステートメント"}
        </h2>

        <h3>{en ? "About This Site" : "このサイトについて"}</h3>
        <p>{en
          ? "A free news and guide site that systematically organizes the latest information on AI developer tools."
          : "AI 開発ツールの最新情報を日本語で体系的に整理し、無料で公開しているニュース・ガイドサイトです。"}</p>

        <h3>{en ? "AI-Assisted Content Production" : "AI による記事制作"}</h3>
        <p>{en
          ? <>Articles on this site are primarily produced using <strong>AI (mainly Claude Code and other AI coding tools)</strong>. AI handles drafting, structuring, and code generation, while human editors perform fact-checking, policy decisions, and final approval. We openly disclose our use of AI.</>
          : <>本サイトの記事は主に <strong>AI（Claude Code を中心とした AI コーディングツール）</strong> を活用して制作しています。AI が下書き・構成・コード生成を担い、人間の編集者が事実確認・方針判断・最終承認を行う体制です。AI を活用していることを隠さず、透明に開示します。</>}</p>

        <h3>{en ? "Sources & Verification" : "情報源と検証"}</h3>
        <ul>
          {en ? (<>
            <li><strong>Official announcements and documentation</strong> are treated as primary sources and cited as primarySources in each article</li>
            <li><strong>One official source is sufficient</strong> (the official source itself is the primary information)</li>
            <li><strong>Estimates, user testimonials, and controversial claims</strong> are cross-referenced with multiple sources</li>
            <li>Information without a verifiable primary source is not published. No speculation or conjecture is included</li>
          </>) : (<>
            <li><strong>公式発表・公式ドキュメント</strong>を1次情報とし、記事に primarySources として明記します</li>
            <li><strong>公式情報は1ソースで十分</strong>と判断します（公式自体が1次情報のため）</li>
            <li><strong>推定値・ユーザー体験談・論争的主張</strong>は複数ソースで裏取りを行います</li>
            <li>1次情報が確認できない情報は掲載しません。推測や憶測は記事に含めません</li>
          </>)}
        </ul>

        <h3>{en ? "Images & Diagrams" : "画像・図版"}</h3>
        <ul>
          {en ? (<>
            <li>Diagrams are <strong>custom SVGs</strong> created based on primary sources</li>
            <li>Cover images use <strong>free-licensed photos</strong> (Unsplash, etc.) or official brand colors for editorial purposes</li>
            <li>Benchmark scores in charts use <strong>official figures only</strong>; estimates are not included</li>
            <li>Data sources are noted in captions or article text</li>
          </>) : (<>
            <li>記事内の図版は<strong>自作の SVG</strong> で情報を図示し、1次情報に基づいて正確に作成します</li>
            <li>カバー画像には<strong>フリーライセンスの写真</strong>（Unsplash 等）や企業の公式ブランドカラーを編集目的で使用します</li>
            <li>チャートに掲載するベンチマークスコアは<strong>公式発表値のみ</strong>使用し、推定値は原則掲載しません</li>
            <li>データの出典は図のキャプションまたは本文に記載します</li>
          </>)}
        </ul>

        <h3>{en ? "Updates & Corrections" : "記事の更新と訂正"}</h3>
        <ul>
          {en ? (<>
            <li><strong>Comparison and pricing articles</strong> are reviewed at least once a month with a "last verified" date</li>
            <li><strong>Factual errors</strong> are corrected with a "Correction" notice at the top of the article (never silently fixed)</li>
            <li><strong>New information</strong> is appended as an "Update" at the end of the article</li>
            <li>News articles are kept individually and not deleted</li>
          </>) : (<>
            <li><strong>比較記事・料金記事</strong>は毎月1回以上の見直しを実施し、「最終確認日」を記事に表示します</li>
            <li><strong>事実の誤り</strong>を発見した場合は記事上部に「Correction」として訂正を明記します（黙って修正しません）</li>
            <li><strong>情報の追加・更新</strong>は記事末尾に「Update」として追記します</li>
            <li>ニュース記事は原則として個別に保持し、削除は行いません</li>
          </>)}
        </ul>

        <h3>{en ? "Review Ratings" : "レビュー評価"}</h3>
        <ul>
          {en ? (<>
            <li>Overall scores are calculated as a weighted average across 5 axes (AI quality, usability, value, extensibility, enterprise)</li>
            <li>Rating criteria and weights are documented in data files and publicly verifiable</li>
            <li>We do not receive compensation from any tool or company</li>
          </>) : (<>
            <li>5軸（AI品質・使いやすさ・コスパ・拡張性・企業向け）の加重平均で総合スコアを算出します</li>
            <li>評価基準と重みはデータファイルに明記し、誰でも確認できます</li>
            <li>特定のツールや企業から金銭的な対価を受け取っていません</li>
          </>)}
        </ul>

        <h3>{en ? "Privacy & Advertising" : "プライバシーと広告"}</h3>
        <ul>
          {en ? (<>
            <li><strong>We collect no personal data whatsoever</strong>. No cookies, analytics, or tracking</li>
            <li><strong>We display no advertisements</strong>. The site is completely free</li>
            <li>No affiliate links are used</li>
          </>) : (<>
            <li><strong>個人情報を一切収集しません</strong>。Cookie、アクセス解析、トラッキングは使用していません</li>
            <li><strong>広告を一切掲載しません</strong>。完全無料で運営しています</li>
            <li>アフィリエイトリンクは使用していません</li>
          </>)}
        </ul>

        <h3>{en ? "Open Source" : "オープンソース"}</h3>
        <p>{en
          ? <>The source code of this site is <a href="https://github.com/022740mix-spec/AI-News" target="_blank" rel="noopener">available on GitHub</a>. Article data, rating criteria, and build configuration are all publicly verifiable.</>
          : <>本サイトのソースコードは <a href="https://github.com/022740mix-spec/AI-News" target="_blank" rel="noopener">GitHub で公開</a> しています。記事データ、評価基準、ビルド設定を含めて誰でも確認・検証できます。</>}</p>
      </div>
    </div>
  );
}

function SiteFooter({ onOpenStatement }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  const desc = en ? "Latest news & guides on Claude Code, Cursor, Codex & Copilot" : SITE_DESCRIPTION;
  return (
    <footer className="site-footer">
      <div>
        {SITE_NAME} — {desc}
      </div>
      <div>
        {en ? "Last updated" : "最終更新"}: {getSiteTodayYmd()}
        {" · "}
        <button
          type="button"
          className="footer-link"
          onClick={onOpenStatement}
        >
          {en ? "Editorial Policy & Statement" : "運営方針・編集ステートメント"}
        </button>
      </div>
      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>
        {en ? "AI-produced · No ads · No tracking · Completely free" : "記事は主に AI で制作 · 広告なし · 個人情報収集なし · 完全無料"}
      </div>
    </footer>
  );
}

function SiteSectionNav({ section, onSection }) {
  const lang = useContext(LangContext);
  const tabs = [
    { id: "articles", label: "ニュース", en: "News" },
    { id: "reviews", label: "レビュー", en: "Reviews" },
    { id: "guide", label: "ガイド", en: "Guide" },
    { id: "tools", label: "ツール別", en: "Tools" },
    { id: "companies", label: "AI企業", en: "Companies" },
  ];
  return (
    <nav className="section-site-nav" aria-label={lang === "en" ? "Site sections" : "サイト内切替"}>
      <div className="section-site-nav-inner">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`section-site-tab${section === t.id ? " is-active" : ""}`}
            onClick={() => onSection(t.id)}
          >
            {L(t, lang)}
          </button>
        ))}
      </div>
    </nav>
  );
}

export { StorageLocalNotice, EditorialStatement, SiteFooter, ScrollTopFab, SiteSectionNav };
