import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTextProps = {
    text: string,
    amount: number,
};
const AnimatedText = (animatedText : AnimatedTextProps) => {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeatDelay: 2, duration: 0.5 }} className="w-[90%] h-[90%]  rounded-3xl text-center flex flex-col items-center justify-center">
        {Array.from({ length: animatedText.amount }).map((_, index) => (
          <motion.h1 key={index} className="font-extrabold drop-shadow-[4px_5px_4px_white] text-white/70 text-7xl" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ repeatDelay: 3, duration: 0.8 }}>
            {animatedText.text}
          </motion.h1>
        ))}
      </motion.div>
    );
}

export default AnimatedText;
