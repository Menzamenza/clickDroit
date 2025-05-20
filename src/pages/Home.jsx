import Navbar from '../components/Navbar';
import hero from "../assets/Rectangle 1.png";
import Button from '../components/Button';
import { carteshero } from '../CardDatas/dataHerocard';

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
                        <div  className=' '>
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


            </div>


        </>
    );
}

export default Home;
