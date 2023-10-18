import { useEffect } from "react";
import "./App.css";
import { GetSearch } from "./apis/search.api";
// import SearchInput from "./page";
import CopyPage from "./page/copyPage";

function App() {
  useEffect(() => {
    (async () => {
      const data = await GetSearch("아");
      console.log(data);
    })();
  }, []);

  return (
    <>
      {/* <SearchInput /> */}
      <CopyPage />
    </>
  );
}

export default App;
