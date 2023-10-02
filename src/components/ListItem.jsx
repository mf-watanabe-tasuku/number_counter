const NumItem = ({ numData, numClick }) => {
  console.log('NumItem rendered');

  const { num, clicked } = numData;

  return <li className={`num-item ${clicked ? "clicked" : ""}`} onClick={numClick}>{num}</li>;
};

export default NumItem;
