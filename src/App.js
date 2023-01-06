import React, { useState }from "react";
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

  const [tile, setTile] = useState(newGame())
  const [index, setIndex] = useState(0)

  const inputToBoard = (e) => {
    let tileCopy = [...tile] // shallow copy of tile state
    tileCopy[index] = e.target.innerHTML // change shallow copy array element
    setIndex(index + 1) // increment index state
    setTile([...tileCopy]) // set the state to the updated shallow copy of tile state
  }

  const backspace = () => {
    if (index === 0) {
      return
    }
    let tileCopy = [...tile]
    tileCopy[index - 1] = ""
    setIndex(index - 1)
    setTile([...tileCopy])
    console.log("back")
  }

  return (
    <div className="h-screen bg-[#121213] font-poppins">
      <Header></Header>
      <div className="flex flex-col h-5/6 justify-center p-1">
        <Board tile={tile}></Board>
        <Keyboard inputToBoard={inputToBoard} backspace={backspace}></Keyboard>
      </div>
    </div>
  );
}

export default App;