import { useState } from "react";
import domaine from "../assets/consultstep.png";

const propositions = [
    { id: 1, label: "Droit des affaires", image: domaine },
    { id: 2, label: "Fiscalité", image: domaine },
    { id: 3, label: "Creation d'entreprise", image: domaine },
    { id: 4, label: "Droit des affaires", image: domaine },
    { id: 5, label: "Propriété intellectuelle", image: domaine },
    { id: 6, label: "Conformité règlementaire", image: domaine },
];

const Etape1Consultation = ({ onNext, onBack }) => {
    const [selected, setSelected] = useState([]);

    const toggleSelect = (id) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        const selectedItems = propositions.filter(p => selected.includes(p.id));
        onNext({ typeConsultation: selectedItems });
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="merriweather-sans text-center">
                <h2 className=" text-xl md:text-2xl  font-bold">Dans quel domaine souhaitez-vous être accompagné ? </h2>
                <p className="text-sm md:text-lg ">Choisissez le service pour lequel vous voulez la consultation d’un expert</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {propositions.map(item => (
                    <div
                        key={item.id}
                        onClick={() => toggleSelect(item.id)}
                        className={`cursor-pointer border rounded-lg p-2 flex items-center gap-4 transition
                        ${selected.includes(item.id) ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"}`}>
                        <img src={item.image} alt={item.label} className="w-8 object-contain" />
                        <p className="font-medium text-sm">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="">
                <button onClick={handleSubmit} className="bg-bleu text-white py-2 px-6 rounded  mb-3">Suivant → </button>
            </div>
        </div>
    );
};

export default Etape1Consultation;
