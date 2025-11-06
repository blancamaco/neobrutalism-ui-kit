import React from "react";

export const Buttons = () => {

    const buttonVariants = cva({
        variants: {
            variant: {
                primary: 'bg-primary-1 hover:bg-primary-2 ',
                secondary: 'bg-secondary-1 hover:bg-secondary-2 ',
                tertiary: 'bg-tertiary-1 hover:bg-tertiary-2 '
            },
            disabled {
                true: 'opacity-50 cursor-not-allowed',
                false: ''
            },
            hovered {
                true: 'scale-105',
                false: ''
            },
            active {
                true: 'scale-95',
                false: ''
            },
            hasIcon: {
                true: 'pl-2 pr-4 gap-2',
                false: 'px-4'
            }
        }
    })
    
    return (
        <>
        <button className="x-4 py-2 bg-primary-1 border-[3px] border-black shadow-[4px_4px_0_0_black] flex justify-center w-fit cursor-pointer">
            Test
        </button>
        </>
    );
}