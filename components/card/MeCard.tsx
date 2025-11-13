'use client';
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
type CardProjectProps = {
  imageUrl: string;
  title: string;
  desc: string;
  slug?: string;
  animateScale?: number;
};
const MeCard = ({ imageUrl, title, desc, slug, animateScale }: CardProjectProps) => {
  return (
    <motion.div initial={{ scale: animateScale ? 1 : 0 }} animate={{ scale: animateScale }} exit={{ scale: 0 }} whileHover={{ scale: 1.05 }}>
      <Link href={slug ? slug : `#`}>
        <Card className="border-none group flex h-full flex-col rounded-xl overflow-hidden bg-background-light dark:bg-background-dark shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="relative w-full aspect-video bg-cover bg-center" style={{ backgroundImage: `url("${imageUrl}")` }}>
            <div className="absolute inset-0  group-hover:bg-white/10 group-hover:backdrop-blur-xs transition-colors duration-300"></div>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col">
            <p className="text-lg font-bold text-secondary-foreground">{title}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-1 line-clamp-1">{desc}</p>
          </CardContent>
          <CardFooter>
            <p className="mt-4 text-sm font-semibold text-primary hover:underline">
              View Details
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default MeCard;
