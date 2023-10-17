import { useState, FC } from 'react';
import './App.css';
import NumList from './components/NumList';
import Stopwatch from './components/Stopwatch';
import ResetButton from './components/ResetButton';

interface NumObjects {
  num: number,
  clicked: boolean
}

const App: FC = () => {
  const makeShuffledNumObjects = () => {
    const nums = [...Array(9).keys()].map(num => num + 1);
    const shuffledNums = [...nums.sort(() => Math.random() - 0.5)];
    const shuffledNumObjects = shuffledNums.map(num => ({ num, clicked: false }));
    return shuffledNumObjects;
  };

  const [targetNum, setTargetNum] = useState<number>(1);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [numObjects, setNumObjects] = useState<NumObjects[]>(makeShuffledNumObjects());

  const handleNumClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const clickedNum = parseInt(target.textContent!);

    // クリックした数字がtargetNumでない場合は、何も起こらない
    if (clickedNum !== targetNum) return;

    // targetNumが1(スタート状態)で1をクリックした時、タイマーがスタートする
    if (clickedNum === 1) setIsTimerRunning(true);

    // クリックした数字が9の時、タイマーを停止する
    if (clickedNum === 9) {
      console.log('success!');
      setIsTimerRunning(false);
    }

    // 次のクリック目標となる数字をtargetNumにセットする
    setTargetNum(targetNum => targetNum + 1);

    // 各数字のクリック状態(boolean)がオブジェクトに格納されているので、ループ処理で更新をかける
    const newNumObjects = numObjects.map(numObject => {
      const {num, clicked} = numObject;
      if (clickedNum === num) {
        return { ...numObject, clicked: !clicked };
      } else {
        return numObject;
      }
    });
    setNumObjects(newNumObjects);
  };

  const handleResetClick = () => {
    setTargetNum(1);
    setIsTimerRunning(false);
    setNumObjects(makeShuffledNumObjects());
  };

  return (
    <div className="wrapper">
      <NumList numObjects={numObjects} numClick={handleNumClick} />
      <Stopwatch isTimerRunning={isTimerRunning} targetNum={targetNum} />
      <ResetButton resetClick={handleResetClick} targetNum={targetNum} />
    </div>
  );
};

export default App;
