'use client';
import { useEffect, useState } from 'react';
import { useShadow } from '@/hooks/useShadow';
import { HomeFilled, InfoCircleFilled } from '@ant-design/icons';
import { IoIosContact } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const NavBar = () => {
  const { shadow, handleMouseMove, handleMouseLeave } = useShadow();
  const [isNear, setIsNear] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // 1. Tambahkan state untuk tracking mounting
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Tandai bahwa komponen sudah di-mount di sisi client
    setHasMounted(true);

    const mouseMoveHandler = (event: { clientY: number }) => {
      const distance = 100;
      // Gunakan nilai innerHeight yang valid setelah mounting
      const navY = window.innerHeight - 40;

      if (event.clientY > navY - distance) {
        setIsNear(true);
      } else {
        setIsNear(false);
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []); // Cukup satu useEffect dengan dependency kosong

  // Jika belum mounted, jangan render navbar sama sekali atau render placeholder
  // Ini memastikan server dan client render pertama kali sama persis.
  if (!hasMounted) {
    return null; // Atau return UI placeholder/skeleton yang tidak bergantung pada state client
  }

  return (
    <div>
      <header>
        <div className="relative flex md:hidden lg:hidden cl">
          <nav className=" text-white fixed z-50 left-4 top-6 flex items-center">
            <Button onClick={() => setShowNav(!showNav)} variant={'ghost'} className="hover:bg-transparent">
              <IoMenu />
            </Button>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: showNav ? 1 : 0 }} className={`text-sm  flex gap-5 ${showNav ? 'flex' : 'hidden'}`}>
              <motion.li initial={{ scale: 0 }} animate={{ scale: showNav ? 1 : 0 }}>
                <Link className="hover:text-primary" href="/">
                  Home
                </Link>
              </motion.li>
              <motion.li initial={{ scale: 0 }} animate={{ scale: showNav ? 1 : 0 }}>
                <Link className="hover:text-primary" href="/aboutMe">
                  About Me
                </Link>
              </motion.li>
              <motion.li initial={{ scale: 0 }} animate={{ scale: showNav ? 1 : 0 }}>
                <Link className="hover:text-primary" href="/contact">
                  Contact Me
                </Link>
              </motion.li>
            </motion.ul>
          </nav>
        </div>
        <div className="relative hidden md:flex lg:flex mx-auto  h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center">
            <nav
              aria-label="Global"
              className={`
                card-with-shadow
                z-50 fixed left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full 
                shadow-lg flex items-center gap-6 bg-black/20 backdrop-blur-md 
                 hover:border hover:border-primary/70 
                ${isNear ? 'bottom-20' : '-bottom-7'} 
              `} // 2. Logika ini sekarang aman
              onMouseMove={handleMouseMove} // Ini dari hook useShadow
              onMouseLeave={handleMouseLeave} // Ini dari hook useShadow
              style={{ boxShadow: shadow }}>
              {/* ... isi nav tetap sama ... */}
              <ul className="flex items-center gap-6 text-xl">
                <li>
                  <Link href="/" className={`block text-white transition hover:text-secondary/75`}>
                    <HomeFilled />
                  </Link>
                </li>
                <li>
                  <Link href="/aboutMe" className=" text-white transition hover:text-secondary/75">
                    <InfoCircleFilled />
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className={`block text-white transition hover:text-secondary/75`}>
                    <IoIosContact className="text-2xl" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
