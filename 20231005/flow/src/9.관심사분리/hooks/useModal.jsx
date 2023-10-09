import { useState } from "react";

const useModal = () => {
  const [state, setState] = useState();

  const onShowModal = () => {
    setState(true);
  };
  const onHiddenModal = () => {
    setState(false);
  };
  return { state, onShowModal, onHiddenModal };
};
export default useModal;
