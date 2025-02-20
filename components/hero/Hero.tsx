'use client';

import { useShadow } from '@/hooks/useShadow';
import { motion } from 'framer-motion';
import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import App from '../band/App';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const { shadow, handleMouseMove, handleMouseLeave } = useShadow();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 1000);
        }
      },
      { threshold: 0.3 } // Aktif saat 30% dari elemen terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        {isVisible && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-40">
            <App />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeatDelay: 3, duration: 0.8 }} className="w-[20%] h-[40%] rounded-3xl text-center flex items-center justify-center">
            <div className="relative bg-black/70 transition-all duration-200 w-full h-full rounded-3xl flex items-center justify-center">
              <div className=" bg-black/40 transition-all duration-200 w-[95%] h-[95%] rounded-3xl"></div>
              <div className="absolute bg-black/20 transition-all duration-200 w-[90%] h-[90%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[85%] h-[85%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[80%] h-[80%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[75%] h-[75%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[70%] h-[70%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[65%] h-[65%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[60%] h-[60%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[55%] h-[55%] rounded-3xl"></div>
              <div className="absolute bg-black/10 transition-all duration-200 w-[50%] h-[50%] rounded-3xl"></div>
              <motion.div className='absolute bg-[url("/assets/iqbal.png")] opacity-60 bg-cover bg-center rounded-3xl transition-all duration-200 backdrop-grayscale w-full h-full'>
                <motion.div className="transition-all duration-200 backdrop-grayscale w-full h-full"></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Layer kedua (di atasnya) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeatDelay: 2, duration: 0.5 }} className="w-[90%] h-[90%]  rounded-3xl text-center flex flex-col items-center justify-center">
          <motion.h1 className={`font-extrabold text-gray-300 text-7xl`} initial={{ x: 100 }} animate={{ x: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }}>
            M IQBAL FATKHUL HIKAM
          </motion.h1>
          <motion.h1 className={`font-extrabold text-gray-300 text-7xl`} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }}>
            M IQBAL FATKHUL HIKAM
          </motion.h1>
          <motion.h1 className={`font-extrabold text-gray-300 text-7xl`} initial={{ x: 100 }} animate={{ x: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }}>
            M IQBAL FATKHUL HIKAM
          </motion.h1>
          <motion.h1 className={`font-extrabold text-gray-300 text-7xl`} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }}>
            M IQBAL FATKHUL HIKAM
          </motion.h1>
          <motion.h1 className={`font-extrabold text-gray-300 text-7xl`} initial={{ x: 100 }} animate={{ x: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }}>
            M IQBAL FATKHUL HIKAM
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
