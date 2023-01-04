import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

const App = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="p-1">
        <Board></Board>
        <Keyboard></Keyboard>
      </div>
    </div>
  );
}

export default App;