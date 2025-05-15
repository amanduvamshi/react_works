import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
