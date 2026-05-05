// Mapping Servicebereich → Servicenummer-Präfix
const servicebereichZuPraefix: Record<string, string> = {
  "Lernen": "1000",
  "Testen": "2000",
  "Investieren": "3000",
  "Vernetzen": "4000",
};

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function panelDynamicToHtmlList(value: any): string {
  if (!Array.isArray(value) || value.length === 0) return "";
  const items = value
    .map((entry) => entry?.punkt ?? "")
    .filter((p) => String(p).trim().length > 0)
    .map((p) => `<li>${escapeHtml(String(p))}</li>`)
    .join("");
  return items ? `<ul>${items}</ul>` : "";
}

function dropdownValue(answers: Record<string, any>, key: string): string {
  const comment = answers[`${key}-Comment`];
  if (comment !== undefined && comment !== null && String(comment).trim() !== "") {
    return String(comment);
  }
  const value = answers[key];
  if (value === undefined || value === null) return "";
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function arrayToCommaList(value: any): string {
  if (Array.isArray(value)) return value.join(", ");
  if (value === undefined || value === null) return "";
  return String(value);
}

function trainer2IsActive(answers: Record<string, any>): boolean {
  return answers.trainer2_aktiv === true;
}

function trainer2Field(answers: Record<string, any>, field: string): string {
  if (!trainer2IsActive(answers)) return "";
  const v = answers[field];
  return v === undefined || v === null ? "" : String(v);
}

export function buildServiceJSON(answers: Record<string, any>): string {
  const servicebereich = String(answers.question5 ?? "");
  const praefix = servicebereichZuPraefix[servicebereich] ?? "";

  const platzhalter = {
    anbieter: dropdownValue(answers, "question2"),
    weitere_anbieter: dropdownValue(answers, "question3"),
    servicenummer: "",
    servicebezeichnung: String(answers.question1 ?? ""),
    servicebereich: servicebereich,
    servicebeschreibung: String(answers.question17 ?? ""),
    flyer_kurzbeschreibung: String(answers.question18 ?? ""),

    format: String(answers.question7 ?? ""),
    zeitraum: String(answers.question8 ?? ""),
    dauer: String(answers.question9 ?? ""),
    ort: String(answers.question12 ?? ""),
    preis: answers.question11 === undefined || answers.question11 === null ? "" : String(answers.question11),
    abschluss: String(answers.question13 ?? ""),
    anmeldung: String(answers.question14 ?? ""),

    trainer1_name: String(answers.trainer1_name ?? ""),
    trainer1_email: String(answers.trainer1_email ?? ""),
    trainer1_telefon: String(answers.trainer1_telefon ?? ""),
    trainer1_rolle: String(answers.trainer1_rolle ?? ""),

    trainer2_name: trainer2Field(answers, "trainer2_name"),
    trainer2_email: trainer2Field(answers, "trainer2_email"),
    trainer2_telefon: trainer2Field(answers, "trainer2_telefon"),
    trainer2_rolle: trainer2Field(answers, "trainer2_rolle"),

    leistungen_mehrwerte: panelDynamicToHtmlList(answers.question19),
    zielgruppe: panelDynamicToHtmlList(answers.question20),

    sektoren: arrayToCommaList(answers.question15),
    technologien: arrayToCommaList(answers.question16),
    ki_level: String(answers.question6 ?? ""),
    kostenschaetzung: answers.question10 === undefined || answers.question10 === null ? "" : String(answers.question10),
    status: "",
    servicenummer_kategorie_praefix: praefix,
  };

  return JSON.stringify({ platzhalter }, null, 2);
}
