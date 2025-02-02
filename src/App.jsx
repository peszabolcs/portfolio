import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import References from "./components/references";
import { Facebook, Linkedin, Mail, Copyright } from "lucide-react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
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
                    Szoftverfejlesztő és webdesigner
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
                    src="/vasvari-2022_vasvari_12b-BALI1589_3.JPG"
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
          <div className="w-row">
            <div
              className="w-col-container"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              <div className="white-box">
                <img src="/lightbulb.png" alt="" />
                <h3>Grafikus tervezés</h3>
                <p>
                  Weboldalakat tervezek, egyedi dizájnnal és felhasználóbarát
                  élménnyel, hogy minden projekt kiemelkedjen a digitális
                  térben.
                </p>
              </div>
            </div>
            <div
              className="w-col-container"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="white-box">
                <img src="/laptop.jpg" alt="" />
                <h3>Webfejlesztés</h3>
                <p>
                  Modern, reszponzív weboldalakat készítek, amelyek kiváló
                  felhasználói élményt nyújtanak, és megfelelnek az üzleti
                  céloknak.
                </p>
              </div>
            </div>
            <div
              className="w-col-container"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="white-box">
                <img src="/software-engineer-icon-22.png" alt="" />
                <h3>SEO</h3>
                <p>
                  Olyan optimalizálást alkalmazok, amelyek javítják a weboldalak
                  láthatóságát a keresőmotorokban, ezzel növelve a forgalmat és
                  a poteniciális ügyfelek számát.
                </p>
              </div>
            </div>
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
