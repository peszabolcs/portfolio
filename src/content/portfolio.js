// ============================================================
// Single-page portfolio content — bilingual (HU polished / EN).
// Consumed by pages/Portfolio.jsx via useI18n x({hu,en}) / f(obj,"base").
// Facts reflect the 2026 update. Section IDs are shared across languages.
// ============================================================

// ── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { href: "#rolam", hu: "Rólam", en: "About" },
  { href: "#eredmenyek", hu: "Eredmények", en: "Achievements" },
  { href: "#parksafe", hu: "ParkSafe", en: "ParkSafe" },
  { href: "#stack", hu: "Stack", en: "Stack" },
  { href: "#media", hu: "Média", en: "Media" },
  { href: "#kapcsolat", hu: "Kapcsolat", en: "Contact" },
];

// ── Hero ─────────────────────────────────────────────────────
export const hero = {
  statusHu: "Nyitott új projektekre",
  statusEn: "Open to new projects",

  greetHu: "Szia, én vagyok",
  greetEn: "Hi, I’m",

  tags: [
    { hu: "Full-stack fejlesztő", en: "Full-Stack Developer" },
    { hu: "Startup-alapító", en: "Startup Founder" },
    { hu: "Red Bull Basement döntős", en: "Red Bull Basement Finalist" },
  ],

  // Rich intro — {frag} markers are styled inline in the component.
  introHu:
    "22 éves full-stack fejlesztő és startup-alapító Szegedről. A {ParkSafe} megalkotója — 4 300+ felhasználó, európai lefedettség. A 2026-os {Red Bull Basement} világdöntőse: egyetlen magyarként a legjobb 48 közt, San Franciscóban.",
  introEn:
    "A 22-year-old full-stack developer and startup founder from Szeged. Creator of {ParkSafe} — 4,300+ users, Europe-wide coverage. {Red Bull Basement} 2026 world finalist: the only Hungarian in the Top 48, in San Francisco.",

  ctaContactHu: "Kapcsolat",
  ctaContactEn: "Get in touch",
  ctaProjectHu: "ParkSafe",
  ctaProjectEn: "ParkSafe",

  badgeDiplomaLabelHu: "BSc diploma",
  badgeDiplomaLabelEn: "BSc degree",
  badgeDiplomaValueHu: "5.0 — kitűnő",
  badgeDiplomaValueEn: "5.0 — with honours",
  badgeUsersLabel: "ParkSafe",
  badgeUsersValueHu: "4 300+ felhasználó",
  badgeUsersValueEn: "4,300+ users",
};

// ── About ────────────────────────────────────────────────────
export const about = {
  eyebrowHu: "01 / Rólam",
  eyebrowEn: "01 / About",

  headingHu: { pre: "Fejlesztő, aki ", em: "terméket épít", post: " — nem csak kódot ír." },
  headingEn: { pre: "A developer who ", em: "builds products", post: " — not just code." },

  paragraphsHu: [
    "22 éves vagyok, Szegeden élek. 2026 júniusában szereztem programtervező informatikus BSc diplomát a Szegedi Tudományegyetemen, {kitűnő (5.0) eredménnyel}. Előtte informatikai technikusként érettségiztem, kitüntetéssel.",
    "A {ParkSafe}-et a nulláról építettem fel. Ma már {4 300+ felhasználója} van, iOS-en és Androidon is elérhető, és 675 000+ kerékpáros pontot tartalmaz Európa-szerte.",
    "A 2026-os Red Bull Basement döntőn {140 000+ globális résztvevő} közül a legjobb 48 közé kerültünk — egyetlen magyarként San Franciscóban, az AMD, a Microsoft, a Replit és a Google szakembereivel.",
    "Jelenleg a {Revival27 Consulting RDI Kft.}-nél dolgozom full-stack fejlesztőként, EU-s finanszírozású okosváros- és mobilitási projekteken.",
  ],
  paragraphsEn: [
    "I’m 22 and I live in Szeged. In June 2026 I completed my BSc in Software Engineering at the University of Szeged, {with the highest honours (5.0)}. Before that I graduated as an IT technician, with distinction.",
    "I built {ParkSafe} from scratch. It now has {4,300+ users}, is available on iOS and Android, and holds 675,000+ cycling points across Europe.",
    "At the Red Bull Basement 2026 final we reached the Top 48 out of {140,000+ global participants} — the only Hungarian in San Francisco, alongside experts from AMD, Microsoft, Replit and Google.",
    "I currently work as a full-stack developer at {Revival27 Consulting RDI Kft.}, on EU-funded smart-city and mobility projects.",
  ],

  stats: [
    { value: "4 300+", hu: "Felhasználó", en: "Users" },
    { value: "Top 48", hu: "Red Bull Basement", en: "Red Bull Basement" },
    { value: "5.0", hu: "BSc diploma", en: "BSc degree" },
    { value: "6+ év", valueEn: "6+ yrs", hu: "Fejlesztésben", en: "In development" },
  ],

  educationTitleHu: "Tanulmányok",
  educationTitleEn: "Education",
  education: [
    {
      degreeHu: "Programtervező informatikus BSc",
      degreeEn: "BSc in Software Engineering",
      school: "Szegedi Tudományegyetem (SZTE)",
      period: "2023–2026",
      noteHu: "Kitűnő (5.0)",
      noteEn: "5.0 — with honours",
    },
    {
      degreeHu: "Szoftverfejlesztő és -tesztelő technikus",
      degreeEn: "Software Developer & Tester technician",
      school: "SZSZC Vasvári Pál Technikum",
      period: "2019–2023",
      noteHu: "Kitüntetéssel",
      noteEn: "With distinction",
    },
  ],

  contactRows: [
    { labelHu: "Email", labelEn: "Email", value: "perjesiszabolcs@gmail.com" },
    { labelHu: "Tel", labelEn: "Phone", value: "+36 30 721 2524" },
    { labelHu: "Web", labelEn: "Web", value: "perjesidev.hu" },
    { labelHu: "GitHub", labelEn: "GitHub", value: "github.com/peszabolcs" },
    { labelHu: "Helyszín", labelEn: "Location", value: "Szeged, Magyarország", valueEn: "Szeged, Hungary" },
  ],
};

