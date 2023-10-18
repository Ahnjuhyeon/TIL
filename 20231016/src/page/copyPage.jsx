import { useState } from "react";
import { GetSearch } from "../apis/search.api";

const CopyPage = () => {
  const [state, setState] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [addvlue, setAddvalue] = useState(""); //추가 입력어를 저장할 상태로 사용

  const onchangeSearch = async (e) => {
    e.preventDefault();
    setAddvalue(e.target.value); // 이걸 넣어야지!!!!
    try {
      const data = await GetSearch(e.target.value);
      // console.log(data);
      setState(data);
    } catch (err) {
      setState([err.response.data]);
    }
  };

  const onClickSearch = () => {
    if (recentSearch.length >= 5) {
      recentSearch.pop();
      setRecentSearch([addvlue, ...recentSearch]);
    } else {
      setRecentSearch([addvlue, ...recentSearch]);
    }
  };
  return (
    <>
      <input onChange={onchangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      <p>최근검색어</p>
      <ul>
        {recentSearch.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
      <hr />
      <p>추천검색어</p>
      <ul>
        {state.map((data, index) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            {data.includes(addvlue) ? (
              <>
                {data.split(addvlue)[0]}
                <span style={{ fontWeight: "bold" }}>{addvlue}</span>
                {data.split(addvlue)[1]}
              </>
            ) : (
              <li key={index}>{data}</li>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default CopyPage;
