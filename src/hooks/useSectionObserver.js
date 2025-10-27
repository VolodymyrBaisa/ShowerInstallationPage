import { useEffect, useState } from 'react';

const sectionIds = ['home', 'about', 'services', 'process', 'portfolio', 'testimonials', 'contact'];

export const useSectionObserver = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.35 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return active;
};
