import App from '@/components/band/App';
import Hero from '@/components/hero/Hero';
import NavBar from '@/components/navbar/NavBar';

export default function Home() {
  return (
    <div className="h-[300rem] w-auto text-white">
      <Hero />
      <App />
    </div>
  );
}
