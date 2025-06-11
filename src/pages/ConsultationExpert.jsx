import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import hero2 from "../assets/hero2.png";
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import { domainesDatas, pourquoiConsultation } from "../CardDatas/pourquoiData";
import temoinsdata from "../CardDatas/temoinDatas";
import secteursData, { valeurs } from "../CardDatas/secteursData";


function Consultation() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/consultation/etapes");
    };
    return (
        <>
            <Navbar />
            <div>
                {/* Première section de la page */}
                <section className="relative bg-bleuClair pt-20 lg:pt-10 pb-20 px-6 overflow-hidden">
                    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left my-10 gap-2">

                        {/* Colonne texte */}
                        <div className="flex-1 ml-0 lg:ml-12">
                            <p className="merriweather-sans leading-snug text-2xl lg:text-4xl font-bold">
                                Consultation d'expert <br /> juridique à portée de clic.
                            </p>
                            <p className="font-medium text-base lg:text-lg leading-loose mt-4">
                                Obtenez des conseils personnalisés auprès de nos experts juridiques pour sécuriser votre entreprise et prendre les bonnes décisions.
                            </p>
                            <div className="flex flex-col md:flex-row mt-3 gap-5 items-center mt-2">
                                <Button
                                    onClick={handleClick}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Prendre rendez-vous maintenant
                                </Button>
                                <Button className="rounded">En savoir plus</Button>
                            </div>
                        </div>

                        {/* Image débordante */}
                        <div className="relative flex-1">
                            <img
                                src={hero2}
                                alt="hero"
                                className="w-full max-w-none lg:translate-x-24 "
                            />
                        </div>

                    </div>
                </section>

                {/* deuxieme section */}
                <section className='px-6'>
                    <div className='merriweather-sans  md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-20'>
                        <p className=' text-xl md:text-4xl font-extrabold  text-center'>Pourquoi consulter un expert juridique ?</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-15 justify-center'>
                            {pourquoiConsultation.map(({ id, titre, desc, image }) => (
                                <div
                                    key={id}
                                    className="flex flex-col  border-2 rounded-lg border-gray-300 p-4">
                                    <div className="">
                                        <img src={image} alt={titre} className="" />
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <p className="text-sm font-bold text-gradient">{titre}</p>
                                        <p className="text-gray-700 text-xs md:text-sm">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* domaines section */}
                <section className='px-6 bg-[#F2F2F2] pt-10'>
                    <div className='merriweather-sans  md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-20'>
                        <p className=' text-xl md:text-4xl font-extrabold  text-center'>Nos domaines d'expertise</p>
                        <p className='text-sm md:text-lg text-center mt-4'> Nos experts sont spécialisés dans différents domaines du droit pour répondre à tous vos besoins entrepreneuriaux et professionnels.</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-15 justify-center'>
                            {domainesDatas.map(({ id, titre, desc, image }) => (
                                <div
                                    key={id}
                                    className="bg-white flex flex-col  border rounded-lg border-gray-300 p-4">
                                    <div className="">
                                        <img src={image} alt={titre} className="" />
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <p className="text-sm font-bold text-gradient">{titre}</p>
                                        <p className="text-gray-700 text-xs md:text-sm">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* comment section */}
                <section className='flex flex-col items-center justify-center px-6'>
                    <div className=' md:w-2/3 mx-auto flex flex-col  justify-between items-center my-5 lg:my-15'>
                        <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Comment ça marche?</p>
                    </div>

                    <div className="relative md:w-2/3 w-full mb-16">
                        {/* Ligne horizontale pour desktop */}
                        <div className="hidden md:block absolute top-6 left-[6%] w-[68%] h-1 bg-gray-200 z-0" />
                        {/* Ligne verticale pour mobile */}
                        {/* <div className="block md:hidden absolute left-4 top-12 h-[78%] w-1 bg-gray-200 z-0" /> */}

                        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 relative z-10">
                            {[
                                {
                                    id: 1,
                                    titre: "Soumission de votre demande",
                                    desc: "Décrivez précisément votre besoin juridique, choisissez un domaine d'expertise et proposez un créneau horaire qui vous convient.",
                                },
                                {
                                    id: 2,
                                    titre: "Confirmation du rendez-vous",
                                    desc: "Notre équipe analyse votre demande et vous confirme le rendez-vous sous 24-48h, en vous proposant l'expert le plus qualifié.",
                                },
                                {
                                    id: 3,
                                    titre: "Consultation avec l'expert",
                                    desc: "Échangez par téléphone ou visioconférence avec votre expert dédié qui analysera votre situation et vous apportera des solutions concrètes.",
                                },
                                {
                                    id: 4,
                                    titre: "Suivi personnalisé consultation",
                                    desc: "Recevez un rapport détaillé avec des recommandations pratiques et bénéficiez d'un suivi post-consultation pour vos questions additionnelles.",
                                },
                            ].map((step) => (
                                <div
                                    key={step.id}
                                    className="flex flex-row md:flex-col gap-5 md:gap-0 w-full md:w-auto">
                                    <div className="w-25 h-12 md:w-12 rounded bg-blue-500 text-white flex items-center justify-center text-xl md:text-2xl font-bold mb-3">
                                        {step.id}
                                    </div>

                                    <div>
                                        <h4 className="font-extrabold text-xs bleu">
                                            {step.titre}
                                        </h4>
                                        <p className="text-xs text-gray-800 mt-3">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* valeurs */}
                <section className='bg-[#0165CC] lg:flex flex-col items-center justify-center px-6 text-white py-15'>
                    <div className=' md:w-2/3 mx-auto flex flex-col  justify-between items-center'>
                        <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>La valeur de nos consultations d'experts</p>
                    </div>
                    <div className="w-full md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                        {valeurs.map(({ id, image, titre, description }) => (
                            <div
                                key={id}
                                className="rounded-xl group flex flex-col bg-[#015BB8] p-6 transition-all duration-400 hover:shadow-sm hover:shadow-white hover:border cursor-default">
                                {/* Ligne image + chiffre */}
                                <img src={image} alt={titre} className="w-10 h-10 object-contain" />
                                
                                <h3 className="text-sm font-extrabold mb-1">{titre}</h3>
                                <p className=" text-xs">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* clients section */}
                <section className='flex flex-col items-center justify-center px-6'>
                    <div className='md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-10'>
                        <p className='merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Ce que disent nos clients</p>
                    </div>
                    <div className="w-full md:w-2/3 mx-auto my-10">
                        {/* Version mobile - défilement horizontal */}
                        <div className="md:hidden overflow-x-auto pb-4">
                            <div className="flex gap-4" style={{ minWidth: `${temoinsdata.length * 300}px` }}>
                                {temoinsdata.map(({ id, image, nom, entrep, description }) => (
                                    <div
                                        key={id}
                                        className="w-[280px] flex-shrink-0 flex flex-col border border-gray-200 p-3 transition-all duration-400 hover:shadow-md hover:shadow hover:border-[#017AF7] cursor-default">
                                        <div className="flex items-center gap-4 mb-4">
                                            <img src={image} alt={entrep} className="" />
                                            <div>
                                                <p className="text-xs font-bold t">{nom}</p>
                                                <h3 className="text-xs bleu mb-1">{entrep}</h3>
                                            </div>
                                        </div>
                                        <p className="text-xs font-thin leading-loose">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Version desktop - grille normale */}
                        <div className="hidden md:grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                            {temoinsdata.map(({ id, image, nom, entrep, description }) => (
                                <div
                                    key={id}
                                    className="flex flex-col border border-gray-200 p-3 transition-all duration-400 hover:shadow-md hover:shadow hover:border-[#017AF7] cursor-default">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img src={image} alt={entrep} className="" />
                                        <div>
                                            <p className="text-xs font-bold t">{nom}</p>
                                            <h3 className="text-xs bleu mb-1">{entrep}</h3>
                                        </div>
                                    </div>
                                    <p className="text-xs font-thin leading-loose">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* last section */}
                <section className='bg-bleuClair flex flex-col items-center justify-center px-6'>
                    <div className='md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-10'>
                        <p className='merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Prêt à résoudre vos défis juridiques ?</p>
                    </div>
                    <div className='flex flex-col items-center justify-center mb-15'>
                        <button className='text-sm text-white bg-blue-500 p-3 rounded '>Prendre rendez-vous maintenant</button>
                    </div>
                </section>

                {/* footer */}
                <section className=''>
                    <Footer />
                </section>
            </div>
        </>
    )
}
export default Consultation;