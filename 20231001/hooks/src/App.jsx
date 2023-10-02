// import { useState } from 'react'

import "./App.css";
import Q1 from "./q1props/q1.props";
import Timer from "./q2hook/useRef";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Q1 />
      <hr />
      <Timer />
    </>
  );
}

export default App;
