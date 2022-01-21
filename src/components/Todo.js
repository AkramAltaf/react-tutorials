import React, { useState, useMemo } from "react";

const Todo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos((t) => [...t, ["New todo"]]);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  const calculation = useMemo(() => {
    expensiveCalculation(count);
    console.log(count);
  }, [count]);

  return (
    <>
      <div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <div>
        <button onClick={increment}>Count: {count}</button>
        <p>{calculation}</p>
      </div>
    </>
  );
};

function expensiveCalculation(num) {
  let i = 0;
  while (i < 1000000000) i++;
  console.log(num);
  return num;
}

export default Todo;
