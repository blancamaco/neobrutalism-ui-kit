
import { twMerge } from "tailwind-merge";
import "../index.css";


export const Container = ({direction = "row", children, ...props}) => {
    const containerClasses = "bg-white flex border-4 border-solid border-black shadow-custom p-4 ";
    
    return (
        <div className={twMerge(containerClasses, direction === "row" ? "flex-row" : "flex-col")}>
            {children}
        </div>
    )
}