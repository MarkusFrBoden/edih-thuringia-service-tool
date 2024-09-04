<template>
  <div :style="{ height: height, width: width }">
    <Radar :data="props.data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';
import { Radar } from 'vue-chartjs';
import type { radarChartData } from "../../interfaces/radarChartData"

//chartJS options
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
);

ChartJS.defaults.borderColor = 'rgba(100, 100, 100, 1)';
ChartJS.defaults.color = 'rgba(150, 150, 150, 1)';


//accept survey props from calling components
let props = defineProps({
  data: {
    required: true,
    type: Object as () => radarChartData
  },
  height: {
    required: false,
    type: String
  },
  width: {
    required: false,
    type: String
  }
})

// watch for locale changes for labels
const { t } = useI18n();
props.data.labels = [t('Labels.l1'), t('Labels.l2'), t('Labels.l3'), t('Labels.l4'), t('Labels.l5'), t('Labels.l6')]
props.data.datasets[0].label = t('Labels.l0');

//define chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        display: false
      },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        font: {
          size: 12
        }
      },
      pointLabels: {
        font: {
          size: 14
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 16
        }
      }
    }
  }
};

</script>


<style scoped></style>