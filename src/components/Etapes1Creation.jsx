import { useState } from "react";
import seul from "../assets/seul.png";
import plusieurs from "../assets/plusieurs.png";

const Etape1 = ({ onNext, onSkip, onBack }) => {
    const [selection, setSelection] = useState(null)

    const cartes = [
        {
            id: "seule",
            titre: "Je me lance seule",
            description: "Je crée une S.A.S.U.",
            image: seul,
        },
        {
            id: "plusieurs",
            titre: "On se lance à plusieurs",
            description: "Je crée une S.A.S.",
            image: plusieurs,
        },
    ];

    return (
        <>
            <div>
                <p className=" merriweather-sans text-2xl font-extrabold mb-6 text-center">
                    Bienvenue, vous créez votre <br /> société seule ou à plusieurs ?
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 mb-8">
                    {cartes.map((carte) => (
                        <div
                            key={carte.id}

                            onClick={() => onNext(carte.id)}
                            className={` cursor-pointer border rounded-lg p-2 shadow-md hover:shadow-lg transition 
                                ${selection === carte.id ? "border-blue-600 ring-2 ring-blue-400" : "border-gray-300"}`}
                            style={{ width: 200 }}>
                            <img
                                src={carte.image}
                                alt={carte.titre}
                                className=" mx-auto mb-4"
                            />
                            <h3 className="font-bold text-center">{carte.titre}</h3>
                            <p className="text-center text-gray-400 mt-1 text-sm">{carte.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Etape1;
