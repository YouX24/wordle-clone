import React from "react";

const Tile = (props) => {
    let color = "bg-transparent"

    if (props.inPlace === true) {
        color = "bg-[#538d4e]"
    } else if (props.inWord === true) {
        color = "bg-[#b59f3b]"
    } else if (props.guessed === true) {
        color = "bg-[#3a3a3c]"
    }

    return (
        <div className={`${color} border-2 border-zinc-700 h-14 w-14 flex justify-center items-center`}>
            <h2 className="text-white text-4xl">{props.letter}</h2>
        </div>
    )
}

export default Tile;