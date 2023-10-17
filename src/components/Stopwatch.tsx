import { useEffect, useState, FC } from 'react';

type Props = {
  isTimerRunning: boolean,
  targetNum: number
}

const Stopwatch: FC<Props> = props => {
  const { isTimerRunning, targetNum } = props;

  console.log('Stopwatch rendered');

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (targetNum === 1) setTime(0);

    if (isTimerRunning)  {
      const intervalId = setInterval(() => setTime(time => time + 1), 10);
      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning, targetNum]);

  const minutes = String(Math.floor((time % 36000) / 6000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, '0');
  const milliSeconds = String(time % 100).padStart(2, '0');

  return <div className="stopwatch">{minutes}:{seconds}:{milliSeconds}</div>;
};

export default Stopwatch;
