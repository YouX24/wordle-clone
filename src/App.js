import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

const App = () => {

  const newGame = () => {
    const tileLetter = []
    for (let i = 0; i < 30; i++) {
        tileLetter.push("")
    }
    return tileLetter
  }

  const [tile, setTile] = React.useState(newGame())
  const [index, setIndex] = React.useState(0)

  const prntTile = () => {
    setTile(["2"])
  }

  return (
    <div className="h-screen bg-[#121213] font-poppins">
      <Header></Header>
      <div className="flex flex-col h-5/6 justify-center p-1">
        <Board tile={tile}></Board>
        <Keyboard pFun={prntTile}></Keyboard>
      </div>
    </div>
  );
}

export default App;