import About from '@/components/about/About';
import App from '@/components/band/App';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      
      <Hero />
      <About />
    </div>
  );
}
