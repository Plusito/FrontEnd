import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function Count() {
    setCounter(counter + 1);
  }

  return (
    <>
      <p>test:{counter}</p>
      <button onClick={Count}>Add</button>
    </>
  );
}

export default App;
