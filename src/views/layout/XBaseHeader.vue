<script setup lang="ts">
import {IonHeader, IonToolbar} from "@ionic/vue";

</script>

<template>
  <!-- add class ion-no-border to remove border/shadow from header -->
  <ion-header :translucent="true" class="flex flex-row z-40 bg-blue-500 p-4 text-white">
    <ion-toolbar>
      <div class="flex">
        <div class="p-1">Logo|Title</div>
        <div class="p-1">Logo|Title</div>
        <div class="p-1">Logo|Title</div>
        <div class="p-1">Logo|Title</div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>

</style>