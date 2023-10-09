import { memo } from "react";

const NumItem = memo(({num, clicked, numClick}) => {
  console.log('NumItem rendered');
  return <li className={`num-item${clicked ? " clicked" : ""}`} onClick={numClick}>{num}</li>;
});

export default NumItem;
