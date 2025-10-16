import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Rólam</span>
          <h2 className="section-title">Miért dolgozz velem?</h2>
          <p className="section-description">
            Szenvedélyem a komplex problémák egyszerű, skálázható megoldásokká alakítása.
            Fejlesztőként nemcsak a kódra koncentrálok, hanem az egész termék értékére és használhatóságára.
            Hiszek abban, hogy egy jó termék nemcsak technológiailag erős, hanem átgondolt élményt is nyújt.
            A legmodernebb technológiákkal dolgozom, és minden projekthez egyedi megközelítést alkalmazok.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
