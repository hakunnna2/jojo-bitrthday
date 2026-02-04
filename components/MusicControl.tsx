
import React, { useEffect, useRef } from 'react';

const MusicControl: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
         Currently set to 'music/happy-birthday.mp3' as per your requirements.
         Make sure the 'music' folder exists and contains 'happy-birthday.mp3'.
      */
      src="music/happy-birthday.mp3" 
      className="hidden"
    />
  );
};

export default MusicControl;
