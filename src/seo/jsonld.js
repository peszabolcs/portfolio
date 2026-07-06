// ============================================================
// JSON-LD builders. Only verified facts are asserted.
// ============================================================
import { SITE_URL, PATHS } from "../i18n/routes";
import { profile } from "../content/profile";
import { parksafe } from "../content/parksafe";

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#parksafe`;
const SITE_ID = `${SITE_URL}/#website`;

export function personLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    alternateName: profile.alternateName,
    jobTitle:
      lang === "hu"
        ? "Full-stack fejlesztő, startup-alapító"
        : "Full-Stack Developer, Startup Founder",
    url: SITE_URL + (lang === "hu" ? PATHS.home.hu : PATHS.home.en),
    description: lang === "hu" ? profile.introHu : profile.introEn,
    knowsAbout: [
      "Startups",
      "Product development",
      "Software development",
      "Mobile apps",
      "Urban mobility",
      "Cycling infrastructure",
      "Pitching",
      "Brand building",
    ],
    knowsLanguage: ["hu", "en"],
    founderOf: { "@id": ORG_ID },
    award: [
      "Red Bull Basement Hungary — national winner (2026)",
      "Red Bull Basement World Final — Top 48 (2026)",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Szeged",
      sameAs: "https://u-szeged.hu",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.country,
    },
    sameAs: [
      profile.socials.linkedin,
      profile.socials.github,
      profile.parksafe.web,
    ],
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "ParkSafe",
    url: profile.parksafe.web,
    founder: { "@id": PERSON_ID },
    sameAs: [profile.parksafe.appStore, profile.parksafe.googlePlay],
  };
}

export function websiteLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: "Perjési Szabolcs",
    inLanguage: lang,
    publisher: { "@id": PERSON_ID },
  };
}

// crumbs: [{ name, path }]
export function breadcrumbLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.path,
    })),
  };
}

export function softwareAppLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: parksafe.schema.name,
    applicationCategory: parksafe.schema.category,
    operatingSystem: parksafe.schema.os,
    url: profile.parksafe.web,
    author: { "@id": PERSON_ID },
    offers: {
      "@type": "Offer",
      price: parksafe.schema.price,
      priceCurrency: parksafe.schema.priceCurrency,
    },
    sameAs: [profile.parksafe.appStore, profile.parksafe.googlePlay],
  };
}

// ItemList of NewsArticle references for the media page.
export function mediaListLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: m.title,
        url: m.url,
        datePublished: m.date,
        inLanguage: m.lang,
        publisher: { "@type": "Organization", name: m.outlet },
        about: { "@id": m.topic === "profile" ? PERSON_ID : ORG_ID },
      },
    })),
  };
}
