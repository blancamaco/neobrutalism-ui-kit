
import { twMerge } from "tailwind-merge";
import "../index.css";


export function Container ({children, ...props}) {
    return (
        <div className="bg-white flex border-4 border-solid border-black shadow-[8px_8px_0_0_black] p-4 >">
            {children}
        </div>
    )
}