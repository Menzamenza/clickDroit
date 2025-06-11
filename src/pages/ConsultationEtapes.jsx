import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Etape1Consultation from "../components/Etape1Consultation";
import Etape2Consultation from "../components/Etape2Consultation";
import Etape3Consultation from "../components/Etape3Consultation";
import Etape4Consultation from "../components/Etape4Consultation";

const ConsultationEtapes = () => {
    const [etape, setEtape] = useState(1);
    const [data, setData] = useState({
        typeConsultation: null,
        domaine: null,
        date: null,
        heureDebut: "",
        heureFin: "",
        infosPerso: null,
    });

    const handleNext = (stepData = {}) => {
        setData((prev) => ({ ...prev, ...stepData }));
        setEtape((prev) => prev + 1);
    };

    const navigate = useNavigate();

    const handlePrev = () => {
        if (etape === 1) {
            navigate("/consultation");
        } else {
            setEtape((prev) => Math.max(prev - 1, 1));
        }
    };

    const renderProgressBar = () => {
        const total = 4;
        return (
            <div className="flex justify-center gap-2 my-6">
                {Array.from({ length: total }).map((_, i) => (
                    <div key={i} className={`w-12 h-2 rounded ${i < etape ? "bg-blue-500" : "bg-gray-300"}`} />
                ))}
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <div className="w-full lg:w-2/3 mx-auto px-6 pt-30">
                <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2 md:gap-0">
                    <button onClick={handlePrev} className="border border-gray-300 text-sm bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
                        ← Retour
                    </button>
                    <p className="text-xl font-semibold text-center">Prise de rendez-vous</p>
                    <div className="hidden md:block md:w-20" />
                </div>

                {renderProgressBar()}

                {etape === 1 && (
                    <Etape1Consultation
                        onNext={(val) => handleNext({ typeConsultation: val })}
                        onBack={handlePrev}
                    />
                )}
                {etape === 2 && (
                    <Etape2Consultation
                        domaine={data.domaine}
                        onChange={(val) => setData((prev) => ({ ...prev, domaine: val }))}
                        onNext={handleNext}
                    />
                )}
                {etape === 3 && (
                    <Etape3Consultation
                        date={data.date}
                        heureDebut={data.heureDebut}
                        heureFin={data.heureFin}
                        onChange={(values) => setData((prev) => ({ ...prev, ...values }))}
                        onNext={handleNext}
                        onBack={handlePrev}
                    />
                )}
                {etape === 4 && (
                    <Etape4Consultation
                        infosPerso={data.infosPerso}
                        onChange={(val) => setData((prev) => ({ ...prev, infosPerso: val }))}
                        onNext={handleNext}
                    />
                )}

                {etape > 4 && <p className="text-center text-green-600 mt-6">Merci d'avoir complété les étapes !</p>}
            </div>
        </>
    );
};

export default ConsultationEtapes;
