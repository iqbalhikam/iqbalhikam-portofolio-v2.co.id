import React from 'react';
import { motion } from 'framer-motion';

const ProfileHoverEffect = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeatDelay: 3, duration: 0.8 }} className="w-[20%] h-[40%] rounded-3xl text-center flex items-center justify-center">
          <div className="cursor-pointer relative hover:bg-white/90 bg-black/70  transition-all duration-200 w-full h-full rounded-3xl flex items-center justify-center z-50">
            {/* <div className="absolute bg-white transition-all duration-200 w-[100%] h-[100%] rounded-3xl"></div> */}
            <div className=" bg-black/40 transition-all duration-200 w-[95%] h-[95%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[90%] h-[90%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[85%] h-[85%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[80%] h-[80%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[75%] h-[75%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[70%] h-[70%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[65%] h-[65%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[60%] h-[60%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[55%] h-[55%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[50%] h-[50%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[45%] h-[45%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[40%] h-[40%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[35%] h-[35%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[30%] h-[30%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[25%] h-[25%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[20%] h-[20%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[15%] h-[15%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[10%] h-[10%] rounded-3xl"></div>
            <div className="absolute bg-black/15 transition-all duration-200 w-[5%] h-[5%] rounded-3xl"></div>
            <motion.div whileHover={{ scale: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }} className='absolute bg-[url("/assets/iqbal.png")] opacity-60 bg-cover bg-center rounded-3xl transition-all duration-200 w-full h-full'>
              <motion.div className="transition-all duration-200 backdrop-grayscale w-full h-full"></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
}

export default ProfileHoverEffect;
