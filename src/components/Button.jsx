import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Button = ({ onClick, children, className = "" }) => {
    const [isActive, setIsActive] = useState(false);

    const handleTouch = () => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 1500); 
        if (onClick) onClick(); 
    };

    return (
        <button
            onClick={handleTouch}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className={`group relative overflow-hidden text-blue-500 border-2 border-blue-500 pr-5 pl-5 py-2 font-semibold text-sm transition-all duration-300 bg-gradient-hover ${
                isActive ? "pr-10 text-white bg-blue-500" : ""
            } ${className}`} // Ajout de la prop className
        >
            {/* Icône */}
            <span
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                }`}
            >
                <ArrowRightIcon
                    className={`w-4 h-4 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-blue-500"
                    }`}
                />
            </span>

            {children}
        </button>
    );
};
export default Button;