import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/content.js';

const initialState = {
  name: '',
  email: '',
  projectType: '',
  timeline: '',
  message: ''
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thank you. An Unic concierge will reach out within one business day.');
    setFormData(initialState);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-container">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">Contact</span>
          <h2>Let’s design the shower experience your space deserves</h2>
          <p>
            Share your goals and our concierge team will schedule a consultation, review materials, and plan an on-site survey to
            begin your transformation.
          </p>
          <div className="contact-details">
            <div>
              <strong>Studio</strong>
              <span>{contactInfo.studio.addressLine1}</span>
              <span>{contactInfo.studio.addressLine2}</span>
            </div>
            <div>
              <strong>Connect</strong>
              {contactInfo.phones.map((phone) => (
                <a key={phone} href={`tel:+1${phone.replace(/[^\d]/g, '')}`}>{phone}</a>
              ))}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div>
              <strong>Hours</strong>
              {contactInfo.hours.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
            />
          </label>
          <div className="field-row">
            <label>
              Project Type
              <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                <option value="" disabled>
                  Select an option
                </option>
                <option value="residential">Residential Remodel</option>
                <option value="new-build">New Construction</option>
                <option value="hospitality">Hospitality</option>
                <option value="multi-unit">Multi-Unit</option>
              </select>
            </label>
            <label>
              Target Timeline
              <select name="timeline" value={formData.timeline} onChange={handleChange} required>
                <option value="" disabled>
                  Choose timeline
                </option>
                <option value="immediate">0 – 2 months</option>
                <option value="near-term">3 – 4 months</option>
                <option value="long-term">5+ months</option>
              </select>
            </label>
          </div>
          <label>
            Tell us about the space
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share square footage, desired materials, or special requirements."
              rows="4"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">Submit Inquiry</button>
          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};
