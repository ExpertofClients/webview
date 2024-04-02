import React from 'react';
import ListCard from "./ListCard";

export default function CardList() {
    const websites = [{
        "Bezeichnung": "Haupseite",
        "Beschreibung": "Die Hauptseite von ExpertofClients.de",
        "URL": "http://ExpertofClients.de"
    },
    {
        "Bezeichnung": "Forum",
        "Beschreibung": "Das Forum von ExpertofClients.de\n Hier finden Sie Hilfe Dokumente für Programmiersprachen und vieles mehr",
        "URL": "http://forum.expertofclients.de"
    },
    {
        "Bezeichnung": "PHPMyAdmin",
        "Beschreibung": "Hier können Sie Ihre Datenbanken verwalten wenn Sie eine Beseitzen bei ExpertofClients.de",
        "URL": "http://phpmyadmin.expertofclients.de"
    },
    {
        "Bezeichnung": "Apotheken Rechner",
        "Beschreibung": "Es ist ein Rechner für die Spannen von Wirk- sowie Hilfsstoff beim Herstellen von Arzneimittel.\n Diese Seite ist von Lukas Sadowski Programmiert worden und wird von ExpertofClients.de gehostet",
        "URL": "http://lukas.expertofclients.de"
    }]

    return (
        <>
            {websites.map((website, index) => (
                <ListCard
                    key={index}
                    title={website["Bezeichnung"]}
                    description={website["Beschreibung"]}
                    link={website["URL"]}
                />
            ))}
        </>
    );
}
