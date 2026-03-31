import { Fragment, useContext } from "react";
import { LangContext, L } from "../context/LangContext.js";
import {
  VIBE_BASIC_RULES_LEAD, VIBE_BASIC_RULES, VIBE_CODING_DEFINITION,
  VIBE_CODING_PRACTICAL, VIBE_GUIDE_PITFALLS, VIBE_SETUP_GUIDE,
  MEDIA_GUIDE_INTRO, VIBE_MEDIA_TAXONOMY, GLOSSARY_BY_GENRE,
} from "../data/vibeCodingGuide.js";
import { richInlineLine, CopyableCodeBlock } from "../utils/richText.jsx";

/** プレーンテキスト段落内の URL をリンク化（用語集リードや CLI 案内向け） */
function GuideLinkifiedP({ text, className }) {
  let k = 0;
  const mkKey = () => `glp-${k++}`;
  const lines = String(text).split("\n");
  if (lines.length <= 1) {
    return <p className={className}>{richInlineLine(text, mkKey)}</p>;
  }
  return (
    <p className={className}>
      {lines.map((line, i) => (
        <Fragment key={mkKey()}>
          {i > 0 && <br />}
          {richInlineLine(line, mkKey)}
        </Fragment>
      ))}
    </p>
  );
}

function GuideTabBar({ guideTab, onSelect }) {
  const lang = useContext(LangContext);
  const tabs = [
    { id: "setup", label: "セットアップ", en: "Setup" },
    { id: "rules", label: "基本ルール", en: "Rules" },
    { id: "practical", label: "実践テクニック", en: "Practical" },
    { id: "media", label: "メディア生成", en: "Media Gen" },
    { id: "glossary", label: "用語集", en: "Glossary" },
  ];
  return (
    <nav className="filter-nav" aria-label={lang === "en" ? "Guide sections" : "ガイドの表示切替"}>
      <div className="filter-nav-inner" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`guide-subtab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={guideTab === t.id}
            aria-controls="guide-subtab-panel"
            className={`filter-tab${guideTab === t.id ? " is-active" : ""}`}
            onClick={() => onSelect(t.id)}
          >
            {L(t, lang)}
          </button>
        ))}
      </div>
    </nav>
  );
}

/** セットアップステップを描画する共通ヘルパー */
function SetupStepList({ sections, mkKey }) {
  return sections.map((sec) => (
    <div key={sec.id} id={sec.id} className="vibe-practical-sub">
      <h3 className="vibe-practical-sub__title">{sec.heading}</h3>
      <p className="vibe-practical-sub__body">
        {richInlineLine(sec.body, mkKey)}
      </p>
      {sec.steps?.map((step, si) => (
        <div key={si} className="setup-step">
          <h4 className="setup-step__label">{richInlineLine(step.label, mkKey)}</h4>
          {step.detail ? (
            <p className="setup-step__detail">{richInlineLine(step.detail, mkKey)}</p>
          ) : null}
          {step.code ? (
            <CopyableCodeBlock code={step.code} lang={step.codeLang ?? "bash"} />
          ) : null}
        </div>
      ))}
    </div>
  ));
}

function GuideSetupPanel() {
  let k = 0;
  const mkKey = () => `gs-${k++}`;
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label="セットアップ">
      <section id="vibe-intro" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">バイブコーディングとは</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_CODING_DEFINITION, mkKey)}
        </p>
      </section>
      <section id="vibe-setup" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_SETUP_GUIDE.title}</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_SETUP_GUIDE.lead, mkKey)}
        </p>
        <SetupStepList sections={VIBE_SETUP_GUIDE.sections} mkKey={mkKey} />
      </section>
    </div>
  );
}

function GuideRulesPanel() {
  let k = 0;
  const mkKey = () => `gr-${k++}`;
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label="基本ルール">
      <section id="vibe-rules" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">基本ルール</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_BASIC_RULES_LEAD, mkKey)}
        </p>
        {VIBE_BASIC_RULES.length > 0 ? (
          <dl className="glossary-dl">
            {VIBE_BASIC_RULES.map((r) => (
              <Fragment key={r.title}>
                <dt className="glossary-dl__term">{richInlineLine(r.title, mkKey)}</dt>
                <dd className="glossary-dl__body">
                  <GuideLinkifiedP text={r.mean} className="glossary-dl__mean" />
                </dd>
              </Fragment>
            ))}
          </dl>
        ) : null}
      </section>

      <section id="vibe-pitfalls" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_GUIDE_PITFALLS.title}</h2>
        <GuideLinkifiedP text={VIBE_GUIDE_PITFALLS.lead} className="guide-section__lead" />
        {VIBE_GUIDE_PITFALLS.terms.length > 0 ? (
          <dl className="glossary-dl">
            {VIBE_GUIDE_PITFALLS.terms.map((t) => (
              <Fragment key={t.word}>
                <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                <dd className="glossary-dl__body">
                  <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                </dd>
              </Fragment>
            ))}
          </dl>
        ) : null}
      </section>
    </div>
  );
}

function GuidePracticalPanel() {
  let k = 0;
  const mkKey = () => `gp-${k++}`;
  return (
    <div className="companies-guide-rail companies-guide-rail--full-tab" aria-label="実践テクニック">
      <section id="vibe-practical" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">{VIBE_CODING_PRACTICAL.title}</h2>
        <p className="guide-section__lead">
          {richInlineLine(VIBE_CODING_PRACTICAL.lead, mkKey)}
        </p>
        {VIBE_CODING_PRACTICAL.sections.map((sec) => (
          <div key={sec.id} id={sec.id} className="vibe-practical-sub">
            <h3 className="vibe-practical-sub__title">{sec.heading}</h3>
            <p className="vibe-practical-sub__body">
              {richInlineLine(sec.body, mkKey)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

function MediaToolsGuidePanel({ mediaTaxonomy }) {
  let k = 0;
  const mkKey = () => `mg-${k++}`;
  return (
    <div
      className="companies-guide-rail companies-guide-rail--full-tab"
      aria-label="メディア生成ツール早見"
    >
      <section id="media-guide-intro" className="guide-section guide-section--vibe">
        <h2 className="guide-section__title">メディア生成ツール早見</h2>
        <p className="guide-section__lead">
          {richInlineLine(MEDIA_GUIDE_INTRO, mkKey)}
        </p>
      </section>
      {mediaTaxonomy.length > 0 ? (
        <div className="vibe-media-taxonomy-stack">
          {mediaTaxonomy.map((block) => {
            const [c0, c1, c2, c3] = block.columns;
            return (
              <div key={block.id} id={block.id} className="vibe-media-block">
                <h3 className="vibe-media-block__title">{block.title}</h3>
                <GuideLinkifiedP
                  text={block.lead}
                  className="vibe-media-block__lead"
                />
                <div className="vibe-tool-table-wrap">
                  <table className="vibe-tool-table vibe-tool-table--dense">
                    <caption className="visually-hidden">
                      {block.title}のツール早見表
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">{c0}</th>
                        <th scope="col">{c1}</th>
                        <th scope="col">{c2}</th>
                        <th scope="col">{c3}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((r) => (
                        <tr key={`${block.id}-${r.tool}`}>
                          <th scope="row">{r.tool}</th>
                          <td>{r.company}</td>
                          <td>{r.traits}</td>
                          <td>{r.since}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">該当するツール行がありません。検索語を変えてください。</div>
      )}
    </div>
  );
}

function GlossaryGuidePanel({ glossaryGenres }) {
  let k = 0;
  const mkKey = () => `gl-${k++}`;
  return (
    <div
      className="companies-guide-rail companies-guide-rail--full-tab"
      aria-label="実用用語集"
    >
      <section id="glossary-guide" className="guide-section guide-section--glossary">
        <h2 className="guide-section__title">実用用語集（ジャンル別）</h2>
        <p className="guide-section__lead">
          専門用語を「業務で使える一言」に圧縮しました。記事を読むときの辞書代わりにどうぞ。公式 URL
          が載っている項目はそのままクリックできます。
        </p>
        {glossaryGenres.map((g) => (
          <section
            key={g.id}
            id={`glossary-${g.id}`}
            className="glossary-genre"
          >
            <h3 className="glossary-genre__title">{g.title}</h3>
            <GuideLinkifiedP
              text={g.lead}
              className="glossary-genre__lead"
            />
            <dl className="glossary-dl">
              {g.terms.map((t) => (
                <Fragment key={t.word}>
                  <dt className="glossary-dl__term">{richInlineLine(t.word, mkKey)}</dt>
                  <dd className="glossary-dl__body">
                    <GuideLinkifiedP text={t.mean} className="glossary-dl__mean" />
                  </dd>
                </Fragment>
              ))}
            </dl>
          </section>
        ))}
      </section>
    </div>
  );
}

export {
  GuideLinkifiedP,
  GuideTabBar,
  SetupStepList,
  GuideSetupPanel,
  GuideRulesPanel,
  GuidePracticalPanel,
  MediaToolsGuidePanel,
  GlossaryGuidePanel,
};
