import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const Callout = () => (
  <section className="section callout">
    <div className="container callout-container">
      <motion.div
        className="callout-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2>Ready to deliver a spa-worthy shower?</h2>
        <p>
          Partner with CrystalFlow for a seamless installation guided by precision engineering, curated materials, and a
          hospitality-grade finish.
        </p>
        <div className="callout-actions">
          <Link to="contact" smooth duration={600} offset={-96} className="btn btn-light">
            Speak with an expert
          </Link>
          <a className="btn btn-outline" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Explore inspiration
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
