import React from "react";
import { FaFacebookF, FaLinkedinIn, FaX, FaInstagram } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#017EFF] text-white py-10 ">
            <div className=" w-full lg:w-2/3 mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                    <img src={logo} alt="" className="border rounded mb-1" />
                    <p className="text-xs ">
                        Clic Droit Afrique Group, votre partenaire privilégié pour des solutions juridiques et fiscales innovantes. Nous simplifions votre parcours entrepreneurial en vous offrant un accompagnement sur mesure et une expertise sectorielle approfondie.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">MENU</h3>
                    <ul className="space-y-2 text-xs text-gray-200">
                        <li><a href="/" className="hover:border-b hover:text-white">Accueil</a></li>
                        <li><a href="/creation" className="hover:border-b hover:text-white">Creation d'entreprise</a></li>
                        <li><a href="/gestion" className="hover:border-b hover:text-white">Gestion d'entreprise</a></li>
                        <li><a href="/consultation" className="hover:border-b hover:text-white">Consultation d'expert</a></li>
                        <li><a href="/propos" className="hover:border-b hover:text-white">A propos</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">LIENS UTILES</h3>
                    <ul className="space-y-2 text-xs text-gray-200">
                        <li><a href="/" className="hover:border-b hover:text-white">Poltique de Confidentialité</a></li>
                        <li><a href="/" className="hover:border-b hover:text-white">Mentions Légales</a></li>
                        <li><a href="/" className="hover:border-b hover:text-white">Conditions d'utilisation</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4  ">CONTACT</h3>
                    <ul className="space-y-2 text-xs text-gray-200">
                        <li><a href="tel:+221338400602" className="hover:border-b hover:text-white">+221 33 840 06 02</a> | <a href="tel:+221776804994" className="hover:border-b hover:text-white">+221 77 680 49 94</a></li>
                        <li><a href="" className="hover:border-b hover:text-white">Sacré Cœur 3, Montagne Rue SC-45,
                            Villa nº64, Dakar - Sénégal</a></li>
                        <li><a href="mailto:contact@clicdroitafrique.com" className="hover:border-b hover:text-white">contact@clicdroitafrique.com</a></li>
                    </ul>

                </div>
            </div>
           
            
            <div className="flex space-x-4 justify-center mt-6">
                <div className=" group border-2 border-white hover:bg-white rounded-sm p-2 transition duration-300">
                    <a href="#" className="text-white group-hover:text-[#017EFF] text-2xl">
                        <FaFacebookF />
                    </a>
                </div>

                <div className=" group border-2 border-white hover:bg-white rounded-sm p-2 transition duration-300">
                    <a href="#" className="text-white group-hover:text-[#017EFF] text-2xl">
                        <FaLinkedinIn />
                    </a>
                </div>

                <div className=" group border-2 border-white hover:bg-white rounded-sm p-2 transition duration-300">
                    <a href="#" className="text-white group-hover:text-[#017EFF] text-2xl">
                        <FaX />
                    </a>
                </div>

                <div className=" group border-2 border-white hover:bg-white rounded-sm p-2 transition duration-300">
                    <a href="#" className="text-white group-hover:text-[#017EFF] text-2xl">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <p className="flex justify-center text-xs">@clicdroit-afrique</p>

            {/* Ligne de bas de page */}
            <div className="border-t border-white mt-10 pt-4 text-center text-xs ">
                &copy; {new Date().getFullYear()} Clic Droit Afrique Group. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
