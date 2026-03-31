import { useContext } from "react";
import { SITE_DESCRIPTION, getSiteTodayYmd, getArticleNewsYmd } from "../data/aiToolsData.js";
import { VIBE_SETUP_GUIDE, VIBE_CODING_PRACTICAL, VIBE_MEDIA_TAXONOMY, GLOSSARY_BY_GENRE, TOOL_REFERENCES } from "../data/vibeCodingGuide.js";
import { LangContext } from "../context/LangContext.js";
import { formatPickDate, formatWeekRoundupPeriodJp } from "../utils/dateUtils.js";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SidebarJump({ id, children, nested }) {
  return (
    <button
      type="button"
      className={`sidebar-anchor${nested ? " sidebar-anchor--nested" : ""}`}
      onClick={() => scrollToId(id)}
    >
      {children}
    </button>
  );
}

function GuideSidebar({ guideTab }) {
  const labelMap = {
    setup: "セットアップの目次",
    rules: "基本ルールの目次",
    practical: "実践テクニックの目次",
    media: "メディア生成ガイドの目次",
    glossary: "用語集の目次",
  };
  const sidebarLabel = labelMap[guideTab] || labelMap.setup;
  return (
    <aside className="desktop-sidebar" aria-label={sidebarLabel}>
      <div className="sidebar-panel">
        <h3>このページ内</h3>
        <p className="sidebar-panel-hint">見出しへジャンプします。</p>
        {guideTab === "setup" ? (
          <>
            <SidebarJump id="vibe-intro">バイブコーディングとは</SidebarJump>
            <SidebarJump id="vibe-setup">{VIBE_SETUP_GUIDE.title}</SidebarJump>
            {VIBE_SETUP_GUIDE.sections.map((s) => (
              <SidebarJump key={s.id} id={s.id} nested>
                {s.heading}
              </SidebarJump>
            ))}
          </>
        ) : guideTab === "rules" ? (
          <>
            <SidebarJump id="vibe-rules">基本ルール</SidebarJump>
            <SidebarJump id="vibe-pitfalls">ハマりやすいこと</SidebarJump>
          </>
        ) : guideTab === "practical" ? (
          <>
            <SidebarJump id="vibe-practical">
              {VIBE_CODING_PRACTICAL.title}
            </SidebarJump>
            {VIBE_CODING_PRACTICAL.sections.map((s) => (
              <SidebarJump key={s.id} id={s.id} nested>
                {s.heading}
              </SidebarJump>
            ))}
          </>
        ) : guideTab === "media" ? (
          <>
            <SidebarJump id="media-guide-intro">はじめに</SidebarJump>
            {VIBE_MEDIA_TAXONOMY.map((s) => (
              <SidebarJump key={s.id} id={s.id} nested>
                {s.title}
              </SidebarJump>
            ))}
          </>
        ) : (
          <>
            <SidebarJump id="glossary-guide">
              実用用語集（ジャンル別）
            </SidebarJump>
            {GLOSSARY_BY_GENRE.map((g) => (
              <SidebarJump key={g.id} id={`glossary-${g.id}`} nested>
                {g.title}
              </SidebarJump>
            ))}
          </>
        )}
      </div>
    </aside>
  );
}

/** セクション名 → アンカーID（日本語をそのまま使用、ブラウザは UTF-8 ID に対応） */
function sectionAnchorId(name) {
  return "ref-sec-" + name.replace(/\s+/g, "-");
}

