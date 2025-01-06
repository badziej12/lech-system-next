'use client';

import { useEffect } from 'react';

const ScrollTracker = () => {
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section") as HTMLElement;
    const imageSection = document.querySelector(".ImageSection img") as HTMLElement;

    const handleSectionVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          console.log("Widać sekcje", entry);
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleSectionVisibility, {
      root: null, // domyślnie obserwuje w obrębie całego okna
      rootMargin: '0px',
      threshold: 0.5, // Uruchamia funkcję, gdy 50% sekcji jest widoczne
    });


    observer.observe(aboutSection);

    return () => {
      observer.unobserve(aboutSection);
    };
  }, []);

  return null; // Nie musisz renderować niczego wizualnie
};

export default ScrollTracker;