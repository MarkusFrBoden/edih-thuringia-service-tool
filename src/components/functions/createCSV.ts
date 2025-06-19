import { type Ref } from "vue";
import emailjs from "@emailjs/browser";

// Konfiguration aus Umgebungsvariablen
const service_Id_EDIH = import.meta.env.VITE_SERVICE_ID_EDIH;
const template_Id_EDIH = import.meta.env.VITE_TEMPLATE_ID_EDIH;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

// Reihenfolge der Spalten in der Excel-Datei
const excelColumns = [
  "ID", "Name", "Name_EN", "Hauptanbieter", "Weitere Anbieter",
  "Sektor(en)", "Sektor_EN", "Technologien", "Tech_EN", "Stand",
  "Kostenschätzung (je Service/Kunde)", "Preisindikation SME", "Preisindikation PSO",
  "Leistungen+Mehrwerte", "Leistungen+Mehrwerte_EN",
  "Zeitliche/örtliche Daten", "Zeitliche/örtliche Daten_EN",
  "Zielgruppe+Voraussetzungen", "Zielgruppe+Voraussetzungen_EN",
  "Konditionen+Vorteile", "Konditionen+Vorteile_EN",
  "Buchung", "Buchung_EN",
  "Kontakt-Name", "Kontakt-Mail", "Kontakt-Telefon", "Kontakt-Weiteres",
  "Kurs-Link"
];

// Zuordnung von Fragen zu Excel-Spalten
const mapping: Record<string, string> = {
  question3: "Name",
  question4: "Hauptanbieter",
  question5: "Weitere Anbieter",
  question6: "Kontakt-Name",
  question7: "Sektor(en)",
  question8: "Technologien",
  question9: "Kostenschätzung (je Service/Kunde)",
  question10: "Preisindikation SME",
  question11: "Leistungen+Mehrwerte",
  question12: "Zeitliche/örtliche Daten",
  question13: "Zielgruppe+Voraussetzungen",
  question14: "Konditionen+Vorteile",
  question15: "Buchung"
};

// Hilfsfunktion für Excel-konforme Formatierung
function escapeCSV(value: any): string {
  if (value === null || value === undefined) return "";

  let str = Array.isArray(value) ? value.join(", ") : String(value);

  // Punkt durch # ersetzen
  str = str.replace(/\./g, "#");

  // Zeilenumbrüche für Excel
  str = str.replace(/\r?\n/g, "\r\n");

  // Doppelte Quotes escapen
  const needsQuotes = /[",;\r\n]/.test(str);
  const escaped = str.replace(/"/g, '""');

  return needsQuotes ? `"${escaped}"` : escaped;
}

// CSV-Inhalt generieren
function generateCSV(answers: Record<string, any>): string {
  const header = excelColumns.join(";");
  const row = excelColumns.map(col => {
    const questionKey = Object.keys(mapping).find(key => mapping[key] === col);
    const value = questionKey ? answers[questionKey] : "";
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
    servicekategorie: Answers.value.question1,
    servicelevel: Answers.value.question2,
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
