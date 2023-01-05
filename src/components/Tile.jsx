import React from "react";

const Tile = (props) => {
    return (
        <div className="border-2 border-zinc-700 bg-transparent h-14 w-14 flex justify-center items-center">
            <h2 className="text-white text-4xl">{props.letter}</h2>
        </div>
    )
}

export default Tile;