/**
 * AI Tool News — ブログ風AIツール情報サイト
 */
import { useState, useMemo, useCallback } from "react";
import {
  ARTICLES,
  CATEGORIES,
  renderStars,
  SITE_NAME,
  SITE_DESCRIPTION,
  LAST_UPDATED,
} from "./data/aiToolsData.js";

const T = {
  bg: "#0a0e17",
  surface: "#111827",
  card: "#1a2234",
  bdr: "#1e293b",
  tx: "#f1f5f9",
  txS: "#cbd5e1",
  txM: "#64748b",
  accent: "#3b82f6",
  cyan: "#22d3ee",
  purple: "#a78bfa",
  amber: "#f59e0b",
  green: "#34d399",
  star: "#fbbf24",
};
const F = '-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif';

/* ── カテゴリフィルタ ── */
const FILTERS = [
  { id: "all", label: "すべて" },
  { id: "special", label: "特集" },
  { id: "cli", label: "CLI" },
  { id: "editor", label: "エディタ" },
];

/* ── 記事のアイコン生成 ── */
function getCategoryIcon(cat) {
  if (cat === "cli") return ">";
  if (cat === "editor") return "<>";
  return "★";
}

/* ══ ヘッダー ══ */
function Header({ query, setQuery }) {
  return (
    <header style={{ background: T.surface, borderBottom: `1px solid ${T.bdr}` }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 20px 20px" }}>
        <div style={{ marginBottom: 16 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: T.tx, margin: 0, letterSpacing: "-0.02em" }}>
            {SITE_NAME}
          </h1>
          <p style={{ fontSize: 13, color: T.txM, margin: "4px 0 0" }}>{SITE_DESCRIPTION}</p>
        </div>
        <input
          type="text"
          placeholder="記事を検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%", padding: "10px 14px", borderRadius: 8,
            border: `1px solid ${T.bdr}`, background: T.card,
            color: T.tx, fontSize: 14, fontFamily: F, outline: "none",
          }}
        />
      </div>
    </header>
  );
}

