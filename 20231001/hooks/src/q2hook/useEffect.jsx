import { useEffect, useState } from "react";
import Modal from "./useEffectModal";

const Effect = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    // setIsOpenModal(true);
    setIsOpenModal((prev) => !prev);
    // console.log("Hi!");
  };

  useEffect(() => {
    if (isOpenModal) {
      // console.log("Hi!");
    } else {
      // console.log("Bye!");
    }

    // return () => {
    //   console.log("Bye!");
    // };
    // return () => {
    //   console.log("Bye!");
    // };
  }, [isOpenModal]); // 의존성 배열 없이 .. 라는데 ... ??? 이거 의존성이자너 ...

  return (
    <>
      <button onClick={onOpenModal}>{isOpenModal ? "CLOSE!" : "OPEN"}</button>
      {isOpenModal && <Modal />}
    </>
  );
};
export default Effect;
/*

const [isOpenModal, setIsOpenModal] = useState(false)
const onOpenModal = () => {
setIsOpenModal(true)
setIsOpenModal(prev => !prev)
}

2-1) 특정 모달(컴포넌트)이 생성되었을 때 console
2-2) 특정 모달이 꺼졌을 때 console —> 의존성 배열에 값이 있으면 안됨 (컴포넌트 시작, 끝)
*/
