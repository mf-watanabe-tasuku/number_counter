import { useState, useCallback, memo, FC } from 'react';
import './App.css';
import NumList from './components/NumList';
import Stopwatch from './components/Stopwatch';
import ResetButton from './components/ResetButton';

interface NumObjects {
  num: number,
  clicked: boolean
}

const App: FC = memo(() => {
  const makeShuffledNumObjects = () => {
    const nums = [...Array(9).keys()].map(num => num + 1);
    const shuffledNums = [...nums.sort(() => Math.random() - 0.5)];
    const shuffledNumObjects = shuffledNums.map(num => ({ num, clicked: false }));
    return shuffledNumObjects;
  };

  const [targetNum, setTargetNum] = useState<number>(1);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [numObjects, setNumObjects] = useState<NumObjects[]>(makeShuffledNumObjects());

  const handleNumClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const clickedNum = parseInt(target.textContent!);
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
      <ResetButton resetClick={handleResetClick} targetNum={targetNum} />
    </div>
  );
});

export default App;
