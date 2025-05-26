import { useState } from "react";
import logo from "../assets/logo.svg";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <img src={logo} alt="logo click droit" />


                <ul className="hidden lg:flex space-x-8 font-semibold text-sm">
                    {[
                        { name: 'Accueil', to: '/' },
                        { name: 'À propos', to: 'propos' },
                        { name: 'Création d\'entreprise', to: '/creation' },
                        { name: 'Services', to: '/services' },
                        { name: 'Secteurs d\'activité', to: '/secteurs' },
                        { name: 'Contact', to: '/contact' },
                    ].map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `inline-block border-b-2 transition-all duration-300 ${isActive
                                        ? 'text-blue-500 border-blue-500'
                                        : 'text-gray-400 border-transparent hover:border-blue-500 hover:text-blue-500'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
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