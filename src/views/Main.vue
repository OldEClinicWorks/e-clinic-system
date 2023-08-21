<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- SCREEN -->
      <div class="flex flex-col min-h-screen">
        <!-- Vertical Left Toolbar -->
        <div class="flex-grow flex xbase-col-shadow-left-col">
          <XBaseSideBarNav>
            <div> item1 </div>
            <div> item2 </div>
            <div> item3 </div>
            <div> item4 </div>
          </XBaseSideBarNav>
          <div class="flex-grow flex flex-col">
            <!-- Header -->
            <XBaseHeader></XBaseHeader>
            <!-- Content -->
            <div class="flex-grow  grid grid-cols-12 bg-gray">
              <!-- Left Sidebar with Header and Scrollable Container -->
              <XBaseLeftSide>
                <h2 class="text-xl font-semibold mb-2">Left Column Header</h2>
                <div class="overflow-y-auto xbase-col-content-h xbase-col-content-h-left">
                  LEFT
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                </div>
              </XBaseLeftSide>

              <!-- Main Content with Header and Scrollable Container -->
              <XBaseCenter>
                <h2 class="text-xl font-semibold mb-2">Main Column Header</h2>
                <div class="xbase-col-content-h xbase-col-content-h-main overflow-y-auto">
                  MAIN
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                </div>
              </XBaseCenter>

              <!-- Right Sidebar with Header and Scrollable Container -->
              <XBaseRightSide>
                <h2 class="text-xl font-semibold mb-2">Right Column Header</h2>
                <div class="overflow-y-auto xbase-col-content-h xbase-col-content-h-right">
                  RIGHT
                  <div>lineeeeeeeee eeee eeee eeee eeee eeeeeeeeeeee eeee</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                  <div>line</div>
                </div>
              </XBaseRightSide>
            </div>

            <!-- Footer -->
            <XBaseFooter>
                Footer Content Here
            </XBaseFooter>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import XBaseSideBarNav from "@/views/layout/XBaseSideBarNav.vue";
import XBaseHeader from "@/views/layout/XBaseHeader.vue";
import XBaseLeftSide from "@/views/layout/XBaseLeftSide.vue";
import XBaseRightSide from "@/views/layout/XBaseRightSide.vue";
import XBaseCenter from "@/views/layout/XBaseCenter.vue";
import XBaseFooter from "@/views/layout/XBaseFooter.vue";

</script>



<style scoped>
.xbase-col-h {
  max-height: calc(100vh - 7rem);
}

.xbase-col-h-left {}

.xbase-col-h-main {
 background-color: #f0f2f5; 
}

.xbase-col-h-right {}

.xbase-col-content-h {
  max-height: calc(100vh - 10rem);
  
}

.xbase-col-content-h-left {}

.xbase-col-content-h-main {}

.xbase-col-content-h-right {}

/*
.xbase-col-shadow-left-col {
  z-index: 10;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);  
}

.xbase-col-shadow-right-col {
  z-index: 10;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);  
}

.xbase-col-shadow-both {
  z-index: 20;
  box-shadow:  
    8px 0 0px -7px rgba(0,0,0, 0.3),
    -8px 0 0px -7px rgba(0,0,0, 0.3);
}
*/

/*
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
*/
</style>

