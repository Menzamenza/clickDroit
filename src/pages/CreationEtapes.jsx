import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Etape1 from "../components/Etapes1Creation";
import Etape2 from "../components/Etapes2NomEntreprise";
import Navbar from "../components/Navbar";
import Etape3 from "../components/Etapes3Secteurs";
import Etape4 from "../components/Etapes4Situation";
import Etape5 from "../components/Etapes5Deja";
import Etapes6 from "../components/Etapes6Packs";
import Etape7 from "../components/Etapes7Infos";

const CreationEtapes = () => {
    const [etape, setEtape] = useState(1);
    const [data, setData] = useState({
        choixSeulOuPlusieurs: null,
        nomEntreprise: "",
        secteur: null,
        situation: null,
        dejaCree: null,
        formule: null,
        infosPerso: null,
    });

    const handleNext = (stepData = {}) => {
        setData((prev) => ({ ...prev, ...stepData }));
        setEtape((prev) => prev + 1);
    };

    const navigate = useNavigate();
    const handlePrev = () => {
        if (etape === 1) {
            navigate("/creation");
        } else {
            setEtape((prev) => Math.max(prev - 1, 1));
        }
    };

    const handleSkip = () => {
        setEtape((prev) => prev + 1);
    };

    const renderProgressBar = () => {
        const total = 7;
        return (
            <div className="flex justify-center gap-2 my-6">
                {Array.from({ length: total }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-12 h-2 rounded ${i < etape ? "bg-blue-500" : "bg-gray-300"}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <div className="w-full lg:w-2/3 mx-auto px-6 pt-30">
                <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2 md:gap-0">
                    <button
                        onClick={handlePrev}
                        className="border border-gray-300 text-sm bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
                        ←Retour
                    </button>
                    <p className="text-xl font-semibold text-center text-nowrap">Création d’entreprise</p>

                    <div className="hidden md:block md:w-20 " /> {/* Espace vide pour équilibrer */}
                </div>
                {renderProgressBar()}

                {/* Rendu conditionnel des étapes */}
                {etape === 1 && (
                    <Etape1
                        onNext={(choix) => handleNext({ choixSeulOuPlusieurs: choix })}
                        onSkip={handleSkip}
                        onBack={handlePrev}

                    />
                )}

                {etape === 2 && (
                    <Etape2
                        nomEntreprise={data.nomEntreprise}
                        onChange={(nom) => setData((prev) => ({ ...prev, nomEntreprise: nom }))}
                        onNext={() => handleNext()}
                        onSkip={handleSkip}
                    />
                )}
                {etape === 3 && (
                    <Etape3
                        secteur={data.secteur}
                        onChange={(secteur) => setData((prev) => ({ ...prev, secteur }))}
                        onNext={handleNext}
                    />
                )}
                {etape === 4 && (
                    <Etape4
                        situation={data.situation}
                        onChange={(situation) => setData((prev) => ({ ...prev, situation }))}
                        onNext={handleNext}
                    />
                )}
                {etape === 5 && (
                    <Etape5
                        dejaCree={data.dejaCree}
                        onChange={(value) => setData((prev) => ({ ...prev, dejaCree: value }))}
                        onNext={handleNext}
                    />
                )}
                {etape === 6 && (
                    <Etapes6
                        formule={data.formule}
                        onChange={(value) => setData((prev) => ({ ...prev, formule: value }))}
                        onNext={handleNext}
                    />
                )}
                {etape === 7 && (
                    <Etape7
                        value={data.infosPerso}
                        onChange={(value) => setData((prev) => ({ ...prev, infosPerso: value }))}
                        onNext={handleNext}
                    />
                )}


                {etape <= 7 && (
                    <div className=" text-center mt-2">
                        <button
                            onClick={handleSkip}
                            className="text-sm text-gray-600 underline">
                            Choisir plus tard
                        </button>
                    </div>
                )}

                {etape > 7 && <p className="text-center text-green-600 mt-6">Merci d'avoir complété les étapes !</p>}
            </div>
        </>
    );
};

export default CreationEtapes;
