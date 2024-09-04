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