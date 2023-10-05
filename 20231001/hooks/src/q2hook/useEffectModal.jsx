import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    console.log("열렸따!");
    return () => {
      console.log("닫는다!");
    };
  }, []);
  return (
    <>
      <p>참깨!</p>
    </>
  );
};
export default Modal;
