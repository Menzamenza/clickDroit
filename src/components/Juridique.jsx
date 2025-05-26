
import { useState } from "react";
import note from "../assets/note.png";

const Onglets = () => {
    const onglets = [
        {
            key: "sarl",
            label: "SARL/SUARL",
            contenu: {
                titre: "SARL/SUARL",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        },
        {
            key: "sas",
            label: "SAS/SASU",
            contenu: {
                titre: "Société par Actions Simplifiée (SAS/SASU)",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        },
        {
            key: "ei",
            label: "E.I",
            contenu: {
                titre: "E.I",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        },
        {
            key: "sa",
            label: "SA",
            contenu: {
                titre: "SA",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        },
        {
            key: "gie",
            label: "GIE",
            contenu: {
                titre: "GIE",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        },
        {
            key: "sci",
            label: "SCI",
            contenu: {
                titre: "SCI",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        },
        {
            key: "autres",
            label: "Autres",
            contenu: {
                titre: "Autres",
                desc: "La SAS est une forme juridique flexible, idéale pour les startups et entreprises innovantes. La SASU est sa variante unipersonnelle (avec un seul associé). Cette structure offre une grande liberté dans l'organisation de la gouvernance et des relations entre associés.",
                listes: [
                    {
                        titre: "AVANTAGES",
                        items: [
                            "Grande liberté dans la rédaction des statuts",
                            "Capital social libre (pas de minimum légal)",
                            "Responsabilité limitée aux apports",
                            "Fonctionnement interne souple et adaptable",
                            "Image moderne et dynamique"
                        ]
                    },
                    {
                        titre: "INCONVENIENTS",
                        items: [
                            "Coûts de constitution plus élevés",
                            "Obligations comptables importantes",
                            "Régime social et fiscal du président complexe",
                            "Nécessite une bonne rédaction des statuts",
                            "Procédures administratives plus lourdes"
                        ]
                    }
                ],
                note: "Idéal pour: Startups, entreprises innovantes avec perspectives de croissance, projets nécessitant des investisseurs externes, activités à risque modéré à élevé.",
                image: note
            }
        }

    ];

    const [ongletActif, setOngletActif] = useState(onglets[0].key);

    const onglet = onglets.find(o => o.key === ongletActif);
    const { titre, desc, listes, note: noteTexte, image } = onglet.contenu;

    return (
        <div className="w-full md:w-2/3 mx-auto my-8 text-center">
            {/* Onglets */}
            <div className="flex flex-wrap lg:grid lg:grid-cols-7 justify-between gap-1 mb-6 border border-gray-300 rounded-full p-2">
                {onglets.map(({ key, label }) => (
                    <div>
                        <button
                            key={key}
                            onClick={() => setOngletActif(key)}
                            className={`w-full px-4 py-2 rounded-full text-xs lg:text-sm transition ${ongletActif === key
                                ? "bg-bleu text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                                }`}>
                            {label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Contenu de l'onglet sélectionné */}
            <div className="border border-gray-300 rounded-lg p-6 text-left">
                <h2 className="text-base border-b border-gray-400 font-semibold mb-2">{titre}</h2>
                <p className="text-gray-700 mb-4 text-sm">{desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {listes.map((groupe, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-sm font-bold text-gray-800 mb-1">{groupe.titre}</h3>
                            <ul className="list-disc text-sm list-inside text-gray-600 space-y-1">
                                {groupe.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Note avec image */}
                <div className="flex items-center gap-3 mt-4 bg-[#E6F4DE] p-3 rounded-lg">
                    <img src={image} alt="Note image" className="w-10 h-10 object-contain" />
                    <p className="text-sm">{noteTexte}</p>
                </div>
            </div>
        </div>
    );
};

export default Onglets;
