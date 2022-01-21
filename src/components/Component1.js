import React, { useState, createContext } from "react";
import Component2 from "./Component2";
export const UserContext = createContext("John Smith");

function Component1() {
  const [user, setUser] = useState("John Doe");
  return (
    <UserContext.Provider value={user}>
      <h1>Component 1</h1>
      <h2>{`Hello ${user}`}</h2>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

export default Component1;
