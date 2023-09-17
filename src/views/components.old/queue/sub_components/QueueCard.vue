<script setup lang="ts">
import { IonIcon, IonLabel } from '@ionic/vue';
import { reactive } from 'vue';

import { male, swapHorizontal, enterOutline, exitOutline } from "ionicons/icons";

interface Patient {
    avatarUrl: String,
    name: String,
    age: Number,
    height: String,
    weight: String,
}

interface Appointment {
    id: Number,
    enter: String,
    exit: String,
    serialNumber: Number,
    status: Number,
    patient: Patient
}

const props = defineProps({
    appointment: {
        type: Object,
        required: true
    }
});

const swap = () => {
    console.log('swap clicked')
}

const statusBorderStyle = {
    'status-finished': props.appointment.status === 1,
    'status-waiting': props.appointment.status === 0,
    'status-missed': props.appointment.status === -1
}

</script>

<template>
    <IonPage>
        <ion-card class="custom-card rounded-2xl m-1 bg-gray-900 status-border" :class="statusBorderStyle">
            <ion-card-content class="p-2">
                <div class="flex  p-1">
                    <ion-avatar class="profile-avatar w-12 h-12">
                        <!-- <ion-img :src="props.appointment.patient.avatarUrl"></ion-img> -->
                    </ion-avatar>
                    <div class="ml-2 flex flex-col flex-grow justify-center ">
                        <div class="flex items-center justify-between align-middle mr-2 ">
                            <div class="flex items-center align-middle">
                                <ion-label class=" profile-name">{{ props.appointment.patient.name }}</ion-label>
                                <span>&nbsp;</span>
                                <ion-icon :icon="male" class=" text-blue-400"></ion-icon>
                            </div>
                            <div class="serial-number flex font-bold p-1 ">
                                {{ props.appointment.serialNumber }}
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center mr-2 justify-center">
                                <IonIcon class="enter-icon text-green-600" :icon="enterOutline"></IonIcon>
                                <IonLabel class="font-bold">{{ props.appointment.enter }}</IonLabel>
                            </div>
                            <div class="flex items-center mx-2">
                                <IonIcon class="enter-icon text-red-600" :icon="exitOutline"></IonIcon>
                                <IonLabel class="font-bold">{{ props.appointment.enter }}</IonLabel>
                            </div>
                        </div>
                    </div>
                </div>
            </ion-card-content>
        </ion-card>
    </IonPage>
</template>
  
<style scoped>
.enter-icon {
    font-weight: bold;
}

.status-border {
    border: solid 3px;

}

.status-finished {
    border-color: rgb(74 222 128);
}

.status-missed {
    border-color: rgb(248 113 113);
}

.status-waiting {
    border-color: rgb(250 204 21);
}
</style>