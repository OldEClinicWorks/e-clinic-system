<script setup lang="ts">
import { IonLabel, IonInput, IonTitle } from '@ionic/vue';
import FormTextInput from './FormTextInput.vue';

import { ref } from 'vue';
const emit = defineEmits(['on-transitioned'])
const props = defineProps({
    shouldShow: {
        type: Boolean,
        required: true
    }
});

const inputName = ref('');
const step = ref(1)
const currentTitle = ref('hi')
</script>

<template>
    <v-card @transitionend="$emit('on-transitioned')" :class="{ 'show-appointment-info': shouldShow }" class="appointment-info h-full">
        <v-card-title class="flex text-h6 font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar color="primary" size="24" v-text="step"></v-avatar>
        </v-card-title>

        <v-window v-model="step" class="h-full">
            <v-window-item :value="1" class="h-full">
                <v-card-text>
                    <FormTextInput></FormTextInput>
                    <v-text-field label="Email"></v-text-field>
                    <span class="text-caption text-grey-darken-1">
                        This is the email you will use to login to your Vuetify account
                    </span>
                </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
                <v-card-text>
                    <v-text-field class="text-input" label="Password" type="password"></v-text-field>
                    <v-text-field label="Confirm Password" type="password"></v-text-field>
                    <span class="text-caption text-grey-darken-1">
                        Please enter a password for your account
                    </span>
                </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
                <div class="pa-4 text-center">
                    <v-img class="mb-4" contain height="128" src="https://cdn.vuetifyjs.com/images/logos/v.svg"></v-img>
                    <h3 class="text-h6 font-weight-light mb-2">
                        Welcome to Vuetify
                    </h3>
                    <span class="text-caption text-grey">Thanks for signing up!</span>
                </div>
            </v-window-item>
        </v-window>

        <v-divider></v-divider>


        <v-card-actions>
            <v-btn v-if="step > 1" variant="text" @click="step--">
                Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
                Next
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style lang="scss"></style>

<style lang="scss" scoped>
.show-appointment-info {
    left: 2.5em !important;
}

.appointment-info {
    z-index:20;
    flex-direction: column;
    padding: 1rem;
    top: 2.5em;
    right: -100%;
    display: flex;
    position: absolute;
    width: 65%;
    flex-grow: 0;
    max-height: 83dvh;
    left: 200%;
    border-top-left-radius: 10px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 10px;
    transition: left 0.3s ease;
}

.text-input {
    border-radius: 25px;
}
</style>

<!-- <style lang="scss" scoped>

.transition, form button, form .question label, form .question input[type="text"] {
    -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  }  
  form {
    
    padding: 30px 25px;
    background-color: white;
    border-radius: 40px;
    margin: 40px 0;
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  form h1 {
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    margin-left: 15px;
    margin-bottom: 35px;
    text-transform: uppercase;
  }
  form button {
    margin-top: 35px;
    background-color: white;
    border: 1px solid #ff4a56;
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  form button:hover, form button:focus {
    color: white;
    background-color: #ff4a56;
  }
  form .question {
    position: relative;
    padding: 10px 0;
  }
  form .question:first-of-type {
    padding-top: 0;
  }
  form .question:last-of-type {
    padding-bottom: 0;
  }
  form .question label {
    transform-origin: left center;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    font-size: 17px;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    position: absolute;
    margin-top: -40px;
    z-index: 2;
    pointer-events: none;
  }
  form .question input[type="text"] {
    appearance: none;
    background-color: none;
    border: 1px solid #ff4a56;
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 60px;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  form .question input[type="text"]:focus {
    outline: none;
    background: #ff4a56;
    color: white;
    margin-top: 30px;
  }
  form .question input[type="text"]:valid {
    margin-top: 30px;
  }
  form .question input[type="text"]:focus ~ label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
  }
  form .question input[type="text"]:valid ~ label {
    text-transform: uppercase;
    font-style: italic;
    -moz-transform: translate(5px, -35px) scale(0.6);
    -ms-transform: translate(5px, -35px) scale(0.6);
    -webkit-transform: translate(5px, -35px) scale(0.6);
    transform: translate(5px, -35px) scale(0.6);
  }
  


</style> -->