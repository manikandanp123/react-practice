import "./App.css";
import ComponentsA from "./Components/ComponentsA";
import React from "react";

export const Name = React.createContext();
export const Age = React.createContext();

function App() {
  let user={name:"dhoni",age:40};
  let allAges=[1,2,3,4,5,6];

  return (
    <div className="App">
      <Name.Provider value={{name:"dhoni",age:40}}>
        <Age.Provider value={allAges}>
          <ComponentsA />
        </Age.Provider>
      </Name.Provider>
    </div>
  );
}

export default App;
