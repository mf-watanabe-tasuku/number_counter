import { memo, FC } from 'react';

type Props = {
  resetClick: () => void,
  targetNum: number
}

const ResetButton: FC<Props> = memo(props => {
  const { resetClick, targetNum } = props;

  console.log('ResetButton rendered');

  return <button className="reset" onClick={resetClick} disabled={targetNum === 1}>リセット</button>;
});

export default ResetButton;
