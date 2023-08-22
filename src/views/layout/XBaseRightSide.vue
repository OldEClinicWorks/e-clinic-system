<script setup lang="ts">

</script>

<template>
  <div class="col-span-3 bg-gray-200 text-white xbase-col-wrapper xbase-col-h-right">
    <div class="p-2 pr-0">
      <div class="overflow-y-auto xbase-col-content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xbase-col-shadow-right-col {
  z-index: 10;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);
  /* Shadow on the left side */
}
</style>