import { useSetRecoilState } from "recoil";
import { addModalAtom } from "../../atoms/ui.atom";
import styled from "styled-components";
import { flexAlign } from "../../styles/common.style";

const AddModal = () => {
  const setIsShowModal = useSetRecoilState(addModalAtom);

  const onClickBtn = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <Wrap>
      <button onClick={onClickBtn}>사라져 볼게!!</button>
    </Wrap>
  );
};

export default AddModal;

const Wrap = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
  ${flexAlign}
`;
