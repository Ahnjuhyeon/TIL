import useModal from "../hooks/useModal";
import ShowModal from "./showModal";

const Divide = () => {
  const { state: isOpenAddTodoModal, onShowModal, onHiddenModal } = useModal();
  return (
    <>
      {isOpenAddTodoModal && <ShowModal onClose={() => onHiddenModal(false)} />}
      <button onClick={() => onShowModal(true)}>클릭</button>
    </>
  );
};
export default Divide;
