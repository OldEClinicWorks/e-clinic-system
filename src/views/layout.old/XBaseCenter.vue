<script setup lang="ts">

</script>

<template>
  <div class="xbase-col-wrapper flex flex-grow  text-black ">
    <div class="w-full">
      <div class="p-2 text-white w-full flex flex-col xbase-col-content-wrapper center-col-content-h overflow-y-auto">
        <slot></slot>

      </div>
    </div>
  </div>
</template>

<style scoped>
.center-col-content-h {
  max-height: calc(100vh - 7rem);
}

.xbase-col-shadow-both {
  z-index: 20;
  box-shadow:
    /* horz vert blur spread */
    8px 0 0px -7px rgba(0, 0, 0, 0.3),
    -8px 0 0px -7px rgba(0, 0, 0, 0.3);
}
</style>