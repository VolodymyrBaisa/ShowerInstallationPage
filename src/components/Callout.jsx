import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { quoteHighlights } from '../data/content.js';

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
        <h2>Ready to launch your next shower surround?</h2>
        <p>
          Partner with Unic Shower Surrounds for concierge coordination, precision tile setting, and hospitality-grade finishes.
        </p>
        <ul className="callout-highlights">
          {quoteHighlights.slice(0, 3).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="callout-actions">
          <Link to="contact" smooth duration={600} offset={-96} className="btn btn-light">
            Speak with an expert
          </Link>
          <a className="btn btn-outline" href="https://www.instagram.com/unic_tiles" target="_blank" rel="noreferrer">
            Explore inspiration
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
