import { motion } from 'framer-motion';
import { testimonials } from '../data/content.js';

export const Testimonials = () => (
  <section id="testimonials" className="section testimonials">
    <div className="container">
      <div className="section-heading center">
        <span className="eyebrow">Testimonials</span>
        <h2>Clients love the Unic approach to shower renovations</h2>
        <p>
          Hear how homeowners, property managers, and hospitality teams describe their experience partnering with our certified
          shower installation specialists.
        </p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
          >
            <p>“{testimonial.quote}”</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.title}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);
