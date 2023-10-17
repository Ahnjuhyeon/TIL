import { useState } from "react";
import { GetSearch } from "../apis/search.api";

const SearchInput = () => {
  const [state, setState] = useState([]); //배열..
  const [recentSearch, setRecentSearch] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // 추가: 입력된 검색어를 저장할 상태

  const onChangeSearch = async (e) => {
    e.preventDefault();
    setSearchValue(e.target.value); // 검색어 입력값 업데이트 /이걸 써야 값이 화면에 보임
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
      // 검색어가 비어있지 않을 때만 추가
      recentSearch.pop();
      setRecentSearch([searchValue, ...recentSearch]);
    } else {
      setRecentSearch([searchValue, ...recentSearch]);
    }
  };

  return (
    <>
      <input onChange={onChangeSearch} />
      <button onClick={onClickSearch}>search</button>
      <p>최근 검색어</p>
      <ul>
        {recentSearch.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
      <hr />
      <p>추천 검색어</p>
      <ul>
        {state.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  );
};
export default SearchInput;

//최근검색어
/*
최근 검색 에 이전에 기록이 나와야함..
1. 일단 최근 검색어에 내가 검색한게 클릭 시 보여져야함 

*/
