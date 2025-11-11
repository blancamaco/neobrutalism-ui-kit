import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Toggle = ({ id = 'toggle', selected = false, disabled = false, hover = false, focus = false, ...props }) => {
    const toggleClasses = "relative inline-block w-12 h-8";
    const sliderClasses = "absolute top-0 left-0 right-0 bottom-0 border-[0.25em] border-solid border-black bg-white rounded-full cursor-pointer transition-transform duration-150 ease-in-out " +
        "before:absolute before:content-[''] before:h-[1em] before:w-[1em] before:left-[0.35em] before:top-[0.25em] before:bg-black before:cursor-pointer before:transition-transform before:duration-150 before:ease-in-out before:rounded-full shadow-[4px_4px_0_0_black] " +
        "peer-checked:bg-white peer-checked:bg-primary-1 peer-checked:before:bg-white  peer-checked:before:border-black peer-checked:hover:bg-primary-2 peer-hover:bg-primary-1/20 peer-disabled:opacity-30 peer-disabled:cursor-not-allowed " +
        "peer-checked:before:translate-x-[0.9em] peer-disabled:before:cursor-not-allowed " +
        "peer-focus:outline-5 peer-focus:outline-primary-1/20 "

    const inputClasses = "opacity-0 w-0 h-0 absolute peer " +
        "disabled:opacity-0 disabled:w-0 disabled:h-0 disabled:absolute"
    
    const isHover = {
        true: 'bg-primary-1/20',
        false: ''
    }   

    const isDisabled = {
        true: 'cursor-not-allowed opacity-30 pointer-events-none',
        false: ''
    }

    const hasFocus = {
        true: 'outline-5 outline-primary-1/20',
        false: ''
    }

    return (
        /* actua como  el contenedor */
         <label htmlFor={id} className={toggleClasses}>  
            <input 
                type="checkbox" 
                id={id}
                defaultChecked={selected} 
                className={twMerge(inputClasses)}
                >
            </input> 
                
            <span id="slider" className={twMerge(sliderClasses, isHover[hover], isDisabled[disabled], hasFocus[focus])}>

            </span>
            
         </label>  
    );
}


