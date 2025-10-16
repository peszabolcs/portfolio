import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaMobile,
  FaDatabase,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const scrollToNext = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Fejlesztés",
      description:
        "Cutting-edge webalkalmazások és felületek a legmodernebb technológiákkal: React, Angular, SvelteKit.",
    },
    {
      icon: <FaMobile />,
      title: "Cross-Platform Mobile",
      description:
        "React Native alapú mobilalkalmazások iOS-re és Androidra, egyetlen kódbázisból.",
    },
    {
      icon: <FaDatabase />,
      title: "Full-Stack Megoldások",
      description:
        "Komplett rendszerek Django, Node.js és PostgreSQL stackkel, skálázhatóan és stabilan.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Vízióból <span className="gradient-text">valóság</span>
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          6 éve formálom az innovatív ötleteket működő digitális termékekké.
          Full-stack fejlesztőként és UI/UX designerként a legmodernebb
          technológiákkal alkotok.
        </motion.p>

        <motion.div className="hero-services" variants={itemVariants}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="hero-service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="hero-service-icon">{service.icon}</div>
              <h3 className="hero-service-title">{service.title}</h3>
              <p className="hero-service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div className="hero-highlights" variants={itemVariants}>
          <div className="highlight-item">
            <div className="highlight-number">6+</div>
            <div className="highlight-label">Év tapasztalat</div>
          </div>
          <div className="highlight-divider"></div>
          <div className="highlight-item">
            <div className="highlight-number">15+</div>
            <div className="highlight-label">Sikeres projekt</div>
          </div>
          <div className="highlight-divider"></div>
          <div className="highlight-item">
            <div className="highlight-number">10+</div>
            <div className="highlight-label">Technológia</div>
          </div>
        </motion.div> */}

        <motion.div className="hero-cta" variants={itemVariants}>
          <button
            className="cta-primary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Kezdjünk együtt dolgozni
          </button>
          <button
            className="cta-secondary"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Portfólió megtekintése
          </button>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <a
            href="https://github.com/peszabolcs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/szabolcs-perjési-a97152248"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:perjesidev@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          onClick={scrollToNext}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
