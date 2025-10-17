/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import App from '../band/App';
import { UseTimeOut } from '@/hooks/useTimeOut';
import ProfileHoverEffect from '../ui/ProfileHoverEffect';
import AnimatedText from '../ui/AnimatedText';
import { useShowSection } from '@/hooks/useShowSection';
import About from '../about/About';

const Hero = () => {
  const showApp = UseTimeOut(2000);
  const { isVisible, sectionRef } = useShowSection(1000);

  return (
    <section ref={sectionRef} id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#101922] text-white">
      {isVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* profile */}
          <div
            className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] w-full mx-10 flex flex-col items-center justify-center bg-white/1 backdrop-blur-sm rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1viPbXycVubSbo1WHLCkLG1ZHVYUMkhuOEzgJsRowm2N01dq4O8-Xr8dciJltB26wJkCbtwDbtnxqaW3D2BHWr9slmxfE9chRpYJzqnQAElWe5uf2fuaYNaOniAZR4OTFJBMv7uPS2E_O2EDtjhKscw60rCCWtg3fgHdanlYYOxH9mZFMug2TpORzvS6rLBWHBdDUF090-ctkFBYMNRZgk__sKtBQCjXqaKwmYe21a_S-SRyEb3p-540UwKUyoTwnhuZ_KZh9ig")`,
            }}>
            <div className="flex flex-col gap-6 p-6 md:p-12 text-center">
              <h1 className="text-white  text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">Hi, I'm Iqbal, a Mahasiswa</h1>
              <h2 className="text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto">I create intuitive and engaging digital experiences. Explore my portfolio to see my work and design philosophy.</h2>
              <button className="z-50 self-center flex min-w-[84px] max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-600 text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                  <span className="truncate">View Projects</span>
                </button>
            </div>
          </div>
          {/* id card */}
          <div className="absolute top-0 left-0 w-full h-full hidden md:flex sm:flex pointer-events-none z-40">{showApp && <App />}</div>
          {/* typografi */}
        </div>
      )}
    </section>
  );
};

export default Hero;
