import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "FlightCore Dynamic Solutions",
      description:
        "Modern dróngyártó vállalat cutting-edge webplatformja. Teljes frontend architektúra kialakítása a legújabb iparági standardok alkalmazásával.",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "https://flightcoreds.com",
      githubLink: "https://github.com/peszabolcs/droneproject",
      category: "web",
    },
    {
      id: 2,
      title: "ParkSafe",
      description:
        "Vezető fejlesztőként egy innovatív biciklis közösségi platformon dolgozom, amely forradalmasítja a városi kerékpározást. Full-stack fejlesztés modern technológiákkal.",
      image:
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "React Native"],
      demoLink: "https://parksafe.hu",
      githubLink: "https://github.com/peszabolcs/parksafe-page",
      category: "fullstack",
    },
    {
      id: 3,
      title: "EduVenture",
      description:
        "A 2024-es Nemzeti Tehetség Program döntőjébe jutott pályaorientációs platform egyedüli fejlesztője. Komplex full-stack rendszer, amely fiatalok karriertervezését segíti.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      tags: ["React", "PHP", "MongoDB"],
      demoLink: "https://edu-venture.hu",
      githubLink: "https://github.com/peszabolcs/eduventure",
      category: "fullstack",
    },
    {
      id: 4,
      title: "The Coffee Break",
      description:
        "Letisztult, elegáns kávézó weboldal modern designnal. Egyedi vizuális identitás tervezése és kivitelezése, minimalista, kifinomult megjelenéssel.",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
      demoLink: "https://peszabolcs.github.io/landing-page/index.html",
      githubLink: "https://github.com/peszabolcs/landing-page",
      category: "web",
    },
    {
      id: 5,
      title: "CRM Enterprise System",
      description:
        "Teljes körű CRM rendszer fejlesztése céges környezetben. Komplex üzleti logika, felhasználókezelés és adatkezelés modern full-stack technológiákkal.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["SvelteKit", "Django", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
      category: "enterprise",
    },
    {
      id: 6,
      title: "Heimdall AI Camera System",
      description:
        "Intelligens AI-alapú kamerarendszer fejlesztése képfelismerő technológiával. Valós idejű objektum detekció és elemzés cutting-edge gépi tanulási módszerekkel.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
      tags: ["AI", "Computer Vision", "Python", "Real-time"],
      demoLink: "https://revival27.hu/heimdall.html",
      githubLink: "#",
      category: "ai",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Portfólió</span>
          <h2 className="section-title">Referencia Munkák</h2>
          <p className="section-description">
            Az elmúlt évek legkiemelkedőbb projektjei, amelyek bemutatják
            szakértelmemet és kreativitásomat.
          </p>
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-overlay">
                  <div className="overlay-links">
                    <a
                      href={project.demoLink}
                      className="overlay-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      <span>Élő Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="overlay-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
