
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle ,FaLock, FaRegUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
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
                <div className='mb-6 text-center'>
                    <h2 className="text-xl font-extrabold merriweather-sans">Se connecter</h2>
                    <p className=" text-sm">
                        Se connecter à votre espace entrepreneur
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

                    {/* Email */}
                    <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                        <FaRegUser className="text-gray-500 mr-3" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Ex: saliou@gmail.com"
                            className="w-full p-2 outline-none text-sm placeholder:text-gray-400 placeholder:text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className=" relative my-5 flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                        <FaLock className="text-gray-500 mr-3" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="• • • • • • • •"
                            className="w-full p-2 pr-10 outline-none text-sm placeholder:text-gray-400 placeholder:text-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            // className=" text-gray-500 cursor-pointer"
                            className="absolute right-3 text-gray-500 cursor-pointer"

                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                        <label className="flex items-center gap-2 ">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Se souvenir de moi
                        </label>
                        <button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            className=" hover:underline"
                        >
                            Mot de passe oublié ?
                        </button>
                    </div>

                    {/* Bouton */}
                    <button
                        type="submit"
                        className="w-full bg-bleu text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                        Se connecter
                    </button>

                    <div className="mt-4 text-center text-sm font-bold">
                        <span> Je n'ai pas de compte ? </span>
                        <button className="bleu hover:underline" onClick={() => navigate('/register')}>
                            Créer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
