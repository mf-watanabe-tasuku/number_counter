const NumList = ({numObjects, numClick}) => (
    <ul className="num-list">
      {numObjects.map(numObject => {
        const {num, clicked} = numObject;
        return <li key={num} className={`num-item ${clicked ? "clicked" : ""}`} onClick={numClick}>{num}</li>
      })}
    </ul>
);

export default NumList;
