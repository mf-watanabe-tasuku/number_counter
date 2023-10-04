const ResetButton = ({reset, count}) => {
  return <button className="reset" onClick={reset} disabled={count === 1}>リセット</button>;
}

export default ResetButton;
