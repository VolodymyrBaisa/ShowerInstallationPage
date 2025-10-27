import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

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
        <span className="eyebrow">Award-Winning Shower Installation Studio</span>
        <h1>
          Elevating Showers
          <span className="gradient-text"> into immersive spa environments</span>
        </h1>
        <p>
          CrystalFlow partners with discerning homeowners, designers, and hospitality groups to craft bespoke showers that
          merge architectural finesse with technical precision.
        </p>
        <div className="hero-actions">
          <Link to="contact" smooth duration={600} offset={-96} className="btn btn-primary">
            Schedule a Site Assessment
          </Link>
          <Link to="portfolio" smooth duration={600} offset={-96} className="btn btn-ghost">
            View Signature Projects
          </Link>
        </div>
        <dl className="hero-metrics">
          <div>
            <dt>Luxury Renovations Completed</dt>
            <dd>1,480+</dd>
          </div>
          <div>
            <dt>Certified Install Teams</dt>
            <dd>8 regional crews</dd>
          </div>
          <div>
            <dt>On-Time Delivery Rate</dt>
            <dd>98%</dd>
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
            src="https://images.unsplash.com/photo-1616628182504-09e7cdc79fd7?auto=format&fit=crop&w=1100&q=80"
            alt="Curved glass shower with rainfall head"
          />
          <div className="hero-card-caption">
            <h3>Curated Materials. Seamless Engineering.</h3>
            <p>Integrated lighting, steam, and spa technologies delivered turnkey.</p>
          </div>
        </div>
        <motion.div
          className="hero-floating"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span>Trusted by premier architects</span>
          <strong>18 design studios nationwide</strong>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
