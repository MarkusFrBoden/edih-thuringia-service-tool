export const ServiceQuestions = {
  "title": "Einreichen eines neuen Services",
  "description": "Wenn du einen neuen Service auf dem Marktplatz des EDIH Thuringia anlegen möchtest, bist du hier genau richtig. Fülle dazu einfach die entsprechenden Felder aus. Das Koordinationsteam kümmert sich anschließend um die weitere Verwaltung. Du erhältst eine E-Mail, sobald der Service mit den von dir angegebenen Informationen angelegt wurde. Anschließend kannst du den Service selbstständig ausgestalten und final für Kunden sichtbar machen.",
  
  "completedHtml": {
    "de": "<h3>Vielen Dank für das Zusenden des neuen Services!</h3>",
    "en": "<h3>Thank you for sending in the new service</h3>"
  },
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "html",
          "name": "question0",
          "html":"<h4>Wichtige Information vor dem Ausfüllen des Servicetools</h4><br><p>Die eingegebenen Informationen werden beim Schließen oder Neuladen des Browsers nicht gespeichert. Plane deshalb zunächst intern den neuen Service vor, bevor du dieses Tool verwendest.</p><p>Für ein Beispiel mit zu füllenden Feldern, nutze die folgende Datei als Vorlage. Beim Ausfüllen des Servicetools sind insbesondere die Infobox unter dem Bild, die allgemeine Servicebeschreibung und die Servicedetails von Bedeutung:</p> <a href='public/Beispielservice_BIM-LateNight.pdf' download>📄 Beispielservice 'BIM Late Night' herunterladen (PDF)</a>"
        }
      ]
    },
    {
      "name": "page2",
      "title": "Allgemeine Angaben",
      "description": "Zunächst ein paar allgemeine Angaben zum Service.",
      "elements": [

        {
          "type": "text",
          "name": "question1",
          "title": "Service Bezeichnung",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question2",
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
          "name": "question3",
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
          "name": "question4",
          "title": "Ansprechpartner (Vor- & Nachname | Email-Adresse | opt. Telefon | opt. Rolle in Organisation) - auch zwei möglich",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question5",
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
          "name": "question6",
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
          "name": "question7",
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
          "name": "question8",
          "title": "Zeitraum",
          "description": "Informationen zum geplanten Start/Ende sowie die mögliche Anzahl an Terminen.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question9",
          "title": "Dauer",
          "description": "Informationen zur geplanten Dauer der einzelnen Termine. Bei Beratungsservices auch 'Individuell' möglich.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question10",
          "title": "Kostenschätzung in € ",
          "description": "Abschätzung des eigenen Aufwandes je Kunde pro Service (wird nur intern genutzt).",
          "inputType": "number",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question11",
          "title": "Preisindikation in € ",
          "description": "Abschätzung des Endpreises für den Kunden (inlusive EU-Rabatt). Bspw. 'Kostenfrei durch EU-Förderung' oder '360€ inkl. 30% EU-Rabatt'",
          "inputType": "number",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question12",
          "title": "Ort",
          "description": "Adresse angeben oder 'Online' eintragen",
          "isRequired": true
        },
        {
          "type": "dropdown",
          "name": "question13",
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
          "description": "Angabe 'Buchung über Marktplatz' oder Link zu eigenem Buchungsportal.",
          "isRequired": true
        },
        {
          "type": "tagbox",
          "name": "question15",
          "title": "Sektor(en)",
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
          "name": "question16",
          "title": "Technologie(n)",
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
      "name": "page3",
      "title": "Serviceinformationen",
      "description": "Gib die Grundinformationen an, die wir für das Anlegen des Services benötigen. Diese Informationen sollten sich für die Außendarstellung zum Kunden eignen.",
      "elements": [
        {
          "type": "comment",
          "name": "question17",
          "title": "Allgemeine Servicebeschreibung",
          "description": "Möglichst ansprechende Beschreibung des Serviceinhaltes in 5-10 Sätzen als Einführung für die Kunden.",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question18",
          "title": "Leistungen und Mehrwerte",
          "description": "Aufzählung der konkreten Lerninhalte in 3-5 Stichpunkten.",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question19",
          "title": "Zielgruppe und Voraussetzungen ",
          "description": "Aufzählung der konkreten Zielgruppe und Teilnahmevorraussetzungen in 3-5 Stichpunkten.",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question20",
          "title": "Vorschlag für drei weitere Marktplatzservices.",
          "description": "Kopieren und Einfügen von Links drei weiterer Services des EDIH Thuringia Marktplatzes für die Kachel 'Weitere Services'.",
          "isRequired": true
        },
      ]
    }
  ],
  "headerView": "advanced"
}