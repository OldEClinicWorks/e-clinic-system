<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="flex flex-col min-h-screen">
        <!-- Vertical Left Toolbar -->
        <div class="flex-grow flex xbase-col-shadow-left-col">
          <div class="flex-col p-2 bg-blue-300 z-50">
            <div> item1 </div>
            <div> item2 </div>
            <div> item3 </div>
            <div> item4 </div>
          </div>
          <div class="flex-grow">
            <!-- Header -->
            <ion-header :translucent="true" class="sticky top-0 z-40 bg-blue-500 p-4 text-white shadow-none">
              <ion-toolbar>
                <div>
                  Logo|Title
                </div>
              </ion-toolbar>
            </ion-header>

            <!-- Content -->
            <div class="flex-grow grid grid-cols-12 bg-gray">
              <!-- Left Sidebar with Header and Scrollable Container -->
              <div class=" col-span-3 bg-gray-300 text-white xbase-col-h xbase-col-h-left xbase-col-shadow-left-col">
                <div class="p-2 pr-0">
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
                </div>
              </div>

              <!-- Main Content with Header and Scrollable Container -->
              <div class="col-span-6 xbase-col-h xbase-col-h-main text-black bg-gray-300 xbase-col-shadow-both">
                <div class="p-2">
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
                </div>
              </div>

              <!-- Right Sidebar with Header and Scrollable Container -->
              <div class="col-span-3 bg-gray-300 text-white xbase-col-h xbase-col-h-right xbase-col-shadow-right-col">
                <div class="p-2 pr-0">
                  <h2 class="text-xl font-semibold mb-2">Right Column Header</h2>
                  <div class="overflow-y-auto xbase-col-content-h xbase-col-content-h-right">
                    RIGHT
                    <div>line</div>
                    <div>line</div>
                    <div>line</div>
                    <div>line</div>
                    <div>line</div>
                    <div>line</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="bg-gray-500 p-0 text-white">
              Footer Content Here
            </div>
          </div>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>



<style scoped>
.xbase-col-h {
  max-height: calc(100vh - 7rem);
}

.xbase-col-h-left {}

.xbase-col-h-main {}

.xbase-col-h-right {}

.xbase-col-content-h {
  max-height: calc(100vh - 10rem);
}

.xbase-col-content-h-left {}

.xbase-col-content-h-main {}

.xbase-col-content-h-right {}

.xbase-col-shadow-left-col {
  z-index: 10;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
  /* Shadow on the right side */
}

.xbase-col-shadow-right-col {
  z-index: 10;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);
  /* Shadow on the left side */
}

.xbase-col-shadow-both {
  z-index: 20;
  box-shadow:  
  /* horz vert blur spread */
    8px 0 0px -7px rgba(0,0,0, 0.3),
    -8px 0 0px -7px rgba(0,0,0, 0.3);
}

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

