import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  Trophy,
  Globe,
} from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { PATHS } from "../i18n/routes";
import Seo from "../components/Seo";
import Counter from "../components/Counter";
import { profile } from "../content/profile";
import {
  personLd,
  organizationLd,
  websiteLd,
  softwareAppLd,
  breadcrumbLd,
} from "../seo/jsonld";
import {
  navLinks,
  hero,
  about,
  achievementsMeta,
  achievements,
  parksafeSection,
  stackSection,
  mediaSection,
  pressItems,
  contactSection,
  footer,
} from "../content/portfolio";

const GOLD = "#e8b84b";
const PURPLE = "#7c5cbf";

// Photos (in /public/photos). Swap the files to update.
const HERO_IMG = "/photos/hero.jpg";
const ABOUT_IMG = "/photos/about.jpg";
const PARKSAFE_IMG = "/photos/parksafe-app.jpg";

// Render a string with {highlighted} fragments styled in gold.
function Rich({ text }) {
  if (!text) return null;
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((p, i) =>
    p.startsWith("{") && p.endsWith("}") ? (
      <span key={i} className="font-medium" style={{ color: GOLD }}>
        {p.slice(1, -1)}
      </span>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

// Decorative soft glow.
function Blob({ color, style }) {
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none rounded-full blur-[110px] opacity-60"
      style={{ background: color, ...style }}
    />
  );
}

// Decorative arc ring (SVG circle outline).
function Ring({ size, color, dashed, style }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      className="absolute pointer-events-none"
      style={style}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 2}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "6 8" : undefined}
      />
    </svg>
  );
}

