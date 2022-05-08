import React from "react";

export function Count() {
  const [count, setCount] = React.useState(0);
  const handleCount = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => handleCount(1)}>+</button>
      <button onClick={() => handleCount(-1)}>-</button>
    </>
  );
}
