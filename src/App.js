import { useState, useEffect } from 'react';
import './App.css';
import NumList from './components/NumList';
import Stopwatch from './components/Stopwatch';
import ResetButton from './components/ResetButton';

const App = () => {
  const [count, setCount] = useState(1);
  const [numDataState, setNumDataState] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setNumDataState(makeShuffledNums());
  }, []);

  const makeShuffledNums = () => {
    const nums = [...Array(9).keys()].map(num => num + 1);
    const shuffledNums = [...nums.sort(() => Math.random() - 0.5)];
    return shuffledNums.map(num => ({ num, clicked: false }));
  };

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
    setIsRunning(false);
  }

  return (
    <div className="wrapper">
      <NumList numDataState={numDataState} numClick={numClick} />
      <Stopwatch isRunning={isRunning} count={count} />
      <ResetButton reset={reset} count={count} />
    </div>
  );
};

export default App;
