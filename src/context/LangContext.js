import { createContext } from "react";

export const LangContext = createContext("ja");
/** lang-aware label picker: returns en label if available, else falls back to label */
export function L(item, lang) { return lang === "en" && item.en ? item.en : item.label; }
