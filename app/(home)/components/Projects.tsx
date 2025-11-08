import MeCard from '@/components/card/MeCard';
import { projectsData } from '@/lib/projectsData';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold pb-10 pt-30">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
        {projectsData.map((project) => (
          <MeCard key={project.id} imageUrl={project.projectImage[0].url} title={project.title} desc={project.description} slug={`/${project.slug}`} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
