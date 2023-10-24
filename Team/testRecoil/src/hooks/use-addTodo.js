import { useMutation } from "@tanstack/react-query";
import ApiTodo from "../apis/todo";

const useAddTodo = () => {
  return useMutation((todo) => ApiTodo.addTodo(todo), {
    onSuccess: () => {
      alert("할 일이 등록되었습니다.");
    },
  });
};
export default useAddTodo;
