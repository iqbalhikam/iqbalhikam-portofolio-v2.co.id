'use client';
import MeCard from '@/components/card/MeCard';
import { useShowSection } from '@/hooks/useShowSection';
import { projectsData } from '@/lib/projectsData';
import { motion } from 'framer-motion';
type AnimatedTextProps = {
  id: string;
};
const Projects = ({ id }: AnimatedTextProps) => {
  const { isVisible, sectionRef } = useShowSection(1000);
  return (
    <div className="min-h-screen ">
      <motion.div ref={sectionRef} id={id ? id : ''} initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} className="flex flex-col items-center justify-center min-h-full">
        <h2 className="text-2xl lg:text-4xl font-bold pb-10 pt-30">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 pb-5 lg:p-0 max-w-4xl">
          {projectsData.map((project) => (
            <MeCard animateScale={1} key={project.id} imageUrl={project.projectImage[0].url} title={project.title} desc={project.description} slug={`/${project.slug}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
