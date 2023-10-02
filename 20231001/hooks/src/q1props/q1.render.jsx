const Render = ({ list, MOCKLIST }) => {
  console.log(MOCKLIST); //부모에있는 데이터를 받아오기위해 props로 전달 받았다!!
  // 과제의 의도가 이게 맞으실까요!!
  return (
    <>
      <p>{list.content}</p>
      <p></p>
    </>
  );
};
export default Render;
