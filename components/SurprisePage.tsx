
import React, { useEffect, useState } from 'react';
import Hearts from './Hearts';
import MusicControl from './MusicControl';

const SurprisePage: React.FC = () => {
  const [showFinale, setShowFinale] = useState(false);
  
  useEffect(() => {
    // Show final message after credits roughly finish scrolling (70s scroll + buffer)
    const timer = setTimeout(() => {
      setShowFinale(true);
    }, 69000);
    return () => clearTimeout(timer);
  }, []);

  const messages = [
  "Happy Birthday, my little JoJo! (2 ans 🎉)",
  "",
  "Today isn’t just your birthday…",
  "it’s the day the world got brighter.",
  "",
  "Every moment with you feels like a gift,",
  "a blessing I thank life for every day.",
  "",
  "With you, even silence feels warm.",
  "Even ordinary days feel special.",
  "",
  "Thank you for being my smile,",
  "my peace, and my safe place.",
  "",
  "You make my heart feel understood",
  "in ways words could never explain.",
  "",
  "Your laugh is my favorite song,",
  "and your eyes are my favorite view.",
  "",
  "I’m so grateful to have you in my life,",
  "so grateful to walk this journey with you.",
  "",
  "You inspire me to be better,",
  "to love deeper,",
  "to dream bigger.",
  "",
  "Every heartbeat of mine",
  "belongs to you.",
  "",
  "In your presence, I feel home.",
  "In your love, I feel complete.",
  "",
  "This is just a small reminder",
  "of how much you truly mean to me, JoJo.",
  "",
  "I hope today brings you",
  "the same joy you bring into my life.",
  "",
  "May your smile never fade,",
  "and your heart always feel loved.",
  "",
  "No matter where life takes us,",
  "know that I’m always here for you.",
  "",
  "Today, tomorrow, and always.",
  "",
  "Happy Birthday!",
  "",
  "Forever yours,",
  "with all my heart "
];


  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-romantic select-none">
      {/* Background Ambience */}
      <Hearts />
      <MusicControl />

      {/* Floating Note Indicator */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 text-rose-300 opacity-60">
        <span className="text-xs sm:text-sm font-medium">🎵 Playing...</span>
      </div>

      {/* Cinematic Credits Container */}
      <div className="absolute inset-0 flex flex-col items-center pointer-events-none">
        <div className="animate-credits flex flex-col items-center gap-4 sm:gap-6 px-6 text-center w-full max-w-4xl">
          {messages.map((msg, i) => (
            <p 
              key={i} 
              className={`
                ${msg.length < 3 ? 'h-8 sm:h-12' : ''} 
                ${i === 0 || i === messages.length - 1 
                  ? 'text-4xl sm:text-6xl md:text-8xl font-cursive text-rose-200 drop-shadow-sm' 
                  : 'text-lg sm:text-2xl md:text-3xl font-serif text-rose-100/90'}
                leading-relaxed
              `}
            >
              {msg}
            </p>
          ))}
        </div>
      </div>

      {/* Finale Message with smooth multi-breakpoint scaling */}
      {showFinale && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none bg-black/60 backdrop-blur-[6px] z-40 transition-all duration-1000">
          <div className="text-center animate-finale px-4 w-full">
            <div className="text-6xl sm:text-8xl md:text-9xl animate-pulse mb-4 sm:mb-8 drop-shadow-glow">❤️</div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-cursive text-rose-200 mb-2 sm:mb-6 drop-shadow-lg text-huge">
              Happy Birthday JoJo
            </h2>
            <p className="text-rose-100/80 font-serif italic text-lg sm:text-2xl md:text-4xl">
              My whole heart, forever.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurprisePage;
