
import { FaArrowRight } from "react-icons/fa";

const Etape4 = ({ situation, onChange, onNext }) => {
  const options = [
    "Salarié",
    "Entrepreneur",
    "Demandeur d'emploi",
    "Étudiant",
    "Autres",
  ];

  return (
    <div className="px-6">
      <h2 className="text-2xl font-extrabold merriweather-sans mb-6 text-center">
        Quelle est votre situation actuelle ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              onChange(option); 
              onNext();         
            }}
            className={`border rounded-lg p-3 text-sm hover:shadow cursor-pointer transition flex items-center justify-between ${
              situation === option
                ? "border-blue-600 ring-2 ring-blue-200"
                : "border-gray-300"
            }`}
          >
            <span className="font-medium">{option}</span>
            <FaArrowRight className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Etape4;
