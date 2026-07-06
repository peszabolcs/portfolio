import { createContext, useContext, useMemo } from "react";
import { translations } from "./translations";
import { DEFAULT_LANG } from "./routes";

const I18nContext = createContext({ lang: DEFAULT_LANG });

function resolve(obj, path) {
  return path.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

export function I18nProvider({ lang = DEFAULT_LANG, children }) {
  const value = useMemo(() => {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    return {
      lang,
      // UI string lookup: t("nav.home")
      t: (path) => {
        const v = resolve(dict, path);
        return v == null ? path : v;
      },
      // Localized field of a content object: f(item, "title") -> item.titleHu/titleEn
      f: (obj, base) => {
        if (!obj) return "";
        const suffix = lang === "hu" ? "Hu" : "En";
        return obj[base + suffix] ?? obj[base] ?? "";
      },
      // Pick from a {hu,en} pair
      x: (pair) => (pair ? pair[lang] ?? pair.hu : ""),
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
