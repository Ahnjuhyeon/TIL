import axios from "axios";

export const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  //   auth: import.meta.env.VITE_API_URL,
  baseURL: import.meta.env.VITE_API_URL,
});
