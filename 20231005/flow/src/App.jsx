// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Memo from "./2.hook/useMemo";
import Crud from "./4.CRUD";
import Crud2 from "./5.CRUD";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Memo />
      <hr />
      <Crud />
      <hr />
      <Crud2 />
    </>
  );
}

export default App;
