import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot"></span>
          Elérhető új projektekre
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Vízióból
          <br />
          <span className="gradient-text">valóság</span>
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          6 éve formálom az innovatív ötleteket működő digitális termékekké.
          <br />
          Full-stack fejlesztőként és UI/UX designerként a legmodernebb technológiákkal alkotok.
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <button className="cta-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Kezdjünk együtt dolgozni
          </button>
          <button className="cta-secondary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            Portfólió megtekintése
          </button>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <a href="https://github.com/peszabolcs" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/szabolcs-perjési-a97152248" target="_blank" rel="noopener noreferrer" className="social-link">
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
            ease: 'easeInOut',
          }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
