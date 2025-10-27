import { Link } from 'react-scroll';

const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' }
];

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="footer-brand">
        <h3>CrystalFlow Shower Installations</h3>
        <p>Transforming bathrooms into immersive spa sanctuaries with turnkey design-build services.</p>
      </div>
      <nav className="footer-nav" aria-label="Footer">
        <h4>Explore</h4>
        <ul>
          {footerLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.id} smooth duration={600} offset={-96}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer-cta">
        <h4>Stay inspired</h4>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.target;
            form.reset();
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input id="newsletter-email" type="email" placeholder="Email address" required />
          <button type="submit" className="btn btn-secondary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <span>© {new Date().getFullYear()} CrystalFlow Studio. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
