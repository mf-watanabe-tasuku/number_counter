const ResetButton = ({resetClick, count}) => {
  return <button className="reset" onClick={resetClick} disabled={count === 1}>リセット</button>;
}

export default ResetButton;
