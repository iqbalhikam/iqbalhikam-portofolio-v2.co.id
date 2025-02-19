import NavBar from '@/components/navbar/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '3D ID CARD || Iqbal.Hikm',
  description: 'latihan 3D card',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
