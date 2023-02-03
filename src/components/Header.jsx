import React from "react";
import { IoStatsChart } from "react-icons/io5";

const Header = (props) => {

    return (
        <header className="relative flex justify-center items-center h-16 border-b border-zinc-600">
            <h1 className="font-bree wordle-title text-white text text-4xl">Wordle</h1>
            <i className="absolute top-4 right-5 hover:cursor-pointer"><IoStatsChart className="text-white text-3xl" onClick={props.openModal}/></i>
        </header>
    )
}

export default Header;