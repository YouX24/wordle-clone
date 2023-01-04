import React from "react";

const Tile = (props) => {
    return (
        <div className="border-2 border-zinc-700 bg-transparent h-14 w-14">
            <h2>{props.letter}</h2>
        </div>
    )
}

export default Tile;