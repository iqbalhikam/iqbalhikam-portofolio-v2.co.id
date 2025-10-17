import React from 'react';
type CardProjectProps = {
  imageUrl: string;
  title: string;
  desc: string;
};
const CardProject = ({ imageUrl, title, desc }: CardProjectProps) => {
  return (
    <div className="group flex h-full flex-col rounded-xl overflow-hidden bg-background-light dark:bg-background-dark shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${imageUrl}")` }}>
        <div className="absolute inset-0  group-hover:bg-white/10 group-hover:backdrop-blur-xs transition-colors duration-300"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-lg font-bold text-gray-900 dark:text-white">{title}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-1">{desc}</p>
        <a className="mt-4 text-sm font-semibold text-primary hover:underline" href="#">
          View Details
        </a>
      </div>
    </div>
  );
};

export default CardProject;
