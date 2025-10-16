import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/peszabolcs",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/szabolcs-perjési-a97152248",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:perjesidev@gmail.com",
      label: "Email",
    },
  ];

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Perjési Szabolcs</h3>
            <p className="footer-tagline">
              Full-stack fejlesztő & UI/UX Designer — Vízióból valóság
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-title">Navigáció</h4>
              <ul className="footer-nav">
                <li>
                  <button onClick={scrollToTop}>
                    Kezdőlap
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('about')}>Rólam</button>
                </li>
                <li>
                  <Link to="/tech-stack">Tech Stack</Link>
                </li>
                <li>
                  <button onClick={() => handleNavigation('portfolio')}>Portfólió</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('pricing')}>Árak</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('contact')}>Kapcsolat</button>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Szolgáltatások</h4>
              <ul className="footer-nav">
                <li>
                  <a href="#about">Webfejlesztés</a>
                </li>
                <li>
                  <a href="#about">UI/UX Design</a>
                </li>
                <li>
                  <a href="#about">Backend Fejlesztés</a>
                </li>
                <li>
                  <a href="#about">Konzultáció</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Social Media</h4>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Perjési Szabolcs. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
