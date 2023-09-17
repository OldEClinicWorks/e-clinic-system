<template>
    <ion-page>
        <!-- Include the MyModal component -->
        <List class="w-50"></List>

    </ion-page>
</template>
  
<script lang="ts" setup>
import { IonPage, IonButton } from "@ionic/vue";
import { ref } from 'vue';
import Modal from './Modal.vue';
import List from './List.vue';
</script>
  