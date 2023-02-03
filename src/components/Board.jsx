import React from "react";
import Tile from "./Tile"

const Board = (props) => {
    const tileElements = props.tile.map(t => <Tile letter={t.letter} inPlace={t.inPlace} inWord={t.inWord} guessed={t.guessed}/>)
    return (
        <div className="flex justify-center m-3">
            <div className="grid grid-cols-5 gap-1">
                {tileElements}
            </div>
        </div>
    )
}

export default Board;