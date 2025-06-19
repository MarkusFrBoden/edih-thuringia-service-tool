<template>
  <SurveyComponent :model="survey" />
</template>

<script setup lang="ts">
import { Model } from "survey-core";
import { watch, inject, onMounted, ref, type Ref } from 'vue';
import { BorderlessDark } from "survey-core/themes";
import { BorderlessLight } from "survey-core/themes";
import { useI18n } from 'vue-i18n';
import "survey-core/i18n/german";
import "survey-core/i18n/english";

//accept survey props from calling components
let props = defineProps({
  survey: {
    type: Object,
    required: true
  },
  surveyMode: {
    type: String,
    required: true
  }
})

//define emit to send back survey results to calling components
const emit = defineEmits<{
  surveyCompleted: [value: any]
}>()
const sendResults = () => {
  const answers = survey.data;
  emit('surveyCompleted', answers);
};

//create survey modell
const survey = new Model(props.survey);

//use emit to reply results
survey.onComplete.add(sendResults);

//define themes and language and watcher for changes
const { locale } = useI18n();
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);
const headerchange = () => {
  survey.locale = locale.value;
  if (!darkmode.value) {
    survey.applyTheme(BorderlessLight);
  } else {
    survey.applyTheme(BorderlessDark);
  }
}

//use and watch themes and language
onMounted(() => {
  headerchange()
});
watch(
  [darkmode, locale],
  () => {
    headerchange()
  }
);

</script>

<style>
/* 1. Hintergrundfarbe nur für Header */
.sv-header,
.sv-header__background-color--accent {
  background-color: #E7F0FF;
}

.sv-tagbox__item{background-color:rgb(165 193 235)}

/* 2. Zelle mit Text von unten nach oben versetzen */
.sv-header__cell--left.sv-header__cell--bottom {
  grid-row-start: 1 !important;
  grid-column: 1 / 4 !important;
}

/* 3. Zentrierung oben */
.sv-header__cell--left.sv-header__cell--bottom .sv-header__cell-content {
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-items: left !important;
  text-align: left !important;
  width: 100%;
}

/* 4. Header-Texte: zentriert, begrenzt, responsive */
.sv-header__description,
.sv-header__description > .sd-description,
.sv-string-viewer--multiline {
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box;
  padding: 0 !important;
  text-align: left !important;
}

/* 5. Schriftfarbe für Textelemente */
.sv-string-viewer,
.sv-string-viewer--multiline {
  color: #003366 !important;
}

/* 7. Zentrale Container dehnen (SurveyJS-Umgebung) */
.sd-body,
.sd-container,
.sd-container-modern,
.sv-container,
.sv-container-modern,
.sv-root-modern__wrapper {
  max-width: 1200px !important;
  width: 90vw !important;
  margin: 0 auto !important;
  padding: 0 20px !important;
}

/* 8. Alle Seiten & Inhalte dehnen */
.sv-page,
.sv-page__content,
.sv-row,
.sv-question,
.sv-panel,
.sv-panel__content {
  max-width: 100% !important;
  width: 100% !important;
}

/* 9. Input-/Select-Felder */
.sv-question__content,
.sv-selectbase {
  width: 100% !important;
  max-width: 100% !important;
}

/* 10. Fragen-Labels ausrichten */
.sv-question__title {
  text-align: left;
}

/* 11. Responsive Anpassungen für kleine Screens */
@media (max-width: 1080px) {
  .sd-body,
  .sd-container,
  .sv-container,
  .sv-page,
  .sv-question {
    padding: 0 10px !important;
    width: 100% !important;
  }

  .sv-header__title,
  .sv-header__description {
    max-width: 100%;
    padding: 0 1rem;
  }
}

:root {
  --sjs-general-backcolor: #E7F0FF !important; /* ersetzt den globalen Hintergrund */
  --sjs-header-background-color: #E7F0FF !important; /* wirkt bei SurveyJS-Titeln */
}

.sv-header {
  background-color: #E7F0FF !important;
  --sjs-general-backcolor: #E7F0FF !important;
  --sjs-header-background-color: #E7F0FF !important;
}
</style>
