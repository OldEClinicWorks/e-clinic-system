<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/vue';
import { arrowUndoCircleOutline, arrowRedoCircleOutline } from "ionicons/icons";
import { reactive } from "vue";


const dateSwitcher = {
    
}
const arrowIconClasses = {
    "h-10 w-10":true,    
}


</script>
<template>
    <div class="shadow-lg bg-white-400 flex p-2 m-2 rounded-2xl">
        <ion-icon :icon="arrowUndoCircleOutline" :class="arrowIconClasses"></ion-icon>
        <ion-icon :icon="arrowRedoCircleOutline" :class="arrowIconClasses"></ion-icon>        
    </div>

</template>

<style scoped>
</style>