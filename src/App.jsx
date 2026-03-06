/**
 * AI開発ツール 徹底比較サイト（スタンドアロン版）
 * スマホ対応レスポンシブデザイン
 */
import { useState, useMemo, useCallback } from "react";
import {
  AI_CLI_SERVICES,
  AI_EDITORS,
  CATEGORIES,
  renderStars,
  LAST_UPDATED,
} from "./data/aiToolsData.js";

/* ── テーマカラー ── */
const T = {
  bg: "#080c14",
  card: "#0f1520",
  inp: "#161d2d",
  bdr: "#1e293b",
  tx: "#e2e8f0",
  txD: "#94a3b8",
  txM: "#64748b",
  cy: "#22d3ee",
  gn: "#34d399",
  star: "#fbbf24",
};

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif';

/* ── タブ・ソート ── */
const TABS = [
  { id: "cli", label: "CLIサービス", icon: "⌨️" },
  { id: "editor", label: "AIエディタ", icon: "📝" },
  { id: "detail", label: "詳細解説", icon: "📖" },
];

const SORT_OPTIONS = [
  { id: "rank", label: "おすすめ順" },
  { id: "year", label: "登場年順" },
  { id: "name", label: "名前順" },
  { id: "rating", label: "評価順" },
];

function sortTools(tools, sortBy) {
  const sorted = [...tools];
  switch (sortBy) {
    case "year": return sorted.sort((a, b) => b.year - a.year);
    case "name": return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "rating": return sorted.sort((a, b) => b.rating - a.rating || a.rank - b.rank);
    default: return sorted.sort((a, b) => a.rank - b.rank);
  }
}

/* ── モバイル用カード ── */
function MobileCard({ tool, color, onSelect }) {
  return (
    <div
      onClick={() => onSelect(tool)}
      style={{
        background: T.card,
        border: `1px solid ${T.bdr}`,
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <div>
          <span style={{ fontSize: 14, fontWeight: 700, color: T.tx }}>{tool.name}</span>
          <span style={{ fontSize: 11, color: T.txD, marginLeft: 6 }}>{tool.company}</span>
        </div>
        <span style={{ fontSize: 11, color: T.star }}>{renderStars(tool.rating)}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, fontSize: 11, color: T.txD, marginBottom: 8 }}>
        <span>🌐 {tool.country}</span>
        <span>📅 {tool.year}</span>
        <span style={{ color, fontWeight: 500 }}>🧠 {tool.model}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: T.txM }}>
        <span>💰 {tool.pricing}</span>
        <span>🔒 {tool.security}</span>
      </div>
    </div>
  );
}

