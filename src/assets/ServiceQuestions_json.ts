export const ServiceQuestions = {
  "title": "Einreichen eines neuen Services",
  "description": "Wenn du einen neuen Service auf dem Marktplatz des EDIH MID GERMANY anlegen möchtest, bist du hier genau richtig. Fülle dazu einfach die entsprechenden Felder aus. Das Koordinationsteam kümmert sich anschließend um die weitere Verwaltung. Du erhältst eine E-Mail, sobald der Service mit den von dir angegebenen Informationen angelegt wurde. Anschließend kannst du den Service selbstständig ausgestalten und final für Kunden sichtbar machen.",

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
          "html": "<h4>Wichtige Information vor dem Ausfüllen des Servicetools</h4><br><p>Die eingegebenen Informationen werden beim Schließen oder Neuladen des Browsers nicht gespeichert. Plane deshalb zunächst intern den neuen Service vor, bevor du dieses Tool verwendest.</p><p>Für ein Beispiel mit zu füllenden Feldern, nutze die folgende Datei als Vorlage. Beim Ausfüllen des Servicetools sind insbesondere die Infobox unter dem Bild, die allgemeine Servicebeschreibung und die Servicedetails von Bedeutung:</p> <a href='https://service.edih.digital/Beispielservice_BIM-LateNight.pdf' download>📄 Marktplatzansicht für Beispielservice 'BIM Late Night' herunterladen (PDF)</a><br><a href='https://service.edih.digital/Beispielservice_BIM-LateNight-Flyer.pdf' download>📄 Flyeransicht für Beispielservice 'BIM Late Night' herunterladen (PDF)</a>"
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
            "Bauhaus.Mobility",
            "BPV Consult GmbH",
            "highQ Computerlösungen GmbH",
            "IAB – Institut für Angewandte Bauforschung Weimar gGmbH",
            "NT Neue Technologie AG",
            "pwp-systems GmbH",
            "Thüringer Innovationszentrum Mobilität (ThIMo)",
            "Thüringer Zentrum für Lernende Systeme und Robotik (TZLR)",
            "Ubilabs GmbH",
            "WBA | Bauhaus Weiterbildungsakademie Weimar e.V."
          ]
        },
        {
          "type": "dropdown",
          "name": "question3",
          "title": "weitere Anbieter",
          "showOtherItem": true,
          "choices": [
            "Bauhaus.Mobility",
            "BPV Consult GmbH",
            "highQ Computerlösungen GmbH",
            "IAB – Institut für Angewandte Bauforschung Weimar gGmbH",
            "NT Neue Technologie AG",
            "pwp-systems GmbH",
            "Thüringer Innovationszentrum Mobilität (ThIMo)",
            "Thüringer Zentrum für Lernende Systeme und Robotik (TZLR)",
            "Ubilabs GmbH",
            "WBA | Bauhaus Weiterbildungsakademie Weimar e.V."
          ]
        },
        {
          "type": "panel",
          "name": "question4",
          "title": "Ansprechpartner",
          "description": "Bitte gib mindestens einen Trainer/Ansprechpartner an. Ein zweiter Trainer ist optional. Sollten die Ansprechpartner des Services von dir als Serviceersteller abweichen, dann ergänze bitte deine E-Mail-Adresse für die Bestätigung des neuen Services.",
          "elements": [
            {
              "type": "text",
              "name": "trainer1_name",
              "title": "Trainer 1 – Vor- & Nachname",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "trainer1_email",
              "title": "Trainer 1 – E-Mail",
              "inputType": "email",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "trainer1_telefon",
              "title": "Trainer 1 – Telefon (optional)"
            },
            {
              "type": "text",
              "name": "trainer1_rolle",
              "title": "Trainer 1 – Rolle (optional)"
            },
            {
              "type": "boolean",
              "name": "trainer2_aktiv",
              "title": "Zweiten Trainer hinzufügen?",
              "renderAs": "checkbox",
              "defaultValue": false
            },
            {
              "type": "text",
              "name": "trainer2_name",
              "title": "Trainer 2 – Vor- & Nachname",
              "visibleIf": "{trainer2_aktiv} = true",
              "requiredIf": "{trainer2_aktiv} = true"
            },
            {
              "type": "text",
              "name": "trainer2_email",
              "title": "Trainer 2 – E-Mail",
              "inputType": "email",
              "visibleIf": "{trainer2_aktiv} = true",
              "requiredIf": "{trainer2_aktiv} = true"
            },
            {
              "type": "text",
              "name": "trainer2_telefon",
              "title": "Trainer 2 – Telefon (optional)",
              "visibleIf": "{trainer2_aktiv} = true"
            },
            {
              "type": "text",
              "name": "trainer2_rolle",
              "title": "Trainer 2 – Rolle (optional)",
              "visibleIf": "{trainer2_aktiv} = true"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "question5",
          "title": "Service-Kategorie",
          "description": "Für die Einordnung nach Service-Kategorien auf dem EDIH MID GERMANY Marktplatz.",
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
          "description": "Für die zukünftige Einordnung nach KI-Leveln auf dem EDIH MID GERMANY Marktplatz (Readiness = Grundlegende Digitalisierung, welche die Grundlagen für KI bildet | Application = Nutzung von KI-Anwendungen im Rahmen des Services | Innovation = Forschung & Entwicklung neuer Anwendungen auf Basis von KI)",
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
          "type": "text",
          "name": "question7",
          "title": "Serviceformat",
          "description": "Beispielsweise Workshopreihe, Weiterbildung, Beratung, Live-Demonstration oder ähnliches.",
          "isRequired": true
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
          "type": "text",
          "name": "question13",
          "title": "Serviceabschluss",
          "description": "Beispielsweise Zertifikat, Teilnahmebestätigung, Auszeichnung, oder Wissen & Vernetzung",
          "isRequired": true
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
            "Aeronautics",
            "Agricultural biotechnology and food biotechnology",
            "Automotive",
            "Community-Led Local Development",
            "Construction & Assembly",
            "Consumer products",
            "Cultural and creative economy",
            "Defence",
            "Education",
            "Electricity",
            "Energy",
            "Energy, fuels and petroleum engineering",
            "Environment",
            "Financial",
            "Fishery",
            "Food and beverages",
            "Health care",
            "Leather",
            "Legal Aspects",
            "Life sciences",
            "Manufacturing and processing",
            "Maritime",
            "Metal working and industrial production",
            "Mining and extraction",
            "NMP Non-Metallic Materials & basic processes",
            "Nuclear",
            "Paper and wood",
            "Personal services",
            "Polymers and plastics",
            "Public administration",
            "Real estate",
            "Regulation",
            "Retail, wholesale or distribution",
            "Security",
            "Smart City",
            "Space",
            "Telecommunications",
            "Textiles",
            "Tobacco",
            "Transport & Mobility",
            "Transport sector",
            "Travel and tourism",
            "All sectors"
          ]
        },
        {
          "type": "tagbox",
          "name": "question16",
          "title": "Technologie(n)",
          "isRequired": true,
          "description": "Auswahl der wichtigsten genutzen Technologien nach EU-Definition.",
          "choices": [
            "Additive manufacturing",
            "Artificial Intelligence & Decision support",
            "BI tools",
            "Big data",
            "Blockchain and Distributed Ledger Technology (DLT)",
            "Chemical engineering (plants, products)",
            "Cloud Services",
            "Communication network",
            "Cyber-physical systems",
            "Cybersecurity",
            "Digital twins",
            "Displays",
            "Gamification",
            "High performance computing",
            "Human computer interaction",
            "Industrial biotechnology",
            "Internet of Things",
            "Internet Services & Applications",
            "Laser-based manufacturing and materials processing",
            "Location-based applications",
            "Logistics",
            "Micro- and nanoelectronics, optoelectronics",
            "Mobility",
            "New technologies for Audio-Visual sector - Media",
            "Organic and large area electronics",
            "Other (please specify)",
            "Photonics",
            "Quantum Technologies (computing/communication)",
            "Robotics",
            "Semiconductors and Nanotechnology",
            "Sensors & Vision Processing Systems",
            "Simulation engineering and modelling",
            "Software Architectures",
            "Virtual Reality",
            "All sectors"
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
          "title": "Allgemeine Servicebeschreibung für den Marktplatz",
          "description": "Möglichst ansprechende Beschreibung des Serviceinhaltes in 5-10 Sätzen als Einführung für die Kunden (siehe Servicebeispiel).",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "question18",
          "title": "Kurzbeschreibung für den Service-Steckbrief",
          "description": "Möglichst Beschreibung des Serviceinhaltes in 2-3 Sätzen (siehe Flyer-Beispiel).",
          "isRequired": true
        },
        {
          "type": "paneldynamic",
          "name": "question19",
          "title": "Leistungen und Mehrwerte",
          "description": "Trage 3–5 Stichpunkte zu konkret erhaltenen Leistungen und Mehrwerten für Kunden als Liste ein.",
          "isRequired": true,
          "minPanelCount": 3,
          "maxPanelCount": 8,
          "panelAddText": "Punkt hinzufügen",
          "panelRemoveText": "Punkt entfernen",
          "templateElements": [
            {
              "type": "text",
              "name": "punkt",
              "title": "Stichpunkt",
              "isRequired": true
            }
          ]
        },
        {
          "type": "paneldynamic",
          "name": "question20",
          "title": "Zielgruppe",
          "description": "Trage 3–5 Stichpunkte/Beispiele zu(r) möglichen Zielgruppe(n) als Liste ein.",
          "isRequired": true,
          "minPanelCount": 3,
          "maxPanelCount": 8,
          "panelAddText": "Punkt hinzufügen",
          "panelRemoveText": "Punkt entfernen",
          "templateElements": [
            {
              "type": "text",
              "name": "punkt",
              "title": "Stichpunkt",
              "isRequired": true
            }
          ]
        },
        {
          "type": "paneldynamic",
          "name": "question21",
          "title": "Vorschlag für 2–3 weitere Marktplatzservices",
          "description": "Füge 2–3 Links zu weiteren Services des EDIH MID GERMANY Marktplatzes für die Kachel 'Weitere Services' ein. Format: https://edih.digital/course/view.php?id=<ID> (Beispiel: https://edih.digital/course/view.php?id=183).",
          "isRequired": true,
          "minPanelCount": 2,
          "maxPanelCount": 3,
          "panelAddText": "Link hinzufügen",
          "panelRemoveText": "Link entfernen",
          "templateElements": [
            {
              "type": "text",
              "name": "link",
              "title": "Marktplatz-Link",
              "inputType": "url",
              "isRequired": true,
              "validators": [
                {
                  "type": "regex",
                  "regex": "^https://edih\\.digital/course/view\\.php\\?id=\\d+$",
                  "text": "Bitte einen gültigen Marktplatz-Link im Format https://edih.digital/course/view.php?id=<ID> einfügen."
                }
              ]
            }
          ]
        },
      ]
    }
  ],
  "headerView": "advanced"
}