import PageTransition from '@/components/animation/PageTransition';
import Hero from './components/Hero';
import Introduction from './components/Introduction';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative w-full min-h-screen">
        <>
          <Hero />
          <Introduction />
        </>
      </div>
    </PageTransition>
  );
}
