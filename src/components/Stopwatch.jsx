import { useEffect, useState } from 'react';

const Stopwatch = ({isTimerStarted, targetNum}) => {
  console.log('Stopwatch rendered');
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isTimerStarted)  {
      if (targetNum <= 9) {
        intervalId = setInterval(() => setTime(time + 1), 10);
      }
    } else {
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [time, isTimerStarted]);

  const minutes = String(Math.floor((time % 36000) / 6000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, '0');
  const milliSeconds = String(time % 100).padStart(2, '0');

  return <div className="stopwatch">{minutes}:{seconds}:{milliSeconds}</div>;
};

export default Stopwatch;
