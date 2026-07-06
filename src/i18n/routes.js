// Central route + site map. Page keys map to localized paths.
// Used by the router, the language toggle, SEO canonical/hreflang, and sitemap.

export const SITE_URL = "https://perjesidev.hu";

export const LANGS = ["hu", "en"];
export const DEFAULT_LANG = "hu";

// pageKey -> { hu, en } absolute paths (leading slash, no trailing slash).
// Single-page site: only the localized home. In-page sections use hash anchors.
export const PATHS = {
  home: { hu: "/hu", en: "/en" },
};

export const PAGE_KEYS = Object.keys(PATHS);

// Reverse lookup: pathname -> { key, lang }
export function resolvePath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const key of PAGE_KEYS) {
    for (const lang of LANGS) {
      if (PATHS[key][lang] === clean) return { key, lang };
    }
  }
  return null;
}

export function langFromPath(pathname) {
  if (pathname.startsWith("/en")) return "en";
  return "hu";
}

// Build the alternate-language URL for the same page key.
export function altPath(key, lang) {
  return PATHS[key][lang];
}
