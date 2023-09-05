<script setup lang="ts">
import { IonChip, IonIcon } from '@ionic/vue';
import { stopwatchOutline, checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
</script>

<template>
    <IonChip
        class="px-8 py-3 mx-2 mb-2 justify-between bg-slate-700 flex shadow-lg bg-green date-switcher hover:cursor-auto">
        <IonChip class="flex items-center">
            <IonIcon :icon="checkmarkCircleOutline" class="text-green-400 w-5 h-5"></IonIcon>
            <span>14</span>
        </IonChip>
        <IonChip class="flex items-center">
            <IonIcon :icon="stopwatchOutline" class="text-yellow-400 w-5 h-5"></IonIcon>
            <span>2</span>
        </IonChip>
        <IonChip class="flex items-center">
            <IonIcon :icon="closeCircleOutline" class="text-red-400 w-5 h-5"></IonIcon>
            <span>4</span>
        </IonChip>

    </IonChip>
</template>

<style lang="scss" scoped></style>