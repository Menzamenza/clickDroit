import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 

const Button = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="group relative overflow-hidden text-blue-500 border-2 border-blue-500 pr-5 pl-5 py-2  hover:pr-10 font-semibold text-sm transition-all duration-300 bg-gradient-hover hover:text-white"
        >
            {/* Icône cachée */}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRightIcon className="w-4 h-4 text-blue-500 group-hover:text-white" />
            </span>

            {children}
        </button>
    );
};

export default Button;