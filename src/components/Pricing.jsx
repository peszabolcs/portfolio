import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import "./Pricing.css";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: "Gyors",
      price: "139,000",
      period: "árajánlat",
      description: "Ideális kisebb projektekhez és landing oldalakhoz",
      features: [
        "Egyedi, reszponzív design",
        "Akár 5 aloldal",
        "Mobilbarát kivitelezés",
        "Kapcsolati űrlap",
        "1 hónap ingyenes support",
      ],
      popular: false,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Profi",
      price: "299,000",
      period: "árajánlat",
      description: "Komplex weboldalakhoz és teljes körű alkalmazásokhoz",
      features: [
        "Minden a Kezdő csomagból",
        "Akár 15 aloldal",
        "Admin felület",
        "Részletes analitika",
        "Newsletter integráció",
        "3 hónap ingyenes support",
        "Performance optimalizálás",
        "SEO alapok",
      ],
      popular: true,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "Enterprise",
      price: "Egyedi árajánlat",
      period: "",
      description: "Nagyvállalatok és komplex alkalmazások számára",
      features: [
        "Minden a Profi csomagból",
        "Korlátlan aloldal",
        "Custom funkciók",
        "API fejlesztés",
        "Cloud hosting setup",
        "CI/CD pipeline",
        "12 hónap prioritásos support",
        "Dedikált project manager",
        "Teljes körű dokumentáció",
      ],
      popular: false,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
    <section id="pricing" className="pricing" ref={ref}>
      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Árazás</span>
          <h2 className="section-title">
            Válaszd ki a Neked Megfelelő Csomagot
          </h2>
          <p className="section-description">
            Átlátható, fix árak. Minden csomag tartalmazza a modern
            webfejlesztés alapjait.
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <FaStar />
                  <span>Legnépszerűbb</span>
                </div>
              )}

              <div className="pricing-card-header">
                <div className="plan-icon" style={{ background: plan.color }}>
                  <span className="plan-name-initial">{plan.name[0]}</span>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="pricing-card-price">
                <span className="price-amount">{plan.price}</span>
                {plan.price !== "Egyedi árajánlat" && (
                  <span className="price-currency">Ft</span>
                )}
                {plan.period && (
                  <span className="price-period">/ {plan.period}</span>
                )}
              </div>

              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <FaCheck className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="pricing-cta"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ajánlatot kérek
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