function ToolSidebar({ toolTab, toolRef }) {
  const ref = toolRef?.ref;
  // section でグループ化して目次を生成
  const sections = [];
  const seen = new Set();
  if (ref?.terms) {
    for (const t of ref.terms) {
      const sec = t.section ?? "";
      if (sec && !seen.has(sec)) {
        seen.add(sec);
        sections.push(sec);
      }
    }
  }
  const label = TOOL_REFERENCES.find((t) => t.id === toolTab)?.label ?? "ツール";
  return (
    <aside className="desktop-sidebar" aria-label={`${label} の目次`}>
      <div className="sidebar-panel">
        <h3>{label} リファレンス</h3>
        <p className="sidebar-panel-hint">セクションへジャンプします。</p>
        {sections.map((sec) => (
          <button
            type="button"
            key={sec}
            className="sidebar-anchor"
            onClick={() => {
              const el = document.getElementById(sectionAnchorId(sec));
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {sec}
          </button>
        ))}
      </div>
    </aside>
  );
}

function CompaniesSidebar({ companies }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  return (
    <aside className="desktop-sidebar" aria-label={en ? "Company index" : "企業ページの目次"}>
      <div className="sidebar-panel">
        <h3>{en ? "Companies" : "企業一覧"}</h3>
        <p className="sidebar-panel-hint">
          {en ? "Click to scroll to the company card." : "項目をクリックで該当カードへスクロールします。"}
        </p>
        {companies.map((c) => (
          <SidebarJump key={c.id} id={`company-${c.id}`}>
            {c.name}
          </SidebarJump>
        ))}
      </div>
    </aside>
  );
}

function WeekRoundupNav({ articles, onSelect, onTagClick, className }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  if (articles.length === 0) return null;
  return (
    <div className={`sidebar-panel${className ? ` ${className}` : ""}`}>
      <h3>{en ? "Weekly Roundups" : "週刊まとめ（特集）"}</h3>
      <p className="sidebar-panel-hint" style={{ marginTop: 0 }}>
        {en ? "Weekly reviews, newest first." : "毎週の振り返り。新しい公開順です。"}
      </p>
      {articles.map((a) => (
        <div
          key={a.id}
          className="sidebar-link"
          role="button"
          tabIndex={0}
          onClick={() => onSelect(a)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(a);
            }
          }}
        >
          <span style={{ display: "block", fontWeight: 600 }}>
            {formatPickDate(getArticleNewsYmd(a))} 公開
          </span>
          {a.weekRoundupPeriod?.start && a.weekRoundupPeriod?.end ? (
            <span
              style={{
                display: "block",
                fontSize: 11,
                color: "var(--muted)",
                marginTop: 2,
              }}
            >
              対象{" "}
              {formatWeekRoundupPeriodJp(
                a.weekRoundupPeriod.start,
                a.weekRoundupPeriod.end,
              )}
            </span>
          ) : null}
        </div>
      ))}
      <p style={{ marginTop: 10, marginBottom: 0, fontSize: 12 }}>
        <button
          type="button"
          className="btn"
          style={{ fontSize: 12, padding: "6px 10px" }}
          onClick={() => onTagClick("週刊まとめ")}
        >
          {en ? 'Search by "Weekly Roundup" tag' : 'タグ「週刊まとめ」で記事を検索'}
        </button>
      </p>
    </div>
  );
}

function Sidebar({ articles, onSelect, onTagClick, weekRoundups }) {
  const lang = useContext(LangContext);
  const en = lang === "en";
  return (
    <aside className="desktop-sidebar">
      <div className="sidebar-panel">
        <h3>{en ? "About This Site" : "このサイトについて"}</h3>
        <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
          {en
            ? 'We summarize AI dev tool news & reviews (secondary source). Please verify with "Primary Sources" at the end of each article.'
            : 'AI 開発ツールのニュース・レビューを要約・整理しています（2次情報）。各記事末尾の「元記事・一次情報」から原文・公式を確認してください。'}
        </p>
        <div style={{ marginTop: 10, fontSize: 11, color: "var(--muted)" }}>
          {en ? "Last updated" : "最終更新"}: {getSiteTodayYmd()}
        </div>
        <p style={{ marginTop: 12, marginBottom: 0 }}>
          <a href="./feed.xml" className="prose-link" target="_blank" rel="noopener noreferrer">
            {en ? "Atom Feed (Subscribe)" : "Atom フィード（購読）"}
          </a>
        </p>
      </div>

      <WeekRoundupNav
        articles={weekRoundups}
        onSelect={onSelect}
        onTagClick={onTagClick}
      />

      <div className="sidebar-panel">
        <h3>{en ? "Popular Tags" : "よく使うタグ"}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["MCP", "動画生成", "スキル", "Markdown", "RAG", "音声", "CLI", "Anthropic"].map((t) => (
            <button
              key={t}
              type="button"
              className="tag-chip"
              onClick={() => onTagClick(t)}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export { SidebarJump, scrollToId, GuideSidebar, ToolSidebar, CompaniesSidebar, WeekRoundupNav, Sidebar };
