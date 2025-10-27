import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useSectionObserver } from '../hooks/useSectionObserver.js';
import logo from '../assets/logo.svg?url';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar = () => {
  const activeSection = useSectionObserver();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`}>
      <div className="container header-container">
        <button
          className="brand"
          type="button"
          onClick={() => scroll.scrollToTop({ duration: 600 })}
          aria-label="CrystalFlow Shower Installations"
        >
          <img src={logo} alt="CrystalFlow logo" />
          <div className="brand-text">
            <span className="brand-name">CrystalFlow</span>
            <span className="brand-tagline">Shower Installations</span>
          </div>
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth
                  duration={600}
                  offset={-96}
                  spy
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-96}
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Book Consultation
          </Link>
        </nav>

        <button
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
