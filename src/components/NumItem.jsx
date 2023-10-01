const NumItem = (props) => {
  const { num, numClick } = props;

  return (
    <li className={`num-item`} onClick={numClick}>{num}</li>
  );
};

export default NumItem;
