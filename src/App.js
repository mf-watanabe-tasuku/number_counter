import { useEffect, useState } from 'react';
import './App.css';
import NumItem from './components/ListItem';

const App = () => {
  const makeShuffledNums = () => {
    const nums = [...Array(9).keys()].map(num => num + 1);
    const shuffledNums = [...nums.sort(() => Math.random() - 0.5)];

    return shuffledNums.map(num => ({ num, clicked: false }))
  };

  const [count, setCount] = useState(1);
  const [numDataState, setNumDataState] = useState(makeShuffledNums());
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  console.log('App rendered');

  useEffect(() => {
    let intervalId;
    if(isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = String(Math.floor((time % 36000) / 6000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, '0');
  const milliSeconds = String(time % 100).padStart(2, '0');

  const numClick = (e) => {
    const clickedNum = parseInt(e.target.textContent);
    if (clickedNum !== count) return;

    if (clickedNum === 1) setIsRunning(true);

    const newNumData = numDataState.map(numData => {
      const { num, clicked } = numData;
      if (clickedNum === num) {
        return { num, clicked: !clicked };
      }
      return { num, clicked };
    });

    setCount(count => ++count);
    setNumDataState(newNumData);

    if (clickedNum === 9) {
      console.log('success!');
      setIsRunning(false);
    }
  };

  const reset = () => {
    setCount(1);
    setNumDataState(makeShuffledNums());
    setTime(0);
    setIsRunning(false);
  }

  return (
    <div className="wrapper">
      <ul className="num-list">
        {numDataState.map(numData => {
          return <NumItem key={numData.num} {...numData} numClick={numClick} />
        })}
      </ul>
      <div>{minutes}:{seconds}:{milliSeconds}</div>
      <button className="reset" onClick={reset}>リセット</button>
    </div>
  );
};

export default App;