// ── Achievements ─────────────────────────────────────────────
export const achievementsMeta = {
  eyebrowHu: "02 / Eredmények & elismerések",
  eyebrowEn: "02 / Achievements & recognition",
  headingHu: { pre: "Amit ", em: "elértünk" },
  headingEn: { pre: "What we’ve ", em: "achieved" },
};

export const achievements = [
  {
    index: "01",
    highlight: true,
    titleHu: "Red Bull Basement 2026 — világdöntős",
    titleEn: "Red Bull Basement 2026 — world finalist",
    descHu:
      "A legjobb 48 közt a 140 000+ globális résztvevőből. Egyetlen magyarként San Franciscóban — AMD-, Microsoft-, Replit- és Google-mentorokkal.",
    descEn:
      "Top 48 out of 140,000+ global participants. The only Hungarian in San Francisco — with mentors from AMD, Microsoft, Replit and Google.",
    tagHu: "San Francisco · 2026. jún.",
    tagEn: "San Francisco · Jun 2026",
  },
  {
    index: "02",
    highlight: false,
    titleHu: "Red Bull Basement Magyarország — 1. hely",
    titleEn: "Red Bull Basement Hungary — 1st place",
    descHu: "1 260 induló közül első helyezés a magyar nemzeti döntőn.",
    descEn: "First place among 1,260 entries at the Hungarian national final.",
    tagHu: "Magyarország · 2026. máj.",
    tagEn: "Hungary · May 2026",
  },
  {
    index: "03",
    highlight: false,
    titleHu: "EVK Startup Competition — 2. hely",
    titleEn: "EVK Startup Competition — 2nd place",
    descHu: "Második helyezés az EVK Startup Competition 2026-os versenyén.",
    descEn: "Runner-up at the 2026 EVK Startup Competition.",
    tagHu: "2026",
    tagEn: "2026",
  },
  {
    index: "04",
    highlight: false,
    titleHu: "ECC Hungary Founder Fellowship — 3. hely",
    titleEn: "ECC Hungary Founder Fellowship — 3rd place",
    descHu:
      "Harmadik helyezés a Startup Hungary mentorálásával támogatott Demo Dayen.",
    descEn:
      "Third place at the Demo Day supported by Startup Hungary mentoring.",
    tagHu: "2026",
    tagEn: "2026",
  },
  {
    index: "05",
    highlight: false,
    titleHu: "Nemzeti Tehetség Központ Start Program — Top 10",
    titleEn: "National Talent Centre Start Program — Top 10",
    descHu: "Top 10-es helyezés az országos Demo Dayen.",
    descEn: "Top 10 finish at the national Demo Day.",
    tagHu: "2025–2026",
    tagEn: "2025–2026",
  },
  {
    index: "06",
    highlight: false,
    titleHu: "Média — RTL · M1 · Szeged TV · Délmagyar · Startup Online",
    titleEn: "Media — RTL · M1 · Szeged TV · Délmagyar · Startup Online",
    descHu:
      "Országos és regionális televíziós, rádiós és nyomtatott sajtómegjelenések, valamint az SZTE portré.",
    descEn:
      "National and regional TV, radio and print coverage, plus the SZTE feature.",
    tagHu: "2025–2026",
    tagEn: "2025–2026",
  },
];

