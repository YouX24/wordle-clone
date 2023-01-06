import React from "react";

const Largebtn = (props) => {
    let btn = ""
    if (props.letter === "ENTER") {
        btn = <button className="text-white bg-zinc-500 rounded h-14 w-20 h-16 m-1" onClick={props.submit}>{props.letter}</button>
    } else {
        btn = <button className="text-white bg-zinc-500 rounded h-14 w-20 h-16 m-1" onClick={props.backspace}>{props.letter}</button>
    }
    return(
        btn
    )
}

export default Largebtn;