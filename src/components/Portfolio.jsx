import { motion } from 'framer-motion';
import { projects } from '../data/content.js';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

export const Portfolio = () => (
  <section id="portfolio" className="section portfolio">
    <div className="container">
      <div className="section-heading">
        <span className="eyebrow">Recent Installations</span>
        <h2>Shower environments curated for residences and hospitality</h2>
        <p>
          Explore a snapshot of Unic surrounds—from wellness suites to penthouse retreats—each engineered for durability and
          spa-level comfort.
        </p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="portfolio-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={reveal}
            custom={index}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={`${project.name} in ${project.location}`} loading="lazy" />
            </div>
            <div className="portfolio-content">
              <div className="portfolio-meta">
                <span>{project.location}</span>
                <span>Completed {project.year}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
