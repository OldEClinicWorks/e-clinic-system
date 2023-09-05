<script setup lang="ts">

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import XBaseSideBarNav from "@/views/layout/XBaseSideBarNav.vue";
import XBaseHeader from "@/views/layout/XBaseHeader.vue";
import XBaseLeftSide from "@/views/layout/XBaseLeftSide.vue";
import XBaseRightSide from "@/views/layout/XBaseRightSide.vue";
import XBaseCenter from "@/views/layout/XBaseCenter.vue";
import XBaseFooter from "@/views/layout/XBaseFooter.vue";

// Left Side 
import UserProfileCard from '@/views/components/cards/UserProfileCard.vue';
import VitalSignsCard from '@/views/components/cards/VitalSignsCard.vue';
// Queue
import Queue from "@/views/components/queue/Queue.vue";

import Sample from "@/views/layout/Sample.vue"
</script>

<template>
  <Sample></Sample>
</template>

<style>
.xbase-col-wrapper {
  /* what?
  * this is the wrapper containing
  * default height for the main div container of a col
  * any col component can override this by using a class
  * inside that col component
  *
  * why?
  * the screen is divided into: header, 3 columns, footer
  * the size of the header and footer should remain the same,
  * and the size for the columns should not change because if it
  * it changed then the scroll bar will be shown on the right side
  * of the screen
  */
  max-height: calc(100vh - 7rem);
}

.xbase-col-content-wrapper {
  /* what?
   * this is the wrapper containing
   * default height for 'content' of a col
   * any col component can override this by using a class
   * inside that col component
   *
   * why?
   * each column has: header, content, footer.
   * each one of these should have a dynamic height
   * relative to the vh value
   */
  max-height: calc(100vh - 10rem);
}
</style>

