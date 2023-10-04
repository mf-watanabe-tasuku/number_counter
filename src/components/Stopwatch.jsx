
import { useState, useEffect } from 'react';

const Stopwatch = ({ isRunning, count }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (count === 1) setTime(0);

    let intervalId;
    if(isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [time, isRunning, count]);

  const minutes = String(Math.floor((time % 36000) / 6000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, '0');
  const milliSeconds = String(time % 100).padStart(2, '0');

  return <div>{minutes}:{seconds}:{milliSeconds}</div>;
}

export default Stopwatch;
