import React, { useContext } from "react";
import { Name, Age } from "../App";

const ComponentsB = () => {
  const name = useContext(Name);
  const age = useContext(Age);
  return (
    <div>8
      <h1>i am from ComponentsB</h1>
      <h2>
        {name.name}-- {age[2]}
      </h2>
    </div>
  );
};

export default ComponentsB;
