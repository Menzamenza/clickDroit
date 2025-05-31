
import { FaArrowRight } from "react-icons/fa";

const Etape3 = ({ secteur, onChange, onNext }) => {
    const secteurs = [
        "Transports et Logistiques",
        "Commerce international ",
        "Service aux entreprises",
        "Informatiques",
        "Agricole",
        "Autres secteurs",
    ];

    return (
        <div>
            <p className="text-2xl font-extrabold mb-6 text-center merriweather-sans">
                Dans quel secteur d’activité <br /> évoluez-vous?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {secteurs.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            onChange(item);
                            onNext();
                        }}
                        className={`border rounded-lg hover:shadow p-4 text-sm cursor-pointer transition flex items-center justify-between ${secteur === item
                            ? "border-blue-600 ring-2 ring-blue-200"
                            : "border-gray-300"
                            }`}>

                        <span className="font-medium">{item}</span>
                        <FaArrowRight className="" />
                    </div>
                ))}
                <div className="flex flex-col items-center justify-center col-span-1 md:col-span-3">
                    <p className=" text-sm bg-bleuClair p-3 rounded mb-3 w-full ">Pour plus de clarté, seuls les secteurs les plus courants sont affichés, mais notre accompagnement s'adapte à toute activité.</p>
                </div>
            </div>
        </div>
    );
};

export default Etape3;
