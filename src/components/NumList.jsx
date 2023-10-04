const NumList = ({numDataState, numClick}) => (
    <ul className="num-list">
      {numDataState.map(numData => {
        const {num, clicked} = numData;
        return <li key={num} className={`num-item ${clicked ? "clicked" : ""}`} onClick={numClick}>{num}</li>
      })}
    </ul>
);

export default NumList;
