import NavBar from '@/components/navbar/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Portofolio || Iqbal.Hikm',
  description: 'latihan 3D card',
  icons: {
    icon: [
      {
        url: 'https://avatars.githubusercontent.com/u/147716322?v=4',
        type: 'image/png',
      },
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="PZL4uGT9Q-1b9Z_esdgt72G0Z-I55Dl1bDofkuuYMSU" />
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
      <NavBar />
    </html>
  );
}
