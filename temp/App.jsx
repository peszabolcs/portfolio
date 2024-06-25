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
                      href="src\assets\CV\CV Perjési Szabolcs Proginfó.pdf"
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
                    src="src\assets\vasvari-2022_vasvari_12b-BALI1589_3.JPG"
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
                <img src="src\assets\lightbulb.png" alt="" />
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
                <img src="src\assets\laptop.jpg" alt="" />
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
                <img src="src\assets\software-engineer-icon-22.png" alt="" />
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
        <div className="w-container">
          <div className="section-title-group">
            <h2 className="section-heading centered white">Referenciák</h2>
            <div className="section-subheading center off-white">
              Néhány eddigi projektmunkám
            </div>
          </div>
          <div className="w-row references" id="references">
            <div className="w-col w-col-6 references">
              <div
                className="white-box transparent"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <img src="src\assets\coffeebreak.png" alt="" />
                <h3 className="white-text">Kávézó</h3>
                <p className="white-text">Saját tervezésű weboldal.</p>
                <a href="#" className="hollow-button">
                  Megnyitás
                </a>
              </div>
            </div>
            <div className="w-col w-col-6 references">
              <div
                className="white-box transparent"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img src="src\assets\orak.png" alt="" />
                <h3 className="white-text">Órabolt</h3>
                <p className="white-text">
                  Egy egyetemi projekt keretein belül készíteni kellett egy
                  webshopot.
                </p>
                <a href="#" className="hollow-button all-caps">
                  Megnyitás
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="w-container">
          <h5 className="heading">
            Elérhetőségek: <br />
          </h5>
          <p className="paragraph">
            Facebook <br /> LinkedIn <br /> Mail <br /> Telefon
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
