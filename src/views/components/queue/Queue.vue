<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/vue';
import { event } from '@tauri-apps/api';
import { getRenderingRef } from 'ionicons/dist/types/stencil-public-runtime';
import { arrowUndoCircleOutline, arrowRedoCircleOutline } from "ionicons/icons";
import { reactive } from "vue";
import ArrowIcon from "./sub_components/ArrowIcon.vue";
import DateSwitcher from './sub_components/DateSwitcher.vue';
import QueueCardsContainer from './sub_components/QueueCardsContainer.vue';
import QueueCard from './sub_components/QueueCard.vue';
import QueueActions from './sub_components/QueueActions.vue';

import { storeToRefs } from "pinia";
import { useAppointmentStore } from '@/store/appointment';

const store = useAppointmentStore();
store.fetchAppointments();
const { appointments } = storeToRefs(store);

</script>
<template>
    <div class="flex flex-col queue-h p-0 m-0">
        <DateSwitcher></DateSwitcher>
        <QueueActions></QueueActions>
        <QueueCardsContainer class="flex p-1">
            <QueueCard v-for="appointment in appointments" :appointment="appointment">
            </QueueCard>
        </QueueCardsContainer>
    </div>
</template>


<style lang="scss" scoped>
.queue-h {
    height: 100%;
}
</style>