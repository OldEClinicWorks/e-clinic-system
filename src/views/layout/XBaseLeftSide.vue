<script setup lang="ts">

</script>

<template>
  <div class="col-span-3 bg-gray-300 text-white xbase-col-wrapper">
    <div class="p-2 pt-0 pr-0">
      <div class="overflow-y-auto xbase-col-content-wrapper eclinic-left-col-cards-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eclinic-left-col-cards-container {
  max-height: calc(100vh - 7rem);
}
.xbase-col-shadow-left-col {
  z-index: 10;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
  /* Shadow on the right side */
}
</style>