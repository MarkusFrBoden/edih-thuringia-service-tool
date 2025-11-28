import { type Ref } from "vue";
import emailjs from "@emailjs/browser";

// Konfiguration aus Umgebungsvariablen
const service_Id_EDIH = import.meta.env.VITE_SERVICE_ID_EDIH;
const template_Id_EDIH = import.meta.env.VITE_TEMPLATE_ID_EDIH;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

// Reihenfolge der Spalten in der Excel-Datei
const excelColumns = ["ServiceID","Servicebereich","Servicename","Hauptanbieter","Weitere Anbieter","Servicebeschreibung","Kurzbeschreibung","Format","Zeitraum","Dauer","Preis (mit Förderanteil)","Ort","Trainer1","Trainer2","Abschluss","Anmeldung","Leistungen und Mehrwerte","Zielgruppe und Voraussetzungen","Service-Bild","Moodle-Link","Vorschlag für drei weitere Marktplatzservices","Sektor(en)","Technologie(n)","KI-Level","Kostenschätzung (pro Kunde)"];

// Zuordnung von Fragen zu Excel-Spalten
const mapping: Record<string, string> = {
  question1: "Servicename",
  question2: "Hauptanbieter",
  question3: "Weitere Anbieter",
  question4: "Trainer1",
  question5: "Servicebereich",
  question6: "KI-Level",
  question7: "Format",
  question8: "Zeitraum",
  question9: "Dauer",
  question10: "Kostenschätzung (pro Kunde)",
  question11: "Preis (mit Förderanteil)",
  question12: "Ort",
  question13: "Abschluss",
  question14: "Anmeldung",
  question15: "Sektor(en)",
  question16: "Technologie(n)",
  question17: "Servicebeschreibung",
  question18: "Kurzbeschreibung",
  question19: "Leistungen und Mehrwerte",
  question20: "Zielgruppe und Voraussetzungen",
  question21: "Vorschlag für drei weitere Marktplatzservices"
};

// Hilfsfunktion für Excel-konforme Formatierung
function escapeCSV(value: any): string {
  if (value === null || value === undefined) return "";

  let str = Array.isArray(value) ? value.join(", ") : String(value);

  // Punkt durch # ersetzen
  //str = str.replace(/\./g, "#");

  // Zeilenumbrüche für Excel
  str = str.replace(/\r?\n/g, "\r\n");

  // Doppelte Quotes escapen
  const needsQuotes = /[",;\r\n]/.test(str);
  const escaped = str.replace(/"/g, '""');

  return needsQuotes ? `"${escaped}"` : escaped;
}

// CSV-Inhalt generieren
/*function generateCSV(answers: Record<string, any>): string {
  const header = excelColumns.join(";");
  const row = excelColumns.map(col => {
    const questionKey = Object.keys(mapping).find(key => mapping[key] === col);
    const value = questionKey ? answers[questionKey] : "";
    return escapeCSV(value);
  }).join(";");

  return header + "\r\n" + row + "\r\n";
}*/
function generateCSV(answers: Record<string, any>): string {
  const header = excelColumns.join(";");

  const row = excelColumns.map(col => {
    const questionKey = Object.keys(mapping).find(key => mapping[key] === col);

    if (!questionKey) return "";

    // Spezialfall für Frage 2 und Frage 3: Wenn {questionX}-Comment existiert und nicht leer, dann Kommentar verwenden
    if ((questionKey === "question2" || questionKey === "question3") && answers[`${questionKey}-Comment`]) {
      return escapeCSV(answers[`${questionKey}-Comment`]);
    }

    // Standardfall: Wert aus answers nehmen
    const value = answers[questionKey];
    return escapeCSV(value);
  }).join(";");

  return header + "\r\n" + row + "\r\n";
}

// UTF-8 sicher in base64 umwandeln
function utf8ToBase64(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

// Hauptfunktion: CSV erzeugen und per Email senden
export function createCSV(Answers: Ref<any>) {
  const csv = "\uFEFF" + generateCSV(Answers.value);  // BOM hinzufügen
  const base64CSV = utf8ToBase64(csv);               // sauberer base64 mit UTF-8

  const now = new Date();
  const filename = `ServiceUpload_${now.toISOString().slice(0, 10)}.csv`;

  const templateParams = {
    KPI_reporting: csv,
    results: base64CSV,
    servicekategorie: Answers.value.question5,
    servicelevel: Answers.value.question6,
    filename: filename
  };

  emailjs.send(service_Id_EDIH, template_Id_EDIH, templateParams, { publicKey })
    .then((response: any) => {
      console.log("EDIH-Email sent successfully!", response.status, response.text);
    })
    .catch((error: any) => {
      console.error("Failed to send EDIH-Email:", error);
    });
}
