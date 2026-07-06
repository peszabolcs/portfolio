import { Head } from "vite-react-ssg";
import { SITE_URL, PATHS } from "../i18n/routes";

const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Per-page head: title, description, canonical, hreflang alternates,
 * Open Graph, Twitter, html lang, and any JSON-LD blocks.
 * Uses vite-react-ssg's <Head> (react-helmet-async under the hood).
 *
 * props:
 *  - pageKey: key in PATHS (home|parksafe|media|projects|about|contact)
 *  - lang: "hu" | "en"
 *  - title, description
 *  - image (optional absolute or root-relative)
 *  - jsonLd: array of objects (optional)
 */
export default function Seo({
  pageKey,
  lang,
  title,
  description,
  image,
  jsonLd = [],
}) {
  const huPath = PATHS[pageKey].hu;
  const enPath = PATHS[pageKey].en;
  const canonical = SITE_URL + PATHS[pageKey][lang];
  const ogLocale = lang === "hu" ? "hu_HU" : "en_US";
  const img = image
    ? image.startsWith("http")
      ? image
      : SITE_URL + image
    : OG_IMAGE;

  return (
    <Head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="hu" href={SITE_URL + huPath} />
      <link rel="alternate" hrefLang="en" href={SITE_URL + enPath} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL + huPath} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Perjési Szabolcs" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Head>
  );
}
