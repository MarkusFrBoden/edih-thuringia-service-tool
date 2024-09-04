import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import { useDark } from "@vueuse/core";
import de from './locales/de.json';
import en from './locales/en.json';
import { surveyPlugin } from "survey-vue3-ui";
import 'survey-core/defaultV2.min.css';

//create i18n language model
const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
      'en': en,
      'de': de
    }
  })

//use useDark from vueuse
const isDark = useDark();

//create App
const app = createApp(App)
app.provide('darkmode', isDark)
    .use(i18n)
    .use(surveyPlugin);
app.mount('#app')

