import React from "react";

const Button = (props) => {

    const colorKeyboardBtn = () => {
        if (props.keyboardAttr.hasOwnProperty("inPlace")) {
            return "text-white bg-[#538D4E] rounded h-14 w-11 h-16 m-1"
        } else if (props.keyboardAttr.hasOwnProperty("inWord")) {
            return "text-white bg-[#B59F3B] rounded h-14 w-11 h-16 m-1"
        } else if (props.keyboardAttr.hasOwnProperty("notInWord")) {
            return "text-white bg-[#3A3A3C] rounded h-14 w-11 h-16 m-1"
        } else {
            return "text-white bg-zinc-500 rounded h-14 w-11 h-16 m-1"
        }
    }

    return(
        <button className={colorKeyboardBtn()} onClick={props.inputToBoard}>{props.letter}</button>
    )
}

export default Button;