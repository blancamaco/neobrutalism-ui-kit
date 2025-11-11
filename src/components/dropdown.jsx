import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import { usageState } from "react" 

export const Dropdown = ({ name = "dropdown", id = "dropdown", value = "value", defaultHidden = "true", hover = "false", itemHover = "false", children}) => {
    const [hidden, setHidden] = useState(defaultHidden);

    const isHidden = {
        true: "hidden "
    }

    const dropdownClass = "flex flex-col gap-2 w-60 border-[0.25em] border-solid border-black focus:shadow-[4px_4px_0_0_var(--shadow-color)] hover:bg-primary-1/10";
    const dropdownButtonClass = "relative pl-4 pr-4 py-2 w-full text-left cursor-pointer text-gray-500 focus:outline-primary-1 focus:outline-offset-8 ";

    const isShown = {
        false: "shadow-[4px_4px_0_0_var(--shadow-color)]"
    }

    const isHover = {
        true: "bg-primary-1/10"
    }

    const aClass = "bg-white block w-full text-left pl-4 pr-4 py-2 hover:bg-primary-1/10"
    const iClass = {
        true: "fa-solid fa-chevron-down",
        false: "fa-solid fa-chevron-up"
    }

    return (
        <>
        <div className="flex flex-col gap-2 items-start ">
            <label for={id}>Selector label:</label>
            <div 
                id="dropdown"
                className={twMerge(dropdownClass, isHover[hover], isShown[hidden] )}>
            
                <button 
                    className={twMerge(dropdownButtonClass)}
                    onClick={() => setHidden(!hidden)}
                    >
                        Choose an option
                    <div className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                        <i className={iClass[hidden]}></i>
                    </div>
                    
                </button>

                <div className={twMerge("block ", isHidden[hidden])}>
                    <div className="flex flex-col w-full ">  {/* custom select*/}
            
                        <a className={aClass} value="Strawberry">Strawberry</a>
                        <a className={twMerge(aClass, isHover[itemHover])} value="Orange">Orange</a>
                        <a className={aClass} value="Apple">Apple</a>
                        <a className={aClass} value="Peach">Peach</a>

                    </div>
                </div>

    
            </div>
        </div>
 
        </>
    )
}