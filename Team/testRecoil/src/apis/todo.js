import { InstanceAxios } from "./core";

const PATH = "/todo";

const ApiTodo = {
  async getTodo() {
    const res = await InstanceAxios.get(PATH);
    return res.data;
  },

  async addTodo({ title, content }) {
    const res = await InstanceAxios.post(PATH, { title, content });
    return res.data;
  },
};

export default ApiTodo;
