/* eslint-disable react/no-unescaped-entities */
'use client';

import { useShowSection } from '@/hooks/useShowSection';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const { isVisible, sectionRef } = useShowSection(500);
  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center  p-5 lg:p-20 ">
      <div className=" py-20 rounded-2xl ">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} className="text-2xl lg:text-3xl text-center font-bold pb-10">
          About Me
        </motion.h2>
        <motion.p initial={{ y: -30 }} transition={{ duration: 0.5 }} animate={{ y: isVisible ? 0 : 20 }} className="text-sm lg:text-lg text-center px-5 lg:px-20 text-balance">
          I'm M Iqbal Fatkhul Hikam, a passionate and creative student. I have a deep interest in programming, which motivates me to continuously learn and develop. I graduated from Bina Insani University. I believe that self-development is
          the key to achieving goals, and I'm always looking for opportunities to hone my skills and knowledge. I believe that every day is an opportunity to learn something new and create meaningful moments. In my life, I strive to be a
          diligent person. I hope to contribute positively to the world around me and continue to grow as an individual.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
