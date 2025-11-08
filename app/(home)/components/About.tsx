/* eslint-disable react/no-unescaped-entities */
'use client';

import { useShowSection } from '@/hooks/useShowSection';
import React from 'react';
import { motion } from 'framer-motion';
import MeCard from '../../../components/card/MeCard';

const About = () => {
  const { isVisible, sectionRef } = useShowSection(1000);
  return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold py-10">About Me</h2>
            <p className="text-center px-50">
              I'm M Iqbal Fatkhul Hikam, a passionate and creative student. I have a deep interest in programming, which motivates me to continuously learn and develop. I graduated from Bina Insani University. I believe that
              self-development is the key to achieving goals, and I'm always looking for opportunities to hone my skills and knowledge. I believe that every day is an opportunity to learn something new and create meaningful moments. In my
              life, I strive to be a diligent person. I hope to contribute positively to the world around me and continue to grow as an individual.
            </p>
          </motion.div>
  );
};

export default About;
