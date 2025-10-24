'use client';

import { useShowSection } from '@/hooks/useShowSection';
import React from 'react';
import { motion } from 'framer-motion';
import MeCard from '../../../components/cards/MeCard';
import GitHubCalendar from 'react-github-calendar';
import AnimateTitle from '@/components/animation/AnimateTitle';

const Introduction = () => {
  const { isVisible, sectionRef } = useShowSection(1000);
  return (
    <section ref={sectionRef} id="about" className="-z-50 bg-[#101922] w-full min-h-screen content-start text-white">
      {isVisible && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold py-10">
              <AnimateTitle title="contributions" wordSpace=" " charSpace=" " />
            </h2>
            <div>
              <GitHubCalendar username="iqbalhikam" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold pb-10 pt-30">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MeCard imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png" title="Project Alpha" desc="A mobile app for fitness enthusiasts." />
              <MeCard imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png" title="Project Alpha" desc="A mobile app for fitness enthusiasts." />
              <MeCard imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png" title="Project Alpha" desc="A mobile app for fitness enthusiasts." />
            </div>
          </motion.div>
        </>
      )}
      <div id="projects"></div>
    </section>
  );
};

export default Introduction;
