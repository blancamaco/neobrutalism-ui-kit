import React from "react";
import { twMerge } from "tailwind-merge";
import "../index.css";

export function Button({ variant = "primary", disabled = false, icon = false, active = false, hover = false, children, ...props }) {
    var classNames = [];


    const buttonClasses = "px-4 py-2 border-[3px] border-black shadow-[4px_4px_0_0_black] flex justify-center w-fit cursor-pointer"

    // const buttonVariants = cva(buttonClasses,{
        const variants = {
                primary: 'bg-primary-1 text-white hover:bg-primary-2',
                secondary: 'bg-white text-black hover:bg-primary-1 hover:text-white',
                tertiary: 'bg-transparent text-primary-1 border-[3px] border-transparent shadow-none hover:bg-black/10'
            }
        const isDisabled = {
            true: 'cursor-not-allowed opacity-30 pointer-events-none',
            false: ''
        }
        const hasIcon = {
            true: 'gap-2 items-center',
            false: ''
        }
        const isActive = {
            true: 'outline-4 outline-purple-500 outline-offset-1',
            false: ''
        }
        const isHover = {
            true: variant === 'primary'
                ? 'bg-primary-2'
                : variant === 'secondary'
                ? 'bg-primary-1 text-white'
                : 'bg-black/10',
            false: ''
        }
        

    return (
        <button 
        className={twMerge(buttonClasses, variants[variant], isDisabled[disabled], isActive[active], hasIcon[icon], isHover[hover])}
        {...props}>
            {children}
        </button>
        
    )
}

