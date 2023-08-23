<script setup lang="ts">
import { IonReorder, IonReorderGroup } from '@ionic/vue';
import UserProfileCard from '@/views/components/cards/UserProfileCard.vue';
import VitalSignsCard from '@/views/components/cards/VitalSignsCard.vue';

const handleReorder = (event: CustomEvent) => {
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  event.detail.complete();
};

const cards = [
  { type: UserProfileCard },
  { type: UserProfileCard },
  { type: UserProfileCard },
  { type: VitalSignsCard },
  { type: VitalSignsCard },
  
];
</script>


<template>
  <div class="col-span-3 bg-gray-300 text-white xbase-col-wrapper">
    <div class="p-0 pt-0 pr-0">
      <div class="overflow-y-auto xbase-col-content-wrapper eclinic-left-col-cards-container">
        <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder">
          <ion-reorder v-for="(card, index) in cards" :key="index">
            <component :is="card.type"></component>
          </ion-reorder>
        </ion-reorder-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eclinic-left-col-cards-container {
  height: calc(100vh - 7rem);
}
.xbase-col-content-wrapper{
  max-height: calc(100vh - 7rem);
}
.xbase-col-shadow-left-col {
  z-index: 10;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
  /* Shadow on the right side */
}
</style>