import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Link from 'next/link';
type CardProjectProps = {
  imageUrl: string;
  title: string;
  desc: string;
  slug?: string;
};
const MeCard = ({ imageUrl, title, desc, slug }: CardProjectProps) => {
  return (
    // <Link href={slug ? `aboutMe/certificates/${slug}` : `#`}>
      <Card className="border-none group flex h-full flex-col rounded-xl overflow-hidden bg-background-light dark:bg-background-dark shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="relative w-full aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${imageUrl}")` }}>
          <div className="absolute inset-0  group-hover:bg-white/10 group-hover:backdrop-blur-xs transition-colors duration-300"></div>
        </CardHeader>
        <CardContent className="p-6 flex-1 flex flex-col">
          <p className="text-lg font-bold text-white">{title}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-1 line-clamp-1">{desc}</p>
        </CardContent>
        <CardFooter>
          <Link className="mt-4 text-sm font-semibold text-primary hover:underline" href={slug ? `aboutMe/certificates/${slug}` : `#`} >
            View Details
          </Link>
        </CardFooter>
      </Card>
    // </Link>
  );
};

export default MeCard;
