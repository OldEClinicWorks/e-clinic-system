<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Secretary App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">


      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col size="1">Menu</ion-col>
            <ion-col size="2">left layout</ion-col>
            <ion-col size="7">main page</ion-col>
            <ion-col size="2">right layout</ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';


</script>

<style scoped>
#container {

}




ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
