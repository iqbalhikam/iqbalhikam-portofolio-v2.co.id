'use client';

import React from 'react';
import App from '../band/App';
import { motion } from 'framer-motion';
import { useShadow } from '@/hooks/useShadow';
import { after } from 'node:test';
import AnimateTitle from './AnimateTitle';
import AboutGlobeAnimate from './AboutGlobeAnimate';

const Hero = (onMouseMove: any, onMouseLeave: any) => {
  const { shadow, handleMouseMove, handleMouseLeave } = useShadow();
  onMouseMove(handleMouseMove);
  onMouseLeave(handleMouseLeave);
  
  return (
    <div className='z-20' >
      <div className="flex  items-center justify-center h-screen">
        <motion.div className=" w-11/12 h-5/6 rounded-2xl bg-[#242424] text-xl flex items-center justify-center shadow-sm drop-shadow-xl" style={{ boxShadow: shadow }} initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: 100 }} transition={{ ease: 'easeOut', duration: 2 }}>
          <motion.h1 className="font-bold text-5xl" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>
        </div>
          </motion.h1>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
