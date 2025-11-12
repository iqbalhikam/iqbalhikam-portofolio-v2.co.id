/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import App from '../../../components/band/App';
import { UseTimeOut } from '@/hooks/useTimeOut';
import ProfileHoverEffect from '../../../components/ui/ProfileHoverEffect';
import AnimatedText from '../../../components/ui/AnimatedText';
import { useShowSection } from '@/hooks/useShowSection';
import About from './About';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const showApp = UseTimeOut(2000);
  const { isVisible, sectionRef } = useShowSection(1000);

  return (
    <section ref={sectionRef} id="hero" className="relative w-full min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 flex items-center justify-end pr-10">
        {/* profile */}
        <div className="w-fit justify-center   rounded-xl bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-6 p-6 md:p-12 text-end items-end">
            <h1 className="dark:text-white  text-4xl sm:text-5xl lg:text-6xl font-black tracking">M IQBAL FATKHUL HIKAM</h1>
            <h2 className="dark:text-accent-foreground text-lg sm:text-xl max-w-3xl">
              I'm a Computer Science student passionate about Software Engineering. I focus on building efficient and scalable solutions. Explore my projects to see my technical approach and problem-solving skills.
            </h2>
            <div className="flex  gap-5 justify-end z-50 ">
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}>
                <Link href="#projects" className="z-50 cursor-pointer">
                  <FaGithub className="text-4xl" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}>
                <Link href="#projects" className="z-50 cursor-pointer">
                  <FaLinkedin className="text-4xl" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}>
                <Link href="#projects" className="z-50 cursor-pointer">
                  <FaInstagram className="text-4xl" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        {/* id card */}
        <div className="absolute top-0 left-0 w-full h-full hidden md:flex sm:flex pointer-events-none z-40">{showApp && <App />}</div>
        {/* typografi */}
      </div>
    </section>
  );
};

export default Hero;
