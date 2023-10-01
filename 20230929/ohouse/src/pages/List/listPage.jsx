import { useRef, useState } from "react";
import { styled } from "styled-components";

const ListPage = ({ mock, MOCKLIST }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isState, setIsState] = useState(false);
  const mocklistRef = useRef(null);
  const onClickEdit = () => {
    setIsState((prev) => !prev);
    if (!isEditMode) return setIsEditMode(true);
    if (isState) {
      const _MOCKLIST = [...MOCKLIST];
      const updateList = _MOCKLIST.find((el) => el.title === mock.title);
      updateList.content = mocklistRef.current.value;
      setIsEditMode(false);
    }
  };
  return (
    <>
      <div>{mock.title}</div>

      <div>
        {isEditMode ? (
          <textarea defaultValue={mock.content} ref={mocklistRef}></textarea>
        ) : (
          mock.content
        )}
      </div>
      <button onClick={onClickEdit}>{isState ? "완료" : "수정"}</button>
    </>
  );
};

export default ListPage;
