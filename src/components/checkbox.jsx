import React from "react";
import { twMerge } from "tailwind-merge";
import "../index.css";

export function Checkbox({type = "checkbox", id = "checkbox", selected = false, disabled = false, hover = false, focus = false, children, ...props}) {
    
    const checkboxClasses = "flex gap-4";
    
    const types = {
        checkbox: "m-0 appearance-none w-6 h-6 border-[0.25em] border-solid border-purple-700 cursor-pointer grid place-content-center " +
    "before:content-[''] before:w-3 before:h-3 before:scale-0 before:transition-transform before:duration-150 before:ease-in-out before:bg-primary-1 " +
    "checked:before:scale-100 shadow-[4px_4px_0_0_black] "+
    "hover:bg-purple-200 " +
    "disabled:cursor-not-allowed disabled:opacity-30 disabled:pointer-events-none " +
    "focus:outline-[max(3px,0.25em)_solid_color-mix(in_srgb,var(--primary-1)_30%,transparent)] focus:outline-offset-0",
        radio: "appearance-none m-0 cursor-pointer grid place-content-center " +
    "w-6 h-6 rounded-full border-[0.25em] border-purple-700 bg-white " +
    "before:content-[''] before:w-[0.6em] before:h-[0.6em] before:rounded-full before:transform before:scale-0 " +
    "before:transition-transform before:duration-[120ms] before:ease-in-out " +
    "before:bg-primary-1 " +
    "checked:before:scale-100 " +
    "hover:bg-purple-200 " +
    "focus:outline-[max(3px,0.25em)] focus:outline-solid focus:outline-[color-mix(in_srgb,var(--form-control-color)_30%,transparent)] focus:outline-offset-0 " +
    "disabled:cursor-not-allowed disabled:opacity-30"
    }

    const isSelected = {
        true: 'checked:before:scale-100',
        false: ''
    }

    const isHover = {
        true: 'bg-purple-200'
    }

    const hasFocus = {
        true: type === 'checkbox'
            ? 'outline-2 outline-purple-400 outline-offset-1'
            : 'outline-2 outline-purple-400 outline-offset-1'
    }

    return (
        <div className={checkboxClasses}>
            <input 
                type={type} 
                id={id}
                defaultChecked={selected}
                disabled={disabled}
                className={twMerge(types[type], isSelected[selected], isHover[hover], hasFocus[focus])}
                > 
            </input>
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}