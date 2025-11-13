'use client';
import { useShowSection } from '@/hooks/useShowSection';
import { delay, motion } from 'framer-motion';

const MeSkills = () => {

    const { isVisible, sectionRef } = useShowSection(1000);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6" ref={sectionRef}>
      {/* Skill 1: Bahasa */}
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <p className="text-base font-medium text-secondary-foreground">JavaScript / TypeScript</p>
          <p className="text-sm font-normal text-gray-400">90%</p>
        </div>
        <div className="w-full bg-primary/20 rounded-full h-2.5">
          <motion.div initial={{ width: '0%' }} transition={{ duration: 0.5 }} animate={{ width: isVisible ? '90%' : '0%' }} className="bg-primary h-2.5 rounded-full"></motion.div>
        </div>
      </div>

      {/* Skill 2: Framework Front-End */}
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <p className="text-base font-medium text-secondary-foreground">React.js</p>
          <p className="text-sm font-normal text-gray-400">85%</p>
        </div>
        <div className="w-full bg-primary/20 rounded-full h-2.5">
          <motion.div className="bg-primary h-2.5 rounded-full" initial={{ width: '0%' }} transition={{ delay: 0.3, duration: 0.5 }} animate={{ width: isVisible ? '85%' : '0%' }}></motion.div>
        </div>
      </div>

      {/* Skill 3: Framework Back-End */}
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <p className="text-base font-medium text-secondary-foreground">Node.js (Express)</p>
          <p className="text-sm font-normal text-gray-400">80%</p>
        </div>
        <div className="w-full bg-primary/20 rounded-full h-2.5">
          <motion.div className="bg-primary h-2.5 rounded-full" initial={{ width: '0%' }} transition={{ delay: 0.6, duration: 0.5 }} animate={{ width: isVisible ? '80%' : '0%' }}></motion.div>
        </div>
      </div>

      {/* Skill 4: Database */}
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <p className="text-base font-medium text-secondary-foreground">SQL (PostgreSQL / MySQL)</p>
          <p className="text-sm font-normal text-gray-400">75%</p>
        </div>
        <div className="w-full bg-primary/20 rounded-full h-2.5">
          <motion.div className="bg-primary h-2.5 rounded-full" initial={{ width: '0%' }} transition={{delay: 1, duration: 0.5 }} animate={{ width: isVisible ? '75%' : '0%' }}></motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeSkills;
