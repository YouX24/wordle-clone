import React from "react";

const Button = (props) => {
    return(
        <button className="text-white bg-zinc-500 rounded h-14 w-11 h-16 m-1" onClick={props.pFun}>{props.letter}</button>
    )
}

export default Button;