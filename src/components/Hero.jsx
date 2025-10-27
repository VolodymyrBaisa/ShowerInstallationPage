import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { contactInfo, metrics, quoteHighlights } from '../data/content.js';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const highlightItems = quoteHighlights.slice(0, 4);
const heroMetrics = metrics.slice(0, 2);

export const Hero = () => (
  <section id="home" className="section hero">
    <div className="container hero-container">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={heroVariants}
      >
        <span className="eyebrow">Professional Shower Surround Installation</span>
        <h1>
          Create spa-level showers with
          <span className="gradient-text"> Unic precision</span>
        </h1>
        <p>
          Inspired by the craftsmanship behind UnicTiles, our specialists coordinate every detail—from demolition and waterproofing
          to stone, glass, and lighting—to deliver statement showers that last.
        </p>
        <ul className="hero-highlights">
          {highlightItems.map((item) => (
            <li key={item}>
              <span className="material-symbols-rounded" aria-hidden="true">
                check_small
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <Link to="contact" smooth duration={600} offset={-96} className="btn btn-primary">
            Book a Free Quote
          </Link>
          <Link to="portfolio" smooth duration={600} offset={-96} className="btn btn-ghost">
            Browse Recent Installs
          </Link>
        </div>
        <dl className="hero-metrics">
          {heroMetrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
          <div>
            <dt>Concierge Support</dt>
            <dd>{contactInfo.phones[0]}</dd>
          </div>
        </dl>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="hero-glass-card">
          <img
            src="https://images.unsplash.com/photo-1616594039964-196d4ca0a7c5?auto=format&fit=crop&w=1200&q=80"
            alt="Light-filled shower surround with rainfall head and stone accents"
          />
          <div className="hero-card-caption">
            <h3>Curated Materials. Seamless Engineering.</h3>
            <p>Frameless glass, custom niches, and spa fixtures installed with white-glove care.</p>
          </div>
        </div>
        <motion.div
          className="hero-floating"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span>Serving Connecticut • New York • Massachusetts</span>
          <strong>Unic Shower Surrounds</strong>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
