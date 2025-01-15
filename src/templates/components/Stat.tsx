"use client"

import React, { useEffect, useRef, useState } from "react";

type StatProps = {
  target: number;
}

export const Stat: React.FC<StatProps> = ({ target }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const statRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const duration = 2000;

    const animateNumber = () => {
      start += Math.ceil(target / (duration / 16));
      if (start >= target) {
        setCurrentValue(target);
      } else {
        setCurrentValue(start);
        requestAnimationFrame(animateNumber);
      }
    };

    animateNumber();
  }, [isActive, target]);

  return <span ref={statRef}>{currentValue}</span>;
};
