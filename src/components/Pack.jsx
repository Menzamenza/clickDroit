import { useState } from "react";

const OngletsPacks = () => {
    const onglets = [
        {
            key: "sarl",
            label: "SARL/SUARL",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "129000 FCFA TTC",
                    desc: "capital inférieur à 500.000 FCFA et 250.000FCFA",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "99000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        // { label: "Assistance téléphonique", isGris: false },
                        // { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        // { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "79000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                }
            ]
        },
        {
            key: "sas",
            label: "SAS/SASU",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "129000 FCFA TTC",
                    desc: "+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "99000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        // { label: "Assistance téléphonique", isGris: false },
                        // { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        // { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "79000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                }
            ]
        },
        {
            key: "ei",
            label: "E.I",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "99000 FCFA TTC",
                    desc: "+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "69000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "49000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                    ],
                }
            ]
        },
        {
            key: "sa",
            label: "SA",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "149000 FCFA TTC",
                    desc: "+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "129000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        // { label: "Assistance téléphonique", isGris: false },
                        // { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        // { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "99000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                }
            ]
        },
        {
            key: "gie",
            label: "GIE",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "199000 FCFA TTC",
                    desc: "+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "169000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        // { label: "Assistance téléphonique", isGris: false },
                        // { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        // { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "149000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                }
            ]
        },
        {
            key: "sci",
            label: "SCI",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "139000 FCFA TTC",
                    desc: "+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "119000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        // { label: "Assistance téléphonique", isGris: false },
                        // { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        // { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "99000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                }
            ]
        },
        {
            key: "autres",
            label: "Autres",
            packs: [
                {
                    nom: "Pack CHAMPION",
                    prix: "199000 FCFA TTC",
                    desc: "+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)",
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Assistance téléphonique", isGris: false },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: false },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: false },
                        { label: "Accès à 3 webinaires de formation", isGris: false },
                    ],
                },
                {
                    nom: "Pack SUCCES",
                    prix: "169000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        // { label: "Assistance téléphonique", isGris: false },
                        // { label: "Traitement du dossier en 48h après réception des pièces", isGris: false },
                        // { label: "Accompagnement personnalisé par un expert dédié", isGris: false },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                },
                {
                    nom: "Pack Premium",
                    prix: "149000 FCFA TTC",
                    desc: `+ Honoraires du notaire : 150.000 FCFA capital inférieur à 500.000 FCFA et 250.000 FCFA Capital entre 500.000 et 5 millions FCFA (Les honoraires du notaire sont défalqués directement sur le montant du capital)`,
                    options: [
                        { label: "Dosssier complet", isGris: false },
                        { label: "Vérification et validation de votre dossier par un expert", isGris: false },
                        { label: "Statuts", isGris: false },
                        { label: "Authentification des actes par le notaire", isGris: false },
                        { label: "Transmission de votre dossier au guichet unique de l’APIX", isGris: false },
                        { label: "Immatriculation NINEA et RCCM", isGris: false },
                        { label: "Déclaration d’existence et publication au journal d’annonces légales", isGris: false },
                        { label: "Accès à un espace client pour suivre l'avancement de votre dossier", isGris: false },
                        { label: "Assistance téléphonique", isGris: true },
                        { label: "Traitement du dossier en 48h après réception des pièces", isGris: true },
                        { label: "Accompagnement personnalisé par un expert dédié", isGris: true },
                        { label: "1 mois d'accompagnement juridique et fiscal offert", isGris: true },
                        { label: "Accompagnement dans l'élaboration de votre business modèle", isGris: true },
                        { label: "Accès à 3 webinaires de formation", isGris: true },
                    ],
                }
            ]
        }
    ];

    const [ongletActif, setOngletActif] = useState(onglets[0].key);
    const onglet = onglets.find(o => o.key === ongletActif);


    const [packActif, setPackActif] = useState(null);

    return (
        <div className="w-full md:w-2/3 mx-auto my-10 text-center">
            {/* Onglets */}
            <div className=" bg-white flex flex-wrap lg:grid lg:grid-cols-7 justify-between gap-1 mb-6 border border-gray-300 rounded-full p-2">
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

            <div className="lg:grid lg:grid-cols-3 gap-6 overflow-x-auto scrollbar-custom flex lg:flex-none space-x-4 lg:space-x-0 px-1 lg:px-0">

                {onglet.packs.map((pack, index) => (
                    <div
                        key={index}
                        onClick={() => setPackActif(index)}
                        className={`max-w-[100%] lg:max-w-full bg-white shadow rounded-xl flex-shrink-0 lg:flex-shrink justify-between items-center  cursor-pointer transition duration-300 
                        ${packActif === index ? "border-2 border-bleu" : "border border-gray-200"}`}>

                        {/* Titre du pack */}
                        <div className={`w-full bg-gray-200 p-3 mb-2 ${packActif === index ? "bg-pack" : "bg-gray-200 "}`}>
                            <p className="text-lg lg:text-xl font-extrabold merriweather-sans text-center">
                                {pack.nom}
                            </p>
                        </div>

                        {/* Contenu du pack */}
                        <div className="p-3 w-full flex flex-col justify-between h-100">
                            {/* Prix */}
                            <div className="border-b border-gray-300 mb-3 text-center">
                                <p className="bleu font-extrabold text-2xl merriweather-sans">
                                    {pack.prix}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-xs mb-3 text-center break-words whitespace-normal ">{pack.desc}</p>

                            {/* Liste scrollable */}
                            <div className="max-h-30 md:max-h-full overflow-y-auto mb-4 pr-2 ">
                                <ul className="list-disc list-inside text-xs space-y-1">
                                    {pack.options.map((opt, i) => (
                                        <li
                                            key={i}
                                            className={`text-start ${opt.isGris
                                                ? "text-gray-300 marker:text-gray-300  marker:text-xl"
                                                : "text-gray-800 marker:text-blue-500 marker:text-xl "
                                                }`}>
                                            {opt.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bouton */}
                                <button className="bg-bleu hover:bg-blue-700 text-white text-sm py-2 rounded transition w-full">
                                    Choisir ce pack
                                </button>
                        </div>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default OngletsPacks;
