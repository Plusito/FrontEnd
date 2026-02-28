import "./App.css";
import Timer from "./components/Timer/Timer";
import React, { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);
  // const [timer, setTimer] = useState(10);

  // function Count() {
  //   setCounter(counter + 1);
  // }
  // function Time() {
  //   setTimer(timer - 1);
  // }

  return (
    <>
      {/* <p>test:{counter}</p>
      <p>countdown:{timer}</p>
      <button onClick={Count}>Add</button>
      <button onClick={Time}>Start countdown</button> */}
      |<Timer></Timer>
    </>
  );
}

export default App;
