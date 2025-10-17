'use client';

import { useShowSection } from '@/hooks/useShowSection';
import React from 'react';
import { motion } from 'framer-motion';
import CardProject from './CardProject';

const About = () => {
  const {isVisible, sectionRef} = useShowSection(1000);
  return (
    <section ref={sectionRef} id="about" className="-z-50 bg-[#101922] w-full min-h-screen content-start text-white">
      {isVisible && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold py-10">About Me</h2>
            <p className="text-center px-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora tempore numquam quo amet distinctio id voluptates. Magnam vero ratione ducimus commodi tempora impedit veniam ex assumenda velit ut. Quis voluptatem quos
              expedita dignissimos officia vel accusamus explicabo debitis quaerat, id, ab voluptas culpa suscipit. Quos, a! Repudiandae quis illo recusandae iusto nemo vitae eum aliquam, veniam quas maiores suscipit! Quos vitae, quae
              dignissimos velit eum similique iure quas ipsum nam sit explicabo voluptatum amet ratione tempore laudantium dolor, pariatur, impedit accusamus qui? Et laudantium reiciendis ea cumque ab voluptatum. Corporis sed unde
              asperiores eum facilis voluptatem iste similique libero?
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold pb-10 pt-30">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <CardProject
                imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png"
                title="Project Alpha"
                desc="A mobile app for fitness enthusiasts."
              />
              <CardProject
                imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png"
                title="Project Alpha"
                desc="A mobile app for fitness enthusiasts."
              />
              <CardProject
                imageUrl="https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png"
                title="Project Alpha"
                desc="A mobile app for fitness enthusiasts."
              />


              
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default About;
