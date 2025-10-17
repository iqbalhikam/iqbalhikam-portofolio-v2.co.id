'use client';

import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';


export default function Home() {

  return (
    <div className="relative w-full min-h-screen">
      

        <>
          <Hero />
          <About />
        </>

    </div>
  );
}
