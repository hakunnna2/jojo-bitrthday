
import React, { useState } from 'react';

// SETTINGS: Change this to your special date
const CORRECT_DATE = "2004-02-05"; // Format: YYYY-MM-DD

interface DateGateProps {
  onUnlock: () => void;
}

const DateGate: React.FC<DateGateProps> = ({ onUnlock }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleUnlock = () => {
    if (selectedDate === CORRECT_DATE) {
      setIsFading(true);
      setTimeout(() => {
        onUnlock();
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 bg-gradient-to-br from-pink-900 via-rose-950 to-black p-4 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center p-6 sm:p-10 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-sm sm:max-w-md w-full animate-in fade-in zoom-in duration-700">
        <h1 className="text-2xl sm:text-4xl font-serif mb-2 text-rose-200">Hello, My little JoJo 💖</h1>
        <p className="text-sm sm:text-base text-rose-300/80 mb-8 italic">Enter the most special date to unlock your surprise...</p>
        
        <div className="space-y-6">
          <div className="relative group">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl py-4 px-4 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all appearance-none text-center text-lg sm:text-xl"
            />
          </div>
          
          <button
            onClick={handleUnlock}
            className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-rose-900/40 text-lg"
          >
            Unlock 💝
          </button>
        </div>

        {error && (
          <p className="mt-6 text-rose-400 font-medium animate-pulse text-sm sm:text-base">
            Hmm… that’s not the date my heart remembers 🥺
          </p>
        )}
      </div>
    </div>
  );
};

export default DateGate;
