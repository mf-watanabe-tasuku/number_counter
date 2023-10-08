import { useState, useCallback, memo } from 'react';
import './App.css';
import NumList from './components/NumList';
import Stopwatch from './components/Stopwatch';
import ResetButton from './components/ResetButton';

const App = memo(() => {
  const makeShuffledNumObjects = () => {
    const nums = [...Array(9).keys()].map(num => num + 1);
    const shuffledNums = [...nums.sort(() => Math.random() - 0.5)];
    const shuffledNumObjects = shuffledNums.map(num => ({ num, clicked: false }));
    return shuffledNumObjects;
  };

  const [targetNum, setTargetNum] = useState(1);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [numObjects, setNumObjects] = useState(makeShuffledNumObjects());

  const handleNumClick = (e) => {
    const clickedNum = parseInt(e.target.textContent);
    if (clickedNum !== targetNum) return;

    if (clickedNum === 1) setIsTimerStarted(true);

    const newNumObjects = numObjects.map(numObject => {
      const {num, clicked} = numObject;
      if (clickedNum === num) {
        return { ...numObject, clicked: !clicked };
      } else {
        return { ...numObject };
      }
    });

    setTargetNum(targetNum => targetNum + 1);
    setNumObjects(newNumObjects);

    if (clickedNum === 9) {
      console.log('success!');
    }
  };

  const handleResetClick = useCallback(() => {
    setTargetNum(1);
    setIsTimerStarted(false);
    setNumObjects(makeShuffledNumObjects());
  }, []);

  return (
    <div className="wrapper">
      <NumList numObjects={numObjects} numClick={handleNumClick} />
      <Stopwatch isTimerStarted={isTimerStarted} targetNum={targetNum} />
      <ResetButton resetClick={handleResetClick} isTimerStarted={isTimerStarted} />
    </div>
  );
});

export default App;
