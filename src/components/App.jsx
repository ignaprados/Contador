import React, { useState } from "react";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h2>Contador</h2>
      <h1>{count}</h1>
      <button onClick={decrease} style={{ cursor: "pointer" }}>
        -
      </button>
      <button onClick={increase} style={{ cursor: "pointer" }}>
        +
      </button>
      <Footer />
    </div>
  );
}

export default App;
