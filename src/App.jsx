import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
                    Weblap tervező és fejlesztő
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
                      href="/assets/CV/CV Perjési Szabolcs Proginfó.pdf"
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
      <div className="section accent">
        <div className="reference-container">
          <div className="section-heading centered white">
            <h2>Referenciák</h2>
            <div className="section-subheading">Néhány eddigi munkám</div>
          </div>
          <div className="reference-grid">
            <div className="reference-card" data-aos="fade-up">
              <img src="/coffeebreak.png" alt="" />
              <h3 className="white-text">Kávézó</h3>
              <p className="white-text">Saját tervezésű weboldal.</p>
              <a
                target="_blank"
                href="https://peszabolcs.github.io/landing-page/"
                className="hollow-button all-caps"
              >
                Megnyitás
              </a>
            </div>
            <div
              className="reference-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="/orak.png" alt="" />
              <h3 className="white-text">Órabolt</h3>
              <p className="white-text">
                Egy egyetemi projekt keretein belül készíteni kellett egy
                webshopot.
              </p>
              <a
                target="_blank"
                href="http://bit.ly/3RGiVjX"
                className="hollow-button all-caps"
              >
                Megnyitás
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="contact">
          <h5 className="heading">
            Elérhetőségek: <br />
          </h5>
          <p className="paragraph">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100008572502234"
            >
              Facebook
            </a>{" "}
            <br />{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/szabolcs-perjési-a97152248"
            >
              LinkedIn
            </a>{" "}
            <br /> Mail: perjesidev@gmail.com
          </p>
        </div>
      </div>
      <div className="footer center">
        <div className="w-container">
          <div className="footer-text">Copyright by Perjési Szabolcs</div>
        </div>
      </div>
    </div>
  );
}

export default App;
