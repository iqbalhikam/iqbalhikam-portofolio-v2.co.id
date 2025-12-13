/* eslint-disable react/no-unescaped-entities */
import MeCard from '@/components/card/MeCard';
import CardProject from '@/components/card/MeCard';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { certificatesData } from '@/lib/certificatesData';
import PageTransition from '@/components/animation/PageTransition';
import MeSkills from './components/MeSkills';

const AboutMe = () => {
  return (
    <PageTransition>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-secondary dark:text-white">
        <div className="max-w-4xl mx-auto">
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="flex-shrink-0">
              <div
                className="group relative aspect-square rounded-full size-40 md:size-48 
             border-4 border-primary/20 overflow-hidden 
             transition-all duration-500 ease-in-out">
                {/* 1. GAMBAR LATAR BELAKANG (DI BAWAH) */}
                {/* Mulai dengan opacity-0 (sembunyi), lalu muncul saat group di-hover */}
                <Image
                  src="https://i.pinimg.com/736x/a0/51/8a/a0518a3827ef9c9d43ad100bf900e50b.jpg" // <-- GANTI DENGAN GAMBAR BG ANDA
                  alt="Latar Belakang Hover"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0 w-full h-full object-cover
               opacity-0 group-hover:opacity-30 
               transition-opacity duration-500 ease-in-out"
                />

                {/* 2. GAMBAR UTAMA ANDA (DI ATAS, TRANSPARAN) */}
                {/* z-10 memastikan ini di atas. scale-110 terjadi saat group di-hover */}
                <Image
                  className="absolute inset-0 w-full h-full object-cover 
               group-hover:scale-110 
               transition-all duration-500 ease-in-out z-10"
                  src="/assets/iqbal1.jpg"
                  alt="Foto Profil M Iqbal"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground ">M Iqbal Fatkhul Hikam</h1>
              <p className="text-lg text-primary font-medium mt-2">Software Engineer</p>
              <p className="text-base text-secondary-foreground/50 dark:text-secondary mt-1">Based in Bojonegoro, ID</p>
            </div>
          </section>
          <section className="mb-16">
            <p className="text-base md:text-lg text-secondary-foreground  leading-relaxed text-center md:text-left">
              I'm M Iqbal Fatkhul Hikam, a passionate and creative student. I have a deep interest in programming, which motivates me to continuously learn and develop. I am currently pursuing my degree at Bina Insani University. I believe that self-development is the key to achieving goals, and I'm always looking for opportunities to hone my skills and knowledge. I believe that every day is an opportunity to learn something new and create meaningful moments. In my life, I strive to be a diligent person. I hope to contribute positively to the world around me and continue to grow as an individual.
            </p>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-8 text-center md:text-left">Skills</h2>
            <MeSkills/>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left"> Certificate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificatesData.map((certificate, index) => (
                <MeCard animateScale={1} key={index} imageUrl={certificate.certificatesImage[0].url} title={certificate.title} desc={certificate.description} slug={`aboutMe/${certificate.slug}`} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default AboutMe;
