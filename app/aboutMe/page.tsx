/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutMe = () => {
    return (
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="flex-shrink-0">
              <div className="bg-white/10 bg-center bg-no-repeat aspect-square bg-cover rounded-full size-40 md:size-48 border-4 border-primary/20" style={{ backgroundImage: 'url("assets/iqbal.png");' }}></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white">M Iqbal Fatkhul Hikam</h1>
              <p className="text-lg text-primary font-medium mt-2">Software Engineer</p>
              <p className="text-base text-gray-400 mt-1">Based in Bojonegoro, ID</p>
            </div>
          </section>
          <section className="mb-16">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deleniti ad, voluptatum nostrum eligendi incidunt error? Ad perferendis vitae, voluptate maiores eius quod debitis nam aperiam nihil hic officiis reiciendis est saepe quisquam sapiente repellendus quis cupiditate voluptatum. Eaque ratione quibusdam aut nostrum eligendi, facilis quis fugit voluptatem totam beatae!
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Experience</h2>
            
          </section>
        </div>
      </main>
    );
}

export default AboutMe;
