import React from "react";
import Button from "./Button";
import Largebtn from "./Largebtn";

const Keyboard = () => {
    const rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const rowThree = ["Z", "X", "C", "V", "B", "N", "M"]

    const rowOneBtns = rowOne.map(b => <Button letter={b} />)
    const rowTwoBtns = rowTwo.map(b => <Button letter={b} />)
    const rowThreeBtns = rowThree.map(b => <Button letter={b} />)

    return (
        <div>
            <div className="flex justify-center">
                {rowOneBtns}
            </div>
            <div className="flex justify-center">
                {rowTwoBtns}
            </div>
            <div className="flex justify-center">
                <Largebtn letter="ENTER"/>
                {rowThreeBtns}
                <Largebtn letter="<--"/>
            </div>
        </div>
    )
}

export default Keyboard;