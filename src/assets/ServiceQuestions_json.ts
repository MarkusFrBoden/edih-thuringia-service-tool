export const ServiceQuestions = {
  "title": "EDIH-Thuringia Service-Anfrage",
  "description": "Wenn du einen neuen Service auf dem Marktplatz anlegen willst, dann bist du hier genau richtig. Fülle die entsprechenden Felder aus und das Koordinationsteam kümmert sich um die weitere Verwaltung. Du bekommst eine Meldung wenn der Kurs auf Moodle mit den von dir erhaltenen Informationen angelegt wurde und von dir weiter befüllt werden kann.",
  "completedHtml": {
    "de": "<h3>Vielen Dank für das Zusenden des neuen Services!</h3>",
    "en": "<h3>Thank you for sending in the new service</h3>"
  },  
  "pages": [
    {
      "name": "page1",
      "title": "Allgemeine Angaben",
      "description": "Zunächst ein paar allgemeine Angaben für das Service-Reporting zur EU. Diese Informationen werden lediglich für interne Zwecke genutzt.",
      "elements": [
        {
          "type": "dropdown",
          "name": "question1",
          "title": "Service-Kategorie",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Lernen"
            },
            {
              "value": "Item 2",
              "text": "Testen"
            },
            {
              "value": "Item 3",
              "text": "Investieren"
            },
            {
              "value": "Item 4",
              "text": "Vernetzen"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "question2",
          "title": "KI-Level",
          "choices": [
            {
              "value": "Item 1",
              "text": "KI-Readiness"
            },
            {
              "value": "Item 2",
              "text": "KI-Application"
            },
            {
              "value": "Item 3",
              "text": "KI-Innovation"
            }
          ]
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Service Bezeichnung",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question4",
          "title": "Hauptanbieter",
          "isRequired": true,
          "choices": [
            "WBA",
            "WLA",
            {
              "value": "Item 1",
              "text": "HIGHQ"
            },
            {
              "value": "Item 2",
              "text": "NTAG"
            },
            {
              "value": "Item 4",
              "text": "BPV"
            },
            {
              "value": "Item 5",
              "text": "BMO"
            },
            {
              "value": "Item 6",
              "text": "THIMO"
            },
            {
              "value": "Item 7",
              "text": "TZLR"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "question5",
          "title": "weitere Anbieter",
          "choices": [
            "BMO",
            "BPV",
            "HIGHQ",
            "NTAG",
            "THIMO",
            "TZLR",
            "WBA",
            "WLA"
          ]
        },
        {
          "type": "tagbox",
          "name": "question6",
          "title": "Zielgruppe (Sektoren)",
          "isRequired": true,
          "choices": [
            "Luftfahrt",
            "Agrarbiotechnologie und Lebensmittelbiotechnologie",
            "Automobilindustrie",
            "Gemeinschaftsgeführte lokale Entwicklung",
            "Bau & Montage",
            "Konsumgüter",
            "Kultur- und Kreativwirtschaft",
            "Verteidigung",
            "Bildung",
            "Elektrizität",
            "Energie",
            "Energie, Kraftstoffe und Erdöltechnik",
            "Umwelt",
            "Finanzwesen",
            "Fischerei",
            "Lebensmittel und Getränke",
            "Gesundheitswesen",
            "Lederindustrie",
            "Rechtliche Aspekte",
            "Lebenswissenschaften",
            "Fertigung und Verarbeitung",
            "Maritime Industrie",
            "Metallverarbeitung und industrielle Produktion",
            "Bergbau und Rohstoffgewinnung",
            "NMP – Nichtmetallische Materialien & grundlegende Prozesse",
            "Nukleartechnologie",
            "Papier- und Holzindustrie",
            "Persönliche Dienstleistungen",
            "Polymere und Kunststoffe",
            "Öffentliche Verwaltung",
            "Immobilien",
            "Regulierung",
            "Einzelhandel, Großhandel oder Vertrieb",
            "Sicherheit",
            "Smarte Städte (Smart City)",
            "Raumfahrt",
            "Telekommunikation",
            "Textilien",
            "Tabakindustrie",
            "Transport & Mobilität",
            "Verkehrssektor",
            "Reisen und Tourismus",
            "Sektorübergreifend"
          ]
        },
        {
          "type": "tagbox",
          "name": "question7",
          "title": "Technologien (genutzt/vermittelt)",
          "isRequired": true,
          "choices": [
            "Additive Fertigung",
            "Künstliche Intelligenz & Entscheidungsunterstützung",
            "BI-Tools (Business Intelligence)",
            "Big Data",
            "Blockchain und Distributed-Ledger-Technologie (DLT)",
            "Chemieingenieurwesen (Anlagen, Produkte)",
            "Cloud-Dienste",
            "Kommunikationsnetzwerke",
            "Cyber-physische Systeme",
            "Cybersicherheit",
            "Digitale Zwillinge",
            "Displays",
            "Gamification",
            "Hochleistungsrechnen",
            "Mensch-Computer-Interaktion",
            "Industrielle Biotechnologie",
            "Internet der Dinge",
            "Internetdienste & -anwendungen",
            "Laserbasierte Fertigung und Materialbearbeitung",
            "Standortbezogene Anwendungen",
            "Logistik",
            "Mikro- und Nanoelektronik, Optoelektronik",
            "Mobilität",
            "Neue Technologien für den audiovisuellen Sektor – Medien",
            "Organische und großflächige Elektronik",
            "Sonstiges (bitte angeben)",
            "Photonik",
            "Quantentechnologien (Rechnen/Kommunikation)",
            "Robotik",
            "Halbleiter und Nanotechnologie",
            "Sensoren & Systeme zur Bildverarbeitung",
            "Simulationsingenieurwesen und Modellierung",
            "Softwarearchitekturen",
            "Virtuelle Realität"
          ]
        },
        {
          "type": "text",
          "name": "question8",
          "title": "Kostenschätzung in € ",
          "description": "(Abschätzung je Service/Kunde) - wird nur intern genutzt!",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "question9",
          "title": "Preisindikation in € ",
          "description": "(Abschätzung was der Kurs am Ende ca. Kosten soll) - wird nur intern genutzt!",
          "inputType": "number"
        }
      ]
    },
    {
      "name": "page2",
      "title": "Kursinformationen",
      "description": "Gib die Grundinformationen an die wir für das Anlegen des Kurses benötigen. Diese Informationen sollten sich für die Außendarstellung zum Kunden eignen.",
      "elements": [
        {
          "type": "comment",
          "name": "question10",
          "title": "Leistungen und Mehrwerte",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question11",
          "title": "Dauer, Datum, Veranstaltungsort (auch Online/Präsenz)",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question12",
          "title": "Zielgruppe und Voraussetzungen ",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question13",
          "title": "Konditionen und Vorteile",
          "description": "Für externe Kunden!",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question14",
          "title": "Buchungsoptionen und -informationen",
          "isRequired": true
        }
      ]
    }
  ],
  "headerView": "advanced"
}