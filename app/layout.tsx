import NavBar from '@/components/navbar/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: '3D ID CARD || Iqbal.Hikm',
  description: 'latihan 3D card',
  icons: {
    icon: [
      {
        url: '/assets/iqbal1.jpg',
        type: 'image/png',
      },
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
      <NavBar />
    </html>
  );
}
