// import { useState } from 'react'

import "./App.css";
import Hooks from "./hooks";
import Q1 from "./q1props/q1.props";
import Effect from "./q2hook/useEffect";
import Timer from "./q2hook/useRef";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Q1 />
      <hr />
      <Timer />
      <hr />
      <Effect />
      <hr />
      <Hooks />
    </>
  );
}

export default App;
