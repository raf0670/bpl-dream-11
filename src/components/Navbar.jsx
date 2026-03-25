import React from 'react';
import dollarImg from "../assets/dollar_1.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="flex justify-center items-center gap-2 font-bold">
                    0 coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;