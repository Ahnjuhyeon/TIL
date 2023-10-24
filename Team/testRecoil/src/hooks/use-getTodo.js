import { useQuery } from "@tanstack/react-query";
import ApiTodo from "../apis/todo";

const uesGetTodo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: ["GET_TODO"],
    queryFn: ApiTodo.getTodo,
  });
};

export default uesGetTodo;
