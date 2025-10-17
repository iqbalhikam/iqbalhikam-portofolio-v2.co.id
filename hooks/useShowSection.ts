import { useEffect, useRef, useState } from 'react';

export const useShowSection = (delay: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay); // Delay 1 detik sebelum menampilkan App
        }
      },
      { threshold: 0.3 } // Aktif saat 30% dari elemen terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const element = sectionRef.current;
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  return {
    isVisible,
    sectionRef,
  };
};
