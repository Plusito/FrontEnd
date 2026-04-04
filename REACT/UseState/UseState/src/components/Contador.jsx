import { useState } from "react";

function Contador() {
  const [value, setValue] = useState(0);

  const add = () => setValue(value + 1);
  const noadd = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador: {value}</h2>
      <button onClick={add}>+</button>
      <button onClick={noadd}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Contador;
