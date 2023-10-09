import { memo } from "react";
import { nanoid } from 'nanoid';
import NumItem from "./NumItem";

const NumList = memo(({numObjects, numClick}) => {
    console.log('NumList rendered');
    return (
      <ul className="num-list">
        {numObjects.map(({num, clicked}) => {
          return <NumItem key={nanoid()} num={num} clicked={clicked} numClick={numClick} />
        })}
      </ul>
    );
});

export default NumList;
