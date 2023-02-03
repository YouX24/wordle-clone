import React from "react";
import Button from "./Button";
import Largebtn from "./Largebtn";

const Keyboard = (props) => {
    const rowOne = props.keyboardColor.slice(0,10)
    const rowTwo = props.keyboardColor.slice(10,19)
    const rowThree = props.keyboardColor.slice(19)

    const rowOneBtns = rowOne.map(l => <Button key= {l.letter} letter={l.letter} inputToBoard={props.inputToBoard} keyboardAttr={l}/>)
    const rowTwoBtns = rowTwo.map(l => <Button key= {l.letter} letter={l.letter} inputToBoard={props.inputToBoard} keyboardAttr={l}/>)
    const rowThreeBtns = rowThree.map(l => <Button key= {l.letter} letter={l.letter} inputToBoard={props.inputToBoard} keyboardAttr={l}/>)
    
    return (
        <div>
            <div className="flex justify-center">
                {rowOneBtns}
            </div>
            <div className="flex justify-center">
                {rowTwoBtns}
            </div>
            <div className="flex justify-center">
                <Largebtn letter="ENTER" submit={props.submit}/>
                {rowThreeBtns}
                <Largebtn letter="<--" backspace={props.backspace}/>
            </div>
        </div>
    )
}

export default Keyboard;