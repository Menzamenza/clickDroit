import { useState } from "react";

const Etape2 = ({ onNext, onSkip }) => {
    const [nom, setNom] = useState("");

    return (
        <div >
            <h2 className="text-xl font-semibold mb-6 text-center merriweather-sans">
                Quel est le nom de votre entreprise
            </h2>
            <div className="flex flex-col items-center">

                <input
                    type="text"
                    placeholder="Ex : Oukhiri Digital"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="w-full md:w-100 border border-gray-300 rounded-lg p-3 mb-6 placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                />

                <p className=" text-sm bg-bleuClair p-3 rounded mb-3 w-full md:w-100">Si vous n'avez pas encore choisi ou que vous n'êtes pas sûr, vous pourrez compléter ou modifier cette information plus tard.</p>
            </div>


            <div className="flex justify-center">

                <button
                    className="bg-blue-600 text-white py-2 px-6 rounded disabled:opacity-50 mb-3"
                    onClick={() => onNext({ nomEntreprise: nom })}
                    disabled={!nom}>
                    Suivant →
                </button>
            </div>
        </div>
    );
};

export default Etape2;
