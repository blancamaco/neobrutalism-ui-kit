import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({ type = "text", id = "input", placeholder = "", disabled = false, hover = false, active = false, focus = false, icon = 'false', children, ...props }) => {

    const inputClasses = "pl-4 pr-4 py-2 w-60 border-[0.25em] border-solid border-black  placeholder-gray-400 " +
    "hover:bg-primary-1/10 " +   
    "focus:outline-none focus:shadow-[4px_4px_0_0_var(--shadow-color)] " +
    "disabled:cursor-not-allowed disabled:opacity-30 disabled:pointer-events-none "
   


    const isHover = {
        true: 'bg-primary-1/10 ',
        false: ''
    }

    const isDisabled = {
        true: 'cursor-not-allowed opacity-30 pointer-events-none',
        false: ''
    }

    const hasFocus = {
        true: 'shadow-[4px_4px_0_0_var(--shadow-color)]',
        false: ''
    }

    const isActive = {
        true: 'outline-4 shadow-custom',
        false: ''
    }

    const hasIcon = {
        true: 'pl-9',
        false: ''
    }

    return (
        <>
        <div className=" flex flex-col items-start gap-2">
            <label htmlFor={id} >
                Input label
            </label>

            <div className="relative">
                <div className={twMerge("absolute inset-y-0 left-3 flex items-center text-gray-400", isDisabled[disabled])}>
                    {children}
                </div>

                <input 
                    type={type} 
                    id={id}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={twMerge(inputClasses, isHover[hover], hasFocus[focus], isActive[active], hasIcon[icon], isDisabled[disabled])}
                    {...props}
                >
                </input>
            </div>

        </div>

        {/* <i className={hasIcon[icon]}></i> */}
        </>

    );
}
