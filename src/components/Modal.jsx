import React from "react";
import { MdClose } from "react-icons/md"

const Modal = (props) => {

    let gameStats = JSON.parse(localStorage.getItem("gameStats"))
    const statDivStyle = "flex items-center text-center flex-col m-2 w-12 sm:m-4"
    const statNumStyle = "text-2xl sm:text-4xl"
    const statDescStyle = "text-xs text-zinc-300"

    return (
        <div className="flex justify-center items-center absolute w-screen h-screen bg-black/[.7]">
            <div className="relative flex items-center justify-center flex-col m-25 h-52 w-64 sm:h-64 sm:w-96 sm:p-8 bg-[#121213] text-white">
                <i className="absolute top-1 right-1"><MdClose className="text-red-600 text-3xl hover:cursor-pointer" onClick={props.closeModal}/></i>
                <h2>STATISTICS</h2>
                <div className="flex justify-center">
                    <div className={statDivStyle}>
                        <p className={statNumStyle}>{gameStats.gamesPlayed}</p>
                        <p className={statDescStyle}>Played</p>
                    </div>
                    <div className={statDivStyle}>
                        <p className={statNumStyle}>{gameStats.winPercentage}</p>
                        <p className={statDescStyle}>Win %</p>
                    </div>
                    <div className={statDivStyle}>
                        <p className={statNumStyle}>{gameStats.currentWinStreak}</p>
                        <p className={statDescStyle}>Current Streak</p>
                    </div>
                    <div className={statDivStyle}>
                        <p className={statNumStyle}>{gameStats.maxStreak}</p>
                        <p className={statDescStyle}>Max Streak</p>
                    </div>
                </div>
                {props.showNewGame && <button className="bg-green-500 p-2 rounded-md" onClick={props.newGame}>New Game</button>}
            </div>
        </div>
    )
}

export default Modal;