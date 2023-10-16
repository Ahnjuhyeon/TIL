import { axiosInstance } from "./core";

export const GetSearch = async (content) => {
  const response = await axiosInstance.get(`?key=${content}`); //이제 이렇게 주소가 넘어간다
  return response.data;
};
