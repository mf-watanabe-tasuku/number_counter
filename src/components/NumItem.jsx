import { memo } from 'react';

const NumItem = (props) => {
  const { num, clicked, numClick } = props;
  console.log('NumItem rendered');
  return (
    <li className={`num-item ${clicked(num)}`} onClick={numClick}>{num}</li>
  );
};

export default NumItem;
