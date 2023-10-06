import { useRef, useState } from "react";

const OnePost = ({ post, posts, setPosts }) => {
  //   console.log(posts);
  const [isEditMode, setIsEditMode] = useState(false);
  const postRef = useRef(null);

  const onClickFix = () => {
    if (!isEditMode) return setIsEditMode(true);
    const fixPost = posts.find((el) => el.id === post.id);
    fixPost.content = postRef.current.value;
    console.log(fixPost);
    setPosts(posts);
    setIsEditMode(false);
  };

  const onClickDel = () => {
    const delPost = posts.filter((el) => el.id !== post.id);
    console.log(delPost);
    setPosts(delPost);
  };
  return (
    <>
      {/* <span>{post.content}</span> */}
      <hr />
      {isEditMode ? (
        <textarea defaultValue={post.content} ref={postRef}></textarea>
      ) : (
        post.content
      )}
      <button onClick={onClickFix}>수정</button>
      <button onClick={onClickDel}>삭제</button>
    </>
  );
};
export default OnePost;
