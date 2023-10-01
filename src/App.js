import { useState } from 'react';
import './App.css';
import NumItem from './components/NumItem';

const App = () => {
  console.log('App rendered');

  const nums = [...Array(9).keys()].map(num => num + 1);
  const shuffleArray = array => [...array.sort(() => Math.random() - 0.5)];
  let clickedNums = [];

  const [shuffledNums, setShuffledNums] = useState(shuffleArray(nums));

  const checkResult = () => {
    if (clickedNums.length === nums.length) {
      const matchedNums = clickedNums.filter((cnum, i) => cnum === shuffledNums[i]);

      if (matchedNums.length === nums.length) {
        console.log('success!');
      } else {
        console.log('failed...');
      }
    }
  }

  const numClick = (e) => {
    clickedNums = [...clickedNums, parseInt(e.target.textContent)];
    checkResult();
  };

  const reset = () => setShuffledNums(shuffleArray(nums));

  return (
    <div className="wrapper">
      <ul className="num-list">
        {shuffledNums.map(num => <NumItem key={num} num={num} numClick={numClick} />)}
      </ul>
      <button className="reset" onClick={reset}>リセット</button>
    </div>
  );
};

export default App;
