
import React, { useState } from 'react';
import DateGate from './components/DateGate';
import SurprisePage from './components/SurprisePage';

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {!isUnlocked ? (
        <DateGate onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <SurprisePage />
      )}
    </div>
  );
};

export default App;
