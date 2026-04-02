import { ARTICLES_META } from "../data/articlesMeta.js";
import { TOOL_REFERENCES } from "../data/vibeCodingGuide.js";

export function syncAppUrl({ articleId, siteSection, tagQuery, guideTab, toolTab, usePush = false }) {
  const u = new URL(window.location.href);
  if (articleId) {
    u.searchParams.set("a", articleId);
    u.searchParams.delete("view");
    u.searchParams.delete("tag");
    u.searchParams.delete("tab");
  } else {
    u.searchParams.delete("a");
    if (siteSection === "companies") {
      u.searchParams.set("view", "companies");
      u.searchParams.delete("tag");
      u.searchParams.delete("tab");
    } else if (siteSection === "reviews") {
      u.searchParams.set("view", "reviews");
      u.searchParams.delete("tag");
      u.searchParams.delete("tab");
    } else if (siteSection === "tools") {
      u.searchParams.set("view", "tools");
      u.searchParams.delete("tag");
      if (toolTab !== "claude-code") u.searchParams.set("tab", toolTab);
      else u.searchParams.delete("tab");
    } else if (siteSection === "guide") {
      u.searchParams.set("view", "guide");
      u.searchParams.delete("tag");
      if (guideTab && guideTab !== "setup") u.searchParams.set("tab", guideTab);
      else u.searchParams.delete("tab");
    } else if (siteSection === "home") {
      u.searchParams.delete("view");
      u.searchParams.delete("tag");
      u.searchParams.delete("tab");
    } else {
      u.searchParams.set("view", "articles");
      u.searchParams.delete("tab");
      const t = tagQuery?.trim();
      if (t) u.searchParams.set("tag", t);
      else u.searchParams.delete("tag");
    }
  }
  const url = `${u.pathname}${u.search}${u.hash}`;
  if (usePush) {
    window.history.pushState({}, "", url);
  } else {
    window.history.replaceState({}, "", url);
  }
}

export function readInitialRouteState() {
  if (typeof window === "undefined") {
    return { selected: null, siteSection: "home", query: "", guideTab: "setup", toolTab: "claude-code" };
  }
  // 統合済み記事の旧ID → 新IDリダイレクト
  const REDIRECTS = {
    "mcp-servers-deep-dive": "mcp-comprehensive-guide-2026",
    "mcp-practical-guide-2026": "mcp-comprehensive-guide-2026",
    "agent-skills-skill-md": "ai-config-files-comprehensive-guide-2026",
    "markdown-ai-context-agents-llms": "ai-config-files-comprehensive-guide-2026",
    "claude-md-design-patterns-2026": "ai-config-files-comprehensive-guide-2026",
  };
  const u = new URL(window.location.href);
  let aid = u.searchParams.get("a");
  if (aid && REDIRECTS[aid]) aid = REDIRECTS[aid];
  if (aid) {
    const found = ARTICLES_META.find((x) => x.id === aid);
    if (found) {
      return { selected: found, siteSection: "articles", query: "", guideTab: "setup", toolTab: "claude-code" };
    }
  }
  const view = u.searchParams.get("view");
  const siteSection =
    view === "companies"
      ? "companies"
      : view === "reviews"
        ? "reviews"
        : view === "tools"
          ? "tools"
          : view === "guide"
            ? "guide"
            : view === "articles"
              ? "articles"
              : "home";
  const tab = u.searchParams.get("tab");
  const VALID_GUIDE_TABS = ["setup", "rules", "practical", "media", "glossary"];
  const guideTab =
    siteSection === "guide" && VALID_GUIDE_TABS.includes(tab)
      ? tab
      : "setup";
  const toolTab = siteSection === "tools"
    ? (tab && TOOL_REFERENCES.some(t => t.id === tab) ? tab : "claude-code")
    : "claude-code";
  const tag = u.searchParams.get("tag");
  const query =
    siteSection === "articles" && tag && tag.trim()
      ? tag.trim()
      : "";
  return { selected: null, siteSection, query, guideTab, toolTab };
}
