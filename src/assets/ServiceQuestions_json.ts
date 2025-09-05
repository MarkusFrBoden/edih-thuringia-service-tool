export const ServiceQuestions = {
  "title": "Einreichen eines neuen Services",
  "description": "Wenn du einen neuen Service auf dem Marktplatz anlegen willst, dann bist du hier genau richtig. Fülle die entsprechenden Felder aus und das Koordinationsteam kümmert sich um die weitere Verwaltung. Du bekommst eine Meldung wenn der Kurs auf Moodle mit den von dir erhaltenen Informationen angelegt wurde und von dir ausgestaltet werden kann.",
  "completedHtml": {
    "de": "<h3>Vielen Dank für das Zusenden des neuen Services!</h3>",
    "en": "<h3>Thank you for sending in the new service</h3>"
  },
  "pages": [
    {
      "name": "page1",
      "title": "Allgemeine Angaben",
      "description": "Zunächst ein paar allgemeine Angaben zum Service.",
      "elements": [

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
          "type": "comment",
          "name": "question6",
          "title": "Ansprechpartner/Trainer (Vor- & Nachname, Email-Adresse)",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question1",
          "title": "Service-Kategorie",
          "description": "Für die Einordnung nach Service-Kategorien auf dem EDIH Thuringia Marktplatz.",
          "isRequired": true,
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
          "description": "Für die zukünftige Einordnung nach KI-Leveln auf dem EDIH Thuringia Marktplatz (Readiness = Grundlegende Digitalisierung, welche die Grundlagen für KI bildet | Application = Nutzung von KI-Anwendungen im Rahmen des Services | Innovation = Forschung & Entwicklung neuer Anwendungen auf Basis von KI)",
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
          ], "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "questionZ1",
          "title": "Serviceformat",

          "choices": [
            "Workshopreihe",
            "Weiterbildung",
            "Einzelworkshop",
            "Beratung",
            "Test before invest",
            "Live-Demonstration"
          ],
          "isRequired": true,
          "showOtherItem": true,
        },
        {
          "type": "text",
          "name": "questionZ4",
          "title": "Zeitraum",
          "description": "Informationen zum geplanten Start/Ende sowie die mögliche Anzahl an Terminen.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "questionZ5",
          "title": "Dauer",
          "description": "Informationen zur geplanten Dauer der einzelnen Termine. Bei Beratungsservices auch 'Individuell' möglich.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question9",
          "title": "Kostenschätzung in € ",
          "description": "Abschätzung des eigenen Aufwandes je Kunde pro Service (wird nur intern genutzt).",
          "inputType": "number",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question10",
          "title": "Preisindikation in € ",
          "description": "Abschätzung des Endpreises für den Kunden (inlusive EU-Rabatt).",
          "inputType": "number",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "questionZ6",
          "title": "Ort",
          "description": "Adresse angeben oder 'Online' eintragen",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "questionZ2",
          "title": "Serviceabschluss",
          "choices": [
            "Zertifikat",
            "Teilnahmebestätigung",
            "Auszeichnung"
          ],
          "isRequired": true,
          "showOtherItem": true,
        },
        {
          "type": "text",
          "name": "question14",
          "title": "Buchungsoptionen und -informationen",
          "description": "Link zu eigenem Buchungsportal oder Angabe 'Buchung über Marktplatz'.",
          "isRequired": false
        },
        {
          "type": "tagbox",
          "name": "question7",
          "title": "Sektoren",
          "isRequired": true,
          "description": "Auswahl der wichtigsten betroffenen Sektoren nach EU-Definition.",
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
          "title": "Technologien",
          "isRequired": true,
          "description": "Auswahl der wichtigsten genutzen Technologien nach EU-Definition.",
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
        }

      ]
    },
    {
      "name": "page2",
      "title": "Kursinformationen",
      "description": "Gib die Grundinformationen an, die wir für das Anlegen des Services benötigen. Diese Informationen sollten sich für die Außendarstellung zum Kunden eignen.",
      "elements": [
        {
          "type": "comment",
          "name": "questionZ3",
          "title": "Allgemeine Servicebeschreibung",
          "description": "Möglichst ansprechende Beschreibung des Serviceinhaltes in 5-10 Sätzen als Einführung für die Kunden.",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question11",
          "title": "Leistungen und Mehrwerte",
          "description": "Aufzählung der konkreten Lerninhalte in 3-5 Stichpunkten.",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question13",
          "title": "Zielgruppe und Voraussetzungen ",
          "description": "Aufzählung der konkreten Zielgruppe und Teilnahmevorraussetzungen in 3-5 Stichpunkten.",
          "isRequired": true
        }
      ]
    }
  ],
  "headerView": "advanced"
}