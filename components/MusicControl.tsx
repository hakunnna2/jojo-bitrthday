
import React, { useEffect, useRef } from 'react';

const MusicControl: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const songUrl = new URL('../music/happy-birthday.mp3', import.meta.url).href;

  useEffect(() => {
    // Attempt to play music immediately. 
    // Since the user clicked "Unlock", the browser should allow this.
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(error => {
        console.warn("Audio play failed. Ensure the file 'music/happy-birthday.mp3' exists in your directory.", error);
      });
    }
  }, []);

  const handleSongEnd = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <audio
      ref={audioRef}
      onEnded={handleSongEnd}
      /* 
        PATH OF THE SONG:
        Bundled from /music/happy-birthday.mp3 so it works after deploy.
      */
      src={songUrl}
      className="hidden"
    />
  );
};

export default MusicControl;
