import { useEffect, useState } from "react";
import Q3components from "../1-1.basic/q3components";

function Q3() {
  /* 
    문제3
    useEffect useState에 관련한 문제입니다
    단체 줄넘기 대회에 출전하였습니다

    줄넘기 시작 버튼을 누르면 
    Q3components 컴포넌트가 보입니다.

    Q3components 내부에는

    해당 컴포넌트가 보이기 시작한 시점부터
    2초마다 줄넘기 횟수가 1회 씩 증가하는 비즈니스 로직이 존재합니다

    또한, 이러한 줄넘기 횟수 증가는 q3.js(index)에서도 확인할 수 있도록
    <p> 줄넘기 횟수 : 0 </p> 에 횟수로 표시됩니다

    줄넘기 중지 버튼을 누르면
    해당 컴포넌트는 보이지 않아야하며, 줄넘기 횟수도 더이상 증가해서는 안됩니다.
    또한, 줄넘기 횟수는 0으로 고정되어야합니다.
       countRef.current = setInterval(() => setCount((num) => num + 1), 1000);
  */
  const [count, setCount] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const onClickStart = () => {
    setIsJumping(true); // 시작 버튼을 누르면 줄넘기 시작
  };

  const onClickStop = () => {
    setIsJumping(false); // 중지 버튼을 누르면 줄넘기 중지
    setCount(0); // 줄넘기 횟수를 0으로 고정
  };

  useEffect(() => {
    let interval;

    if (isJumping) {
      interval = setInterval(() => {
        setCount((num) => num + 1);
      }, 2000);
      console.log("줄넘기 시작");
    } else {
      clearInterval(interval); // 중지 상태일 때 타이머 중지
      console.log("줄넘기 중지");
    }

    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
      console.log("end");
    };
  }, [isJumping]);

  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {count}</p>
        <Q3components />
        {isJumping ? (
          <p>
            <button onClick={onClickStop}>줄넘기 중지</button>
          </p>
        ) : (
          <p>
            <button onClick={onClickStart}>줄넘기 시작</button>
          </p>
        )}
      </div>
    </>
  );
}
export default Q3;