/* ══ フィルタバー ══ */
function FilterBar({ active, setActive }) {
  return (
    <nav style={{ background: T.surface, borderBottom: `1px solid ${T.bdr}`, overflowX: "auto" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", gap: 0, padding: "0 20px" }}>
        {FILTERS.map((f) => {
          const on = active === f.id;
          return (
            <button key={f.id} onClick={() => setActive(f.id)} style={{
              padding: "10px 16px", border: "none", background: "none",
              borderBottom: on ? `2px solid ${T.accent}` : "2px solid transparent",
              color: on ? T.tx : T.txM, fontSize: 13, fontWeight: on ? 600 : 400,
              cursor: "pointer", fontFamily: F, whiteSpace: "nowrap",
            }}>
              {f.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ══ 特集カード（大） ══ */
function FeaturedCard({ article, onClick }) {
  return (
    <article onClick={onClick} style={{
      background: `linear-gradient(135deg, ${T.card}, #1a1a3e)`,
      border: `1px solid ${T.bdr}`,
      borderRadius: 12, padding: 24, marginBottom: 20, cursor: "pointer",
      transition: "transform .15s", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 12, right: 16, fontSize: 48, opacity: 0.08 }}>★</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        <span style={{
          padding: "3px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700,
          color: "#fff", background: T.amber, letterSpacing: "0.05em",
        }}>特集</span>
        <span style={{ fontSize: 11, color: T.txM }}>{article.date}</span>
        <span style={{ fontSize: 11, color: T.txM }}>{article.readTime}で読める</span>
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: T.tx, lineHeight: 1.5, margin: "0 0 10px" }}>
        {article.title}
      </h2>
      <p style={{ fontSize: 14, color: T.txS, lineHeight: 1.8, margin: 0 }}>
        {article.excerpt}
      </p>
      <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {article.tags.map((t) => (
          <span key={t} style={{
            padding: "2px 8px", borderRadius: 4, fontSize: 10,
            color: T.txM, background: T.surface, border: `1px solid ${T.bdr}`,
          }}>{t}</span>
        ))}
      </div>
    </article>
  );
}

/* ══ 記事カード（通常） ══ */
function ArticleCard({ article, onClick }) {
  const cat = CATEGORIES[article.category];
  return (
    <article onClick={onClick} style={{
      background: T.card, border: `1px solid ${T.bdr}`,
      borderRadius: 10, padding: "16px 18px", marginBottom: 12, cursor: "pointer",
      transition: "border-color .15s",
    }}>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        {/* アイコン */}
        <div style={{
          width: 44, height: 44, borderRadius: 8, flexShrink: 0,
          background: cat.color + "18", border: `1px solid ${cat.color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: cat.color, fontWeight: 700, fontFamily: "monospace",
        }}>
          {getCategoryIcon(article.category)}
        </div>
        {/* 本文 */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{
              padding: "2px 7px", borderRadius: 3, fontSize: 9, fontWeight: 600,
              color: cat.color, background: cat.color + "18",
            }}>{cat.label}</span>
            <span style={{ fontSize: 11, color: T.txM }}>{article.date}</span>
            {article.rating && (
              <span style={{ fontSize: 11, color: T.star }}>{renderStars(article.rating)}</span>
            )}
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: T.tx, lineHeight: 1.5, margin: "0 0 6px" }}>
            {article.title}
          </h3>
          <p style={{ fontSize: 13, color: T.txM, lineHeight: 1.6, margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {article.excerpt}
          </p>
          <div style={{ marginTop: 8, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
            {article.model && (
              <span style={{ fontSize: 10, color: cat.color, fontWeight: 500 }}>{article.model}</span>
            )}
            {article.pricing && (
              <span style={{ fontSize: 10, color: T.txM }}>{article.pricing}</span>
            )}
            <span style={{ fontSize: 10, color: T.txM, marginLeft: "auto" }}>{article.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ══ 記事詳細ページ ══ */
function ArticleDetail({ article, onBack }) {
  const cat = CATEGORIES[article.category];
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 20px" }}>
      <button onClick={onBack} style={{
        background: "none", border: `1px solid ${T.bdr}`, borderRadius: 6,
        color: T.txM, fontSize: 12, padding: "7px 16px", cursor: "pointer",
        fontFamily: F, marginBottom: 20,
      }}>
        ← 記事一覧に戻る
      </button>

      <article>
        {/* メタ情報 */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{
            padding: "3px 10px", borderRadius: 4, fontSize: 10, fontWeight: 600,
            color: cat.color, background: cat.color + "18",
          }}>{cat.label}</span>
          <span style={{ fontSize: 12, color: T.txM }}>{article.date}</span>
          <span style={{ fontSize: 12, color: T.txM }}>{article.author}</span>
          <span style={{ fontSize: 12, color: T.txM }}>{article.readTime}</span>
        </div>

        {/* タイトル */}
        <h1 style={{ fontSize: 22, fontWeight: 800, color: T.tx, lineHeight: 1.5, margin: "0 0 16px" }}>
          {article.title}
        </h1>

        {/* レビュー情報バー */}
        {article.type === "review" && (
          <div style={{
            background: T.surface, border: `1px solid ${T.bdr}`, borderRadius: 10,
            padding: 16, marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 16,
          }}>
            {article.rating && (
              <div>
                <div style={{ fontSize: 10, color: T.txM, marginBottom: 2 }}>評価</div>
                <div style={{ fontSize: 14, color: T.star }}>{renderStars(article.rating)}</div>
              </div>
            )}
            {article.company && (
              <div>
                <div style={{ fontSize: 10, color: T.txM, marginBottom: 2 }}>開発元</div>
                <div style={{ fontSize: 13, color: T.tx, fontWeight: 500 }}>{article.company}</div>
              </div>
            )}
            {article.model && (
              <div>
                <div style={{ fontSize: 10, color: T.txM, marginBottom: 2 }}>モデル</div>
                <div style={{ fontSize: 13, color: cat.color, fontWeight: 500 }}>{article.model}</div>
              </div>
            )}
            {article.pricing && (
              <div>
                <div style={{ fontSize: 10, color: T.txM, marginBottom: 2 }}>料金</div>
                <div style={{ fontSize: 13, color: T.tx }}>{article.pricing}</div>
              </div>
            )}
          </div>
        )}

        {/* 本文 */}
        <div style={{ marginBottom: 24 }}>
          {article.body.map((p, i) => (
            <p key={i} style={{
              fontSize: 15, color: T.txS, lineHeight: 2, margin: "0 0 18px",
            }}>{p}</p>
          ))}
        </div>

        {/* 特徴タグ */}
        {article.features && (
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: T.tx, marginBottom: 10 }}>主な特徴</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {article.features.map((f) => (
                <span key={f} style={{
                  padding: "5px 12px", borderRadius: 6, fontSize: 12,
                  color: cat.color, background: cat.color + "15", border: `1px solid ${cat.color}33`,
                }}>{f}</span>
              ))}
            </div>
          </div>
        )}

        {/* タグ */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingTop: 16, borderTop: `1px solid ${T.bdr}` }}>
          {article.tags.map((t) => (
            <span key={t} style={{
              padding: "3px 10px", borderRadius: 4, fontSize: 11,
              color: T.txM, background: T.surface, border: `1px solid ${T.bdr}`,
            }}>#{t}</span>
          ))}
        </div>
      </article>
    </div>
  );
}

/* ══ サイドバー（デスクトップ） ══ */
function Sidebar({ articles, onSelect }) {
  const latest = articles.filter((a) => a.type === "review").slice(0, 5);
  return (
    <aside className="desktop-sidebar" style={{ width: 260, flexShrink: 0 }}>
      {/* サイト情報 */}
      <div style={{
        background: T.card, border: `1px solid ${T.bdr}`, borderRadius: 10,
        padding: 16, marginBottom: 16,
      }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: T.tx, marginBottom: 8 }}>About</h3>
        <p style={{ fontSize: 12, color: T.txM, lineHeight: 1.7 }}>
          AI開発ツールの最新情報を自動収集・整理してお届けするニュースサイトです。
        </p>
        <div style={{ marginTop: 10, fontSize: 11, color: T.txM }}>
          最終更新: {LAST_UPDATED}
        </div>
      </div>

      {/* 最新レビュー */}
      <div style={{
        background: T.card, border: `1px solid ${T.bdr}`, borderRadius: 10,
        padding: 16,
      }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: T.tx, marginBottom: 12 }}>最新レビュー</h3>
        {latest.map((a) => (
          <div key={a.id} onClick={() => onSelect(a)} style={{
            padding: "8px 0", borderBottom: `1px solid ${T.bdr}`, cursor: "pointer",
          }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: T.txS, lineHeight: 1.4 }}>{a.title.split("—")[0].trim()}</div>
            <div style={{ fontSize: 10, color: T.txM, marginTop: 2 }}>
              {a.rating && <span style={{ color: T.star }}>{renderStars(a.rating)} </span>}
              {a.date}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════ */
/*             メイン App                 */
/* ══════════════════════════════════════ */
export default function App() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let list = ARTICLES;
    if (filter !== "all") list = list.filter((a) => a.category === filter);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filter, query]);

  const featured = filtered.find((a) => a.pinned);
  const rest = filtered.filter((a) => !a.pinned);

  const handleSelect = useCallback((article) => {
    setSelected(article);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100dvh", background: T.bg, fontFamily: F }}>
      <style>{`
        .blog-layout { display: flex; gap: 24px; max-width: 1100px; margin: 0 auto; padding: 24px 20px; }
        .blog-main { flex: 1; min-width: 0; }
        .desktop-sidebar { display: block; }
        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .blog-layout { padding: 16px 12px; }
        }
      `}</style>

      {!selected && (
        <>
          <Header query={query} setQuery={setQuery} />
          <FilterBar active={filter} setActive={setFilter} />
        </>
      )}

      {selected ? (
        <ArticleDetail article={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="blog-layout">
          <div className="blog-main">
            {/* 特集 */}
            {featured && <FeaturedCard article={featured} onClick={() => handleSelect(featured)} />}

            {/* 記事一覧 */}
            {rest.length > 0 ? (
              rest.map((a) => <ArticleCard key={a.id} article={a} onClick={() => handleSelect(a)} />)
            ) : (
              <div style={{ textAlign: "center", padding: 40, color: T.txM, fontSize: 14 }}>
                該当する記事がありません
              </div>
            )}

            {/* フッター */}
            <footer style={{
              marginTop: 32, paddingTop: 16, borderTop: `1px solid ${T.bdr}`,
              fontSize: 11, color: T.txM, textAlign: "center", lineHeight: 1.8,
            }}>
              <div>{SITE_NAME} - {SITE_DESCRIPTION}</div>
              <div>最終更新: {LAST_UPDATED} | データは公開情報を基に自動収集</div>
            </footer>
          </div>

          <Sidebar articles={ARTICLES} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}
