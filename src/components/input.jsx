import React from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({ type = "text", id = "input", placeholder = "", disabled = false, hover = false, active = false, focus = false, icon = 'false', ...props }) => {

    const inputClasses = "px-4 py-2 border-[0.25em] border-solid border-purple-700 shadow-[4px_4px_0_0_black]  " +
    "hover:bg-purple-100 " +   
    "focus:outline-2 focus:outline-purple-500 focus:outline-offset-1 " +
    "disabled:cursor-not-allowed disabled:opacity-30 disabled:pointer-events-none "

    const isHover = {
        true: 'bg-purple-100',
        false: ''
    }

    const hasFocus = {
        true: 'outline-2 outline-purple-500 outline-offset-2',
        false: ''
    }

    const isActive = {
        true: 'outline-4 outline-purple-500 outline-offset-1',
        false: ''
    }

    const hasIcon = {
        true: 'fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400',
        false: ''
    }

    return (
        <>
        <input 
            type={type} 
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            className={twMerge(inputClasses, isHover[hover], hasFocus[focus], isActive[active])}
            {...props}
        >
        </input>
        {/* <i className={hasIcon[icon]}></i> */}
        </>

    );
}
