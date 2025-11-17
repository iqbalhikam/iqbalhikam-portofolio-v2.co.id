'use client';
import SpotifyMusicPlayList from '@/components/spotify/SpotifyMusicPlayList';
import { useShowSection } from '@/hooks/useShowSection';
import { motion } from 'framer-motion';

const MyPlayList = () => {
  const { isVisible, sectionRef } = useShowSection(100);
  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center content-center  w-full  ">
      <h1 className="text-2xl lg:text-3xl font-bold pb-10 pt-30">My PlayList</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 z-50 w-full justify-center px-10 lg:px-20">
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          animate={{ scale: isVisible ? 1 : 0, transition: { delay: 0.1, duration: 0.3, ease: 'easeInOut' } }}
          className="w-full h-96 sm:h-20 md:h-20 lg:h-20 m-auto rounded-[12px]  hover:shadow-[8px_7px_5px_3px] shadow-red-500/60 dark:shadow-red-500/20 transition-all ease-in-out duration-300">
          <SpotifyMusicPlayList playlistLink="https://open.spotify.com/playlist/7Ls5JdpWqrFIE02Gn75lfy?si=FVSxWimYTQ2baWfrH_cnCg" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          animate={{ scale: isVisible ? 1 : 0, transition: { delay: 0.4, duration: 0.3, ease: 'easeInOut' } }}
          className="w-full h-96 sm:h-20 md:h-20 lg:h-20 rounded-[12px]  hover:shadow-[8px_7px_5px_3px] shadow-blue-500/60 dark:shadow-blue-500/20 m-auto transition-all ease-in-out duration-300">
          <SpotifyMusicPlayList playlistLink="https://open.spotify.com/playlist/3bw2CCnTjM9LLNwxRFnxok?si=RZywpZ1_TuS25C7E0OvM-w&nd=1&dlsi=a8943db9a23a44ff" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          animate={{ scale: isVisible ? 1 : 0, transition: { delay: 0.7, duration: 0.3, ease: 'easeInOut' } }}
          className="w-full h-96 sm:h-20 md:h-20 lg:h-20 col-auto md:col-span-2 xl:col-span-1 rounded-[12px]  hover:shadow-[8px_7px_5px_3px] shadow-pink-500/60 dark:shadow-pink-500/20 m-auto transition-all ease-in-out duration-300">
          <SpotifyMusicPlayList playlistLink="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3VRFQZ?si=5W9iFPKFQyWqJrLmIv_4nwhttps%3A%2F%2Fopen.spotify.com%2Fplaylist%2F37i9dQZF1DZ06evO3VRFQZ%3Fsi%3D5W9iFPKFQyWqJrLmIv_4nw&nd=1&dlsi=9b9a768089f14679" />
        </motion.div>
      </div>
    </div>
  );
};

export default MyPlayList;
