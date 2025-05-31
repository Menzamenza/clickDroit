import { useState } from "react";
import { FaPhone, FaGoogle } from "react-icons/fa";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa6";
const Etape7 = ({ value, onChange, onNext }) => {
    const [form, setForm] = useState(value || {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onChange(form);
        onNext();
    };

    return (
        <div className=" w-full md:max-w-1/2 mx-auto space-y-6 text-center px-4">
            <div>
                <h2 className="text-xl font-extrabold merriweather-sans">Renseigner vos informations personnelles</h2>
                <p className="text-gray-600 text-sm">
                    Ces infos sont essentielles pour créer votre espace et faciliter la création de votre entreprise.
                </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg bg-white shadow-md space-y-4">
                <button
                    className="flex items-center justify-center gap-2 w-full bg-[#FCD9D9] text-red-600 font-bold py-2 rounded hover:bg-red-300 transition border border-red"
                // onClick={() => {
                //     alert("Connexion avec Google à venir !");
                // }}
                >
                    <FaGoogle /> Continuer avec Google
                </button>

                {/* Séparateur "ou" */}
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-400" />
                    <span className="mx-3 text-gray-400 text-sm">ou</span>
                    <div className="flex-grow h-px bg-gray-400" />
                </div>

                <div className="space-y-4 text-left">
                    <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                        <FaRegUser className="text-gray-500 mr-3" />
                        <input
                            name="prenom"
                            type="text"
                            placeholder="ex : Saliou"
                            value={form.prenom}
                            onChange={handleInputChange}
                            className="w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                        <FaRegUser className="text-gray-500 mr-3" />
                        <input
                            name="nom"
                            type="text"
                            placeholder="ex : Ndiaye"
                            value={form.nom}
                            onChange={handleInputChange}
                            className="w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                        <FaRegEnvelope className="text-gray-500 mr-3" />
                        <input
                            name="email"
                            type="email"
                            placeholder="ex : saliou@gmail.com"
                            value={form.email}
                            onChange={handleInputChange}
                            className="w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md bg-white px-3 py-2">
                        <FaPhone className="text-gray-500 mr-3" />
                        <input
                            name="telephone"
                            type="tel"
                            placeholder="ex : +221 77 123 45 67"
                            value={form.telephone}
                            onChange={handleInputChange}
                            className="w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                    </div>
                </div>
            </div>

            <button
                className=" bg-bleu text-sm text-white p-3 rounded"
                onClick={handleSubmit}>
                Aller à ma demande →
            </button>

            <div className="text-center">
                <p className="text-sm mt-4 underline">
                    J’ai déjà un compte ?{" "}
                    <a href="/connexion" className="hover:underline">
                        Me connecter
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Etape7;
