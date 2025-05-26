import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from "../assets/client.png";
import { useState } from "react";
// Données des cartes
const cartes = [
    {
        id: 1,
        nom: "Alpha Ibrahima Sow",
        titre: "CEO InnovLab",
        desc: `"Clic Droit Afrique a transformé mon expérience de création d'entreprise. En moins de 5 jours, ma SASU était créée sans que j'aie à me déplacer. Le conseiller a été très réactif et professionnel, m'aidant à chaque étape du processus. Je recommande vivement ce service à tous les entrepreneurs !"`,
        image: client
    },
    {
        id: 2,
        nom: "Alpha Ibrahima Sow",
        titre: "CEO InnovLab",
        desc: `"Clic Droit Afrique a transformé mon expérience de création d'entreprise. En moins de 5 jours, ma SASU était créée sans que j'aie à me déplacer. Le conseiller a été très réactif et professionnel, m'aidant à chaque étape du processus. Je recommande vivement ce service à tous les entrepreneurs !"`,
        image: client
    },
    {
        id: 3,
        nom: "Alpha Ibrahima Sow",
        titre: "CEO InnovLab",
        desc: `"Clic Droit Afrique a transformé mon expérience de création d'entreprise. En moins de 5 jours, ma SASU était créée sans que j'aie à me déplacer. Le conseiller a été très réactif et professionnel, m'aidant à chaque étape du processus. Je recommande vivement ce service à tous les entrepreneurs !"`,
        image: client
    }
];

const PrevArrow = ({ onClick, clicked, setClicked }) => {
    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
        onClick(); 
    };

    return (
        <div
            onClick={handleClick}
            className={`absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow cursor-pointer transition-all duration-300 ${clicked ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
        >
            <FaArrowLeft />
        </div>
    );
};

const NextArrow = ({ onClick, clicked, setClicked }) => {
    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
        onClick(); 
    };

    return (
        <div
            onClick={handleClick}
            className={`absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow cursor-pointer transition-all duration-300 ${clicked ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                }`}
        >
            <FaArrowRight />
        </div>
    );
};



// Composant principal
const CarouselCartes = () => {
    const [prevClicked, setPrevClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: (
            <NextArrow clicked={nextClicked} setClicked={setNextClicked} />
        ),
        prevArrow: (
            <PrevArrow clicked={prevClicked} setClicked={setPrevClicked} />
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="relative w-full md:w-2/3 items-center mx-auto px-4"> 
            <Slider {...settings}>
                {cartes.map((carte) => (
                    <div key={carte.id} className="px-4">
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden p-5 ">
                            <div className="flex flex-col lg:flex-row items-center gap-3 mb-2">
                                <img
                                    src={carte.image}
                                    alt={carte.titre}
                                    className=""
                                />
                                <div className="">
                                    <p className="text-sm font-semibold text-gray-800">
                                        {carte.nom}
                                    </p>
                                    <p className="text-sm text-gray-600">{carte.titre}</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600">{carte.desc}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselCartes;
