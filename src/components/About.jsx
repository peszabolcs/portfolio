import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNode, FaFigma, FaDatabase, FaCode, FaMobile, FaPython, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiSvelte, SiDjango } from 'react-icons/si';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: <FaReact />, name: 'React & React Native', level: 95 },
    { icon: <SiTypescript />, name: 'TypeScript', level: 92 },
    { icon: <SiSvelte />, name: 'SvelteKit', level: 88 },
    { icon: <FaAngular />, name: 'Angular', level: 85 },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 95 },
    { icon: <FaPython />, name: 'Python & Django', level: 87 },
    { icon: <FaNode />, name: 'Node.js', level: 85 },
    { icon: <SiPostgresql />, name: 'PostgreSQL', level: 88 },
    { icon: <FaFigma />, name: 'UI/UX Design', level: 90 },
  ];

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

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="skills-title">Technológiai Stack</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
