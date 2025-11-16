import About from '@/app/(home)/components/About';
import Hero from '@/app/(home)/components/Hero';
import PageTransition from '@/components/animation/PageTransition';
import Projects from './components/Projects';
import MyPlayList from './components/MyPlayList';
import GitHubCalendar from 'react-github-calendar';
import MyActivity from './components/MyActivity';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-w-full min-h-screen overflow-auto scrollbar-hide bg-white dark:bg-background justify-center">
        <Hero />

        <section>
          <About />

          <MyActivity />

          <MyPlayList />

          <Projects id="projects" />
        </section>
      </div>
    </PageTransition>
  );
}
