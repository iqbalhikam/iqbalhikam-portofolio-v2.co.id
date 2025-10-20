'use client';

import {
  motion,
  useSpring, // Ganti useMotionValue dengan useSpring
  useTransform,
} from 'framer-motion';

type ZoomImageProps = {
  imageUrl: string;
  zoomLevel?: number;
};

// Konfigurasi pegas (bisa Anda tweak)
const springConfig = {
  stiffness: 400, // Kekakuan
  damping: 25, // Redaman (semakin rendah, semakin "membal")
  mass: 1, // Massa
};

export const ZoomImage = ({ imageUrl, zoomLevel = 1.70 }: ZoomImageProps) => {
  // 1. Buat spring values untuk X dan Y (default di tengah 50%)
  const x = useSpring(50, springConfig);
  const y = useSpring(50, springConfig);

  // 2. Transformasi nilai spring (0-100) menjadi nilai 'translate'
  // 0% -> 30% (geser ke kanan)
  // 100% -> -30% (geser ke kiri)
  // Ini memberi ruang untuk "pan" saat gambar di-zoom
  const translateX = useTransform(x, [0, 100], ['30%', '-30%']);
  const translateY = useTransform(y, [0, 100], ['30%', '-30%']);

  // 3. Handler saat mouse bergerak
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Hitung posisi mouse 0-100%
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    // 4. Set target baru untuk spring
    // Spring akan secara otomatis menganimasikan ke nilai baru ini
    x.set(xPct);
    y.set(yPct);
  };

  // 5. Handler saat mouse keluar
  const handleMouseLeave = () => {
    // Set target spring kembali ke tengah (50)
    x.set(50);
    y.set(50);
  };

  return (
    // Ini adalah 'frame' pembungkus
    <motion.div className="w-full aspect-video rounded-xl overflow-hidden hover:shadow-[0px_0px_15px_2px] shadow-primary translition-all duration-300" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Ini adalah gambar di dalamnya */}
      <motion.div
        className="w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          // Terapkan transform dari spring
          translateX: translateX,
          translateY: translateY,
        }}
        // Animasikan 'scale' (zoom) saat di-hover
        whileHover={{
          scale: zoomLevel,
        }}
        // Transisi untuk 'scale' (zoom)
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 40,
        }}
      />
    </motion.div>
  );
};