export default function Portfolio() {
  const { lang, x, f } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll: shrink nav + drive the top progress bar.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, y / h) : 0;
      if (progressRef.current)
        progressRef.current.style.setProperty("--progress", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll-reveal: fade + rise elements marked [data-reveal] as they enter.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("reveal-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
    const t = setTimeout(() => els.forEach((e) => e.classList.add("reveal-in")), 1800);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [lang]);

  // Scrollspy: highlight the nav link of the section in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [lang]);

  // Hero pointer spotlight: track the cursor as CSS variables.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      el.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  function scrollTo(href) {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  const other = lang === "hu" ? "en" : "hu";
  const aboutHeading = lang === "hu" ? about.headingHu : about.headingEn;
  const aboutParas = lang === "hu" ? about.paragraphsHu : about.paragraphsEn;
  const achHeading = lang === "hu" ? achievementsMeta.headingHu : achievementsMeta.headingEn;
  const stackHeading = lang === "hu" ? stackSection.headingHu : stackSection.headingEn;
  const mediaHeading = lang === "hu" ? mediaSection.headingHu : mediaSection.headingEn;
  const contactHeading = lang === "hu" ? contactSection.headingHu : contactSection.headingEn;

  const socials = [
    { href: profile.socials.github, icon: <Github size={18} />, label: "GitHub" },
    { href: profile.socials.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: profile.emailHref, icon: <Mail size={18} />, label: "Email" },
  ];

  const title =
    lang === "hu"
      ? "Perjési Szabolcs — Full-stack fejlesztő & a ParkSafe alapítója"
      : "Szabolcs Perjési — Full-stack developer & creator of ParkSafe";
  const description = lang === "hu" ? profile.introHu : profile.introEn;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo
        pageKey="home"
        lang={lang}
        title={title}
        description={description}
        jsonLd={[
          personLd(lang),
          organizationLd(),
          websiteLd(lang),
          softwareAppLd(lang),
          breadcrumbLd([
            { name: lang === "hu" ? "Kezdőlap" : "Home", path: PATHS.home[lang] },
          ]),
        ]}
      />

      {/* Scroll progress */}
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />

      {/* ── Nav ── */}
      <nav
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#")}
            className="font-mono text-sm tracking-[0.35em] text-primary uppercase font-semibold hover:opacity-75 transition-opacity"
          >
            PS
          </button>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  active === l.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {x(l)}
              </button>
            ))}
            <Link
              to={PATHS.home[other]}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-2.5 py-1"
              aria-label={lang === "hu" ? "Switch to English" : "Váltás magyarra"}
            >
              {other.toUpperCase()}
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            aria-label={lang === "hu" ? "Menü" : "Menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-b border-border px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {x(l)}
              </button>
            ))}
            <Link
              to={PATHS.home[other]}
              className="text-left font-mono text-xs tracking-[0.2em] uppercase text-primary"
            >
              {other.toUpperCase()} →
            </Link>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} className="spotlight relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden">
        <Blob color={PURPLE} style={{ width: 700, height: 700, top: -200, left: -250, opacity: 0.3 }} />
        <Blob color={GOLD} style={{ width: 400, height: 400, bottom: -80, right: -80, opacity: 0.12 }} />
        <Blob color="#4a3080" style={{ width: 500, height: 300, top: "40%", right: -100, opacity: 0.25 }} />

        <Ring size={320} color="rgba(124,92,191,0.3)" style={{ top: 40, right: -60 }} />
        <Ring size={200} color="rgba(232,184,75,0.2)" dashed style={{ top: 100, right: -10 }} />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: text */}
          <div>
            <div data-reveal style={{ "--i": 0 }} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] tracking-widest text-primary uppercase">
                {f(hero, "status")}
              </span>
            </div>

            <h1 data-reveal style={{ "--i": 1 }} className="font-serif text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.08] tracking-tight mb-6">
              {f(hero, "greet")}{" "}
              <span className="block mt-1 italic" style={{ color: GOLD }}>
                {profile.name}
              </span>
            </h1>

            <div data-reveal style={{ "--i": 2 }} className="flex flex-wrap gap-2 mb-8">
              {hero.tags.map((t) => (
                <span
                  key={t.en}
                  className="font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground"
                >
                  {x(t)}
                </span>
              ))}
            </div>

            <p data-reveal style={{ "--i": 3 }} className="text-muted-foreground leading-relaxed text-[0.95rem] mb-10 max-w-lg">
              <Rich text={f(hero, "intro")} />
            </p>

            <div data-reveal style={{ "--i": 4 }} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo("#kapcsolat")}
                className="hover-lift inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase text-primary-foreground hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #e8b84b 0%, #d4930a 100%)",
                  boxShadow: "0 0 30px rgba(232,184,75,0.35)",
                }}
              >
                {f(hero, "ctaContact")} <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => scrollTo("#parksafe")}
                className="hover-lift inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-mono text-xs tracking-widest uppercase hover:border-primary/50"
              >
                {f(hero, "ctaProject")} <Globe size={13} />
              </button>
            </div>

            <div data-reveal style={{ "--i": 5 }} className="flex items-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.icon}
                </a>
              ))}
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin size={12} />
                <span className="font-mono text-[11px]">Szeged, HU</span>
              </div>
            </div>
          </div>

          {/* Right: circular portrait */}
          <div data-reveal style={{ "--i": 3 }} className="relative flex items-center justify-center min-h-[420px]">
            <Blob color="rgba(124,92,191,0.4)" style={{ width: 380, height: 380, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.5 }} />
            <Blob color="rgba(232,184,75,0.2)" style={{ width: 250, height: 250, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="absolute rounded-full border-[1.5px] border-dashed border-primary/25" style={{ width: 390, height: 390, animation: "spin 40s linear infinite" }} />
            <div className="absolute rounded-full" style={{ width: 330, height: 330, border: "1px solid rgba(124,92,191,0.3)" }} />

            {/* Photo circle */}
            <div
              className="relative rounded-full overflow-hidden flex items-center justify-center bg-secondary"
              style={{
                width: 280,
                height: 280,
                border: "4px solid transparent",
                background:
                  "linear-gradient(#13111f, #13111f) padding-box, linear-gradient(135deg, #e8b84b 0%, #7c5cbf 50%, #e8b84b 100%) border-box",
                boxShadow: "0 0 60px rgba(232,184,75,0.25), 0 0 120px rgba(124,92,191,0.2)",
              }}
            >
              <img
                src={HERO_IMG}
                alt={profile.name}
                width={280}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="floaty absolute top-6 right-2 lg:-right-4 rounded-2xl bg-card border border-border px-4 py-3" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{f(hero, "badgeDiplomaLabel")}</div>
              <div className="font-serif text-lg italic" style={{ color: GOLD }}>{f(hero, "badgeDiplomaValue")}</div>
            </div>

            <div className="floaty-slow absolute bottom-6 left-2 lg:-left-4 rounded-2xl bg-card border border-border px-4 py-3" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{hero.badgeUsersLabel}</div>
              <div className="font-serif text-lg italic" style={{ color: GOLD }}>{f(hero, "badgeUsersValue")}</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-muted-foreground to-transparent" />
        </div>

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </section>

      {/* ── About ── */}
      <section id="rolam" className="relative py-32 px-6 overflow-hidden">
        <Blob color={GOLD} style={{ width: 600, height: 300, top: 0, right: -200, opacity: 0.07 }} />
        <Ring size={280} color="rgba(124,92,191,0.15)" dashed style={{ bottom: 40, left: -60 }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            {/* Portrait column */}
            <div className="md:col-span-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-6">
                {f(about, "eyebrow")}
              </span>

              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary border border-border relative mb-8"
                style={{ boxShadow: "0 0 60px rgba(124,92,191,0.15)" }}
              >
                <img
                  src={ABOUT_IMG}
                  alt={profile.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-28 rounded-b-2xl" style={{ background: "linear-gradient(to top, #0c0b14, transparent)" }} />
              </div>

              <div className="space-y-3">
                {about.contactRows.map((item) => (
                  <div key={item.value} className="flex gap-4 items-start">
                    <span className="font-mono text-[10px] text-primary tracking-widest uppercase w-16 shrink-0 pt-0.5">
                      {lang === "hu" ? item.labelHu : item.labelEn}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground leading-snug">
                      {lang === "en" && item.valueEn ? item.valueEn : item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio column */}
            <div className="md:col-span-8">
              <h2 data-reveal className="font-serif text-4xl md:text-6xl font-normal leading-[1.05] mb-10">
                {aboutHeading.pre}
                <em style={{ color: GOLD }} className="not-italic">{aboutHeading.em}</em>
                {aboutHeading.post}
              </h2>

              <div className="space-y-5 text-muted-foreground leading-[1.8] text-[0.95rem] mb-14">
                {aboutParas.map((p, i) => (
                  <p key={i}><Rich text={p} /></p>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                {about.stats.map((stat, i) => (
                  <div key={i} data-reveal style={{ "--i": i, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift p-5 rounded-2xl bg-card border border-border text-center hover:border-primary/30">
                    <div className="font-serif text-3xl italic mb-1" style={{ color: GOLD }}>
                      <Counter value={lang === "en" && stat.valueEn ? stat.valueEn : stat.value} />
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{x(stat)}</div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
                  {f(about, "educationTitle")}
                </h3>
                {about.education.map((edu, i) => (
                  <div key={i} data-reveal style={{ "--i": i }} className="hover-lift flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl border border-border bg-card hover:border-primary/20">
                    <div className="flex-1">
                      <div className="text-foreground text-sm font-medium">{f(edu, "degree")}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">{edu.school}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-mono text-xs text-muted-foreground">{edu.period}</div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: GOLD }}>{f(edu, "note")}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section id="eredmenyek" className="relative py-32 px-6 overflow-hidden">
        <Blob color={PURPLE} style={{ width: 600, height: 400, bottom: 0, left: -200, opacity: 0.18 }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            {f(achievementsMeta, "eyebrow")}
          </span>
          <h2 data-reveal className="font-serif text-4xl md:text-5xl mb-14 leading-tight">
            {achHeading.pre}<em style={{ color: GOLD }} className="not-italic">{achHeading.em}</em>
          </h2>

          <div className="space-y-3">
            {achievements.map((item, i) => (
              <div
                key={item.index}
                data-reveal
                className={`hover-lift flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 md:p-7 rounded-2xl border ${
                  item.highlight
                    ? "border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/20 hover:bg-secondary"
                }`}
                style={
                  item.highlight
                    ? { "--i": i, background: "rgba(232,184,75,0.06)", boxShadow: "0 0 40px rgba(232,184,75,0.07), inset 0 1px 0 rgba(232,184,75,0.1)" }
                    : { "--i": i, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }
                }
              >
                <span className="font-mono text-xs text-muted-foreground w-8 shrink-0 select-none">{item.index}</span>
                <div className="flex-1">
                  <h3 className={`font-serif text-xl md:text-2xl mb-1.5 leading-tight ${item.highlight ? "italic" : "text-foreground"}`} style={item.highlight ? { color: GOLD } : {}}>
                    {f(item, "title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f(item, "desc")}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap tracking-wider uppercase">{f(item, "tag")}</span>
                  {item.highlight && <Trophy size={16} style={{ color: GOLD }} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ParkSafe ── */}
      <section id="parksafe" className="relative py-32 px-6 overflow-hidden">
        <Blob color={GOLD} style={{ width: 600, height: 400, top: "40%", left: "50%", transform: "translateX(-50%)", opacity: 0.07 }} />
        <Blob color={PURPLE} style={{ width: 400, height: 400, top: 0, right: -100, opacity: 0.15 }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            {f(parksafeSection, "eyebrow")}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-20">
            <div>
              <h2 data-reveal className="font-serif text-6xl md:text-8xl font-normal leading-[0.9] mb-6 tracking-tight">
                Park<span className="italic" style={{ color: GOLD }}>Safe</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] mb-10">
                {f(parksafeSection, "lead")}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {parksafeSection.stats.map((s, i) => (
                  <div key={i} data-reveal style={{ "--i": i, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift p-5 rounded-xl bg-card border border-border hover:border-primary/30">
                    <div className="font-serif text-2xl italic mb-1" style={{ color: GOLD }}><Counter value={s.value} /></div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{x(s)}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {parksafeSection.tech.map((tech) => (
                  <span key={tech} className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={profile.parksafe.web} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase text-primary-foreground transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #e8b84b 0%, #d4930a 100%)", boxShadow: "0 0 28px rgba(232,184,75,0.3)" }}>
                  <Globe size={13} /> parksafe.hu
                </a>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border text-foreground font-mono text-xs tracking-widest uppercase hover:border-primary/50 transition-colors">
                  <Github size={13} /> GitHub
                </a>
              </div>
            </div>

            {/* App screenshot */}
            <div data-reveal className="relative flex items-center justify-center">
              <Blob color="rgba(78,205,196,0.12)" style={{ width: 320, height: 320, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div className="floaty-slow relative w-full max-w-xs aspect-[9/16] rounded-3xl overflow-hidden bg-secondary border border-border" style={{ boxShadow: "0 0 80px rgba(124,92,191,0.25), 0 40px 80px rgba(0,0,0,0.5)" }}>
                <img
                  src={PARKSAFE_IMG}
                  alt={lang === "hu" ? "ParkSafe app — térkép nézet" : "ParkSafe app — map view"}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 md:-right-6 rounded-2xl px-5 py-3 text-primary-foreground" style={{ background: "linear-gradient(135deg, #e8b84b 0%, #d4930a 100%)", boxShadow: "0 0 28px rgba(232,184,75,0.35)" }}>
                <div className="font-mono text-[9px] tracking-widest uppercase mb-0.5">{f(parksafeSection, "badgeLabel")}</div>
                <div className="font-serif text-lg italic font-normal">{f(parksafeSection, "badgeValue")}</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-border pt-14">
            <h3 className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-8">
              {f(parksafeSection, "timelineTitle")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
              {parksafeSection.timeline.map((step, i) => (
                <div key={i} data-reveal className={`hover-lift p-4 rounded-xl border ${step.current ? "border-primary/30" : "bg-card border-border hover:bg-secondary"}`} style={step.current ? { "--i": i, background: "rgba(232,184,75,0.08)" } : { "--i": i }}>
                  <div className={`font-mono text-[10px] mb-2 tracking-wider ${step.current ? "" : "text-muted-foreground"}`} style={step.current ? { color: GOLD } : {}}>
                    {f(step, "date")}
                  </div>
                  <div className={`text-sm leading-snug ${step.current ? "font-medium" : "text-foreground"}`} style={step.current ? { color: GOLD } : {}}>
                    {x(step)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section id="stack" className="relative py-32 px-6 overflow-hidden">
        <Blob color={PURPLE} style={{ width: 500, height: 400, top: 0, right: -100, opacity: 0.15 }} />
        <Ring size={240} color="rgba(232,184,75,0.12)" dashed style={{ bottom: 20, left: -40 }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            {f(stackSection, "eyebrow")}
          </span>
          <h2 data-reveal className="font-serif text-4xl md:text-5xl mb-14 leading-tight">
            {stackHeading.pre}<em style={{ color: GOLD }} className="not-italic">{stackHeading.em}</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackSection.groups.map((group, i) => (
              <div key={i} data-reveal style={{ "--i": i, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift p-6 rounded-2xl bg-card border border-border hover:border-primary/25">
                <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>{x(group)}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="font-mono text-xs px-3 py-1.5 rounded-lg bg-secondary text-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-reveal style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>{f(stackSection, "languagesTitle")}</h3>
              <div className="flex gap-4">
                {stackSection.languages.map((l) => (
                  <div key={l.lang} className="px-4 py-3 rounded-xl bg-secondary border border-border">
                    <div className="font-mono text-sm text-foreground">{lang === "en" ? l.langEn : l.lang}</div>
                    <div className="font-mono text-[10px] mt-0.5 tracking-wider" style={{ color: GOLD }}>{lang === "en" ? l.levelEn : l.levelHu}</div>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal style={{ "--i": 1, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>{f(stackSection, "interestsTitle")}</h3>
              <div className="flex flex-wrap gap-2">
                {stackSection.interests.map((tag) => (
                  <span key={tag.en} className="font-mono text-[11px] px-3 py-1.5 rounded-full border text-accent bg-accent/5" style={{ borderColor: "rgba(124,92,191,0.35)" }}>
                    {x(tag)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Media ── */}
      <section id="media" className="relative py-32 px-6 overflow-hidden">
        <Blob color={GOLD} style={{ width: 500, height: 300, bottom: 0, right: -100, opacity: 0.07 }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            {f(mediaSection, "eyebrow")}
          </span>
          <h2 data-reveal className="font-serif text-4xl md:text-5xl mb-14 leading-tight">
            {mediaHeading.pre}<em style={{ color: GOLD }} className="not-italic">{mediaHeading.em}</em>
          </h2>

          <div className="space-y-3">
            {pressItems.map((item, i) => {
              const inner = (
                <>
                  <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase w-52 shrink-0">{item.outlet}</span>
                  <p className="flex-1 text-foreground text-[0.95rem] group-hover:text-primary transition-colors leading-snug">{f(item, "title")}</p>
                  <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden md:block" />
                </>
              );
              const cls =
                "hover-lift flex flex-col md:flex-row md:items-center gap-3 md:gap-10 p-6 md:p-7 rounded-2xl border border-border bg-card hover:bg-secondary hover:border-primary/20 group cursor-pointer";
              const st = { "--i": i, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" };
              return item.url ? (
                <a key={i} data-reveal href={item.url} target="_blank" rel="noopener noreferrer" className={cls} style={st}>
                  {inner}
                </a>
              ) : (
                <div key={i} data-reveal className={cls} style={st}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-6 rounded-2xl border border-border bg-card" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}>
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-4">{f(mediaSection, "publishedTitle")}</p>
            <div className="flex flex-wrap gap-3">
              {mediaSection.outlets.map((outlet) => (
                <span key={outlet} className="font-mono text-xs px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
                  {outlet}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="kapcsolat" className="relative py-32 px-6 overflow-hidden">
        <Blob color={PURPLE} style={{ width: 700, height: 500, bottom: -150, left: -250, opacity: 0.2 }} />
        <Blob color={GOLD} style={{ width: 350, height: 350, top: 0, right: -100, opacity: 0.09 }} />
        <Ring size={300} color="rgba(124,92,191,0.2)" style={{ top: -50, right: -80 }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase block mb-4">
            {f(contactSection, "eyebrow")}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 data-reveal className="font-serif text-5xl md:text-7xl font-normal leading-[1.0] mb-10">
                {contactHeading.pre}<br />
                <em className="not-italic" style={{ color: GOLD }}>{contactHeading.em}</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem] mb-12 max-w-sm">
                {f(contactSection, "lead")}
              </p>

              <div className="space-y-3">
                <a href={profile.emailHref} data-reveal style={{ "--i": 0, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift flex items-center gap-5 p-5 rounded-2xl border border-border hover:border-primary/40 bg-card group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(232,184,75,0.1)", border: "1px solid rgba(232,184,75,0.25)" }}>
                    <Mail size={16} style={{ color: GOLD }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{f(contactSection, "emailLabel")}</div>
                    <div className="text-foreground group-hover:text-primary transition-colors text-sm truncate">{profile.email}</div>
                  </div>
                  <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <a href={profile.phoneHref} data-reveal style={{ "--i": 1, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }} className="hover-lift flex items-center gap-5 p-5 rounded-2xl border border-border hover:border-primary/40 bg-card group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(232,184,75,0.1)", border: "1px solid rgba(232,184,75,0.25)" }}>
                    <Phone size={16} style={{ color: GOLD }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">{f(contactSection, "phoneLabel")}</div>
                    <div className="text-foreground group-hover:text-primary transition-colors text-sm">{profile.phone}</div>
                  </div>
                  <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 p-4 rounded-2xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all font-mono text-xs tracking-wider">
                    <Github size={15} /> GitHub
                  </a>
                  <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 p-4 rounded-2xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all font-mono text-xs tracking-wider">
                    <Linkedin size={15} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:pt-36">
              <div data-reveal className="hover-lift p-8 rounded-2xl border" style={{ borderColor: "rgba(232,184,75,0.25)", background: "rgba(232,184,75,0.06)", boxShadow: "0 0 40px rgba(232,184,75,0.06), inset 0 1px 0 rgba(232,184,75,0.1)" }}>
                <div className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: GOLD }}>{f(contactSection, "availTitle")}</div>
                <p className="text-foreground text-[0.95rem] leading-relaxed">{f(contactSection, "availBody")}</p>
              </div>
              <div data-reveal className="hover-lift p-8 rounded-2xl border border-border bg-card" style={{ "--i": 1, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-3">{f(contactSection, "responseTitle")}</div>
                <p className="text-foreground text-[0.95rem] leading-relaxed">{f(contactSection, "responseBody")}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed px-1">
                {f(contactSection, "footnote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm tracking-[0.35em] uppercase font-semibold" style={{ color: GOLD }}>PS</span>
            <span className="font-mono text-xs text-muted-foreground">{f(footer, "rights")}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
              <MapPin size={11} /> {f(footer, "location")}
            </span>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-primary transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
