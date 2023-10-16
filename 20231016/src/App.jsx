import { useEffect } from "react";
import "./App.css";
import { GetSearch } from "./apis/search.api";
import SearchInput from "./page";

function App() {
  useEffect(() => {
    (async () => {
      const data = await GetSearch("아");
      console.log(data);
    })();
  }, []);

  return (
    <>
      <SearchInput />
    </>
  );
}

export default App;
