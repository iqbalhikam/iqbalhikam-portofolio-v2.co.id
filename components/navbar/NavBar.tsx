'use client';
import { useEffect, useState } from 'react';
import { useShadow } from '@/hooks/useShadow';
import { HomeFilled, InfoCircleFilled } from '@ant-design/icons';
import Link from 'next/link';

const NavBar = () => {
  const { shadow, handleMouseMove, handleMouseLeave } = useShadow();
  const [isNear, setIsNear] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // 1. Tambahkan state untuk tracking mounting

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
        <div className="relative mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
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
                  <div className={`block text-white transition hover:text-secondary/75`}>
                    <HomeFilled />
                  </div>
                </li>

                <li>
                  <div className={`block text-white transition hover:text-secondary/75`}>
                    <HomeFilled />
                  </div>
                </li>

                <li>
                  <div className={`block text-white transition hover:text-secondary/75`}>
                    <HomeFilled />
                  </div>
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
