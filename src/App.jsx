import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import References from "./components/references";
import { Facebook, Linkedin, Mail, Copyright, Globe, Code, Layout, Database, Smartphone, Server, Settings } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const skills = [
    { icon: <Globe />, title: "Web Fejlesztés", desc: "Modern weboldalak és alkalmazások készítése" },
    { icon: <Code />, title: "Frontend", desc: "React.js, Vue.js, Angular, és modern JavaScript (ES6+)" },
    { icon: <Layout />, title: "UI/UX Design", desc: "Felhasználóbarát felületek tervezése Tailwind, Bootstrap segítségével" },
    { icon: <Server />, title: "Backend", desc: "Spring Boot, Node.js, PHP (Laravel, Symfony)" },
    { icon: <Database />, title: "Adatbázisok", desc: "MySQL, PostgreSQL, MongoDB" },
    { icon: <Smartphone />, title: "Mobil Fejlesztés", desc: "React Native, PWA fejlesztés" },
    // { icon: <Settings />, title: "DevOps & CI/CD", desc: "Docker, GitLab CI/CD, Vercel, Netlify" }
  ];
  return (
    <div className="body">
      <div className="hero-section centered">
        <div className="w-container">
          <div>
            <div id="hero-container">
              <div className="content">
                <div className="hero-text" data-aos="fade-right">
                  <h1 className="hero-heading">Perjési Szabolcs</h1>
                  <div className="hero-subheading">
                    Front end fejlesztő
                  </div>
                  <section className="section-2">
                    <a
                      href="#section"
                      className="hollow-button all-caps"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("section")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Tudj meg többet
                    </a>
                    <a
                      href="/assets/CV/CV Perjési Szabolcs.pdf"
                      download
                      className="button"
                    >
                      CV letöltése
                    </a>
                  </section>
                </div>
                <div className="photo" data-aos="fade-left">
                  <img
                    id="profilePicture"
                    src="/vasvari-2022_vasvari_12b-BALI1589_3-removebg-preview.png"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="section">
        <div className="w-container">
          <div className="section-title-group">
            <h2 className="section-heading centered">Miket csinálok?</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    className="skill-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
      <References />
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="contact-links">
            <a
              href="https://www.facebook.com/profile.php?id=100008572502234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/szabolcs-perjési-a97152248"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a href="mailto:perjesidev@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
          <div className="copyright">
            <Copyright size={16} />
            <span>
              {new Date().getFullYear()} Perjési Szabolcs. Minden jog
              fenntartva.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
