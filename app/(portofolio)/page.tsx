import PageTransition from '@/components/animation/PageTransition';
import Hero from './components/Hero';
import About from './components/About';

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
