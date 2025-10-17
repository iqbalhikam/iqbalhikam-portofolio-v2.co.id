/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutMe = () => {
    return (
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="flex-shrink-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-40 md:size-48 border-4 border-primary/20"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtU5wCGh-RTt8ZzHcRt4rLP_1_cpPgvzS9VOhsTa0nfTeWrF6Nvlcv0MlgBW9b9y3Et1EHdKcj4qBMAHnG5EF3ej77r46AcHuhMfYtY7k0iYOb0LEhDBXI__nbCkHKzEKGmbS1vS23uMEG9eyBi9ruijLfmaqpvYRtJ8Jdid3qasM_uNM5aqssZQ_ntpVZuUxl0HxS2fXgnFlWCOor0WwoGD-VRzUNCFwlJGWveiX8CT2Dmmz2HMdXIT20Yzbxx7ex4Cb93XmYPQ");'}}></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Sophia Carter</h1>
              <p className="text-lg text-primary font-medium mt-2">Product Designer</p>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-1">Based in San Francisco, CA</p>
            </div>
          </section>
          <section className="mb-16">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
              I'm a product designer with a passion for creating intuitive and engaging user experiences. With over 5 years of experience in the tech industry, I've had the opportunity to work on a variety of projects, from mobile apps to
              web platforms. My design philosophy centers around user-centricity, ensuring that every design decision is informed by user needs and feedback. I believe in the power of collaboration and enjoy working closely with
              cross-functional teams to bring ideas to life. Outside of design, I'm an avid photographer and enjoy exploring new cultures through travel.
            </p>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-base font-medium text-gray-800 dark:text-gray-200">UI/UX Design</p>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">90%</p>
                </div>
                <div className="w-full bg-primary/20 dark:bg-primary/20 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{width: "90%"}}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-base font-medium text-gray-800 dark:text-gray-200">Interaction Design</p>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">85%</p>
                </div>
                <div className="w-full bg-primary/20 dark:bg-primary/20 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{width: "85%"}}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-base font-medium text-gray-800 dark:text-gray-200">User Research</p>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">80%</p>
                </div>
                <div className="w-full bg-primary/20 dark:bg-primary/20 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-base font-medium text-gray-800 dark:text-gray-200">Prototyping</p>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">75%</p>
                </div>
                <div className="w-full bg-primary/20 dark:bg-primary/20 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{width: "75%"}}></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">Experience</h2>
            <div className="relative border-l-2 border-primary/30 pl-8">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full -left-4 ring-8 ring-background-light dark:ring-background-dark">
                  <span className="material-symbols-outlined text-primary">work</span>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Product Designer at Tech Innovators Inc.</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">2020 - Present</p>
              </div>
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full -left-4 ring-8 ring-background-light dark:ring-background-dark">
                  <span className="material-symbols-outlined text-primary">work</span>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Designer at Creative Solutions Co.</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">2018 - 2020</p>
              </div>
              <div className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full -left-4 ring-8 ring-background-light dark:ring-background-dark">
                  <span className="material-symbols-outlined text-primary">work</span>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Junior Designer at Design Studio X</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">2016 - 2018</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
}

export default AboutMe;
