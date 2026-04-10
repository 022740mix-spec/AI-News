/* eslint-disable react-refresh/only-export-components */
import { Fragment, useContext } from "react";
import { TOOL_REFERENCES } from "../data/vibeCodingGuide.js";
import { LangContext } from "../context/LangContext.js";
import { richInlineLine, CopyableCodeBlock } from "../utils/richText.jsx";
import { GuideLinkifiedP } from "./Guide.jsx";

function ToolTabBar({ toolTab, onSelect }) {
  const lang = useContext(LangContext);
  return (
    <nav className="filter-nav" aria-label={lang === "en" ? "Tool reference" : "ツール別リファレンスの切替"}>
      <div className="filter-nav-inner" role="tablist">
        {TOOL_REFERENCES.map((t) => (
          <button
            key={t.id}
            id={`tool-subtab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={toolTab === t.id}
            aria-controls="tool-subtab-panel"
            className={`filter-tab${toolTab === t.id ? " is-active" : ""}`}
            onClick={() => onSelect(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

/** セクション名 → アンカーID（日本語をそのまま使用、ブラウザは UTF-8 ID に対応） */
function sectionAnchorId(name) {
  return "ref-sec-" + name.replace(/\s+/g, "-");
}

function ToolReferencePanel({ referenceData, practical }) {
  let k = 0;
  const mkKey = () => `tr-${k++}`;
  const lang = useContext(LangContext);
  if (!referenceData) return <div className="empty-state">{lang === "en" ? "Tool not found" : "ツールが見つかりません"}</div>;

  // section でグループ化（順序を保持）
  const sections = [];
  const seen = new Set();
  for (const t of referenceData.terms) {
    const sec = t.section ?? "";
    if (!seen.has(sec)) {
      seen.add(sec);
      sections.push({ name: sec, terms: [] });
    }
    sections.find((s) => s.name === sec).terms.push(t);
  }
  const hasSections = sections.length > 1 || (sections.length === 1 && sections[0].name);

  return (
    <div className={`companies-guide-rail companies-guide-rail--full-tab${practical.length > 0 ? " has-practical" : ""}`} aria-label={referenceData.title}>
      <section className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{referenceData.title}</h2>
        <GuideLinkifiedP text={referenceData.lead} className="guide-section__lead" />

        {hasSections ? (
          <nav className="tool-ref-toc">
            <h3 className="tool-ref-toc__title">目次</h3>
            <ul className="tool-ref-toc__list">
              {sections.map((s) => (
                <li key={s.name}>
                  <button
                    type="button"
                    className="tool-ref-toc__link"
                    onClick={() => {
                      const el = document.getElementById(sectionAnchorId(s.name));
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    {s.name}
                    <span className="tool-ref-toc__count">{s.terms.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {sections.map((s) => (
          <div key={s.name} id={sectionAnchorId(s.name)} className="tool-ref-group">
            {s.name ? <h3 className="tool-ref-group__title">{s.name}</h3> : null}
            <dl className="glossary-dl">
              {s.terms.map((t) => (
                <Fragment key={t.word}>
                  <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                  <dd className="glossary-dl__body">
                    <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                    {t.code ? <CopyableCodeBlock code={t.code} lang={t.codeLang ?? "bash"} /> : null}
                                      </dd>
                </Fragment>
              ))}
            </dl>
          </div>
        ))}
      </section>
      {practical.length > 0 ? (
        <section className="guide-section guide-section--vibe">
          <h2 className="guide-section__title">実務での扱い</h2>
          {practical.map((sec) => (
            <div key={sec.id} id={sec.id} className="vibe-practical-sub">
              <h3 className="vibe-practical-sub__title">{sec.heading}</h3>
              <p className="vibe-practical-sub__body">{richInlineLine(sec.body, mkKey)}</p>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}

export { ToolTabBar, ToolReferencePanel, sectionAnchorId };
