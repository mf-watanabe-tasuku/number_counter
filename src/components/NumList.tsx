import { FC } from "react";
import { nanoid } from 'nanoid';

type Props = {
  numObjects: {
    num: number,
    clicked: boolean
  }[],
  numClick: (e: React.MouseEvent<HTMLElement>) => void
}

const NumList: FC<Props> = props => {
  const { numObjects, numClick } = props;

  console.log('NumList rendered');

  return (
    <ul className="num-list">
      {numObjects.map(({ num, clicked }) => {
        return <li key={nanoid()} className={`num-item${clicked ? " clicked" : ""}`} onClick={numClick}>{num}</li>
      })}
    </ul>
  );
};

export default NumList;
