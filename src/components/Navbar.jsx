import { useState } from "react";
import logo from "../assets/logo.svg";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <img src={logo} alt="logo click droit" />

                <ul className="hidden lg:flex space-x-8 text-gray-400 font-semibold text-sm">
                    <li>
                        <a
                            href="#"
                            className="inline-block border-b-2 border-blue-500 text-blue-500 transition-all duration-300"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                        >
                            À propos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                        >
                            Secteurs d'activité
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="inline-block border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                        >
                            Contact
                        </a>
                    </li>
                </ul>



                <div>
                    <button
                        onClick={() => {
                            setIsActive(true);
                            setTimeout(() => setIsActive(false), 1500);
                            // redirection ou logique de connexion
                        }}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={`group relative overflow-hidden text-blue-500 md:border-2 md:border-blue-500 pr-5 pl-5 py-2 font-semibold text-sm transition-all duration-300 ${isActive ? "pr-10" : ""
                            }`}>
                        <span
                            className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                                }`}>
                            <ArrowRightEndOnRectangleIcon
                                className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-blue-500" : ""
                                    }`}
                            />
                        </span>
                        Se connecter
                    </button>
                </div>

            </div>
        </nav>
    );
};
export default Navbar;