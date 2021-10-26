import React from 'react';
import logo from '../images/logo_dog_64.png';

export const NavBar = () => (
    <div className="navbar mb-2 shadow-lg bg-base-300 text-neutral-content rounded-box">
        <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">
                Roxynho
            </span>
        </div>
        <div className="flex-none">
            <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    </div>
)