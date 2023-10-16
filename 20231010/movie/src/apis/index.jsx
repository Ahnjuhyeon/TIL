import axios from "axios";

export const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  //   auth: import.meta.env.VITE_API_URL,
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchMovies = async (endpoint) => {
  const response = await axiosInstance.get(endpoint, {
    params: {
      api_key: import.meta.env.VITE_API_API_KEY,
    },
  });
  return response;
};
