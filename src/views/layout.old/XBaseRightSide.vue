<script setup lang="ts">
// Queue
import Queue from "@/views/components/queue/Queue.vue";

</script>

<template>
  <div class="col-span-3 bg-gray-200 text-white xbase-col-wrapper xbase-col-h-right">
    <div class="p-2">
      <div class="overflow-y-auto xbase-col-content-wrapper right-side-h ">        
        <Queue>          
        </Queue>        
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-side-h{
    height: calc(100vh - 8rem);
    max-height: calc(100vh - 8rem);
}
.xbase-col-shadow-right-col {
  z-index: 10;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);
  /* Shadow on the left side */
}
</style>