// ── ParkSafe ─────────────────────────────────────────────────
export const parksafeSection = {
  eyebrowHu: "03 / Kiemelt projekt",
  eyebrowEn: "03 / Featured project",

  leadHu:
    "Európai kerékpáros navigációs és biztonsági platform. Biztonságosabb útvonalak, bicikliparkolók és szervizpontok — egyetlen appban. Egyetlen társalapítómmal (Kordás Patrik) én terveztem, fejlesztettem és vittem piacra.",
  leadEn:
    "A European cycling navigation and safety platform. Safer routes, bike parking and service points — all in one app. I designed, built and shipped it with a single co-founder (Patrik Kordás).",

  stats: [
    { value: "4 300+", hu: "Felhasználó", en: "Users" },
    { value: "675 000+", hu: "Kerékpáros pont", en: "Cycling points" },
    { value: "660 000+", hu: "Bicikliparkoló", en: "Bike parkings" },
    { value: "iOS + Android", hu: "Platform", en: "Platform" },
  ],

  tech: ["Next.js", "React Native", "Supabase", "TypeScript", "PostgreSQL"],

  badgeLabelHu: "Red Bull Basement",
  badgeLabelEn: "Red Bull Basement",
  badgeValueHu: "Világdöntős",
  badgeValueEn: "World finalist",

  timelineTitleHu: "Az út eddig",
  timelineTitleEn: "The road so far",
  timeline: [
    { hu: "Az ötlet", en: "The idea", dateHu: "2025", dateEn: "2025" },
    { hu: "Fejlesztés & béta", en: "Build & beta", dateHu: "2025", dateEn: "2025" },
    { hu: "Indulás & médiafigyelem", en: "Launch & press", dateHu: "2026 Q1", dateEn: "2026 Q1" },
    { hu: "Elismerések", en: "Recognition", dateHu: "2026 Q1", dateEn: "2026 Q1" },
    { hu: "Red Bull — győzelem", en: "Red Bull — win", dateHu: "2026. máj.", dateEn: "May 2026" },
    { hu: "San Francisco", en: "San Francisco", dateHu: "2026. jún.", dateEn: "Jun 2026" },
    { hu: "Következő célok", en: "What’s next", dateHu: "Most", dateEn: "Now", current: true },
  ],
};

