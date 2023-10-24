import { useRecoilValue } from "recoil";
import AddModal from "./components/addModal";
import { addModalAtom } from "../atoms/ui.atom";
import styled from "styled-components";
import { flexAlign } from "../styles/common.style";
import { useQueryClient } from "@tanstack/react-query";
import useAddTodo from "../hooks/use-addTodo";
import uesGetTodo from "../hooks/use-getTodo";

const MainPage = () => {
  const queryClient = useQueryClient();

  const { data, refetch } = uesGetTodo();
  console.log(data);

  const { mutate: addTodoMutate } = useAddTodo();

  const onSumitAddTodo = (e) => {
    e.preventDefault();
    const { title, content } = e.target;
    console.log({ title: title.value, content: content.value });
    addTodoMutate({ title: title.value, content: content.value });

    queryClient.invalidateQueries("GET_TODO");
  };

  const onSetQuery = () => {
    queryClient.setQueryData(["GET_TODO"], (prev) => {
      console.log(prev);
      return { ...prev, data: ["ww"] };
    });
    refetch();
  };

  const isShowModal = useRecoilValue(addModalAtom);
  return (
    <Wrap>
      {isShowModal && <AddModal />}
      <button onClick={onSetQuery}>셋쿠리데이터</button>
      <form onSubmit={onSumitAddTodo}>
        <input name="title"></input>
        <textarea name="content"></textarea>
        <button>add</button>
      </form>
    </Wrap>
  );
};

export default MainPage;

const Wrap = styled.div`
  ${flexAlign}
`;
