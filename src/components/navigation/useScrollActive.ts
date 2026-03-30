
import { useState, useEffect } from 'react';

export const useScrollActive = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[id]')
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id') ?? 'home');
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
};
