'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Definisikan varian animasinya
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Mulai dari 20px di bawah
  },
  animate: {
    opacity: 1,
    y: 0, // Animasikan ke posisi 0
  },
  exit: {
    opacity: 0,
    y: -20, // Keluar dengan geser 20px ke atas
    transition: { duration: 0.3 }, // Transisi keluar lebih cepat
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  // Hook untuk mendapatkan path URL saat ini
  const pathname = usePathname();

  return (
    <AnimatePresence
      // mode="wait" SANGAT PENTING
      // Ini memastikan halaman lama selesai animasi 'exit'
      // SEBELUM halaman baru memulai animasi 'initial'
      mode="wait">
      <motion.div
        // 1. Kunci (key) adalah bagian terpenting!
        // AnimatePresence mendeteksi perubahan 'key' ini
        // untuk memicu animasi exit/enter.
        key={pathname}
        // 2. Terapkan varian animasi
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5, // Durasi animasi masuk
          ease: 'easeInOut',
        }}
        // Tambahkan style ini agar tidak "melompat" saat transisi
        style={{ position: 'relative', width: '100%' }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
