<script setup lang="ts">
import { IonReorder, IonReorderGroup } from '@ionic/vue';
import UserProfileCard from '@/views/components/cards/UserProfileCard.vue';
import VitalSignsCard from '@/views/components/cards/VitalSignsCard.vue';

const handleReorder = (event: CustomEvent) => {
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
  event.detail.complete();
};

const items = [
  { type: UserProfileCard },
  { type: VitalSignsCard },
  { type: VitalSignsCard },
  // ... add more items as needed
];
</script>
<template>
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder">
      <ion-reorder v-for="(item, index) in items" :key="index">
        <component :is="item.type"></component>
      </ion-reorder>
    </ion-reorder-group>
  </template>
  

  