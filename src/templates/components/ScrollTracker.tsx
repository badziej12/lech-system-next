'use client';

import { useEffect } from 'react';

const ScrollTracker = () => {
  useEffect(() => {
    const observedElement = Array.from(document.querySelectorAll(".observed-element")) as HTMLElement[];

    const handleSectionVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleSectionVisibility, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observedElement.forEach((element) => {
      observer.observe(element);
    })

    return () => {
      observedElement.forEach((element) => {
        observer.unobserve(element);
      })
    };
  }, []);

  return null;
};

export default ScrollTracker;