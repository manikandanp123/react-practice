import React from "react";
import ComponentsB from "./ComponentsB";
import { Name, Age } from "../App";

const ComponentsA = () => {
  return (
    <div>
      <Name.Consumer>
        {(user) => {
          return (
            <div>
              <h1>i am from Component A name is ---{user.name}--{user.age} </h1>
              <Age.Consumer>
                  {user=>{
                      return(
                          <div>
                              <h1>i am from Components A age is --- {user[0]} </h1>
                        <ComponentsB />
                        </div>
                      )
                  }}
              </Age.Consumer>
            </div>
          );
        }}
      </Name.Consumer>
    </div>
  );
};

export default ComponentsA;
