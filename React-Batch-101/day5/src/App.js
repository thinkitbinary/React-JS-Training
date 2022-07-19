import { useEffect, useState } from 'react';
import './App.css';
import Counter from './component/Counter';
import DateTime from './component/DateTime';
import Products from './component/Products';

function App() {
  const [show, setShow] = useState(false);
  const showPost = () => { // toggle show
    setShow(!show);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem", gap: "1rem" }}>
      <button onClick={showPost}>{show ?  "Hide Counter" :"Show Counter"}</button>
      {/* {show && <Counter />}
      {show && <DateTime />} */}
      {show && <Products />}
    </div>
  );
}

export default App;
