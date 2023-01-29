import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import allWords from "./data/allWords";
import Modal from "./components/Modal";

const App = () => {

  // TODO: Need fixing, resets state everytime a key is pressed
  // useEffect(() => {
  //   document.addEventListener("keydown", keyboardPress)
  // }, [])

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
  const [modal, setModal] = useState(false)

  // Resets the board and starts a new game
  const newGame = () => {
    setWord(getRandomWord())
    setTile(freshBoard())
    setIndex(0)
    setStartTile(0)
    setEndTile(4)
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

  // NOT DONE: use for physical keybaord input 
  // const keyRegex = new RegExp("^[A-Z]$")
  // const keyboardPress = (e) => {
  //   if (keyRegex.test(e.key.toUpperCase())) {
  //     inputToBoard(e.key.toUpperCase())
  //   }
  // }


  // TODO: Problem - keyboard press resets index state
  // Add letter to the board
  const inputToBoard = (e) => {
    let inputLetter = ""
    if (e.hasOwnProperty("target")) {
      inputLetter = e.target.innerHTML
    }
    if ((index < startTile || index > endTile) || startTile === 30) {
      return
    }
    let tileCopy = [...tile] // shallow copy of tile state
    tileCopy[index] = {
      letter: inputLetter, // change shallow copy array element
      inWord: false,
      inPlace: false,
      guessed: false
    }
    setIndex(index + 1) // increment index state
    setTile([...tileCopy]) // set the state to the updated shallow copy of tile state
  }


  const checkGuess = () => {
    let tileCopy = [...tile]
    let wordTable = {}

    // populate wordTable, store character and it's frequency
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

    // Check for letters that are in the actual word
    for (let i = startTile; i <= endTile; i++) {
      const char = tileCopy[i].letter

      if (tileCopy[i].inPlace === false && wordTable.hasOwnProperty(char) && wordTable[char] !== 0) {
        tileCopy[i].inWord = true
        wordTable[char] -= 1
      }
      wordIndex++
    }

    setTile([...tileCopy])
  }


  // Submit and check if guess is correct (when ENTER button is clicked)
  const submit = () => {
    if (startTile > 25) { // if game reach maximum guess
      console.log("GAME IS ALREADY OVER, can't input more letters")
      return
    } else if (index - 1 === endTile) { // if 5 letters are input, guess, go to next row
      let wordGuess = "" // get the inputted word / word guess
      for (let i = startTile; i <= endTile; i++) {
        wordGuess += tile[i].letter
      }
      checkGuess()

      if (wordGuess === word) {
        updateLocalStorage("win")
        openModal()
      } else {
        setStartTile(startTile + 5)
        setEndTile(endTile + 5)
      }

      if (index === 30) {
        updateLocalStorage("lose")
        openModal()
      }
      console.log(word)
    }
  }


  // update game stats according to WIN or LOSE
  const updateLocalStorage = (result) => {
    let gameStats = {
      gamesPlayed: 1,
      gamesWon: 0,
      gamesLost: 0,
      winPercentage: 0,
      currentWinStreak: 0,
      maxStreak: 0,
    }
    if (localStorage.getItem("gameStats") === null && result === "win") {
      gameStats.gamesWon = 1
      gameStats.winPercentage = 100
      gameStats.currentWinStreak = 1
      gameStats.maxStreak = 1
      localStorage.setItem("gameStats", JSON.stringify(gameStats))
      console.log("updated first win")
    } else if (localStorage.getItem("gameStats") === null && result === "lose") {
      gameStats.gamesLost = 1
      localStorage.setItem("gameStats", JSON.stringify(gameStats))
      console.log("updated first lost")
    } else if (result === "win") {
      updateWin()
    } else if (result === "lose") {
      updateLose()
    }
  }


  // update game stats when game is WON
  const updateWin = () => {
    const currentGameStats = JSON.parse(localStorage.getItem("gameStats"))
    const gamesPlayedUpdated = currentGameStats.gamesPlayed += 1
    const gamesWonUpdated = currentGameStats.gamesWon += 1
    const winPercentageUpdated = calculateWinPercentage(gamesPlayedUpdated, gamesWonUpdated)
    const winStreakUpdated = calculateWinStreak(currentGameStats)
    const maxStreakUpdated = calculateMaxStreak(currentGameStats, winStreakUpdated)
    const gameStats = updatedGameStats(gamesPlayedUpdated, gamesWonUpdated, currentGameStats.gamesLost, winPercentageUpdated, winStreakUpdated, maxStreakUpdated)
    localStorage.setItem("gameStats", JSON.stringify(gameStats))
  }


  // update game stats when game is LOST
  const updateLose = () => {
    const currentGameStats = JSON.parse(localStorage.getItem("gameStats"))
    const gamesPlayedUpdated = currentGameStats.gamesPlayed += 1
    const gamesLostUpdated = currentGameStats.gamesLost += 1
    const winPercentageUpdated = calculateWinPercentage(gamesPlayedUpdated, currentGameStats.gamesWon)
    const winStreakUpdated = 0
    const maxStreakUpdated = calculateMaxStreak(currentGameStats, winStreakUpdated)
    const gameStats = updatedGameStats(gamesPlayedUpdated, currentGameStats.gamesWon, gamesLostUpdated, winPercentageUpdated, winStreakUpdated, maxStreakUpdated)
    localStorage.setItem("gameStats", JSON.stringify(gameStats))
  }

  // calculate win percentage
  const calculateWinPercentage = (gamesPlayed, gamesWon) => {
    const decimalPercentage = gamesWon / gamesPlayed
    const result = decimalPercentage.toFixed(2) * 100
    return result
  }


  // calculate win streak
  const calculateWinStreak = (currentGameStats) => {
    if (currentGameStats.currentWinStreak === 0) {
      return 1
    }
    return currentGameStats.currentWinStreak + 1
  }


  // calculate maximum win streak 
  const calculateMaxStreak = (currentGameStats, updatedStreak) => {
    if (updatedStreak > currentGameStats.maxStreak) {
      return updatedStreak
    }
    return currentGameStats.maxStreak
  }


  // returns a new object of the updated game stats
  const updatedGameStats = (gamesPlayedUpdated, gamesWonUpdated, gamesLostUpdated, winPercentageUpdated, winStreakUpdated, maxStreakUpdated) => {
    return (
      {
        gamesPlayed: gamesPlayedUpdated,
        gamesWon: gamesWonUpdated,
        gamesLost: gamesLostUpdated,
        winPercentage: winPercentageUpdated,
        currentWinStreak: winStreakUpdated,
        maxStreak: maxStreakUpdated,
      }
    )
  }


  // open the pop up modal
  const openModal = () => {
    setModal(true)
  }

  // close the pop up modal
  const closeModal = () => {
    setModal(false)
  }

  // TODO: work on modal

  return (
    <div className="h-screen bg-[#121213] font-poppins">
      {modal && <Modal closeModal={closeModal}></Modal>}
      <Header></Header>
      <div className="flex flex-col h-5/6 justify-center p-1">
        <Board tile={tile}></Board>
        <Keyboard inputToBoard={inputToBoard} backspace={backspace} submit={submit}></Keyboard>
      </div>
    </div>
  );
}

export default App;