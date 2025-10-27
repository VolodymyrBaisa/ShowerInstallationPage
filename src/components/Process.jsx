import { motion } from 'framer-motion';
import { processSteps } from '../data/content.js';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

export const Process = () => (
  <section id="process" className="section process">
    <div className="container">
      <div className="section-heading">
        <span className="eyebrow">Process</span>
        <h2>A documented methodology that keeps your project effortless</h2>
        <p>
          Every Unic shower surround follows a proven framework that keeps designers, homeowners, and property managers aligned
          without sacrificing schedule or finish quality.
        </p>
      </div>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            className="process-step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={index}
          >
            <span className="step-number">0{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
