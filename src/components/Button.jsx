import React from "react";

const Button = (props) => {

    const colorKeyboardBtn = () => {
        if (props.keyboardAttr.hasOwnProperty("inPlace")) {
            return "text-white bg-[#538D4E] rounded m-1 w-5 h-10 text-s sm:w-8 sm:h-12 sm:text-xl"
        } else if (props.keyboardAttr.hasOwnProperty("inWord")) {
            return "text-white bg-[#B59F3B] rounded m-1 w-5 h-10 text-s sm:w-8 sm:h-12 sm:text-xl"
        } else if (props.keyboardAttr.hasOwnProperty("notInWord")) {
            return "text-white bg-[#3A3A3C] rounded m-1 w-5 h-10 text-s sm:w-8 sm:h-12 sm:text-xl"
        } else {
            return "text-white bg-zinc-500 rounded m-1 w-5 h-10 text-s sm:w-8 sm:h-12 sm:text-xl"
        }
    }

    return(
        <button className={colorKeyboardBtn()} onClick={props.inputToBoard}>{props.letter}</button>
    )
}

export default Button;