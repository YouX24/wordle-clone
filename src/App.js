import React, { useState }from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import allWords from "./data/allWords";

const App = () => {

  const freshBoard = () => {
    const tileLetter = []
    for (let i = 0; i < 30; i++) {
        tileLetter.push(
          {
            letter: "",
            inWord: false,
            inPlace: false,
            guessed: false
          }
        )
    }
    return tileLetter
  }

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * allWords.length)
    return allWords[randomIndex].toUpperCase()
  }

  const [word, setWord] = useState(getRandomWord())
  const [tile, setTile] = useState(freshBoard())
  const [index, setIndex] = useState(0)
  const [startTile, setStartTile] = useState(0)
  const [endTile, setEndTile] = useState(4)

  // Resets the board and starts a new game
  const newGame = () => {
    setWord(getRandomWord())
    setTile(freshBoard())
    setIndex(0)
    setStartTile(0)
    setEndTile(4)
  }

  // Add letter to the board
  const inputToBoard = (e) => {
    if (index < startTile || index > endTile) {
      return
    }
    let tileCopy = [...tile] // shallow copy of tile state
    tileCopy[index] = {
      letter: e.target.innerHTML, // change shallow copy array element
      inWord: false,
      inPlace: false,
      guessed: false
    }
    setIndex(index + 1) // increment index state
    setTile([...tileCopy]) // set the state to the updated shallow copy of tile state
  }

  // Remove latest letter from the board
  const backspace = () => {
    if (index === startTile) {
      return
    }
    let tileCopy = [...tile]
    tileCopy[index - 1] = {
      letter: "",
      inWord: false,
      inPlace: false,
      guessed: false
    }
    setIndex(index - 1)
    setTile([...tileCopy])
  }

  const checkGuess = () => {
    let tileCopy = [...tile]

    let wordTable = {}

    // populate wordTable
    for (let c of word) {
      if (!wordTable.hasOwnProperty(c)) {
        wordTable[c] = 1
      } else {
        wordTable[c] += 1
      }
    }

    let wordIndex = 0
    // Check for letters that are in place
    for (let i = startTile; i <= endTile; i++) {
      const char = tileCopy[i].letter

      if (char === word[wordIndex]) {
        tileCopy[i].inPlace = true
        wordTable[char] -= 1
      }
      tileCopy[i].guessed = true
      wordIndex++
    }

    wordIndex = 0

    // Check for letters that are in word
    for (let i = startTile; i <= endTile; i++) {
      const char = tileCopy[i].letter

      if (tileCopy[i].inPlace === false && wordTable.hasOwnProperty(char) && wordTable[char] !== 0) {
        tileCopy[i].inWord = true
        wordTable[char] -= 1
      }
      wordIndex++
    }
  }

  // Submit and check if guess is correct
  const submit = () => {
    if (startTile === 25) { // if game reach maximum guess
      console.log("GAME IS ALREADY OVER")
      return
    } else if (index - 1 === endTile) { // if 5 letters are input, guess, go to next row
      console.log(word)
      setStartTile(startTile + 5)
      setEndTile(endTile + 5)
    }

    // get the inputted word / word guess
    let wordGuess = ""
    for (let i = startTile; i <= endTile; i++) {
      wordGuess += tile[i].letter
    }
    checkGuess()

    // TODO: END GAME CONDITION, Word is guessed correctly
    if (wordGuess === word) {
      console.log("CORRECT!")
      newGame()
    }
  }

  return (
    <div className="h-screen bg-[#121213] font-poppins">
      <Header></Header>
      <div className="flex flex-col h-5/6 justify-center p-1">
        <Board tile={tile}></Board>
        <Keyboard inputToBoard={inputToBoard} backspace={backspace} submit={submit}></Keyboard>
      </div>
    </div>
  );
}

export default App;