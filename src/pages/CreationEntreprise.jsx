import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import creerEntrepCartes from '../CardDatas/creerEntrepData';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { pourquoiDatas } from '../CardDatas/pourquoiData';
import CarouselCartes from '../components/CarousselCartes';
import Onglets from '../components/Juridique';
import OngletsPacks from '../components/Pack';

const CreationEntreprise = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelect = (id) => {
        setSelectedCard(id);
    };
    return (
        <>
            <Navbar />

            {/* premiere section */}
            <section className='py-20 bg-[#F9F9FA] flex flex-col items-center justify-center px-6'>
                <div className=' md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-20'>
                    <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Créer votre entreprise sans <br /> contrainte</p>
                    <p className='text-sm md:text-lg text-center mt-4'>Une solution 100% en ligne pour formaliser votre entreprise en Afrique en quelques clics, sans déplacements et avec un suivi personnalisé.</p>
                </div>

                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {creerEntrepCartes.map((carte) => (
                        <div
                            key={carte.id}
                            onClick={() => handleSelect(carte.id)}
                            className={`cursor-pointer border ${selectedCard === carte.id ? 'border-blue-500' : 'border-gray-300'} 
                            bg-white shadow-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}>
                            <div className="flex items-center justify-between space-x-4">
                                <div className='flex items-center space-x-4'>
                                    <img src={carte.image} alt={carte.entrep} className="object-cover rounded w-10 h-10" />
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-800">{carte.entrep}</h3>
                                        <p className="text-xs text-gray-600">{carte.description}</p>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <ArrowRightIcon className="w-5 h-5  hover:text-blue-700 transition" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* deuxieme section */}
            <section className='px-6'>
                <div className='merriweather-sans  md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-20'>
                    <p className=' text-xl md:text-4xl font-extrabold  text-center'>Pourquoi créer votre entreprise avec nous?</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-15 '>
                        {pourquoiDatas.map(({ id, titre, desc, image, extra }) => (
                            <div
                                key={id}
                                className="flex flex-col justify-between  border-2 rounded-lg border-gray-300 p-4">
                                <div className="">
                                    <img src={image} alt={titre} className="" />
                                </div>

                                <div className="flex flex-col mt-4 ">
                                    <p className="text-sm md:text-base font-bold ">{titre}</p>
                                    <p className="text-gray-700 text-xs md:text-sm">{desc}</p>
                                </div>
                                <p className="bleu text-xs md:text-sm">{extra}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* troisieme section */}
            <section className=' bg-bleuClair flex flex-col items-center justify-center px-6'>
                <div className=' md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-20'>
                    <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Comment créer votre entreprise?</p>
                    <p className='text-sm md:text-lg text-center mt-4'>Un processus guidé et simplifié pour vous faire gagner du temps.</p>
                </div>

                <div className="relative md:w-2/3 w-full mb-16">
                    {/* Ligne horizontale pour desktop */}
                    <div className="hidden md:block absolute top-6 left-[6%] w-[78%] h-1 bg-gray-200 z-0" />
                    {/* Ligne verticale pour mobile */}
                    <div className="block md:hidden absolute left-5 top-12 h-[68%] w-1 bg-gray-200 z-0" />


                    <div className="flex flex-col md:flex-row md:justify-between  gap-10 md:gap-0 relative z-10">
                        {[
                            {
                                id: 1,
                                titre: "Choisissez votre forme juridique",
                                desc: "SARL, SAS, SA, EI et autres options disponibles",
                            },
                            {
                                id: 2,
                                titre: "Complétez le questionnaire",
                                desc: "Renseignez les informations de votre entreprise",
                            },
                            {
                                id: 3,
                                titre: "Téléchargez les documents",
                                desc: "CNI, certificat de résidence et autres justificatifs",
                            },
                            {
                                id: 4,
                                titre: "Valider et payer",
                                desc: "Confirmez les détails et procédez au paiement sécurisé",
                            },
                            {
                                id: 5,
                                titre: "Recevez vos documents",
                                desc: "Obtenez tous vos documents officiels d'entreprise",
                            },
                        ].map((step) => (

                            <div
                                key={step.id}
                                className="flex flex-row md:flex-col gap-5 md:gap-0 w-full md:w-auto">
                                <div className="w-12 h-12 rounded bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-3">
                                    {step.id}
                                </div>

                                <div>
                                    <h4 className="font-extrabold text-xs text-gray-800">
                                        {step.titre}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-3">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-center justify-center mt-10'>
                        <button className='text-sm text-white bg-blue-500 p-3 rounded '>Creer mon entreprise maintenant</button>
                    </div>
                </div>
            </section>

            {/* quatrieme section */}
             <section className='px-6 my-20'>
                <div className=' w-full md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-10'>
                    <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Choisissez la forme juridique adaptée</p>
                    <p className='text-sm md:text-lg text-center mt-4'>Découvrez les différentes structures juridiques disponibles et leurs spécificités.</p>
                </div>
               
               <Onglets />
            </section>

            {/* formules section */}
            <section className=' bg-bleuClair px-6 py-20'>
                <div className=' w-full md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-10'>
                    <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Nos formules d'accompagnement</p>
                    <p className='text-sm md:text-lg text-center mt-4'>Des solutions à vos besoins et à votre budget</p>
                </div>
               
               <OngletsPacks />
            </section>
            
            {/* last but one section */}
            <section className='px-6 my-20'>
                <div className=' w-full md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-10'>
                    <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Ce que disent nos clients</p>
                </div>
               
                <CarouselCartes />
            </section>


            {/* last section */}
            <section className=' bg-bleuClair flex flex-col items-center justify-center px-6'>
                <div className=' md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-10'>
                    <p className=' merriweather-sans text-xl md:text-4xl font-extrabold  text-center'>Prêt à donner vie à votre projet d'entreprise?</p>
                    <p className='text-sm md:text-lg text-center mt-4'>Notre équipe d'experts vous accompagne à chaque étape du processus pour vous garantir une création d'entreprise rapide, sécurisée et sans tracas.</p>
                </div>
                <div className='flex flex-col items-center justify-center mb-15'>
                    <button className='text-sm text-white bg-blue-500 p-3 rounded '>Creer mon entreprise maintenant</button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CreationEntreprise;
