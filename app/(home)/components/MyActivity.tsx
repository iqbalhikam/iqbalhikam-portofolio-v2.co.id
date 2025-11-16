'use client';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useShowSection } from '@/hooks/useShowSection';
import { MdWidthFull } from 'react-icons/md';

const MyActivity = () => {
  const { isVisible, sectionRef } = useShowSection(1000);
  return (
    <div ref={sectionRef} className="flex flex-col w-screen justify-center items-center px-10 ">
      <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }} className="text-2xl lg:text-3xl font-bold text-secondary-foreground pb-10">
        My Activity
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} className="bg-black/50 rounded-2xl p-5 w-[90%] flex items-center justify-center">
        <GitHubCalendar username="iqbalhikam" blockMargin={7} colorScheme="dark" style={{ width: '100%' }} />
      </motion.div>
    </div>
  );
};

export default MyActivity;
