import { memo } from "react";
import { nanoid } from 'nanoid';

const NumList = memo(({numObjects, numClick}) => {
    console.log('NumList rendered');
    return (
      <ul className="num-list">
        {numObjects.map(({num, clicked}) => {
          return <li key={nanoid()} className={`num-item${clicked ? " clicked" : ""}`} onClick={numClick}>{num}</li>
        })}
      </ul>
    );
});

export default NumList;
