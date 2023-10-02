import { useState, useEffect } from 'react';
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

  console.log('App rendered');

  const numClick = (e) => {
    const clickedNum = parseInt(e.target.textContent);
    if (clickedNum !== count) return;

    const newNumData = numDataState.map(numData => {
      const { num, clicked } = numData;
      if (clickedNum === num) {
        return { num, clicked: !clicked };
      }
      return { num, clicked };
    });

    setCount(count => ++count);
    setNumDataState(newNumData);

    if (clickedNum === 9) console.log('success!');
  };

  const reset = () => {
    setCount(1);
    setNumDataState(makeShuffledNums());
  }

  return (
    <div className="wrapper">
      <ul className="num-list">
        {numDataState.map(numData => {
          return <NumItem key={numData.num} numData={numData} numClick={numClick} />
        })}
      </ul>
      <button className="reset" onClick={reset}>リセット</button>
    </div>
  );
};

export default App;
