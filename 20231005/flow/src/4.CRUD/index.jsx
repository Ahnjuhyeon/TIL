/*
**4.  나는 CRUD를 활용한 상태 변경과 UI 변경 시점에 따른 리랜더링을 자유롭게 다룰 수 있다.**

(1) 아래 데이터를 주제로 CRUD를 진행해보세요
        
        const posts = [
            {
                id: 1,
                title: "",
                content: "",
            },
            {},
            {}
        ]
*/

import { useState } from "react";
import OnePost from "./onePost";

const Crud = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1",
      content: "content1",
    },
    {
      id: 2,
      title: "2",
      content: "content2",
    },
    {
      id: 3,
      title: "3",
      content: "content3",
    },
  ]);

  const onSubmitAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    console.log(content);

    const newPosts = [
      {
        id: Math.floor(Math.random() * 10000),
        title: title,
        content: content,
      },
    ];
    setPosts([...posts, ...newPosts]);
  };
  return (
    <>
      <form onSubmit={onSubmitAdd}>
        <p>CRUD</p>
        {/* <input name="title" /> */}
        <input name="content" />
        <button>추가</button>
      </form>
      {posts.map((post) => (
        <OnePost key={post.id} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </>
  );
};
export default Crud;
