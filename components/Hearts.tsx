
import React from 'react';

const Hearts: React.FC = () => {
  const heartCount = 20;
  const hearts = Array.from({ length: heartCount });

  return (
    <>
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const size = 15 + Math.random() * 25;
        const delay = Math.random() * 8;
        const duration = 6 + Math.random() * 10;

        return (
          <div
            key={i}
            className="heart-particle"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            ❤️
          </div>
        );
      })}
    </>
  );
};

export default Hearts;
