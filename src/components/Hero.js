import React from "react";

const Hero = (props) => {
  if (props.heroname === "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{props.heroname}</div>;
};

export default Hero;
