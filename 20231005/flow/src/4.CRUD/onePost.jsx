const OnePost = ({ post }) => {
  console.log(post);
  return (
    <>
      <p>{post.title}</p>
      <p>{post.content}</p>
    </>
  );
};
export default OnePost;
