import React from "react";
import Tile from "./Tile"

const Board = () => {

    
    const newGame = () => {
        const tileLetter = []
        for (let i = 0; i < 30; i++) {
            tileLetter.push("")
        }
        return tileLetter
    }

    const [tile, setTile] = React.useState(newGame())
    const tileElements = tile.map(t => <Tile/>)

    return (
        <div className="flex justify-center m-3">
            <div className="grid grid-cols-5 gap-1 w-fit h-fit">
                {tileElements}
            </div>
        </div>
    )
}

export default Board;