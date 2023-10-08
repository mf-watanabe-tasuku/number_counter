const ResetButton = ({resetClick, targetNum}) => {
  return <button className="reset" onClick={resetClick} disabled={targetNum === 1}>リセット</button>;
}

export default ResetButton;
