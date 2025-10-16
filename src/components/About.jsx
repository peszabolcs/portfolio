import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaMobile, FaDatabase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Fejlesztés',
      description: 'Cutting-edge webalkalmazások és felületek a legmodernebb technológiákkal: React, Angular, SvelteKit.',
    },
    {
      icon: <FaMobile />,
      title: 'Cross-Platform Mobile',
      description: 'React Native alapú mobilalkalmazások iOS-re és Androidra, egyetlen kódbázisból.',
    },
    {
      icon: <FaDatabase />,
      title: 'Full-Stack Megoldások',
      description: 'Komplett rendszerek Django, Node.js és PostgreSQL stackkel, skálázhatóan és stabilan.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

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
          <h2 className="section-title">Képességek & Szolgáltatások</h2>
          <p className="section-description">
            Szenvedélyem a komplex problémák egyszerű, skálázható megoldásokká alakítása.
            Fejlesztőként nemcsak a kódra koncentrálok, hanem az egész termék értékére és használhatóságára.
            Hiszek abban, hogy egy jó termék nemcsak technológiailag erős, hanem átgondolt élményt is nyújt.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
