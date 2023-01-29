import React from "react";

const Modal = (props) => {
    return (
        <div className="flex justify-center items-center absolute w-screen h-screen bg-black/[.7]">
            <div className="w-1/2 h-1/2 bg-[#121213] text-white">
                <h2>STATISTICS</h2>
                <button onClick={props.closeModal}>CLOSE</button>
            </div>
        </div>
    )
}

export default Modal;