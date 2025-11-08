'use client';

import About from '@/app/(home)/components/About';
import Hero from '@/app/(home)/components/Hero';
import PageTransition from '@/components/animation/PageTransition';
import Projects from './components/Projects';
import { useShowSection } from '@/hooks/useShowSection';

export default function Home() {
  const { isVisible, sectionRef } = useShowSection(1000);
  return (
    <PageTransition>
      <div className="relative w-full min-h-screen">
        <Hero />
        <section ref={sectionRef} id="about" className="-z-50 bg-[#101922] w-full min-h-screen content-start text-white">
          {isVisible ? (
            <>
              <About />

              <Projects />
            </>
          ) : (<div id="projects"></div>)}
        </section>
      </div>
    </PageTransition>
  );
}
