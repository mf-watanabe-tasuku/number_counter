import { memo } from 'react';

const ResetButton = memo(({resetClick, isTimerStarted}) => {
  console.log('ResetButton rendered');
  return <button className="reset" onClick={resetClick} disabled={!isTimerStarted}>リセット</button>;
});

export default ResetButton;
