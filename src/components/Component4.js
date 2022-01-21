import React, { useContext } from "react";
import { UserContext } from "./Component1";

function Component4() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user}`}</h2>
    </>
  );
}

export default Component4;
