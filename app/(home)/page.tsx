'use client';

import About from '@/app/(home)/components/About';
import Hero from '@/app/(home)/components/Hero';
import PageTransition from '@/components/animation/PageTransition';
import Projects from './components/Projects';
import { useShowSection } from '@/hooks/useShowSection';
import ThemeToggle from '@/components/theme/ThemeToggle';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-w-full min-h-screen overflow-auto scrollbar-hide bg-white dark:bg-background">
        <ThemeToggle />
        
        <Hero />

        <About />

        <Projects id="projects" />
      </div>
    </PageTransition>
  );
}
