import React from "react";
import "animate.css";

const Error = () => {
    return (
        <div className="absolute w-full flex justify-center top-20">
            <div className="animate__bounceIn flex justify-center rounded bg-red-500 p-1">
                <p className="text-xl font-bold">Word Does Not Exists</p>
            </div>
        </div>
    )
}

export default Error;