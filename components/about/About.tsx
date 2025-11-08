/* eslint-disable react/no-unescaped-entities */
'use client';

import { useShowSection } from '@/hooks/useShowSection';
import React from 'react';
import { motion } from 'framer-motion';
import MeCard from './MeCard';

const About = () => {
  const { isVisible, sectionRef } = useShowSection(1000);
  return (
    <section ref={sectionRef} id="about" className="-z-50 bg-[#101922] w-full min-h-screen content-start text-white">
      {isVisible && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold py-10">About Me</h2>
            <p className="text-center px-50">
              I'm M Iqbal Fatkhul Hikam, a passionate and creative student. I have a deep interest in programming, which motivates me to continuously learn and develop. I graduated from Bina Insani University. I believe that
              self-development is the key to achieving goals, and I'm always looking for opportunities to hone my skills and knowledge. I believe that every day is an opportunity to learn something new and create meaningful moments. In my
              life, I strive to be a diligent person. I hope to contribute positively to the world around me and continue to grow as an individual.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold pb-10 pt-30">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MeCard imageUrl="https://raw.githubusercontent.com/iqbalhikam/task-flow/main/Screenshot%202025-11-09%20001041.png" title="Task Flow" desc="Projek ini sedang dalam progres development" />
              <MeCard imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png" title="App Desktop Inventory" desc="Solusi Manajemen Inventaris Modern untuk Bisnis Anda" />
              <MeCard imageUrl="assets/projects/webApp/Kasir.png" title="Web Kasir" desc="Projek ini di buat untuk memenuhi tugas UAS" />
              <MeCard imageUrl="assets/projects/design/dokterPintar.png" title="DESIGN UI/UX Dokter Pintar" desc="Projek ini di buat untuk memenuhi tugas akhir" />
              <MeCard imageUrl="assets/projects/webApp/bootWa.png" title="Boot Wa(Back End APP)" desc="Projek ini di bangun menggunakan nodejs" />
            </div>
          </motion.div>
        </>
      )}
      <div id="projects"></div>
    </section>
  );
};

export default About;
