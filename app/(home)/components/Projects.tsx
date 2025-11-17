'use client';
import MeCard from '@/components/card/MeCard';
import { useShowSection } from '@/hooks/useShowSection';
import { projectsData } from '@/lib/projectsData';
import { motion } from 'framer-motion';
type AnimatedTextProps = {
  id: string;
};
const Projects = ({ id }: AnimatedTextProps) => {
  const { isVisible, sectionRef } = useShowSection(100);
  return (
    <div className="min-h-screen ">
      <motion.div
        ref={sectionRef}
        id={id ? id : ''}
        initial={{ opacity: 0 }}
        transition={{ repeatDelay: 2, duration: 0.5, ease: 'easeInOut' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="flex flex-col items-center justify-center min-h-full">
        <h2 className="text-2xl lg:text-3xl font-bold pb-10 pt-30">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] pb-10 px-10 ">
          {projectsData.map((project) => (
            <MeCard animateScale={1} animateDelay={project.id} key={project.id} imageUrl={project.projectImage[0].url} title={project.title} desc={project.description} slug={`/${project.slug}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
