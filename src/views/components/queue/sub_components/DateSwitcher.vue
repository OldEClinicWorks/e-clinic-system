<script setup lang="ts">
import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/vue";
import { arrowUndoCircleOutline, arrowRedoCircleOutline } from "ionicons/icons";
import { reactive, ref, computed } from "vue";
import { useQueueStore } from "@/store/queue/store";

import moment from "moment";
import luxon from "luxon";

import { ION_DATETIME_DEFAULT_DATE_FORMAT } from '@/js/constants';
import ArrowIcon from "./ArrowIcon.vue";
import { storeToRefs } from "pinia";

const queueStore = useQueueStore();
const { appointments, fetchAppointments, selectedDate } = storeToRefs(queueStore);

const specificDateFormat = ION_DATETIME_DEFAULT_DATE_FORMAT;

const emit = defineEmits([
    'arrow-clicked',
    'date-picker-clicked',
    'select-today-clicked'
]);

const onDateChanged = (e: any) => {
    console.log('from date picker:' + e.target.value);
    selectedDate.value = moment(e.target.value).format(specificDateFormat);
    console.log('from selectedDate.value:' + selectedDate.value);
    console.log(specificDateFormat);
}

const onArrowClicked = (e: any): void => {
    if (e.target.id === 'leftArrow') {
        selectedDate.value = addDays(selectedDate.value, 1);
    } else {
        selectedDate.value = subtractDays(selectedDate.value, 1);
    }
    console.log(selectedDate.value);
    emit('arrow-clicked', { 'id': e.target.id, 'date': selectedDate.value });
}
const onGoToTodayClicked = (e: any) => {
    selectedDate.value = moment().format(specificDateFormat);
}

const today_selected = computed(() => {
    const newSelectedDate = moment(selectedDate.value).format("YYYY-MM-DD");
    const dateNow = moment().format("YYYY-MM-DD");

    console.log("selected date: " + newSelectedDate);
    console.log("date now: " + dateNow);

    return newSelectedDate === dateNow;
})
const today_not_selected = computed(() => {
    return !today_selected;
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
        <div v-show="today_not_selected" class="text-black flex justify-center items-center ">
            <input @click="onGoToTodayClicked" type="button" class=" rounded-lg px-2 todayBtn cursor-pointer"
                value="Go to Today">
        </div>
        <div class="flex items-center justify-center">
            <ArrowIcon id="leftArrow" @click="onArrowClicked" :icon="arrowUndoCircleOutline"></ArrowIcon>
            <ion-datetime-button datetime="datetime" class="text-xs"></ion-datetime-button>
            <ion-modal style="" :keep-contents-mounted="true">
                <ion-datetime @ion-change="onDateChanged" id="datetime" :value="selectedDate.value"
                    class="text-xl "></ion-datetime>
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