/* ── デスクトップ用テーブル ── */
function ComparisonTable({ tools, category, onSelect }) {
  const cat = CATEGORIES[category];
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: T.tx, marginBottom: 8, fontFamily: FONT }}>
        {cat.icon} {cat.label} 徹底比較 {tools.length}選（おすすめ順）
      </h2>
      <p style={{ fontSize: 12, color: T.txD, marginBottom: 16, fontFamily: FONT }}>
        以下の表は、最新モデルの対応状況やセキュリティ、料金を総合的に評価したものです。
      </p>

      {/* モバイル: カード表示 */}
      <div className="mobile-only">
        {tools.map((tool) => (
          <MobileCard key={tool.id} tool={tool} color={cat.color} onSelect={onSelect} />
        ))}
      </div>

      {/* デスクトップ: テーブル表示 */}
      <div className="desktop-only" style={{ overflowX: "auto", borderRadius: 8, border: `1px solid ${T.bdr}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FONT, fontSize: 12 }}>
          <thead>
            <tr style={{ background: T.inp, borderBottom: `1px solid ${T.bdr}` }}>
              {["おすすめ度", "サービス名", "開発企業名", "国", "登場年", "最新モデル", "料金形態", "企業セキュリティ"].map((h) => (
                <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: T.txD, fontWeight: 600, fontSize: 11, whiteSpace: "nowrap" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, i) => (
              <tr
                key={tool.id}
                onClick={() => onSelect(tool)}
                style={{
                  borderBottom: `1px solid ${T.bdr}`,
                  cursor: "pointer",
                  background: i % 2 === 0 ? "transparent" : T.inp + "44",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = cat.color + "11")}
                onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? "transparent" : T.inp + "44")}
              >
                <td style={{ padding: "12px", color: T.star, fontSize: 13, whiteSpace: "nowrap" }}>{renderStars(tool.rating)}</td>
                <td style={{ padding: "12px", color: T.tx, fontWeight: 600 }}>{tool.name}</td>
                <td style={{ padding: "12px", color: T.txD }}>{tool.company}</td>
                <td style={{ padding: "12px", color: T.txD }}>{tool.country}</td>
                <td style={{ padding: "12px", color: T.txD }}>{tool.year}</td>
                <td style={{ padding: "12px", color: cat.color, fontWeight: 500 }}>{tool.model}</td>
                <td style={{ padding: "12px", color: T.txD, fontSize: 11 }}>{tool.pricing}</td>
                <td style={{ padding: "12px", color: T.txD, fontSize: 11 }}>{tool.security}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── 特徴タグ ── */
function FeatureTag({ label, color }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 12,
      fontSize: 11,
      fontWeight: 500,
      color,
      background: color + "18",
      border: `1px solid ${color}33`,
      marginRight: 4,
      marginBottom: 4,
    }}>
      {label}
    </span>
  );
}

/* ── 詳細カード ── */
function DetailCard({ tool, color }) {
  return (
    <div style={{
      background: T.card,
      border: `1px solid ${T.bdr}`,
      borderRadius: 12,
      padding: "18px 20px",
      marginBottom: 16,
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.tx }}>
            {tool.rank}. {tool.name}
            <span style={{ fontSize: 11, color: T.txD, fontWeight: 400, marginLeft: 8 }}>({tool.company})</span>
          </div>
          <div style={{ fontSize: 12, color: T.star, marginTop: 4 }}>
            {renderStars(tool.rating)}
            <span style={{ color: T.txD, marginLeft: 8, fontSize: 11 }}>{tool.year}年〜 / {tool.country}</span>
          </div>
        </div>
        <span style={{
          padding: "3px 10px", borderRadius: 6, fontSize: 10, fontWeight: 600,
          color, background: color + "18", border: `1px solid ${color}33`,
        }}>
          {tool.model}
        </span>
      </div>

      <p style={{ fontSize: 13, color: T.txD, lineHeight: 1.8, marginBottom: 12 }}>
        {tool.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
        {tool.features.map((f) => <FeatureTag key={f} label={f} color={color} />)}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, borderTop: `1px solid ${T.bdr}`, paddingTop: 10, fontSize: 11, color: T.txD }}>
        <span>💰 {tool.pricing}</span>
        <span>🔒 {tool.security}</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════ */
/*              メインApp                 */
/* ══════════════════════════════════════ */
export default function App() {
  const [activeTab, setActiveTab] = useState("cli");
  const [sortBy, setSortBy] = useState("rank");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);

  const filterFn = useCallback((tools) => {
    if (!searchQuery) return tools;
    const q = searchQuery.toLowerCase();
    return tools.filter(
      (t) => t.name.toLowerCase().includes(q) || t.company.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredCLI = useMemo(() => sortTools(filterFn(AI_CLI_SERVICES), sortBy), [sortBy, filterFn]);
  const filteredEditors = useMemo(() => sortTools(filterFn(AI_EDITORS), sortBy), [sortBy, filterFn]);

  const handleSelectTool = useCallback((tool) => {
    setSelectedTool(tool);
    setActiveTab("detail");
  }, []);

  return (
    <div style={{ minHeight: "100dvh", background: T.bg, fontFamily: FONT }}>
      {/* レスポンシブCSS */}
      <style>{`
        .mobile-only { display: none; }
        .desktop-only { display: block; }
        @media (max-width: 768px) {
          .mobile-only { display: block; }
          .desktop-only { display: none; }
        }
      `}</style>

      {/* ── ヘッダー ── */}
      <header style={{
        padding: "20px 24px 16px",
        borderBottom: `1px solid ${T.bdr}`,
        background: T.card,
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>🤖</span>
              <div>
                <h1 style={{ fontSize: 18, fontWeight: 800, color: T.tx, margin: 0 }}>
                  AI開発ツール 徹底比較
                </h1>
                <p style={{ fontSize: 11, color: T.txD, margin: 0 }}>
                  {LAST_UPDATED} 現在の最新情報
                </p>
              </div>
            </div>
            <span style={{
              padding: "4px 10px", borderRadius: 6, fontSize: 10,
              color: T.gn, background: T.gn + "18", border: `1px solid ${T.gn}33`,
            }}>
              自動収集
            </span>
          </div>

          <p style={{ fontSize: 13, color: T.txD, lineHeight: 1.7, margin: "0 0 14px 0" }}>
            {LAST_UPDATED} 現在の最新情報を反映した、CLI対応のAI開発アシスタント
            およびAIエディタの徹底比較です。GPT-5.4やClaude Opus 4.6 / Sonnet 4.6
            といった「超・推論モデル」の登場により、単なるコード生成から
            「自律的なエージェント」へと進化しています。
          </p>

          {/* 検索・ソート */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="🔍 サービス名・企業名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1, minWidth: 160,
                padding: "8px 12px", borderRadius: 8,
                border: `1px solid ${T.bdr}`, background: T.inp,
                color: T.tx, fontSize: 13, fontFamily: FONT, outline: "none",
              }}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "8px 12px", borderRadius: 8,
                border: `1px solid ${T.bdr}`, background: T.inp,
                color: T.tx, fontSize: 12, fontFamily: FONT, cursor: "pointer",
              }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* ── タブバー ── */}
      <nav style={{
        borderBottom: `1px solid ${T.bdr}`,
        background: T.card,
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", padding: "0 24px" }}>
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            const color = tab.id === "cli" ? CATEGORIES.cli.color : tab.id === "editor" ? CATEGORIES.editor.color : T.cy;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "12px 16px",
                  border: "none",
                  borderBottom: active ? `2px solid ${color}` : "2px solid transparent",
                  background: "transparent",
                  color: active ? color : T.txD,
                  fontSize: 13, fontWeight: active ? 600 : 400,
                  cursor: "pointer", fontFamily: FONT,
                  whiteSpace: "nowrap",
                  transition: "all .15s",
                }}
              >
                {tab.icon} {tab.label}
                {tab.id === "cli" && <span style={{ marginLeft: 4, fontSize: 10, color: T.txM }}>({filteredCLI.length})</span>}
                {tab.id === "editor" && <span style={{ marginLeft: 4, fontSize: 10, color: T.txM }}>({filteredEditors.length})</span>}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── コンテンツ ── */}
      <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
        {activeTab === "cli" && (
          <ComparisonTable tools={filteredCLI} category="cli" onSelect={handleSelectTool} />
        )}

        {activeTab === "editor" && (
          <ComparisonTable tools={filteredEditors} category="editor" onSelect={handleSelectTool} />
        )}

        {activeTab === "detail" && (
          <div>
            {selectedTool ? (
              <div style={{ marginBottom: 24 }}>
                <button
                  onClick={() => { setSelectedTool(null); setActiveTab(selectedTool.category === "cli" ? "cli" : "editor"); }}
                  style={{
                    background: "none", border: `1px solid ${T.bdr}`, borderRadius: 6,
                    color: T.txD, fontSize: 12, padding: "6px 14px", cursor: "pointer",
                    marginBottom: 16, fontFamily: FONT,
                  }}
                >
                  ← 一覧に戻る
                </button>
                <DetailCard tool={selectedTool} color={CATEGORIES[selectedTool.category].color} />
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: T.tx, marginBottom: 20 }}>
                  注目のサービス詳細解説
                </h2>

                <h3 style={{ fontSize: 14, fontWeight: 600, color: CATEGORIES.cli.color, marginBottom: 12, marginTop: 24 }}>
                  ⌨️ AI開発CLIサービス
                </h3>
                {sortTools(AI_CLI_SERVICES, "rank").map((tool) => (
                  <DetailCard key={tool.id} tool={tool} color={CATEGORIES.cli.color} />
                ))}

                <h3 style={{ fontSize: 14, fontWeight: 600, color: CATEGORIES.editor.color, marginBottom: 12, marginTop: 32 }}>
                  📝 AIエディタ
                </h3>
                {sortTools(AI_EDITORS, "rank").map((tool) => (
                  <DetailCard key={tool.id} tool={tool} color={CATEGORIES.editor.color} />
                ))}
              </>
            )}
          </div>
        )}

        {/* フッター */}
        <footer style={{
          marginTop: 40, paddingTop: 16,
          borderTop: `1px solid ${T.bdr}`,
          fontSize: 11, color: T.txM, textAlign: "center",
          lineHeight: 1.8,
        }}>
          <div>最終更新: {LAST_UPDATED}</div>
          <div>データは公開情報を基に自動収集・整理しています</div>
        </footer>
      </main>
    </div>
  );
}
