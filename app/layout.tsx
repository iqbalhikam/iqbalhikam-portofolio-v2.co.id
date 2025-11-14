import NavBar from '@/components/nav/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/theme/theme-provider';
import ThemeToggle from '@/components/theme/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Portofolio || Iqbal.Hikm',
  icons: {
    icon: [
      {
        url: 'https://avatars.githubusercontent.com/u/147716322?v=4',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="PZL4uGT9Q-1b9Z_esdgt72G0Z-I55Dl1bDofkuuYMSU" />
      <body className={`${inter.className} scrollbar-hide`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
        <SpeedInsights />
      </body>
      <NavBar />
    </html>
  );
}
