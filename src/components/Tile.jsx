import React from "react";

const Tile = (props) => {
    let color = "bg-transparent"

    if (props.inPlace === true) {
        color = "bg-[#538d4e]"
    } else if (props.inWord === true) {
        color = "bg-[#b59f3b]"
    } else if (props.guessed === true) {
        color = "bg-[#3a3a3c]"
    } else {
        color = "bg-transparent"
    }

    return (
        <div className={`${color} border-2 border-zinc-700 h-8 w-8 sm:h-10 sm:w-10 lg:w-12 lg:h-12 flex justify-center items-center`}>
            <p className="text-white text-2xl sm:text-4xl">{props.letter}</p>
        </div>
    )
}

export default Tile;