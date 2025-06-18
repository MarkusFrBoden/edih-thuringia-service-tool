import { type Ref } from "vue";
import emailjs from '@emailjs/browser';

const service_Id_EDIH = import.meta.env.VITE_SERVICE_ID_EDIH;
const template_Id_EDIH = import.meta.env.VITE_TEMPLATE_ID_EDIH;
const public_Key = import.meta.env.VITE_PUBLIC_KEY;

export function createCSV(Answers: Ref<any>) {
    // crate json with mapping

    let sendEDIHEmail = () => {
        let KPI_String = Answers

        const templateParams1 = {
            KPI_reporting: KPI_String,
        };

        emailjs.send(service_Id_EDIH, template_Id_EDIH, templateParams1, { publicKey: public_Key })
            .then((response: any) => {
                console.log('EDIH-Email sent successfully!', response.status, response.text);
            }, (error: any) => {
                console.error('Failed to send EDIH-Email:', error);
            });
    }
    //sendEDIHEmail();
}