const NumList = ({numObjects, numClick}) => {
    console.log('NumList rendered');
    return (
      <ul className="num-list">
        {numObjects.map(({num, clicked}) => {
          return <li key={num} className={`num-item ${clicked && "clicked"}`} onClick={numClick}>{num}</li>
        })}
      </ul>
    );
};

export default NumList;
