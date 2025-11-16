'use client';
import { Spotify } from 'react-spotify-embed';
type SpotifyProps = {
  playlistLink: string;
};
const SpotifyMusicPlayList = ({ playlistLink }: SpotifyProps) => {
  return (
    <Spotify
      style={{ borderRadius: '12px', width: '100%' }}
      link={playlistLink}
      width={'100%'} // Anda bisa atur lebar
      height={80}
      autoPlay={true}
    />
  );
};

export default SpotifyMusicPlayList;
