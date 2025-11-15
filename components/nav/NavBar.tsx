'use client';
import { useEffect, useState } from 'react';
import { useShadow } from '@/hooks/useShadow';
import { HomeFilled, InfoCircleFilled } from '@ant-design/icons';
import { IoIosContact } from 'react-icons/io';
import { CgClose } from 'react-icons/cg';
import { TiThMenu } from 'react-icons/ti';
import Link from 'next/link';
import { Button } from '../ui/button';
import { delay, motion } from 'framer-motion';

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

  const headleSetShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <header>
        <div className="relative flex md:hidden lg:hidden">
          <nav className=" text-white fixed z-50 left-4 top-6 flex items-center gap-2">
            <button onClick={headleSetShowNav} className="z-50 hover:bg-transparent ">
              <motion.span initial={{ scale: 0 }} animate={{ scale: showNav ? 1 : 0 }}>
                <TiThMenu className={`text-2xl ${showNav ? 'hidden' : 'flex'}`} />
                <CgClose className={`text-2xl ${showNav ? 'flex' : 'hidden'}`} />
              </motion.span>
            </button>
            <motion.ul
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: showNav ? 1 : -20, opacity: showNav ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`text-xs text-secondary-foreground  bg-accent-foreground/10 backdrop-blur-sm p-2 px-3 rounded-full flex gap-5 `}>
              <motion.li initial={{ scale: 0 }} transition={{ delay: showNav ? 0.5 : 0 }} animate={{ scale: showNav ? 1 : 0 }} exit={{ scale: 0 }}>
                <Link className="hover:text-primary" href="/">
                  Home
                </Link>
              </motion.li>
              <motion.li initial={{ scale: 0 }} transition={{ delay: showNav ? 0.7 : 0 }} animate={{ scale: showNav ? 1 : 0 }} exit={{ scale: 0 }}>
                <Link className="hover:text-primary" href="/aboutMe">
                  About
                </Link>
              </motion.li>
              <motion.li initial={{ scale: 0 }} transition={{ delay: showNav ? 0.9 : 0 }} animate={{ scale: showNav ? 1 : 0 }} exit={{ scale: 0 }}>
                <Link className="hover:text-primary" href="/contact">
                  Contact
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
                shadow-lg flex items-center gap-6 bg-black/20 backdrop-blur-xs 
                 hover:border hover:border-primary/70 
                ${isNear ? 'bottom-20' : '-bottom-7'} 
              `} // 2. Logika ini sekarang aman
              onMouseMove={handleMouseMove} // Ini dari hook useShadow
              onMouseLeave={handleMouseLeave} // Ini dari hook useShadow
              style={{ boxShadow: shadow }}>
              {/* ... isi nav tetap sama ... */}
              <ul className="flex items-center gap-6 text-xl">
                <li>
                  <Link href="/" className={`block text-white transition hover:text-primary`}>
                    <HomeFilled />
                  </Link>
                </li>
                <li>
                  <Link href="/aboutMe" className=" text-white transition hover:text-primary">
                    <InfoCircleFilled />
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className={`block text-white transition hover:text-primary`}>
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
