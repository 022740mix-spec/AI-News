import { useState, useCallback } from "react";

/** データ内の **強調** を OGP・共有テキスト用のプレーン文に */
export function stripMarkdownBoldMarkers(text) {
  if (!text) return "";
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

/** 文末の句読点だけ URL から外す（本文にくっついた「。」など） */
export function trimUrlForHref(raw) {
  return raw.replace(/[。、，．]+$/u, "");
}

/**
 * プレーンテリー内の http(s) URL とサイト内記事クエリ (?a=slug) を <a> に展開（mk が一意キーを返す関数）
 */
export function linkifyPlainToNodes(segment, mkKey) {
  if (!segment) return [];
  const re = /\[([^\]]+)\]\((\?a=[a-z0-9-]+)\)|https?:\/\/[^\s<>"')」']+|\?a=[a-z0-9-]+/gi;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(segment)) !== null) {
    if (m.index > last) {
      out.push(segment.slice(last, m.index));
    }
    // [テキスト](?a=id) 形式のマークダウンリンク
    if (m[1] && m[2]) {
      const href = typeof window !== "undefined"
        ? new URL(m[2], window.location.href).href
        : m[2];
      out.push(
        <a key={mkKey()} href={href} className="prose-link">{m[1]}</a>,
      );
      last = m.index + m[0].length;
      continue;
    }
    const raw = m[0];
    const isInternal = raw.startsWith("?a=");
    let href = isInternal
      ? (typeof window !== "undefined"
          ? new URL(raw, window.location.href).href
          : raw)
      : trimUrlForHref(raw);
    const displayText = isInternal ? "→ 関連記事" : href;
    out.push(
      <a
        key={mkKey()}
        href={href}
        {...(isInternal
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
        className="prose-link"
      >
        {displayText}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < segment.length) {
    out.push(segment.slice(last));
  }
  return out.length ? out : [segment];
}

/**
 * 1行分: **強調** + ==ハイライト== + !!警告!! + URL リンク化
 */
export function richInlineLine(line, mkKey) {
  const reInline = /\*\*(.+?)\*\*|==(.+?)==|!!(.+?)!!|`([^`]+)`/g;
  const parts = [];
  let last = 0;
  let m;
  while ((m = reInline.exec(line)) !== null) {
    if (m.index > last) {
      parts.push(...linkifyPlainToNodes(line.slice(last, m.index), mkKey));
    }
    if (m[1] != null) {
      parts.push(<strong key={mkKey()}>{m[1]}</strong>);
    } else if (m[2] != null) {
      parts.push(<mark key={mkKey()} className="prose-highlight">{m[2]}</mark>);
    } else if (m[3] != null) {
      const inner = m[3];
      const codeMatch = inner.match(/^`(.+)`$/);
      if (codeMatch) {
        parts.push(<code key={mkKey()} className="prose-code prose-warning">{codeMatch[1]}</code>);
      } else {
        parts.push(<span key={mkKey()} className="prose-warning">{inner}</span>);
      }
    } else if (m[4] != null) {
      parts.push(<code key={mkKey()} className="prose-code">{m[4]}</code>);
    }
    last = m.index + m[0].length;
  }
  if (last < line.length) {
    parts.push(...linkifyPlainToNodes(line.slice(last), mkKey));
  }
  return parts.length ? parts : linkifyPlainToNodes(line, mkKey);
}

/**
 * 本文・抜粋用: 改行は <br />、http(s) はリンク、** は太字
 */
export function richArticleText(text, keyPrefix = "") {
  if (text == null || text === "") return null;
  const keyRef = { n: 0 };
  const mkKey = () => `${keyPrefix}x${keyRef.n++}`;
  const lines = text.split("\n");
  const out = [];
  for (let li = 0; li < lines.length; li++) {
    if (li > 0) {
      out.push(<br key={mkKey()} />);
    }
    const lineParts = richInlineLine(lines[li], mkKey);
    out.push(...lineParts);
  }
  return out.length ? out : null;
}

/**
 * 段落がコードブロック（```で始まる）かどうかを判定し、コード本体を返す。
 * 戻り値: { isCode: true, code, lang } | { isCode: false }
 */
export function parseCodeBlock(paragraph) {
  if (!paragraph.startsWith("```")) return { isCode: false };
  const firstNewline = paragraph.indexOf("\n");
  if (firstNewline === -1) return { isCode: false };
  const lang = paragraph.slice(3, firstNewline).trim();
  let code = paragraph.slice(firstNewline + 1);
  if (code.endsWith("```")) code = code.slice(0, -3);
  if (code.endsWith("\n")) code = code.slice(0, -1);
  return { isCode: true, code, lang };
}

/** コピーボタン付きコードブロック */
export function CopyableCodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);
  return (
    <div className="code-block">
      <div className="code-block__header">
        {lang && <span className="code-block__lang">{lang}</span>}
        <button
          className="code-block__copy"
          onClick={handleCopy}
          aria-label="コードをコピー"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="code-block__pre"><code>{code}</code></pre>
    </div>
  );
}
