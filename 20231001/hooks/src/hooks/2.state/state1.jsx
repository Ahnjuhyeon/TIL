import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  const [inputValue, setInputValue] = useState(PlayListMock.playlist);

  const onClickListAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const signer = e.target.signer.value;
    console.log(title, signer);

    const newAddPlayList = {
      id: Math.floor(Math.random() * 10000),
      title,
      signer,
    };
    setInputValue([...inputValue, newAddPlayList]);
  };

  const onClickListDel = () => {
    const updatedList = inputValue.find(
      (item) => item.title === inputValue.title
    );
    // console.log(title);
    // setInputValue(updatedList);
  };
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {inputValue.map((list) => (
          <li key={list.id}>
            <h4> {list.title}</h4>
            <p> {list.signer}</p>
            <button onClick={onClickListDel}>삭제</button>
          </li>
        ))}
      </ul>
      <form onSubmit={onClickListAdd}>
        <p>
          곡명 : <input name="title" />
        </p>
        <p>
          가수/작곡 : <input name="signer" />
        </p>
        <p>
          <button>추가</button>
        </p>
      </form>
    </>
  );
}
export default State1;
