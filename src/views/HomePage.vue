<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Secretary App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <user-profile-card></user-profile-card>
      <vital-signs-card></vital-signs-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">

  import { IonIcon, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { addIcons } from 'ionicons';
  import UserProfileCard from '../views/UserProfileCard.vue';
  import VitalSignsCard from '../views/VitalSignsCard.vue';

  import { construct, home, male, addCircle} from "ionicons/icons";

addIcons({
  "ios-construct": construct.ios,
  "md-construct": construct.md,
  "md-home": home.md,
  "md-male": male.md,
  "md-addCircle": addCircle.md,

});

  export default defineComponent({
    components: { IonIcon, IonLabel, UserProfileCard, VitalSignsCard },
  });
</script>

<style scoped>

</style>