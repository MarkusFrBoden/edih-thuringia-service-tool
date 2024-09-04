<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col mb-4">
                    <div class="box position-relative">
                        <b>{{ $t(filename + '.overview') }}</b>
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="position-absolute"
                                style="top: 50%; left: calc(15%); transform: translate(-50%, -50%); font-size: 50px; color: #41B883;">
                                Ø {{ props.EuResults.dimG.toFixed(2) }}
                            </span>
                        </div>
                        <radarChart :data="props.radarChartDataValues" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="box">
                        <b>{{ $t(filename + '.dimension1') }} </b>
                        <doughnutChart :data="props.doughnutChartDataValues[0]" />
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="box">
                        <b>{{ $t(filename + '.dimension2') }} </b>
                        <doughnutChart :data="props.doughnutChartDataValues[1]" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="box">
                        <b>{{ $t(filename + '.dimension3') }} </b>
                        <doughnutChart :data="props.doughnutChartDataValues[2]" />
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="box">
                        <b>{{ $t(filename + '.dimension4') }} </b>
                        <doughnutChart :data="props.doughnutChartDataValues[3]" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="box">
                        <b>{{ $t(filename + '.dimension5') }} </b>
                        <doughnutChart :data="props.doughnutChartDataValues[4]" />
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="box">
                        <b>{{ $t(filename + '.dimension6') }} </b>
                        <doughnutChart :data="props.doughnutChartDataValues[5]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import doughnutChart from "./charts/doughnutChart.vue";
import radarChart from "./charts/radarChart.vue";
import type { doughnutChartData } from "../interfaces/doughnutChartData"
import type { radarChartData } from "../interfaces/radarChartData"
import type { EuResult } from "../interfaces/EuResults"

//filename for language tags
const filename = 'EuResultsComp'

//accept props from calling views
let props = defineProps({
    EuResults: {
        type: Object as () => EuResult,
        required: true
    },
    radarChartDataValues: {
        type: Object as () => radarChartData,
        required: true
    },
    doughnutChartDataValues: {
        type: Array as () => Array<doughnutChartData>,
        required: true
    }
})

</script>

<style scoped></style>
