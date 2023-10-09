import { memo, FC } from 'react';

type Props = {
  resetClick: () => void,
  isTimerStarted: boolean
}

const ResetButton: FC<Props> = memo(props => {
  const { resetClick, isTimerStarted } = props;

  console.log('ResetButton rendered');

  return <button className="reset" onClick={resetClick} disabled={!isTimerStarted}>リセット</button>;
});

export default ResetButton;
