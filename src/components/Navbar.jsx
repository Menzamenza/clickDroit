
import { useState } from "react";
import logo from "../assets/logo.svg";
import { ArrowRightEndOnRectangleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Accueil', to: '/' },
        { name: 'À propos', to: 'propos' },
        { name: 'Création d\'entreprise', to: '/creation' },
        { name: 'Services', to: '/services' },
        { name: 'Secteurs d\'activité', to: '/secteurs' },
        { name: 'Contact', to: '/contact' },
    ];

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <img src={logo} alt="logo click droit" />

                {/* Desktop menu */}
                <ul className="hidden lg:flex space-x-8 font-semibold text-sm">
                    {navItems.map((item, index) => (
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

                {/* Bouton Connexion */}
                <div className="hidden lg:block">
                    <button
                        onClick={() => {
                            setIsActive(true);
                            setTimeout(() => setIsActive(false), 1500);
                        }}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={`group relative overflow-hidden text-blue-500 md:border-2 md:border-blue-500 pr-5 pl-5 py-2 font-semibold text-sm transition-all duration-300 ${isActive ? "pr-10" : ""
                            }`}
                    >
                        <span
                            className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                                }`}>
                            <ArrowRightEndOnRectangleIcon className="w-4 h-4" />
                        </span>
                        Se connecter
                    </button>
                </div>

                {/* Hamburger menu mobile */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden text-gray-700">
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>

            {/* Menu Mobile */}
            <div className={`fixed flex flex-col justify-between top-0 right-0 w-64 h-full bg-bleuClair shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div>
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold">Menu</h2>
                        <button onClick={() => setMenuOpen(false)}>
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <ul className=" p-4 space-y-5 font-semibold text-sm">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.to}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `inline-block border-b-2 transition-all duration-300 ${isActive
                                            ? 'text-blue-500 border-blue-500'
                                            : 'text-gray-600 border-transparent hover:border-blue-500 hover:text-blue-500'}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={() => {
                        setIsActive(true);
                        setTimeout(() => setIsActive(false), 1500);
                        // redirection ou logique de connexion
                    }}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                    className={`group relative overflow-hidden text-blue-500 border-2 border-blue-500 m-4 pr-5 pl-5 py-2 font-semibold text-sm transition-all duration-300 ${isActive ? "pr-10" : ""
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

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0  z-40 lg:hidden"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
