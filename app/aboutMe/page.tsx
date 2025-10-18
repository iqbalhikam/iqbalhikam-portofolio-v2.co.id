/* eslint-disable react/no-unescaped-entities */
import MeCard from '@/components/about/MeCard';
import CardProject from '@/components/about/MeCard';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">M Iqbal Fatkhul Hikam</h1>
            <p className="text-lg text-primary font-medium mt-2">Software Engineer</p>
            <p className="text-base text-gray-400 mt-1">Based in Bojonegoro, ID</p>
          </div>
        </section>
        <section className="mb-16">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deleniti ad, voluptatum nostrum eligendi incidunt error? Ad perferendis vitae, voluptate maiores eius quod debitis nam aperiam nihil hic officiis reiciendis est
            saepe quisquam sapiente repellendus quis cupiditate voluptatum. Eaque ratione quibusdam aut nostrum eligendi, facilis quis fugit voluptatem totam beatae!
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Skill 1: Bahasa */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-base font-medium text-gray-200">JavaScript / TypeScript</p>
                <p className="text-sm font-normal text-gray-400">90%</p>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Skill 2: Framework Front-End */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-base font-medium text-gray-200">React.js</p>
                <p className="text-sm font-normal text-gray-400">85%</p>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Skill 3: Framework Back-End */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-base font-medium text-gray-200">Node.js (Express)</p>
                <p className="text-sm font-normal text-gray-400">80%</p>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Skill 4: Database */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="text-base font-medium text-gray-200">SQL (PostgreSQL / MySQL)</p>
                <p className="text-sm font-normal text-gray-400">75%</p>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left"> Certificate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MeCard
              imageUrl="/assets/sertifikat/Certified Developer form alibbaba cloud/Certified Developer.png"
              title="Certified Developer form alibbaba cloud"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet."
            />
            {/* <MeCard imageUrl="/assets/sertifikat/sertifikat eCommerce/sertifikat.jpg" title="Certified Developer form alibbaba cloud" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet." /> */}
            <MeCard imageUrl="/assets/sertifikat/sertifikatCyber/sertifikatCyber.jpg" title="Certified cyber security form Universitas Bina Insani" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet." />
            <MeCard
              imageUrl="/assets/sertifikat/sertifikatData/sertifikat_course_177_3564668_311223190649_page-0001.jpg"
              title="Certified Visualisation Data form Dicoding"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet."
            />
            <MeCard imageUrl="/assets/sertifikat/sertifikatFrontEnd/sertifikat_frontEnd1.jpg" title="Certified Front-End Developer form Dicoding" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet." />
            <MeCard imageUrl="/assets/sertifikat/sertifikatPython/sertifikat_python1.jpg" title="Certified Python Programming form Dicoding" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet." />
            <MeCard imageUrl="/assets/sertifikat/sertifikatWeb/sertifikat_webProgrammer1.jpg" title="Certified Web Programming form Dicoding" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, amet." />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
