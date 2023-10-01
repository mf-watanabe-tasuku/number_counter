import { useState, useEffect, memo, useCallback } from 'react';
import './App.css';
import NumItem from './components/NumItem';

const App = () => {
  const nums = [...Array(9).keys()].map(num => num + 1);
  const shuffleArray = array => [...array.sort(() => Math.random() - 0.5)];

  const [shuffledNums, setShuffledNums] = useState(shuffleArray(nums));

  let clickedNums = [];

  console.log('App rendered');

  const numClick = (e) => {
    console.log(e.target.textContent);
    clickedNums = [...clickedNums, parseInt(e.target.textContent)];

    if (clickedNums.length === nums.length) {
      const matchedNums = clickedNums.filter((cnum, i) => cnum === shuffledNums[i]);

      if (matchedNums.length === nums.length) {
        console.log('success!');
      } else {
        console.log('failed...');
      }
    }
  };

  const clicked = (num) => {
    return clickedNums.includes(num) ? 'clicked' : '';
  };

  const reset = () => setShuffledNums(shuffleArray(nums));

  return (
    <div className="wrapper">
      <ul className="num-list">
        {shuffledNums.map(num => <NumItem key={num} num={num} clicked={clicked} numClick={numClick} />)}
      </ul>
      <button className="reset" onClick={reset}>リセット</button>
    </div>
  );
};

export default App;
