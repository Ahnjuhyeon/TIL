import axios from "axios";

// export const axiosInstance = axios.create({
//   // eslint-disable-next-line no-undef
//   //   auth: import.meta.env.VITE_API_URL,
//   baseURL: import.meta.env.VITE_API_URL,
// });

// export const fetchMovies = async (endpoint) => {
//   const response = await axiosInstance.get(endpoint, {
//     params: {
//       api_key: import.meta.env.VITE_API_API_KEY,
//     },
//   });
//   return response;
// };
/*

*/

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // api_key: "4a9b0c305a27b4c267d2350dd326d912",
});

export const fetchMovies = async () => {
  const response = await axiosInstance.get("/movie/popular", {
    params: {
      api_key: "4a9b0c305a27b4c267d2350dd326d912",
    },
  });
  return response.data;
};

export const fetchTopMovies = async () => {
  const response = await axiosInstance.get("/movie/top_rated", {
    params: {
      api_key: "4a9b0c305a27b4c267d2350dd326d912",
    },
  });
  return response.data;
};
