// 타이머 만들기

import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const onClickStart = () => {
    // setInterval(() => setCount(countRef.current++), 1000);
    countRef.current = setInterval(() => setCount((num) => num + 1), 1000);
  };

  const onClickStop = () => {
    clearInterval(countRef.current);
  };

  const onClickReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>TIMER</h1>
      <p>{count} 초</p>
      <button onClick={onClickStart}>start</button>
      <button onClick={onClickStop}>stop</button>
      <button onClick={onClickReset}>reset</button>
    </>
  );
};

export default Timer;
/*

  const startHandler = () => {
    countRef.current = setInterval(() => setCount((c) => c + 1), 100);
  };

  const stopHandler = () => {
    clearInterval(countRef.current);
    countRef.current = null;

    // 이걸 쓰지 않아도 되는데 .. 왜일까?
  };

  const resetHandler = () => {
    stopHandler();
    setCount(0);
  };
*/
