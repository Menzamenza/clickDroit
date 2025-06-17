
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaLock, FaRegUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, telephone, prenom, nom });
        // Authentification ici
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#F5F7FA]">
            {/* Navbar simple */}
            <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <button
                    onClick={() => navigate('/login')}
                    className="text-blue-600 font-semibold text-sm border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
                >
                    Se connecter
                </button>
            </nav>

            {/* Formulaire de connexion */}
            <div className="flex flex-col justify-center items-center mt-5 bg-[#F5F7FA]">
                <div className='mb-3 text-center'>
                    <h2 className="text-xl font-extrabold merriweather-sans">S'inscrire</h2>
                    <p className="text-sm"> 
                        Créer votre compte et profiter d’une application <br /> pour créer et gérer votre entreprise
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="bg-white p-8  shadow-md w-full max-w-sm">

                    <button
                        className="flex items-center justify-center gap-2 w-full bg-[#FCD9D9] text-red-600 font-bold py-2 rounded hover:bg-red-300 transition border border-red"
                    // onClick={() => {
                    //     alert("Connexion avec Google à venir !");
                    //// }}
                    >
                        <FaGoogle /> Continuer avec Google
                    </button>

                    {/* Séparateur "ou" */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-400" />
                        <span className="mx-3 text-gray-400 text-sm">ou</span>
                        <div className="flex-grow h-px bg-gray-400" />
                    </div>

                    <div className='space-y-4 '>
                        {/* prenom */}
                        <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                            <FaRegUser className="text-gray-500 mr-3" />
                            <input
                                type="prenom"
                                name="text"
                                placeholder="Ex: Saliou"
                                className="w-full p-2 outline-none text-sm placeholder:text-gray-400 placeholder:text-sm"
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                required
                            />
                        </div>
                        {/* nom */}
                        <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                            <FaRegUser className="text-gray-500 mr-3" />
                            <input
                                type="nom"
                                name="text"
                                placeholder="Ex: Ndiaye"
                                className="w-full p-2 outline-none text-sm placeholder:text-gray-400 placeholder:text-sm"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                            <FaRegEnvelope className="text-gray-500 mr-3" />
                            <input
                                name="email"
                                type="email"
                                placeholder="Ex : saliou@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 outline-none placeholder:text-gray-400 placeholder:text-sm"
                            />
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                            <FaPhone className="text-gray-500 mr-3" />
                            <input
                                name="telephone"
                                type="tel"
                                placeholder="Ex : +221 77 123 45 67"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                required
                                className="w-full p-2 outline-none placeholder:text-gray-400 placeholder:text-sm"
                            />
                        </div>

                    </div>

                    {/* accept */}
                    <div className=" my-3 text-gray-600 text-xs">
                        <label className=" ">
                            <input
                                type="checkbox"
                                className='mr-2'
                            />
                            J'accepte les <span className="bleu hover:underline">Conditions Générales d'Utilisations</span> et la <span className="bleu hover:underline">Politique de Confidentialité</span>
                        </label>

                    </div>

                    {/* Bouton */}
                    <button
                        type="submit"
                        className="w-full bg-bleu text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                        Continuer
                    </button>

                    <div className="mt-4 text-center text-sm font-bold">
                        <span> J'ai déjà un compte ? </span>
                        <button className="bleu hover:underline" onClick={() => navigate('/login')}>
                            Connexion
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

// {/* Mot de passe */ }
// <div className=" relative my-5 flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
//     <FaLock className="text-gray-500 mr-3" />
//     <input
//         type={showPassword ? "text" : "password"}
//         name="password"
//         placeholder="• • • • • • • •"
//         className="w-full p-2 pr-10 outline-none text-sm placeholder:text-gray-400 placeholder:text-sm"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//     />
//     <span
//         onClick={() => setShowPassword(!showPassword)}
//         // className=" text-gray-500 cursor-pointer"
//         className="absolute right-3 text-gray-500 cursor-pointer"

//     >
//         {showPassword ? <FaEyeSlash /> : <FaEye />}
//     </span>
// </div>