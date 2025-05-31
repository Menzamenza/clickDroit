import { FaArrowRight } from "react-icons/fa";

const Etape5 = ({ dejaCree, onChange, onNext }) => {
  const options = [
    "Non, c’est une première",
    "Oui, une micro-entreprise",
    "Oui, une société",
  ];

  return (
    <div>
      <p className="text-2xl font-extrabold mb-6 text-center merriweather-sans">
        Avez-vous déjà créé une entreprise ?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              onChange(item);
              onNext();
            }}
            className={`border rounded-lg hover:shadow p-4 text-sm cursor-pointer transition flex items-center justify-between ${
              dejaCree === item
                ? "border-blue-600 ring-2 ring-blue-200"
                : "border-gray-300"
            }`}
          >
            <span className="font-medium">{item}</span>
            <FaArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Etape5;
