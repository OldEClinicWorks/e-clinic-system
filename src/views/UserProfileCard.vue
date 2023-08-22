<template>
  <ion-page>
    <ion-card class="custom-card">
      <ion-card-content>
        <div class="user-profile">
          <ion-avatar class="profile-avatar">
            <ion-img :src="userData.avatarUrl"></ion-img>
          </ion-avatar>
          <div class="profile-details">
            <ion-label class="profile-name">{{ userData.name }}</ion-label>
            <ion-icon name="md-male" class="gender-icon"></ion-icon>
          </div>
        </div><br>
        <div class="user-info">
          <div class="info-item">
            <ion-label class="info-label">HEIGHT</ion-label> <br>
            <ion-label class="info-value">{{ userData.height }}</ion-label>
          </div>
          <div class="line"></div>
          <div class="info-item">
            <ion-label class="info-label">AGE</ion-label> <br>
            <ion-label class="info-value">{{ userData.age }}</ion-label>
          </div>
          <div class="line"></div>
          <div class="info-item">
            <ion-label class="info-label">WEIGHT</ion-label> <br>
            <ion-label class="info-value">{{ userData.weight }}</ion-label>
          </div>
        </div>
        <div @click="swap" class="icon-container">
          <ion-icon name="swap" :icon="swapHorizontal"></ion-icon>
        </div>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>
  
<script setup lang="ts">

import { IonIcon, IonLabel } from '@ionic/vue';
import { reactive } from 'vue';

import { male, swapHorizontal } from "ionicons/icons";

const swap = () => {
  console.log('swap clicked')
}
const userData = reactive({
  avatarUrl: 'https://ucarecdn.com/904ba744-302a-4da5-bc68-6533308b7781/-/scale_crop/150x150/center/',
  name: 'Idrees Ageed',
  age: 30,
  height: '180cm',
  weight: '75kg',
})


</script>
  
<style scoped>
.icon-container {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #4f4e4d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  /* Initially hidden */
}

.custom-card:hover .icon-container {
  visibility: visible;
  /* Show icon when card is hovered */
}

.line {
  border-left: 1px solid rgb(255, 255, 255);
  opacity: 40%;
}

.custom-card {
  border-radius: 15px;
  background: #5DB3A8;
  color: white;
}

.user-profile {
  display: flex;
  align-items: center;
}

.profile-avatar {
  width: 50px;
  height: 50px;
}

.profile-details {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.profile-name {
  font-weight: bold;
  margin-right: 6px;
}





.user-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.info-item {
  text-align: center;
}

.info-label {
  font-size: 12px;
  opacity: 70%;
}

.info-value {
  font-size: 16px;
  font-weight: bold;
}
</style>