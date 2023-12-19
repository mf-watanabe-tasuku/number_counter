import { FC } from 'react';

type Props = {
  resetClick: () => void,
  targetNum: number
}

const ResetButton: FC<Props> = props => {
  const { resetClick, targetNum } = props;

  return <button className="reset" onClick={resetClick} disabled={targetNum === 1}>リセット</button>;
};

export default ResetButton;
