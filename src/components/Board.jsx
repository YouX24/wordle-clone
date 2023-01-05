import React from "react";
import Tile from "./Tile"

const Board = (props) => {
    console.log(props.tile)
    const tileElements = props.tile.map(t => <Tile letter={t}/>)

    return (
        <div className="flex justify-center m-3">
            <div className="grid grid-cols-5 gap-1 w-fit h-fit">
                {tileElements}
            </div>
        </div>
    )
}

export default Board;