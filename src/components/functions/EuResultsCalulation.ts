//calculation of eu or bim4vid answers
import type { radarChartData } from "../../interfaces/radarChartData.js"
import type { doughnutChartData } from "../../interfaces/doughnutChartData.js"
import type { EuResult } from "../../interfaces/EuResults.js"
import { type Ref } from "vue";

export function EUcalculation(
    answers: Ref<any>,
    doughnutChartDataValues: Ref<Array<doughnutChartData>>,
    radarChartDataValues: Ref<radarChartData | undefined>,
    EuResults: Ref<EuResult | undefined>
) {
    if (answers) {
        if (answers.value.EUDMAQuestion1 === "PSO") {
            let question15value = 0;
            if (answers.value.EUPSOQuestion15) {
                question15value = answers.value.EUPSOQuestion15.length;
            }
            let D1countColumn1 = 0;
            let D1countColumn2 = 0;
            if (answers.value.EUPSOQuestion16) {
                const question16 = answers.value.EUPSOQuestion16;
                for (const key in question16) {
                    if (question16.hasOwnProperty(key)) {
                        const row = question16[key];
                        if (row.hasOwnProperty("Column 1") && Array.isArray(row["Column 1"]) && row["Column 1"].includes("Yes")) {
                            D1countColumn1++;
                        }
                        if (row.hasOwnProperty("Column 2") && Array.isArray(row["Column 2"]) && row["Column 2"].includes("Yes")) {
                            D1countColumn2++;
                        }
                    }
                }
            }
            let dim1 = question15value * 3.333333333333333333 + D1countColumn1 / 8 * 10 * 3.333333333333333333 + D1countColumn2 / 8 * 10 * 3.333333333333333333;

            //Dimension 2 (17-18)
            let question17value = 0
            if (answers.value.EUPSOQuestion17) {
                question17value = answers.value.EUPSOQuestion17.length;
            }
            const itemCounts: any = {
                "Item 2": 0,
                "Item 3": 0,
                "Item 4": 0,
                "Item 5": 0,
                "Item 6": 0
            };
            if (answers.value.EUPSOQuestion18) {
                const question18 = answers.value.EUPSOQuestion18;
                for (const row in question18) {
                    if (Object.prototype.hasOwnProperty.call(question18, row)) {
                        const item = question18[row]["Column 1"];
                        if (itemCounts.hasOwnProperty(item)) {
                            itemCounts[item]++;
                        }
                    }
                }
            }
            let dim2 = ((question17value / 9) * 10 + ((itemCounts["Item 2"] * 0.2 + itemCounts["Item 3"] * 0.4 + itemCounts["Item 4"] * 0.6 + itemCounts["Item 5"] * 0.8 + itemCounts["Item 6"] * 1) / 8) * 10) * 5;

            //Dimension3 (19-20)
            let question19value = 0
            if (answers.value.EUPSOQuestion19) {
                question19value = answers.value.EUPSOQuestion19.length;
            }
            let question20value = 0
            if (answers.value.EUPSOQuestion20) {
                question20value = answers.value.EUPSOQuestion20.length;
            }
            let dim3 = ((question19value / 7) * 10 + question20value) * 5

            //Dimension4 (21-22)
            let question21value = 0
            if (answers.value.EUPSOQuestion21) {
                question21value = answers.value.EUPSOQuestion21.length;
            }
            let question22value = 0
            if (answers.value.EUPSOQuestion22) {
                question22value = answers.value.EUPSOQuestion22.length;
            }
            let dim4 = ((question21value / 9) * 10 + (question22value / 6) * 10) * 5

            //Dimension 5 (23)
            let D5countColumn1 = 0;
            let D5countColumn2 = 0;
            if (answers.value.EUPSOQuestion23) {
                const question23 = answers.value.EUPSOQuestion23;
                for (const key in question23) {
                    if (question23.hasOwnProperty(key)) {
                        const row = question23[key];
                        if (row.hasOwnProperty("Column 1") && Array.isArray(row["Column 1"]) && row["Column 1"].includes("Yes")) {
                            D5countColumn1++;
                        }
                        if (row.hasOwnProperty("Column 2") && Array.isArray(row["Column 2"]) && row["Column 2"].includes("Yes")) {
                            D5countColumn2++;
                        }
                    }
                }
            }
            let dim5 = ((D5countColumn1 * 10) / 16 + (D5countColumn2 * 10) / 16) * 5;

            //Dimension 6 (24-25)
            let question24value = 0
            if (answers.value.EUPSOQuestion24) {
                question24value = answers.value.EUPSOQuestion24.length;
            }
            let D6countColumn1 = 0;
            let D6countColumn2 = 0;
            let D6countColumn3 = 0;
            if (answers.value.EUPSOQuestion25) {
                const question25 = answers.value.EUPSOQuestion25;
                for (const key in question25) {
                    const value = question25[key];
                    if (value === "Column 1") {
                        D6countColumn1++;
                    } else if (value === "Column 2") {
                        D6countColumn2++;
                    } else if (value === "Column 3") {
                        D6countColumn3++;
                    }
                }
            }
            let dim6 = ((question24value / 9) * 10 + ((D6countColumn1 * 0 + D6countColumn2 * 0.5 + D6countColumn3 * 1) / 5) * 10) * 5;

            //Gesamt
            let dimG = (dim1 + dim2 + dim3 + dim4 + dim5 + dim6) / 6
            EuResults.value = { "dim1": dim1, "dim2": dim2, "dim3": dim3, "dim4": dim4, "dim5": dim5, "dim6": dim6, "dimG": dimG }

            radarChartDataValues.value = {
                labels: [
                    'Digitale Strategie und Investitionen',
                    'Bereitschaft für den digitalen Wandel',
                    'Auf den Menschen ausgerichtete Digitalisierung',
                    'Datenverwaltung und -sicherheit',
                    'Interoperabilität',
                    'Grüne Digitalisierung',
                ],
                datasets: [
                    {
                        label: 'Ergebnis',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [dim1, dim2, dim3, dim4, dim5, dim6]
                    }
                ]
            }

            //form doughnuts
            for (let i = 1; i < 7; i++) {
                let doughnutChartData = {} as doughnutChartData;
                const dim = eval(`dim${i}`);
                doughnutChartData = {
                    labels: ['Dimension' + i, 'Missing'],
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651'],
                            data: [dim, (100 - dim)]
                        }
                    ]
                };
                doughnutChartDataValues.value.push(doughnutChartData);
            }
            //}
        }
        //EU-Results calculation SME
        else {

            let D1countColumn1 = 0;
            let D1countColumn2 = 0;
            if (answers.value.EUSMEQuestion15) {
                const question15 = answers.value.EUSMEQuestion15;
                for (const key in question15) {
                    if (question15.hasOwnProperty(key)) {
                        const row = question15[key];
                        if (row.hasOwnProperty("Column 1") && Array.isArray(row["Column 1"]) && row["Column 1"].includes("Yes")) {
                            D1countColumn1++;
                        }
                        if (row.hasOwnProperty("Column 2") && Array.isArray(row["Column 2"]) && row["Column 2"].includes("Yes")) {
                            D1countColumn2++;
                        }
                    }
                }
            }
            let question16value = 0;
            if (answers.value.EUSMEQuestion16) {
                question16value = answers.value.EUSMEQuestion16.length;
            }
            let dim1 = question16value * 3.333333333333333333 + D1countColumn1 * 3.333333333333333333 + D1countColumn2 * 3.333333333333333333;

            //Dimension 2 (17-18)
            let question17value = 0
            if (answers.value.EUSMEQuestion17) {
                question17value = answers.value.EUSMEQuestion17.length;
            }
            const itemCounts: any = {
                "Item 2": 0,
                "Item 3": 0,
                "Item 4": 0,
                "Item 5": 0,
                "Item 6": 0
            };
            if (answers.value.EUSMEQuestion18) {
                const question18 = answers.value.EUSMEQuestion18;
                for (const row in question18) {
                    if (Object.prototype.hasOwnProperty.call(question18, row)) {
                        const item = question18[row]["Column 1"];
                        if (itemCounts.hasOwnProperty(item)) {
                            itemCounts[item]++;
                        }
                    }
                }
            }
            let dim2 = ((question17value / 10) * 10 + ((itemCounts["Item 2"] * 0.2 + itemCounts["Item 3"] * 0.4 + itemCounts["Item 4"] * 0.6 + itemCounts["Item 5"] * 0.8 + itemCounts["Item 6"] * 1) / 7) * 10) * 5;

            //Dimension3 (19-20)
            let question19value = 0
            if (answers.value.EUSMEQuestion19) {
                question19value = answers.value.EUSMEQuestion19.length;
            }
            let question20value = 0
            if (answers.value.EUSMEQuestion20) {
                question20value = answers.value.EUSMEQuestion20.length;
            }
            let dim3 = ((question19value / 7) * 10 + (question20value / 8) * 10) * 5

            //Dimension4 (21-22)
            let question21value = 0
            if (answers.value.EUSMEQuestion21) {
                question21value = answers.value.EUSMEQuestion21.length;
            }
            let question22value = 0
            if (answers.value.EUSMEQuestion22) {
                question22value = answers.value.EUSMEQuestion22.length;
            }
            let dim4 = ((question21value / 8) * 10 + (question22value / 6) * 10) * 5

            //Dimension 5 (23)
            const itemCounts2: any = {
                "Item 2": 0,
                "Item 3": 0,
                "Item 4": 0,
                "Item 5": 0,
                "Item 6": 0
            };
            if (answers.value.EUSMEQuestion23) {
                const question18 = answers.value.EUSMEQuestion23;
                for (const row in question18) {
                    if (Object.prototype.hasOwnProperty.call(question18, row)) {
                        const item = question18[row]["Column 1"];
                        if (itemCounts2.hasOwnProperty(item)) {
                            itemCounts2[item]++;
                        }
                    }
                }
            }
            let dim5 = (((itemCounts2["Item 2"] * 0.2 + itemCounts2["Item 3"] * 0.4 + itemCounts2["Item 4"] * 0.6 + itemCounts2["Item 5"] * 0.8 + itemCounts2["Item 6"] * 1) / 5) * 10) * 10;

            //Dimension 6 (24-25)
            let question24value = 0
            if (answers.value.EUSMEQuestion24) {
                question24value = answers.value.EUSMEQuestion24.length;
            }
            let D6countColumn1 = 0;
            let D6countColumn2 = 0;
            let D6countColumn3 = 0;
            if (answers.value.EUSMEQuestion25) {
                const question25 = answers.value.EUSMEQuestion25;
                for (const key in question25) {
                    const value = question25[key];
                    if (value === "Column 1") {
                        D6countColumn1++;
                    } else if (value === "Column 2") {
                        D6countColumn2++;
                    } else if (value === "Column 3") {
                        D6countColumn3++;
                    }
                }
            }
            let dim6 = ((question24value / 10) * 10 + ((D6countColumn1 * 0 + D6countColumn2 * 0.5 + D6countColumn3 * 1) / 5) * 10) * 5;

            //Total
            let dimG = (dim1 + dim2 + dim3 + dim4 + dim5 + dim6) / 6
            EuResults.value = { "dim1": dim1, "dim2": dim2, "dim3": dim3, "dim4": dim4, "dim5": dim5, "dim6": dim6, "dimG": dimG }

            radarChartDataValues.value = {
                labels: [
                    'Digitale Strategie und Investitionen',
                    'Bereitschaft für den digitalen Wandel',
                    'Auf den Menschen ausgerichtete Digitalisierung',
                    'Datenverwaltung und -sicherheit',
                    'Interoperabilität',
                    'Grüne Digitalisierung',
                ],
                datasets: [
                    {
                        label: 'Ergebnis',
                        backgroundColor: 'rgba(173, 216, 230, 0.2)',
                        borderColor: 'rgba(173, 216, 230, 1)',
                        pointBackgroundColor: 'rgba(173, 216, 230, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(173, 216, 230, 1)',
                        data: [dim1, dim2, dim3, dim4, dim5, dim6]
                    }
                ]
            }

            //form doughnuts
            for (let i = 1; i < 7; i++) {
                let doughnutChartData = {} as doughnutChartData;
                const dim = eval(`dim${i}`);
                doughnutChartData = {
                    labels: ['Erreichte Punkte', 'Fehlende Punkte'],
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651'],
                            data: [dim, (100 - dim)]
                        }
                    ]
                };
                doughnutChartDataValues.value.push(doughnutChartData);
            }
        }
    }
    return {
        EUcalculation
    };
}

