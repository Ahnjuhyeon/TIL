// 타이머 만들기

import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const onClickStart = () => {
    // countRef.current =
  };
  return (
    <>
      <h1>TIMER</h1>
      <p>{count} 초</p>
      <button onClick={onClickStart}>start</button>
      {/* <button onClick={}>stop</button> */}
      <button>reset</button>
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
  };

  const resetHandler = () => {
    stopHandler();
    setCount(0);
  };
*/
