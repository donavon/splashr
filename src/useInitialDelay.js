import { useState, useEffect } from 'react';

const useInitialDelay = (minDelay, extend = false) => {
  const [isTimerRunning, setTimerRunning] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setTimerRunning(false), minDelay);
    return () => clearTimeout(timer);
  }, [minDelay]);

  return isTimerRunning || extend;
};

export default useInitialDelay;
