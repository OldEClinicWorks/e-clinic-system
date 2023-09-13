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
import { onMounted, ref } from 'vue';

const toggleSidebar = (e: any) => {
  // const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn')
  // sidebarToggleBtn?.classList.toggle('show-hide-btn-toggle');

  const sideBar = document.getElementById('sidebar');
  sideBar?.classList.toggle('show-sidebar');

  const screenCover = document.getElementById('screen-cover');
  screenCover?.classList.toggle('show-screen-cover');
}
const hideSidebar = () => {
  // hide sidebar
  const sideBar = document.getElementById('sidebar');
  sideBar?.classList.remove('show-sidebar');

  const screenCover = document.getElementById('screen-cover');
  screenCover?.classList.remove('show-screen-cover');
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">


      <!--start SIDE BAR -->
      <div id="side-bar-container" class="absolute">
        <div id="screen-cover" @click="hideSidebar" class="absolute min-h-full min-w-full screen-cover"></div>
        <div id="sidebar" class="absolute sidebar z-40 flex min-h-screen overflow-y-visible">
          <div id="sidebar-toggle-btn" @click="toggleSidebar"
            class="z-50 flex flex-row sidebar-arrow show-hide-btn text-white">
            <div class="rectangle-btn"></div>
            <div class="circle-btn"></div>
          </div>
        </div>
      </div>
      <!--end SIDE BAR -->

      <!--start SCREEN -->
      <div class="flex flex-row flex-grow-0 bg-blue-400 min-h-full">
        <div class="flex flex-col flex-grow bg-slate-600">
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </div>
        <div class="queue-list-container flex flex-col bg-red-500 w-1/4">
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
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
  z-index: 40;
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

