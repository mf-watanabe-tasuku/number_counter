import { useState } from 'react';
import './App.css';
import NumList from './components/NumList';
import Stopwatch from './components/Stopwatch';
import ResetButton from './components/ResetButton';

const App = () => {
  const makeShuffledNums = () => {
    const nums = [...Array(9).keys()].map(num => num + 1);
    const shuffledNums = [...nums.sort(() => Math.random() - 0.5)];
    return shuffledNums.map(num => ({ num, clicked: false }));
  };

  const [count, setCount] = useState(0);
  const [numObjects, setNumObjects] = useState(makeShuffledNums());
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const handleNumClick = (e) => {
    const clickedNum = parseInt(e.target.textContent);
    if (clickedNum !== count + 1) return;

    if (clickedNum === 1) setIsPlaying(true);

    const newNumObjects = numObjects.map(numObject => {
      const { num, clicked } = numObject;
      if (clickedNum === num) {
        return { ...numObject, clicked: !clicked };
      }
      return { ...numObject };
    });

    setCount(count => ++count);
    setNumObjects(newNumObjects);

    if (clickedNum === 9) {
      console.log('success!');
      setIsPlaying(false);
    }
  };

  const handleResetClick = () => {
    setTime(0);
    setCount(0);
    setIsPlaying(false);
    setNumObjects(makeShuffledNums());
  }

  return (
    <div className="wrapper">
      <NumList numObjects={numObjects} numClick={handleNumClick} />
      <Stopwatch isPlaying={isPlaying} count={count} timeState={[time, setTime]} />
      <ResetButton resetClick={handleResetClick} count={count} />
    </div>
  );
};

export default App;
