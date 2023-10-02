import JBTN from "../q1-1/button";
import Render from "./q1.render";

const Q1 = () => {
  const MOCKLIST = [
    {
      title: "1",
      content: "example-1",
    },
    {
      title: "2",
      content: "example-2",
    },
    {
      title: "3",
      content: "example-3",
    },
  ];
  return (
    <>
      <h1>Props</h1>
      {MOCKLIST.map((list) => (
        <Render list={list} key={list} MOCKLIST={MOCKLIST} />
      ))}
      <JBTN color={"secondary"} size={"large"}>
        왕 큼
      </JBTN>
    </>
  );
};
export default Q1;

/*
음.. 스타일만 더 잘 활용하면 좋겠지만.. 
오.. 임폴트만 해서 프롭스만 넣어주면 적용되는거 좋당..
*/
