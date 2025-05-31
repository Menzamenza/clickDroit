import { useState } from "react";
const Etapes6 = ({ value, onChange, onNext }) => {
    const packs = [
        {
            nom: "Pack CHAMPION",
            prix: "99000 FCFA TTC",
            options: [
                { label: "Dosssier complet", isGris: false },
                { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                { label: "Immatriculation NINEA et RCCM", isGris: false },
                { label: "Accès à un espace client pour suivre l’avancement de votre dossier", isGris: false },
                { label: "Assistance téléphonique", isGris: false },
                { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
            ],
        },
        {
            nom: "Pack Succes",
            prix: "69000 FCFA TTC",
            options: [
                { label: "Dosssier complet", isGris: false },
                { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                { label: "Immatriculation NINEA et RCCM", isGris: false },
                { label: "Accès à un espace client pour suivre l’avancement de votre dossier", isGris: false },
                { label: "Assistance téléphonique", isGris: false },
                { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
            ],
        },
        {
            nom: "Pack Premium",
            prix: "49000 FCFA TTC",
            options: [
                { label: "Dosssier complet", isGris: false },
                { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                { label: "Immatriculation NINEA et RCCM", isGris: false },
                { label: "Accès à un espace client pour suivre l’avancement de votre dossier", isGris: false },
                { label: "Assistance téléphonique", isGris: true },
                { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
            ],
        }
    ]

    const handleSelect = (pack) => {
        onChange(pack);
        onNext();
    };
    const [packActif, setPackActif] = useState(null);

    return (
        <div className="lg:grid lg:grid-cols-3 gap-6 overflow-x-auto scrollbar-custom flex lg:flex-none space-x-4 lg:space-x-0 px-1 lg:px-0">

            {packs.map((pack, index) => (
                <div
                    key={index}
                    onClick={() => handleSelect(pack)}
                    className={`max-w-[100%] lg:max-w-full bg-white shadow rounded-xl flex-shrink-0 lg:flex-shrink justify-between items-center  cursor-pointer transition duration-300 
                        ${value?.nom === pack.nom ? "border-2 border-bleu" : "border border-gray-200"}`}>

                    {/* Titre du pack */}
                    <div className={`w-full bg-gray-200 p-3 mb-2 ${packActif === index ? "bg-pack" : "bg-gray-200 "}`}>
                        <p className="text-lg lg:text-xl font-extrabold merriweather-sans text-center">
                            {pack.nom}
                        </p>
                    </div>

                    {/* Contenu du pack */}
                    <div className="p-3 w-full flex flex-col justify-between">
                        {/* Prix */}
                        <div className="border-b border-gray-300 mb-3 text-center">
                            <p className="bleu font-extrabold text-xl merriweather-sans">
                                {pack.prix}
                            </p>
                        </div>

                        {/* Liste scrollable */}
                        <div className="  mb-4 pr-2 ">
                            <ul className="list-disc list-inside text-xs space-y-1">
                                {pack.options.map((opt, i) => (
                                    <li
                                        key={i}
                                        className={`text-start ${opt.isGris
                                            ? "text-gray-400 marker:text-gray-400  marker:text-xl"
                                            : "text-gray-800 marker:text-blue-500 marker:text-xl "
                                            }`}>
                                        {opt.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bouton */}
                        <button className="bg-bleu hover:bg-blue-700 text-white text-sm py-2 rounded transition w-full">
                            Choisir ce pack
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Etapes6;
