import React from "react";
import "animate.css";

const Answer = (props) => {
    return (
        <div className="absolute w-full flex justify-center top-20">
            <div className="animate__bounceIn flex justify-center rounded bg-white p-1">
                <p className="text-xl font-bold">{props.word}</p>
            </div>
        </div>
    )

}

export default Answer;