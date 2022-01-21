import React from "react";
import Component3 from "./Component3";

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <h2>{`Hello ${user}`}</h2>
      <Component3 />
    </>
  );
}

export default Component2;
