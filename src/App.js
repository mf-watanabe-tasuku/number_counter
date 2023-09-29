import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const targetNums = [...Array(9).keys()].map(num => num + 1);

  const [clickedNums, setClickedNums] = useState([]);

  useEffect(() => {
    if (clickedNums.length === targetNums.length) {
      const matchedNums = clickedNums.filter((cnum, i) => cnum === targetNums[i]);

      if (matchedNums.length === targetNums.length) {
        console.log('success!');
      }

      setClickedNums([]);
    }
  }, [clickedNums]);

  const numClick = (e) => {
    console.log(e.target.textContent);
    setClickedNums([...clickedNums, parseInt(e.target.textContent)]);
  }

  return (
    <>
      <ul className='num-list'>
        {targetNums.map(num => {
          return <li key={num} className="num-item" onClick={numClick}>{num}</li>
        })}
      </ul>
    </>
  );
}

export default App;
