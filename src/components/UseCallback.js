import React, { useState, useCallback } from "react";
const functionCount = new Set();

function UseCallback() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
    console.log(count);
  }, [count]);

  const decrementCounter = useCallback(() => {
    setCount(count - 1);
    console.log(count);
  }, [count]);

  const incrementNumber = useCallback(() => {
    setNumber(number + 1);
    console.log(number);
  }, [number]);

  functionCount.add(incrementCounter);
  functionCount.add(decrementCounter);
  functionCount.add(incrementNumber);

  alert(functionCount.size);
  return (
    <>
      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <button onClick={incrementNumber}>Increment Number</button>
    </>
  );
}

export default UseCallback;
