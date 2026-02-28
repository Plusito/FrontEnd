import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  const [isRuning, setIsRuning] = useState(false);

  function Start() {
    setTime(10);
    setIsRuning(true);
  }

  useEffect(() => {
    if (!isRuning) {
      return;
    }

    if (time == 0) {
      alert("Timer is already at 0");
      setIsRuning(false);
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, isRuning]);
  return (
    <>
      <p> Tiempo: {time} segundos</p>
      <button onClick={Start}>START</button>
    </>
  );
}

export default Timer;
