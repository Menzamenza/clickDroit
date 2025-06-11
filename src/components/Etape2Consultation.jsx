import { useState } from "react";

const Etape2Consultation = ({ onNext, value }) => {
    const [motif, setMotif] = useState(value || "");

    const handleSubmit = () => {
        onNext({ motifConsultation: motif });
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="merriweather-sans text-center">
                <h2 className="text-xl md:text-2xl font-bold ">Pourquoi souhaitez-vous consulter un expert ? </h2>
                <p className="text-sm md:text-lg ">
                    Donner nous une description de votre problème pour mieux facilité la consultation.
                </p>
            </div>

            <textarea
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                placeholder="Description ici..."
                rows={5}
                className="w-full p-3 max-w-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="">
                <button onClick={handleSubmit} className="bg-bleu text-white py-2 px-6 rounded  mb-3">Suivant → </button>
            </div>
        </div>
    );
};

export default Etape2Consultation;
