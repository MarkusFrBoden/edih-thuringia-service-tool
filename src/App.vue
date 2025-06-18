<template>
  <header>
    <div class="container">
      <div class="row align-items-center justify-content-between">

        <div id="img" class="col1 d-flex justify-content-left">
          <div v-if="!darkmode">
            <img src="./assets/EDIH-Th_Landscape_darkblue.png" alt="EDIH Thuringia">
          </div>
          <div v-else>
            <img src="./assets/EDIH-Th_Landscape_white.png" alt="EDIH Thuringia">
          </div>
        </div>

        <div id="text" class="col2 d-flex justify-content-center align-items-center">
          <h1>{{ $t('Header.title') }}</h1>
        </div>

        <div id="buttons" class="col3 d-flex justify-content-right">
          <div class="btn-group">
            <button class="btn btn-outline-secondary" @click="darkmode = !darkmode">
              <BrightnessHigh />
            </button>
            <select class="btn btn-outline-secondary custom-select" v-model="$i18n.locale">
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
            <button class="btn btn-outline-secondary" onclick="window.location.href='https://edih.digital/moodle/';">
              <div>
                <BoxWithRightArrowOut />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>



  <body>
    <div>

      <div v-if="!showResults">
        <Survey @surveyCompleted="handleDmaCompleted" :survey="ServiceQuestions" surveyMode="edit" />
      </div>

      </div>
  </body>

</template>

<script setup lang="ts">
import Survey from './components/Survey.vue';
import Results from './components/Results.vue';
import Celebration from './components/Celebration.vue';
import { ServiceQuestions } from "./assets/ServiceQuestions_json";
import { inject, Ref, ref } from 'vue';
import { createCSV } from "./components/functions/createCSV";
import BrightnessHigh from './components/icons/BrightnessHigh.vue';
import BoxWithRightArrowOut from './components/icons/BoxWithRightArrowOut.vue';

//use global variable darkmode for all pages
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);

//DMA-Questions
let showResults = ref(false);
let showSendButton = ref(true);
let showingBalloons = ref(false);
let Answers = ref();

const handleDmaCompleted = (answers: any) => {
  Answers.value = answers;
  sendCSV();
}

//enable csv download
const sendCSV = () => {
  createCSV(Answers);
  showSendButton.value = false;
  // Animation 
  celebrate()
};

//Celebration Animation
const celebrate = () => {
  showingBalloons.value = true;
  setTimeout(() => {
    showingBalloons.value = false;
  }, 3000);
}

</script>


<style>
@import "./styles/global.css";
</style>