// ── Tech stack ───────────────────────────────────────────────
export const stackSection = {
  eyebrowHu: "04 / Tech stack",
  eyebrowEn: "04 / Tech stack",
  headingHu: { pre: "Amivel ", em: "dolgozom" },
  headingEn: { pre: "What I ", em: "work with" },

  groups: [
    { hu: "Frontend", en: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SvelteKit"] },
    { hu: "Mobil", en: "Mobile", items: ["React Native", "iOS", "Android"] },
    { hu: "Backend", en: "Backend", items: ["Django", "Python", "Node.js", "FastAPI", "REST API"] },
    { hu: "Adatbázisok", en: "Databases", items: ["PostgreSQL", "Supabase", "MySQL", "Firebase", "MongoDB"] },
    { hu: "DevOps & eszközök", en: "DevOps & tools", items: ["Docker", "Git", "GitHub Actions", "Vercel", "Linux", "Figma"] },
    { hu: "Egyéb", en: "Other", items: ["AI-integrációk", "Computer Vision", "UI/UX design", "Startup pitch"] },
  ],

  languagesTitleHu: "Nyelvek",
  languagesTitleEn: "Languages",
  languages: [
    { lang: "Magyar", langEn: "Hungarian", levelHu: "Anyanyelv", levelEn: "Native" },
    { lang: "Angol", langEn: "English", levelHu: "C1", levelEn: "C1" },
  ],

  interestsTitleHu: "Érdeklődési területek",
  interestsTitleEn: "Areas of interest",
  interests: [
    { hu: "Városi mobilitás", en: "Urban mobility" },
    { hu: "Okosvárosok", en: "Smart cities" },
    { hu: "AI-alapú fejlesztés", en: "AI-driven development" },
    { hu: "Startupépítés", en: "Startup building" },
  ],
};

// ── Media / press ────────────────────────────────────────────
export const mediaSection = {
  eyebrowHu: "05 / Média & sajtó",
  eyebrowEn: "05 / Media & press",
  headingHu: { pre: "Ahogy a ", em: "sajtó látta" },
  headingEn: { pre: "As the ", em: "press saw it" },

  publishedTitleHu: "Megjelent",
  publishedTitleEn: "Featured in",
  outlets: ["RTL", "M1", "Szeged TV", "Délmagyar", "Szeged365", "Startup Online", "SZTE"],
};

export const pressItems = [
  {
    outlet: "SZEGED365",
    url: "https://szeged365.hu/2026/03/03/exkluziv-interju-perjesi-szabolccsal-szegedrol-indulhat-az-orszagos-bringas-app/",
    titleHu:
      "Exkluzív interjú Perjési Szabolccsal: Szegedről indulhat az országos bringás app",
    titleEn:
      "Exclusive interview with Szabolcs Perjési: a nationwide cycling app could start from Szeged",
  },
  {
    outlet: "SZEGED365",
    url: "https://szeged365.hu/2026/05/11/szegedi-sikersztori-szilicium-volgybe-repulnek-a-szegedi-parksafe-biciklis-app-kitalaloi-ok-kepviselik-magyarorszagot/",
    titleHu:
      "Szegedi sikersztori: Szilícium-völgybe repülnek a szegedi ParkSafe biciklis app kitalálói",
    titleEn:
      "A Szeged success story: the creators of the ParkSafe cycling app are flying to Silicon Valley",
  },
  {
    outlet: "SZEGEDI TUDOMÁNYEGYETEM",
    url: "https://u-szeged.hu/sztehirek/2026-marcius/parksafe-szte-hallgatoi-forradalmasitjak-a-varosi-bringazast",
    titleHu: "ParkSafe: az SZTE hallgatói forradalmasítják a városi bringázást",
    titleEn:
      "ParkSafe: University of Szeged students are reinventing urban cycling",
  },
  {
    outlet: "STARTUP ONLINE",
    url: "https://startuponline.hu/a-bringas-appot-fejleszto-parksafe-fogja-kepviselni-hazankat-san-francisco-ban-a-red-bull-basement-vilagdonton",
    titleHu:
      "A bringás appot fejlesztő ParkSafe fogja képviselni hazánkat San Franciscóban",
    titleEn:
      "ParkSafe, the cycling-app maker, will represent Hungary in San Francisco",
  },
  {
    outlet: "RTL · M1 · DÉLMAGYAR · SZEGED TV",
    url: "",
    titleHu:
      "Országos és regionális televíziós, rádiós és nyomtatott sajtómegjelenések",
    titleEn: "National and regional TV, radio and print coverage",
  },
];

// ── Contact ──────────────────────────────────────────────────
export const contactSection = {
  eyebrowHu: "06 / Kapcsolat",
  eyebrowEn: "06 / Contact",
  headingHu: { pre: "Van egy ", em: "ötleted?" },
  headingEn: { pre: "Got an ", em: "idea?" },

  leadHu:
    "Akár terméket szeretnél felépíteni, akár csak egy kérdésed van — írj bátran. Szívesen dolgozom összetett projekteken, ahol a termék egésze is számít.",
  leadEn:
    "Whether you want to build a product or just have a question — feel free to reach out. I enjoy complex projects where the product as a whole matters.",

  emailLabelHu: "Email",
  emailLabelEn: "Email",
  phoneLabelHu: "Telefon",
  phoneLabelEn: "Phone",

  availTitleHu: "Elérhetőség",
  availTitleEn: "Availability",
  availBodyHu:
    "Nyitott vagyok új projektekre — teljes munkaidős, freelance vagy tanácsadói formában egyaránt.",
  availBodyEn:
    "I’m open to new projects — full-time, freelance or consulting alike.",

  responseTitleHu: "Válaszidő",
  responseTitleEn: "Response time",
  responseBodyHu: "Általában 24 órán belül válaszolok minden megkeresésre.",
  responseBodyEn: "I usually reply to every message within 24 hours.",

  footnoteHu:
    "B kategóriás jogosítvány · Magyar & Angol (C1) · Szeged, Magyarország — rugalmasan",
  footnoteEn:
    "Category B driving licence · Hungarian & English (C1) · Szeged, Hungary — flexible",
};

// ── Footer ───────────────────────────────────────────────────
export const footer = {
  rightsHu: "© 2026 Perjési Szabolcs. Minden jog fenntartva.",
  rightsEn: "© 2026 Szabolcs Perjési. All rights reserved.",
  locationHu: "Szeged, Magyarország",
  locationEn: "Szeged, Hungary",
};
