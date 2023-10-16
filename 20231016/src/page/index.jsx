import { useState } from "react";
import { GetSearch } from "../apis/search.api";

const SearchInput = () => {
  const [state, setState] = useState([]); //배열..
  const onChangeSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await GetSearch(e.target.value);
      // console.log(data);
      setState(data);
    } catch (err) {
      setState([err.response.data]);
    }
  };
  return (
    <>
      <input onChange={onChangeSearch} />
      <button>search</button>
      <ul>
        {state.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  );
};
export default SearchInput;
