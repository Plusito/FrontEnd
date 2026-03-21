import { useState, useEffect } from "react";

export default function ClickGame() {
  const [time, setTime] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [cps, setCps] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  useEffect(() => {
    const secondsPassed = 10 - time;
    if (secondsPassed > 0) {
      setCps((clicks / secondsPassed).toFixed(2));
    }
  }, [clicks, time]);

  const startGame = () => {
    setTime(10);
    setClicks(0);
    setCps(0);
    setIsRunning(true);
  };

  const handleClick = () => {
    if (isRunning) {
      setClicks((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>Click Game</h1>

      <h2>Time: {time}</h2>
      <h2>Clicks: {clicks}</h2>
      <h2>CPS: {cps}</h2>

      <button onClick={startGame}>Start</button>

      {isRunning === true && (
        <div
          className="area"
          onClick={handleClick}
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#636363",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
          }}
        >
          HERE
        </div>
      )}

      {time === 0 && (
        <>
          <h2>Clciks {clicks}</h2>
          <h2>CPS {(clicks / 10).toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}
