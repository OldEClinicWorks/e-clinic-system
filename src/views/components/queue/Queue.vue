<script setup lang="ts">
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon} from '@ionic/vue';
import {caretForwardCircle, caretBackCircle, caretBack} from "ionicons/icons";

</script>
<template>
  <ion-toolbar>
    <ion-buttons class="ion-margin ion-no-padding">
      <ion-button>
        <ion-icon slot="icon-only" :icon="caretBackCircle"></ion-icon>
      </ion-button>
      <ion-button>
        Date
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="caretForwardCircle"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
  <ion-card>

    <ion-card-content>

    </ion-card-content>
  </ion-card>
  <ion-card>
    <ion-card-header>

    </ion-card-header>
    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
</template>

<style scoped>

</style>