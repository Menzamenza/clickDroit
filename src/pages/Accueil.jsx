import Navbar from '../components/Navbar';
import hero from "../assets/Rectangle 1.png";
import pret from "../assets/pret.png";
import vector1 from "../assets/Vector 7.png";
import vector2 from "../assets/Vector 6.png";
import entrep from "../assets/500E.png";
import accomp from "../assets/3000E.png";
import france1 from "../assets/France1.png";
import france2 from "../assets/France2.png";
import teranga from "../assets/Teranga.png";
import baobab from "../assets/baobab.png";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import location from "../assets/local.png";
import contactImage from "../assets/img.png";
import Button from '../components/Button';
import { carteshero } from '../CardDatas/dataHerocard';
import { cartesconf } from '../CardDatas/confData';
import servicesData from '../CardDatas/servicesData';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import secteursData from '../CardDatas/secteursData';
import temoinsdata from '../CardDatas/temoinDatas';
import { blogData } from '../CardDatas/blogData';
import Footer from '../components/Footer';



function Home() {
    return (
        <>
            <Navbar />
            <div className=' '>

                {/* Première section de la page */}
                <section className=" text-white flex flex-col items-center justify-center hero pt-30 pb-20 px-6 bg-gradient">
                    <div className='w-full md:w-2/3 flex flex-col lg:flex-row justify-between items-center text-center md:text-left gap-4 my-10'>
                        <div className=''>
                            <p className='merriweather-sans leading-tight text-3xl md:text-5xl font-bold'>La plateforme qui <br /> <span className='bg-[#EBC000] transform -rotate-4 rounded inline-block'>simplifie</span> la vie des  <br />entrepreneurs.</p>
                            <p className='font-bold text-base md:text-lg  leading-loose'>Confiez vos démarches juridiques, fiscales et administratives à des experts spécialisés.</p>
                        </div>
                        <div className=''>
                            <img src={hero} alt="hero image" className='' />
                        </div>
                    </div>
                    {/* cartes :les données dans cardsdatas/datahero.js */}
                    <div className=" w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
                        {carteshero.map(({ id, titre, descriptions, buttonText }) => (
                            <div key={id} className="bg-white rounded-xl shadow-lg py-4 px-5 flex flex-col sm:flex-row lg:flex-col items-center justify-between text-center ">
                                <div className=''>
                                    <p className=" text-blue-500 mb-1 font-bold text-base">{titre}</p>

                                    <div className="flex-grow ">
                                        {descriptions.map((desc, index) => (
                                            <li key={index} className="text-gray-700 mb-2 font-medium text-xs">{desc}</li>
                                        ))}
                                    </div>
                                </div>
                                <>
                                    <Button >
                                        {buttonText}
                                    </Button>
                                </>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 md:divide-x justify-between items-center w-full md:w-2/3 gap-4 text-center '>
                        <div className=' '>
                            <p className='font-bold text-3xl merriweather-sans'>+ 500</p>
                            <p className='font-extrlight text-xs'>Entreprises crées</p>
                        </div>
                        <hr className='w-full block md:hidden' />


                        <div className=''>
                            <p className='font-bold text-3xl merriweather-sans'>+ 3 420</p>
                            <p className='font-extrlight text-xs'>Entrepreneurs accompagnés</p>
                        </div>
                        <hr className='w-full block md:hidden ' />


                        <div className=' text-center '>
                            {/* etoiles */}
                            <span className='flex items-center justify-center mb-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>

                            </span>
                            <div>
                                <p className='font-extrlight text-sm'>Avis clients</p>
                            </div>
                        </div>
                        <hr className='w-full block md:hidden ' />

                        <div>
                            <p className='font-bold text-3xl merriweather-sans'>+ 50</p>
                            <p className='font-extrlight text-xs'>Partenaires</p>
                        </div>
                    </div>
                </section>

                {/* confiance section  */}
                <section className='px-6'>
                    <div className=' merriweather-sans  md:w-2/3 mx-auto flex flex-col  justify-between items-center  my-20'>
                        <p className=' text-xl md:text-4xl bleu font-extrabold  text-center'>Pourquoi nous faire confiance ?</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-15 '>
                            {cartesconf.map(({ id, titre, description, image }) => (
                                <div
                                    key={id}
                                    className="flex flex-col lg:flex-row border-2 rounded-lg border-[#017EFF] p-4 bg-white gap-4">
                                    <div className="w-16 lg:w-20 flex-shrink-0">
                                        <img src={image} alt={titre} className="w-full h-auto object-contain" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-base md:text-xl font-extrabold text-gradient">{titre}</p>
                                        <p className="text-gray-700 text-xs md:text-sm">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* accompagner section */}
                <section className='px-6'>
                    <div className=' w-full  lg:w-2/3 mx-auto flex flex-col  justify-between items-center mb-15 '>
                        <p className='merriweather-sans text-xl md:text-4xl bleu font-extrabold  text-center'>Nous sommes prêts à vous accompagner</p>

                        <div className='relative flex flex-col justify-between items-center lg:flex-row my-15 gap-3'>
                            <div className='absolute top-5 -left-25 hidden lg:block'>
                                <img src={vector1} alt="" className='w-2/3' />
                            </div>

                            <div className='w-5/6 text-center'>
                                <p className='merriweather-sans font-extrabold text-black text-lg text-center lg:text-start'>Dans la création de votre entreprise</p>
                                <p className='font-medium text-sm text-center lg:text-start leading-loose'>Vous avez un projet ? Ensemble nous ferons les premiers pas.
                                    Nos équipes spécialisées vous aident à choisir la forme juridique appropriée à votre projet et à accomplir toutes les formalités pour créer votre entreprise en toute simplicité.</p>
                                <div className="flex my-4 flex-wrap gap-3 items-center justify-center lg:justify-start">

                                    <p className='bg-gradient text-white text-xs md:text-sm p-1.5 rounded'>Choix de la forme juridique</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'>Créer une Entreprise individuelle</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'>Créer une SAS</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Créer une SARL</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Créer une SA</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Créer une SCI</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Créer un GIE</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Créer une coopérative</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'>Dépôt de marque</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'>Créer une association</p>
                                </div>
                            </div>
                            <div className=' '>
                                <img src={pret} alt="Image illustration" className='' />

                            </div>
                        </div>

                        <div className='relative flex flex-col justify-between items-center lg:flex-row gap-3'>
                            <div className='absolute top-5 -right-30 hidden lg:block'>
                                <img src={vector2} alt="" className='w-2/3' />
                            </div>
                            <div className=' order-last lg:order-first '>
                                <img src={pret} alt="Image illustration" className='' />

                            </div>
                            <div className='w-5/6 text-center'>
                                <p className='merriweather-sans font-extrabold text-black text-lg text-center lg:text-start'>Dans la gestion de votre entreprise</p>
                                <p className='font-medium text-sm text-center lg:text-start leading-loose'>Concentrez-vous sur ce que vous savez faire le mieux et confiez-nous tâches juridiques, fiscales, sociales et administratives.</p>
                                <div className="flex my-4 flex-wrap gap-3 items-center justify-center lg:justify-start">

                                    <p className='bg-gradient text-white text-xs md:text-sm p-1.5 rounded'>Gestion juridique et fiscal</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'>Conformité juridique</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'>Gestion des contrats</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Contentieux</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Gestion comptable</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Gestion des parts sociales</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Modification de status</p>
                                    <p className='bg-gradient text-white text-xs md:text-sm  p-1.5 rounded'> Gestion des ressources humaines</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* soutien section */}
                <section className='bg-[#F7FBFF] px-6 border-b border-[#017EFF] pb-20'>
                    <div className=' merriweather-sans w-full lg:w-2/3 mx-auto flex flex-col  justify-between pt-20'>
                        <div>
                            <p className=' text-xl md:text-4xl bleu font-extrabold  text-center'>Ils nous font confiance !</p>
                            <div className='grid grid-cols-2 justify-center items-center text-[#F7FBFF] mt-10 gap-5'>
                                <div className='bg-[#0165CC] md:p-5 p-2 rounded-lg text-center  md:text-start'>
                                    <div className='flex flex-col md:flex-row items-center md:gap-3 font-extrabold text-xl md:text-5xl '>
                                        <span className='flex items-center justify-center'>
                                            <img src={entrep} alt="" className='w-1/2 md:w-full' />
                                        </span>
                                        <span>+</span>
                                        <span>500</span>
                                    </div>
                                    <div className='text-base md:text-xl mt-3'>
                                        <p>Entreprises créées</p>
                                    </div>
                                </div>
                                <div className='bg-[#0165CC] md:p-5 p-2 rounded-lg text-center md:text-start'>
                                    <div className='flex flex-col md:flex-row items-center md:gap-3 font-extrabold text-xl md:text-5xl'>
                                        <span className='flex items-center justify-center'>
                                            <img src={accomp} alt="" className='w-1/2 md:w-full' />
                                        </span>
                                        <span>+</span>
                                        <span>3000</span>
                                    </div>
                                    <div className='text-base md:text-xl mt-3'>
                                        <p>Entrepreneurs accompagnés</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-20'>
                            <p className=' text-xl md:text-4xl bleu font-extrabold  text-center'>Ils nous soutiennent !</p>
                            <div className='grid grid-cols-3  text-[#F7FBFF] mt-10 gap-5'>
                                <div className=' flex justify-center items-center border-1 border-[#0165CC]  bg-white '>
                                    <img src={france1} alt="" className='w-2/3' />
                                </div>
                                <div className=' flex justify-center items-center border-1 border-[#0165CC]  bg-white'>
                                    <img src={france2} alt="" className='w-2/3' />
                                </div>
                                <div className=' flex justify-center items-center border-1 border-[#0165CC] bg-white '>
                                    <img src={teranga} alt="" className='w-2/3' />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p className=' text-xl md:text-4xl bleu font-extrabold  text-center'>Nos partenaires</p>
                            <div className='grid grid-cols-3  text-[#F7FBFF] mt-10 gap-5'>
                                <div className=' flex justify-center items-center border-1 border-[#0165CC]  bg-white '>
                                    <img src={baobab} alt="" className='w-2/3' />
                                </div>
                                <div className=' flex justify-center items-center border-1 border-[#0165CC]  bg-white '>
                                    <img src={france2} alt="" className='w-2/3' />
                                </div>
                                <div className=' flex justify-center items-center border-1 border-[#0165CC] bg-white  '>
                                    <img src={teranga} alt="" className='w-2/3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* services section */}
                <section className='  relative min-h-[500px] lg:flex flex-col items-center justify-center px-6 py-50'>
                    {/* Filigrane en fond */}
                    <h2 className='absolute  text-5xl lg:text-[120px] font-extrabold text-gray-300 opacity-20 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none'>
                        SERVICES
                    </h2>

                    <div className='relative z-10 w-full lg:w-2/3  text-start space-y-6 merriweather-sans'>
                        <p className='font-extrabold text-xl'>
                            Des solutions juridiques et fiscales <br /> sur mesure pour votre succès
                        </p>
                        <p className='text-base font-thin leading-loose'>
                            Chez Clic Droit Afrique Group, nous comprenons que chaque entreprise est unique. C'est pourquoi nous vous offrons une gamme complète de services juridiques et fiscaux personnalisés, conçus pour répondre à vos besoins spécifiques et vous aider à naviguer dans le paysage réglementaire avec confiance.
                        </p>
                        <p className='text-base font-thin leading-loose'>
                            Que vous soyez une start-up en plein essor ou une entreprise établie, notre équipe d'experts est là pour vous fournir des conseils clairs, des stratégies proactives et un soutien continu. Découvrez comment nous pouvons transformer les défis juridiques et fiscaux en opportunités pour votre entreprise.
                        </p>
                    </div>

                    <div className=" w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {servicesData.map(({ id, titre, description, bouton }) => (
                            <div key={id} className="bg-white text-xs border border-gray-200 hover:shadow-md hover:border-[#017EFF] text-start py-6 px-3 flex flex-col justify-between items-start ">
                                <div>
                                    <h3 className=" font-bold mb-2 text-gradient  ">{titre}</h3>
                                    <p className="text-gray-700 mb-4 ">{description}</p>
                                </div>
                                <Button>
                                    {bouton}
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* secteurs section */}
                <section className='bg-[#017EFF]  relative min-h-[500px] lg:flex flex-col items-center justify-center px-6 pt-50 pb-20 text-white'>
                    {/* Filigrane en fond */}
                    <h2 className='absolute text-5xl lg:text-[120px] font-extrabold text-[#017AF7] opacity-80 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none'>
                        SECTEURS
                    </h2>

                    <div className='relative z-10 w-full lg:w-2/3  text-start space-y-6 merriweather-sans'>
                        <p className='font-extrabold text-xl'>
                            Expertise sectorielle pour une <br /> croissance sans frontières
                        </p>
                        <p className='text-base font-thin leading-loose'>
                            Dans le monde des affaires en constante évolution, la connaissance approfondie des spécificités sectorielles est cruciale. Chez Clic Droit Afrique Group, nous nous distinguons par notre expertise ciblée dans une diversité de secteurs d'activité. Que vous opériez dans le numérique, l'agriculture, l'hôtellerie, ou tout autre domaine, notre équipe est prête à vous fournir des conseils juridiques et fiscaux adaptés à vos enjeux spécifiques. Nous combinons une compréhension approfondie de votre secteur avec une expertise juridique de pointe pour vous aider à prospérer dans votre domaine et au-delà.                        </p>

                        <button className="group relative overflow-hidden text-white md:border-2 md:border-white pr-5 pl-5 py-2 font-semibold text-xs  transition-all duration-300 hover:pr-10">

                            {/* Icône cachée */}
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRightIcon className="w-4 h-4 text-white" />
                            </span>

                            Découvrez notre expertise sectorielle
                        </button>
                    </div>

                    <div className="w-full lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                        {secteursData.map(({ id, image, chiffre, titre, description }) => (
                            <div
                                key={id}
                                className=" group flex flex-col bg-[#017AF7] p-6 transition-all duration-400 hover:shadow-sm hover:shadow-white hover:border cursor-default"
                            >
                                {/* Ligne image + chiffre */}
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <img src={image} alt={titre} className="w-12 h-12 object-contain" />
                                    <p className="text-5xl font-bold text-[#0165CC] transition-colors duration-300 group-hover:text-white">{chiffre}</p>
                                </div>

                                {/* Titre + description en dessous */}
                                <h3 className="text-sm font-extrabold mb-1">{titre}</h3>
                                <p className=" text-xs">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* temoignages section */}
                <section className='  relative min-h-[500px] lg:flex flex-col items-center justify-center px-6 pt-50 pb-0 md:pb-20'>
                    {/* Filigrane en fond */}
                    <h2 className='absolute text-4xl lg:text-[120px] font-extrabold text-gray-100 opacity-80 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none'>
                        TEMOIGNAGES
                    </h2>

                    <div className='relative z-10 w-full lg:w-2/3  text-start space-y-6 merriweather-sans'>
                        <p className='font-extrabold text-xl'>
                            Votre succès, notre fierté
                        </p>
                        <p className='text-base font-thin leading-loose'>
                            Chez Clic Droit Afrique Group, nous mesurons notre succès à travers les accomplissements de nos clients. Découvrez les témoignages de ceux qui ont choisi de nous faire confiance et ont transformé les défis juridiques et fiscaux en opportunités de croissance. Laissez-vous inspirer par leurs histoires et voyez comment nous pouvons vous aider à écrire la vôtre.</p>
                        <Button>
                            Rejoignez la communauté de nos clients satisfaits
                        </Button>
                    </div>
                    <div className="w-full lg:w-2/3 mx-auto my-10">
                        {/* Version mobile - défilement horizontal */}
                        <div className="md:hidden overflow-x-auto pb-4">
                            <div className="flex gap-4" style={{ minWidth: `${temoinsdata.length * 300}px` }}>
                                {temoinsdata.map(({ id, image, nom, entrep, description }) => (
                                    <div
                                        key={id}
                                        className="w-[280px] flex-shrink-0 flex flex-col border border-gray-200 p-3 transition-all duration-400 hover:shadow-md hover:shadow hover:border-[#017AF7] cursor-default"
                                    >
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
                        <div className="hidden md:grid grid-cols-3 gap-10 my-10">
                            {temoinsdata.map(({ id, image, nom, entrep, description }) => (
                                <div
                                    key={id}
                                    className="flex flex-col border border-gray-200 p-3 transition-all duration-400 hover:shadow-md hover:shadow hover:border-[#017AF7] cursor-default"
                                >
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

                {/* blog section */}
                <section className=' relative min-h-[500px] lg:flex flex-col items-center justify-center px-6 pt-50  pb-0 md:pb-20'>
                    {/* Filigrane en fond */}
                    <h2 className='absolute text-5xl lg:text-[120px] font-extrabold text-gray-100 opacity-80 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none'>
                        BLOG
                    </h2>

                    <div className='relative z-10 w-full lg:w-2/3  text-start merriweather-sans'>
                        <p className='font-extrabold text-xl'>
                            Conseils et insights pour naviguer <br /> dans le monde juridique et fiscal
                        </p>
                        <p className='text-base font-thin leading-loose my-6'>
                            Restez à la pointe de l'actualité juridique et
                            fiscale avec notre blog. Découvrez des articles pertinents,
                            des analyses approfondies et des conseils pratiques rédigés par nos experts
                            pour vous aider à comprendre les enjeux et à prendre les meilleures décisions pour votre entreprise.
                            Que vous cherchiez à approfondir vos connaissances ou à trouver des solutions à des problèmes spécifiques,
                            notre blog est votre ressource incontournable.
                        </p>
                        <Button>
                            Explorer notre blog pour plus d'insights
                        </Button>
                    </div>
                    <div className="w-full lg:w-2/3 mx-auto ">
                        {/* Version mobile - défilement horizontal */}
                        <div className="md:hidden overflow-x-auto pb-4 my-10">
                            <div className="flex gap-4" style={{ minWidth: `${blogData.length * 300}px` }}>
                                {blogData.map(({ id, image, titre, description, bouton }) => (
                                    <div
                                        key={id}
                                        className="w-[280px] flex-shrink-0 flex flex-col items-center justify-between border border-gray-200 transition-all duration-400 hover:shadow-md hover:shadow hover:border-[#017AF7] cursor-default"
                                    >
                                        <img src={image} alt={titre} className="w-full" />
                                        <div className='p-2 w-full'>
                                            <p className="text-xs font-semibold">{titre}</p>
                                            <h3 className="text-xs leading-loose mb-1">{description}</h3>
                                            <Button className="w-full">
                                                {bouton}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Version desktop - grille normale */}
                        <div className="hidden md:grid grid-cols-3 gap-5 my-10">
                            {blogData.map(({ id, image, titre, description, bouton }) => (
                                <div
                                    key={id}
                                    className="flex flex-col items-center justify-between border border-gray-200 transition-all duration-400 hover:shadow-md hover:shadow hover:border-[#017AF7] cursor-default"
                                >
                                    <img src={image} alt={titre} className="w-full" />
                                    <div className='p-2 w-full'>
                                        <p className="text-xs font-semibold">{titre}</p>
                                        <h3 className="text-xs leading-loose mb-1">{description}</h3>
                                        <Button className="w-full">
                                            {bouton}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* section contact */}
                <section className='bg-[#F7FBFF]  relative min-h-[500px] lg:flex flex-col items-center justify-center px-6 pt-50 pb-20'>
                    {/* Filigrane en fond */}
                    <h2 className='absolute text-5xl lg:text-[120px] font-extrabold text-gray-100 opacity-80 top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none'>
                        CONTACT
                    </h2>

                    <div className='relative z-10 w-full lg:w-2/3  text-start merriweather-sans'>
                        <p className='font-extrabold text-xl'>
                            Parlons de votre projet
                        </p>
                        <p className='text-base font-thin leading-loose my-8'>
                            Vous avez des questions ou vous êtes prêt à franchir le pas vers une gestion juridique et fiscale simplifiée ? <br />
                            Notre équipe est à votre écoute pour discuter de vos besoins et vous proposer des solutions adaptées. <br />
                            Contactez-nous dès aujourd'hui pour commencer à écrire ensemble l'histoire de votre succès.
                        </p>

                    </div>

                    <div className=" w-full lg:w-2/3 flex flex-col lg:flex-row items-start justify-between bg-white ">

                        {/* Partie gauche : Formulaire */}
                        <div className="w-full lg:w-1/2 px-5 bg-white">
                            <h2 className="text-xl font-bold pt-5">Écrivez-nous</h2>

                            <form className="space-y-4 mt-6 text-base">
                                <input
                                    type="text"
                                    placeholder="Prénom et Nom"
                                    className="w-full placeholder:font-semibold placeholder:text-xs border border-gray-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#017EFF]"
                                />
                                <input
                                    type="email"
                                    placeholder="Adresse email"
                                    className="w-full placeholder:font-semibold placeholder:text-xs  border border-gray-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#017EFF]"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Votre message"
                                    className="w-full placeholder:font-semibold placeholder:text-xs  border border-gray-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#017EFF]"
                                ></textarea>

                                <Button>Envoyer votre message</Button>
                            </form>

                            {/* Infos de contact */}
                            <div className="mt-15 space-y-4 text-sm font-medium bleu">
                                <div className="flex items-center gap-2">
                                    <img src={tel} alt="telephone" className="w-7" />
                                    <a href="tel:+221338400602">+221 33 840 06 02</a> | <a href="tel:+221776804994">+221 77 680 49 94</a>
                                </div>

                                <div className="flex items-start gap-2 uppercase">
                                    <img src={location} alt="localisation" className="w-7 mt-1" />
                                    <p>Sacré Cœur 3, Montagne Rue SC-45, Villa nº64, Dakar - Sénégal</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src={mail} alt="email" className="w-7" />
                                    <a href="mailto:contact@clicdroitafrique.com?subject=Contact%20ClicDroitAfrique&body=Bonjour,%0D%0AJe%20souhaite%20vous%20contacter%20au%20sujet%20de...">
                                        contact@clicdroitafrique.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Partie droite : Image */}
                        <div className=" hidden lg:block w-full lg:w-2/3 flex justify-center">
                            <img
                                src={contactImage}
                                alt="Contact Illustration"
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <section className=' '>
                <Footer />
            </section>
        </>
    );
}

export default Home;
