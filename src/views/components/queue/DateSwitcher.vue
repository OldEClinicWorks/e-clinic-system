<script setup lang="ts">
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/vue";
import { arrowUndoCircleOutline, arrowRedoCircleOutline } from "ionicons/icons";
import { reactive, ref, computed } from "vue";

import moment from "moment";
import luxon from "luxon";

import { ION_DATETIME_DEFAULT_DATE_FORMAT } from '@/js/constants';
import ArrowIcon from "./ArrowIcon.vue";

const specificDateFormat = ION_DATETIME_DEFAULT_DATE_FORMAT;

const emit = defineEmits([
    'arrow-clicked',
    'date-picker-clicked',
    'select-today-clicked'
]);

const state = reactive({
    date: moment().format(specificDateFormat)
});

const onDateChanged = (e: any) => {
    console.log('from date picker:' + e.target.value);
    state.date = e.target.value;
    console.log('from state.date:' + state.date);
    console.log(specificDateFormat);
    
}

const onArrowClicked = (e: any): void => {
    if (e.target.id === 'leftArrow') {
        state.date = addDays(state.date, 1);
    } else {
        state.date = subtractDays(state.date, 1);
    }
    console.log(state.date);
    emit('arrow-clicked', { 'id': e.target.id, 'date': state.date });
}
const onGoToTodayClicked = (e: any) => {
    state.date = moment()
        .format(specificDateFormat);
}

const isTodayNotSelected = computed(() => {
    const selectedDate = moment(state.date).format("YYYY-MM-DD");
    const dateNow = moment().format("YYYY-MM-DD");
    const isTodaySelected = selectedDate === dateNow;

    console.log("selected date: " + selectedDate);
    console.log("date now: " + dateNow);

    return !isTodaySelected;
})

function addDays(date: moment.MomentInput, days: any): any {
    return moment(date)
        .add(days, 'days')
        .format(specificDateFormat);
}

function subtractDays(date: moment.MomentInput, days: any): any {
    return moment(date)
        .subtract(days, 'days')
        .format(specificDateFormat);
}
</script>
<template>
    <div class="shadow-lg  p-2 m-2 rounded-2xl flex-col date-switcher">
        <div v-show="isTodayNotSelected" class="text-black flex justify-center items-center ">
            <input @click="onGoToTodayClicked" type="button" class=" rounded-lg px-2 todayBtn cursor-pointer"
                value="Go to Today">
        </div>
        <div class="flex items-center justify-center">
            <ArrowIcon id="leftArrow" @click="onArrowClicked" :icon="arrowUndoCircleOutline"></ArrowIcon>
            <ion-datetime-button datetime="datetime" class="text-xs"></ion-datetime-button>
            <ion-modal style="" :keep-contents-mounted="true">
                <ion-datetime @ion-change="onDateChanged" id="datetime" :value="state.date" class="text-xl "></ion-datetime>
            </ion-modal>
            <ArrowIcon id="rightArrow" @click="onArrowClicked" :icon="arrowRedoCircleOutline"></ArrowIcon>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.todayBtn {
    border: 1px solid;
    color: var(--xbase-color-white);
    background-color: var(--xbase-color-primary);

    &:active {
        background-color: #333;
    }
}

.date-switcher {
    background-color: var(--xbase-color-white);
}
</style>