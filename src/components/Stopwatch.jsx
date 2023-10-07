import { useEffect } from 'react';

const Stopwatch = ({ isPlaying, count, timeState }) => {
  const [time, setTime] = timeState;

  useEffect(() => {
    if (count === 0) {
      setTime(0);
      return;
    }

    let intervalId;
    if (isPlaying) {
      // count変更後から1秒後に実行されるので、1秒以内にクリックした場合、timeが増加しないことになる。
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(intervalId);
  }, [time, isPlaying]);

  const minutes = String(Math.floor((time % 36000) / 6000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, '0');
  const milliSeconds = String(time % 100).padStart(2, '0');

  return <div className="stopwatch">{minutes}:{seconds}:{milliSeconds}</div>;
}

export default Stopwatch;
