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
import SearchBar from './components/SearchBar.vue';
import AppointmentInfo from './components/AppointmentInfo.vue';
import SelectedPatientCard from './components/SelectedPatientCard.vue';
import AppointmentForm from './components/AppointmentForm.vue'
import ConfirmPatientModal from './components/ConfirmPatientModal.vue';
import Test from './components/Test.vue';
import Modal from './components/Modal.vue';
import List from './backup/List.vue';

const searchBarLocation = ref('center');
const isShowSideBar = ref(false);
const isShowAppontmentForm = ref(false);
const isShowPatientForm = ref(false);
const isShowSelectedPatientCard = ref(false);



const shouldScreenCoverIndex_beMinus1 = ref(true);

const showAppointmentForm = () => {
  isShowAppontmentForm.value = true;
}
const hideAppointmentForm = () => {
  isShowAppontmentForm.value = false;
}
const hideSelectedPatientCard = () => {
  isShowSelectedPatientCard.value = false;
}
const showSelectedPatientCard = () => {
  isShowSelectedPatientCard.value = true;
}

const patientCardTransitioned_eventHandler = () => {
  if (isShowSelectedPatientCard.value === false) { moveSearchBarToLeft(); }
}
const searchBarTransitioned_eventHandler = () => {
  if (searchBarLocation.value === 'left') { showAppointmentForm(); }
  if (searchBarLocation.value === 'left-out') { showSelectedPatientCard(); }
}
const appointFormTransitioned_eventHandler = () => {
  if (isShowAppontmentForm.value === false) { moveSearchBarToCenter(); }
}
// im working on after form dissappers, move searchabr to center
const moveSearchBarToCenter = () => {
  searchBarLocation.value = 'center'
}
const moveSearchBarToLeft = () => {
  searchBarLocation.value = 'left'
}
const moveSearchBarOutOfScreen = () => {
  console.log('clicked');

  searchBarLocation.value = 'left-out'
}
const toggleSearchbar = (e: any) => {
  if (searchBarLocation.value === 'center') {
    moveSearchBarToLeft();
  }
  else {
    hideAppointmentForm();
  }
}
const toggleSidebar = (e: any) => {
  isShowSideBar.value = !isShowSideBar.value;
  if (isShowSideBar.value === true) {
    shouldScreenCoverIndex_beMinus1.value = false;
  }
}
function showScreenCover() {
}
function hideScreenCover() {
  if (isShowSideBar.value === false) {
    shouldScreenCoverIndex_beMinus1.value = true;
  }
}
const hideSidebar = () => {
  isShowSideBar.value = false;
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- SCREEN COVER -->
      <div id="screen-cover" @click="hideSidebar" class="absolute min-h-full min-w-full screen-cover"
        @transitionend="hideScreenCover"
        :class="{ 'show-screen-cover': isShowSideBar, 'hide-screen-cover': shouldScreenCoverIndex_beMinus1 }"></div>

      <!-- SIDEBAR CONTAINER -->
      <div id="side-bar-container" class="absolute">
        <!-- SIDEBAR -->
        <div id="sidebar" class="absolute z-50 sidebar flex min-h-screen" :class="{ 'show-sidebar': isShowSideBar }">

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
        <div class="flex flex-col flex-grow bg-slate-600 z-20">
          <search-bar @click="toggleSearchbar" :location="searchBarLocation"
            @on-transitioned="searchBarTransitioned_eventHandler">
          </search-bar>
          <appointment-form @transitionend="appointFormTransitioned_eventHandler"
            :shouldShow="isShowAppontmentForm"></appointment-form>
          <selected-patient-card @on-transitioned="patientCardTransitioned_eventHandler"
            @change-patient="hideSelectedPatientCard" :shouldShow="isShowSelectedPatientCard"></selected-patient-card>
        </div>
        <div class=" bg-red-600" @click="moveSearchBarOutOfScreen">click</div>
        <!-- QUEUE -->
        <div class="queue-list-container z-30 flex flex-col bg-red-500 w-1/4">
          <List class="h-full"></List>
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
  z-index: 40 !important;
  opacity: 0.35 !important;
}

.display-over-screen-cover {
  z-index: 41 !important;
}

.hide-screen-cover {
  z-index: -1 !important;
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

