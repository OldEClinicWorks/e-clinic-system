<template>
    <ion-content class="ion-padding">
        <ion-button id="open-custom-dialog" expand="block">Open Custom Dialog</ion-button>

        <ion-modal id="example-modal" ref="modal" trigger="open-custom-dialog">
            <div class="wrapper p-5">
                <h1 class="mb-2 text-xl font-semibold">Confirm Patient Information</h1>
                <span class="">Are you sure you want to select this patient?</span>
                <div>
                    patient info goes here
                </div>
                
            </div>
        </ion-modal>
    </ion-content>
</template>
  
<script lang="ts" setup>
import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    IonIcon,
} from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
import { ref } from 'vue';

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();

</script>
<style scoped>
ion-modal#example-modal {
    --width: fit-content;
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}


ion-modal#example-modal ion-icon {
    margin-right: 6px;

    width: 48px;
    height: 48px;

    padding: 4px 0;

    color: #aaaaaa;
}

ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
}
</style>