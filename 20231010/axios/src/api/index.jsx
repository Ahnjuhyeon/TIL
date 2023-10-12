/*
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
깃허브 토큰

const post1 = await axios.get("https://jsonplaceholder.com/posts", {
  params: {
    per_page: 100,
  },
});
// https://jsonplaceholder.com/posts?per_page=100 (query parameters)
// 기능은 같지만, 매번 사용할 때마다 모든 코드를 다시 쳐줘야한다.


// 모듈화
// post.js
export const getAllPosts = async (per_page) => {
  return axiosInstance.get("https://jsonplaceholder.com/posts", {
    params: {
      per_page,
    },
  });
};
export const axiosInstance = axios.createInstance({
    baseURL: "123",
    params: {},
    header: {},
  });


  //내가 했다가 지운거
  
  import axios from "axios";

export const axiosInstance = axios.createInstance({
  baseURL: "https://jsonplaceholder.typicode.com/posts/1"
    .then((response) => response.json())
    .then((json) => console.log(json)),
});
// const axios = require("axios");
*/

import { Octokit } from "@octokit/core";
// import axios from "axios";
export const octokit = new Octokit({
  // eslint-disable-next-line no-undef
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});
// export const axiosInstance = axios.create({
//   // eslint-disable-next-line no-undef
//   auth: process.env.GITHUB_TOKEN,
// });
