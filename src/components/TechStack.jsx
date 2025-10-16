import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaNode, FaPython, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiSvelte, SiDjango, SiPhp } from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { icon: <FaReact />, name: 'React & React Native', level: 95, color: '#61DAFB' },
    { icon: <SiTypescript />, name: 'TypeScript', level: 92, color: '#3178C6' },
    { icon: <SiSvelte />, name: 'SvelteKit', level: 88, color: '#FF3E00' },
    { icon: <FaAngular />, name: 'Angular', level: 85, color: '#DD0031' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
    { icon: <FaPython />, name: 'Python', level: 87, color: '#3776AB' },
    { icon: <SiDjango />, name: 'Django', level: 87, color: '#092E20' },
    { icon: <FaNode />, name: 'Node.js', level: 85, color: '#339933' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', level: 88, color: '#4169E1' },
    { icon: <SiPhp />, name: 'PHP', level: 80, color: '#777BB4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="tech-stack" className="tech-stack" ref={ref}>
      <div className="tech-stack-container">
        <motion.div
          className="tech-stack-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Technológiai Stack</span>
          <h2 className="section-title">Eszközök & Technológiák</h2>
          <p className="section-description">
            Modern, cutting-edge technológiák, amelyekkel nap mint nap dolgozom.
            A full-stack fejlesztéstől a mobilalkalmazásokig.
          </p>
        </motion.div>

        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="tech-icon-wrapper" style={{ '--tech-color': tech.color }}>
                <div className="tech-icon">{tech.icon}</div>
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <div className="tech-level-bar">
                <motion.div
                  className="tech-level-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${tech.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <span className="tech-level-text">{tech.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="tech-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">Év Tapasztalat</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projekt</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">{technologies.length}</div>
            <div className="stat-label">Technológia</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
