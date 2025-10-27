import { motion } from 'framer-motion';
import { services } from '../data/content.js';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.5, ease: 'easeOut' }
  })
};

export const Services = () => (
  <section id="services" className="section services">
    <div className="container">
      <div className="section-heading">
        <span className="eyebrow">Services</span>
        <h2>Complete shower installation services for luxury residences & hospitality</h2>
        <p>
          From conceptual design to handover, our experts translate complex specifications into cohesive, buildable solutions.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
            custom={index}
          >
            <span className="material-symbols-rounded">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
