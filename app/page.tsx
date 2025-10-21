'use client';

import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import PageTransition from '@/components/animation/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative w-full min-h-screen">
        <>
          <Hero />
          <About />
        </>
      </div>
    </PageTransition>
  );
}
