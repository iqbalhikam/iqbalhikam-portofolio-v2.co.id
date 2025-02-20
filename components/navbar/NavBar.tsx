'use client'
import { useEffect, useState } from 'react';
import { useShadow } from '@/hooks/useShadow';
import { HomeFilled, InfoCircleFilled } from '@ant-design/icons';

const NavBar = () => {
  const { shadow, handleMouseMove, handleMouseLeave } = useShadow();
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: { clientY: number }) => {
      const distance = 100; // Jarak deteksi (misalnya 100px dari navbar)
      const navY = window.innerHeight - 40; // Posisi navbar di bawah (bottom-10 ≈ -40px dari bottom)

      if (event.clientY > navY - distance) {
        setIsNear(true);
      } else {
        setIsNear(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div>
      <header>
        <div className="relative mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center">
            <nav
              aria-label="Global"
              className={` z-50 fixed left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg flex items-center gap-6 bg-black/20 backdrop-blur-md transition-all duration-300 hover:border hover:border-green-600/70 ${
                isNear ? 'bottom-20' : '-bottom-7'
              }`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ boxShadow: shadow }}>
              <ul className="flex items-center gap-6 text-xl">
                <li>
                  <a href="#hero" className={`block text-white transition hover:text-green-600/75`}>
                    <HomeFilled />
                  </a>
                </li>
                <li>
                  <a href="#about" className=" text-white transition hover:text-green-600/75">
                    <InfoCircleFilled />
                  </a>
                </li>

                <li>
                  <div className={`block text-white transition hover:text-green-600/75`}>
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
