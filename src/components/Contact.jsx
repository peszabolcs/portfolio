import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt kezelheted a form submission-t (pl. emailjs, API, stb.)
    console.log('Form submitted:', formData);
    alert('Köszönöm az üzeneted! Hamarosan jelentkezem.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'perjesidev@gmail.com',
      link: 'mailto:perjesidev@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Telefon',
      value: '+36 30 721 2524',
      link: 'tel:+36307212524',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Helyszín',
      value: 'Szeged, Magyarország',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Kapcsolat</span>
          <h2 className="section-title">Valósítsuk Meg Együtt</h2>
          <p className="section-description">
            Van egy ötleted, amit szeretnél életre kelteni? Keress bátran és beszéljük meg, hogyan tudok segíteni!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-info-title">Lépj Kapcsolatba</h3>
            <p className="contact-info-description">
              Akár van már kész elképzelésed, akár még csak ötletelünk —
              keress bátran és kezdjük el együtt!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4 className="info-title">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="info-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="info-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Név</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Teljes neved"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@pelda.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Üzenet</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Írj egy üzenetet..."
              />
            </div>

            <motion.button
              type="submit"
              className="form-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Üzenet Küldése</span>
              <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
