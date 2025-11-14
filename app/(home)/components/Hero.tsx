/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import App from '../../../components/band/App';
import { UseTimeOut } from '@/hooks/useTimeOut';
import { useShowSection } from '@/hooks/useShowSection';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const showApp = UseTimeOut(2000);
  const { isVisible, sectionRef } = useShowSection(1000);

  return (
    <section ref={sectionRef} id="hero" className="relative w-full min-h-96 lg:min-h-screen flex items-center justify-center  ">
      <div className="absolute inset-0 flex  items-center justify-end pt-30 lg:pt-0 p-5 lg:p-10">
        {/* profile */}
        <div className="w-fit flex flex-col items-center gap-10 justify-center   rounded-xl  ">
        {/* card mobile*/}
        {/* <div className="flex md:hidden lg:hidden">
          <div className='w-50 h-50 bg-accent'>

          </div>
        </div> */}
          <div className="flex flex-col gap-6 p-5 lg:p-12 text-end items-end ">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ repeatDelay: 2, duration: 1 }} className="dark:text-white  text-2xl sm:text-4xl lg:text-6xl font-black tracking">
              M IQBAL FATKHUL HIKAM
            </motion.h1>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ repeatDelay: 2, duration: 1 }} className="dark:text-accent-foreground text-sm   lg:text-lg max-w-3xl">
              I'm a Computer Science student passionate about Software Engineering. I focus on building efficient and scalable solutions. Explore my projects to see my technical approach and problem-solving skills.
            </motion.h2>
            <div className="flex  gap-5 justify-end z-50 ">
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}>
                <Link target="_blank" href="https://github.com/iqbalhikam" className="z-50 cursor-pointer">
                  <FaGithub className="text-4xl" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}>
                <Link target="_blank" href="https://www.linkedin.com/in/iqbalhikam/" className="z-50 cursor-pointer">
                  <FaLinkedin className="text-4xl" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}>
                <Link target="_blank" href="https://www.instagram.com/iqbal.hikm" className="z-50 cursor-pointer">
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
