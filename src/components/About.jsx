import { motion } from 'framer-motion';
import { aboutCopy, metrics, partners } from '../data/content.js';

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

export const About = () => (
  <section id="about" className="section about">
    <div className="container about-container">
      <div className="about-content">
        <span className="eyebrow">About Unic Shower Surrounds</span>
        <h2>Concierge shower installation guided by the UnicTiles legacy</h2>
        {aboutCopy.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="about-grid">
          {metrics.map((metric, index) => (
            <motion.article
              className="about-metric"
              key={metric.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={variants}
              custom={index}
            >
              <span className="metric-value">{metric.value}</span>
              <h3>{metric.label}</h3>
              <p>{metric.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <motion.aside
        className="about-aside"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="aside-card">
          <h3>Certified partnerships</h3>
          <ul>
            {partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
        <div className="aside-note">
          <h4>Concierge project management</h4>
          <p>
            A dedicated project lead coordinates trades, documentation, and updates so every shower surround meets schedule and
            specification.
          </p>
        </div>
      </motion.aside>
    </div>
  </section>
);
