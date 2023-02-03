import React from "react";

const Largebtn = (props) => {
    let btn = ""
    if (props.letter === "ENTER") {
        btn = <button className="text-white bg-zinc-500 rounded m-1 w-10 h-10 text-xs sm:w-16 sm:h-12 sm:text-xl" onClick={props.submit}>{props.letter}</button>
    } else {
        btn = <button className="text-white bg-zinc-500 rounded m-1 w-10 h-10 text-xs sm:w-16 sm:h-12 sm:text-xl" onClick={props.backspace}>{props.letter}</button>
    }
    return(
        btn
    )
}

export default Largebtn;