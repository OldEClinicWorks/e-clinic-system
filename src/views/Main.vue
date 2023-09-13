<script setup lang="ts">

import { IonContent, IonIcon, IonMenuToggle, IonSplitPane, IonMenu, IonItem, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';
// import XBaseSideBarNav from "@/views/layout/XBaseSideBarNav.vue";
// import XBaseHeader from "@/views/layout/XBaseHeader.vue";
// import XBaseLeftSide from "@/views/layout/XBaseLeftSide.vue";
// import XBaseRightSide from "@/views/layout/XBaseRightSide.vue";
// import XBaseCenter from "@/views/layout/XBaseCenter.vue";
// import XBaseFooter from "@/views/layout/XBaseFooter.vue";

// // Left Side 
// import UserProfileCard from '@/views/components/cards/UserProfileCard.vue';
// import VitalSignsCard from '@/views/components/cards/VitalSignsCard.vue';
// // Queue
// import Queue from "@/views/components/queue/Queue.vue";

// import Sample from "@/views/layout/Sample.vue"

import { usePatientStore } from '@/store/PatientStore';
import { computed, onMounted, ref } from 'vue';


const showSideBar = ref(false);
const searchBarToLeft = ref(false);

const sendSearchBarToLeft = () => {
  searchBarToLeft.value = !searchBarToLeft.value;
}

const toggleSidebar = (e: any) => {
  showSideBar.value = !showSideBar.value;
}

const hideSidebar = () => {
  showSideBar.value = false;
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- SCREEN COVER -->
      <div id="screen-cover" @click="hideSidebar" class="absolute min-h-full min-w-full screen-cover"
        :class="{ 'show-screen-cover': showSideBar }"></div>

      <!-- SIDEBAR CONTAINER -->
      <div id="side-bar-container" class="absolute">
        <!-- SIDEBAR -->
        <div id="sidebar" class="absolute z-50 sidebar flex min-h-screen" :class="{ 'show-sidebar': showSideBar }">

          <!-- SIDEBAR BTN -->
          <div id="sidebar-toggle-btn" @click="toggleSidebar"
            class="z-50 flex flex-row sidebar-arrow show-hide-btn text-white">
            <div class="rectangle-btn"></div>
            <div class="circle-btn"></div>
          </div>
          <!-- /SIDEBAR BTN -->

          
        </div>
        <!-- /SIDEBAR -->
      </div>
      <!-- /SIDEBAR CONTAINER-->

      <!--start SCREEN -->
      <div class="flex flex-row flex-grow-0 bg-blue-400 min-h-full">
        <!-- CENTER -->
        <div class="flex flex-col flex-grow bg-slate-600">

          <!-- SEARCH BAR -->
          <div class="flex">
            <div @click="sendSearchBarToLeft" class="search-bar  bg-black h-10"
              :class="{ 'search-bar-to-left': searchBarToLeft }"></div>
          </div>

        </div>
        <!-- QUEUE -->
        <div class="queue-list-container flex flex-col bg-red-500 w-1/4">

        </div>
      </div>
      <!--end SCREEN -->
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
.rectangle-btn {
  display: flex;
  width: 250px;
  height: 50px;
  background: red;
}

.circle-btn {
  width: 50px;
  height: 50px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: red;

  margin-left: auto
}

.show-hide-btn {
  background: transparent;
  display: flex;
  position: absolute;
  margin-top: 20px;
  width: 275px;
  height: 50px;
  left: 0;
}

.search-bar-to-left {
  left: 25px !important;
  width: 300px !important;
}

.search-bar {
  position: relative;
  top: 5em;
  width: 75%;
  min-width: 50px;
  left: 100px;
  border-radius: 25px;
  transition: left 0.3s ease, width 0.3s ease;
}

.sidebar-arrow-closed {
  position: absolute;
}

.show-screen-cover {
  opacity: 0.35 !important;
}

.screen-cover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.0;
  background: black;
  transition: opacity 0.3s ease;
}

.sidebar {
  position: absolute;
  top: 0;
  left: -250px;
  min-width: 250px;
  height: 100%;
  background-color: yellow;
  color: #fff;
  transition: left 0.3s ease;
}

.queue-list-container {
  width: 25%;
  min-width: 250px;

}

.show-sidebar {
  left: 0;
}
</style>

