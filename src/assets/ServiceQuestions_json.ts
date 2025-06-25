export const ServiceQuestions = {
  "title": "Einreichen eines neuen Services",
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
          "isRequired": false,
          "choices": [
            {
              "value": "Lernen"
            },
            {
              "value": "Testen"
            },
            {
              "value": "Investieren"
            },
            {
              "value": "Vernetzen"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "question2",
          "title": "KI-Level",
          "choices": [
            {
              "value": "KI-Readiness"
            },
            {
              "value": "KI-Application"
            },
            {
              "value": "KI-Innovation"
            }
          ]
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Service Bezeichnung",
          "isRequired": false
        },
        {
          "type": "dropdown",
          "name": "question4",
          "title": "Hauptanbieter",
          "isRequired": false,
          "showOtherItem": true,
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
          "type": "dropdown",
          "name": "question5",
          "title": "weitere Anbieter",
          "showOtherItem": true,
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
          "type": "text",
          "name": "question6",
          "title": "Ansprechpartner (Vor- & Nachname)",
          "isRequired": false
        },
        {
          "type": "tagbox",
          "name": "question7",
          "title": "Zielgruppe (Sektoren)",
          "isRequired": false,
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
          "name": "question8",
          "title": "Technologien (genutzt/vermittelt)",
          "isRequired": false,
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
          "name": "question9",
          "title": "Kostenschätzung in € ",
          "description": "(Abschätzung je Service/Kunde) - wird nur intern genutzt.",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "question10",
          "title": "Preisindikation in € ",
          "description": "(Abschätzung was der Kurs am Ende ca. Kosten soll) - wird nur intern genutzt.",
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
          "type": "html",
          "name": "beispieldatei_info",
          "html": "<p>Für ein Beispiel, nutze diese Datei als Vorlage:</p> <a href='https://edih-thuringia-service-tool.vercel.app/Service2019-Example.pdf' target='_blank'>📄 Beispielservice 'Vertiefung: Offene Mobilitätsdaten' herunterladen (PDF)</a>"
        },
        {
          "type": "comment",
          "name": "question11",
          "title": "Leistungen und Mehrwerte",
          "isRequired": false
        },
        {
          "type": "comment",
          "name": "question12",
          "title": "Dauer, Datum, Veranstaltungsort (auch Online/Präsenz)",
          "isRequired": false
        },
        {
          "type": "comment",
          "name": "question13",
          "title": "Zielgruppe und Voraussetzungen ",
          "isRequired": false
        },
        {
          "type": "comment",
          "name": "question14",
          "title": "Konditionen und Vorteile",
          "description": "Für externe Kunden beschreiben.",
          "isRequired": false
        },
        {
          "type": "comment",
          "name": "question15",
          "title": "Buchungsoptionen und -informationen",
          "isRequired": false
        }
      ]
    }
  ],
  "headerView": "advanced"
}