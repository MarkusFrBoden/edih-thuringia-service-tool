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
        <Survey @surveyCompleted="handleDmaCompleted" :survey="EUDmaJSON" surveyMode="edit" />
      </div>

      <div v-else-if="EuResults && radarChartDataValues && doughnutChartDataValues">

        <div class="content">
          <div>
            <h5>{{ $t('Results.text') }}</h5>
          </div>
          <div v-if="showSendButton">
            <button class="btn btn-outline-secondary" @click="sendCSV">
              {{ $t('Results.button') }}
            </button>
          </div>

          <div v-if="showingBalloons" class="overlay">
            <Celebration />
          </div>
        </div>

        <div>
          <Results :EuResults="EuResults" :radarChartDataValues="radarChartDataValues"
            :doughnutChartDataValues="doughnutChartDataValues" />
        </div>

      </div>
    </div>
  </body>

</template>

<script setup lang="ts">
import Survey from './components/Survey.vue';
import Results from './components/Results.vue';
import Celebration from './components/Celebration.vue';
import { EUDmaJSON } from "./assets/EUDma_json";
import { inject, Ref, ref } from 'vue';
import { EuResult } from './interfaces/EuResults';
import { doughnutChartData } from './interfaces/doughnutChartData';
import { radarChartData } from './interfaces/radarChartData';
import { EUcalculation } from "./components/functions/EuResultsCalulation";
import { createCSV } from "./components/functions/createCSV";
import BrightnessHigh from './components/icons/BrightnessHigh.vue';
import BoxWithRightArrowOut from './components/icons/BoxWithRightArrowOut.vue';

//use global variable darkmode for all pages
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);

//DMA-Questions
let showResults = ref(false);
let showSendButton = ref(true);
let showingBalloons = ref(false);
let Answers = ref<EuResult>();

const handleDmaCompleted = (answers: any) => {
  Answers.value = answers;
  ResultCalculation();
}

//answer calculation
let EuResults = ref<EuResult>();
let doughnutChartDataValues = ref<Array<doughnutChartData>>([]);
let radarChartDataValues = ref<radarChartData>();
const ResultCalculation = () => {
  EUcalculation(Answers, doughnutChartDataValues, radarChartDataValues, EuResults);
  showResults.value = true;
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
