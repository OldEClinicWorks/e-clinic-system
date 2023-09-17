<script setup lang="ts">
import { IonLabel, IonInput, IonTitle, IonDatetimeButton } from '@ionic/vue';
import FormTextInput from './FormTextInput.vue';
import { ION_DATETIME_DEFAULT_DATE_FORMAT } from '@/js/constants';
import { VDatePicker } from 'vuetify/lib/labs/components.mjs';
import { VDialog } from 'vuetify/lib/components/index.mjs';
import { ref } from 'vue';
import moment from 'moment';

const selectedDate = ref(new Date(moment().format(ION_DATETIME_DEFAULT_DATE_FORMAT)));
const onDateChanged = (e: any) => {
  console.log('from date picker:' + e.target.value);
  //   selectedDate.value = moment(e.target.value).format(specificDateFormat);
  console.log('from selectedDate.value:' + selectedDate.value);
  console.log(specificDateFormat);
}
const specificDateFormat = ION_DATETIME_DEFAULT_DATE_FORMAT;
const emit = defineEmits(['on-transitioned', 'on-add-clicked', 'on-cancel-clicked'])
const props = defineProps({
  shouldShow: {
    type: Boolean,
    required: true
  }
});

const inputName = ref('');
const currentTitle = ref('Add Appointment')
const currentDescription = ref('');

function addAppointment() {
  emit('on-add-clicked');
}
function cancelAppointment() {
  emit('on-cancel-clicked')
}
function addDays(date: moment.MomentInput, days: any): any {
  return moment(date)
    .add(days, 'days')
    .format(specificDateFormat);
}

function subtractDays(date: moment.MomentInput, days: any): any {
  return moment(date)
    .subtract(days, 'days')
    .format(specificDateFormat);
}
</script>

<template>
  <v-card @transitionend="" :class="{ 'show-appointment-form': shouldShow }" class="appointment-form h-full">

    <v-card-title class="flex text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <div class="circle-close">
        <span class="m-auto">x</span>
        <span @click="cancelAppointment" class="btn-circle-close"></span>
      </div>

    </v-card-title>


    <v-dialog width="500">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="Open Dialog"> </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        hello
        <form-text-input></form-text-input>
      </template>
    </v-dialog>
    <v-card-text>
      <label for="datepicker" class="text-lg">Date:</label>


      <form-text-input></form-text-input>
      <span class="text-caption text-grey-darken-1">
        This is the date and time for the patient to come and see the doctor.
      </span>
    </v-card-text>



    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#F44" variant="flat" @click="addAppointment">
        Cancel
      </v-btn>
      <v-btn color="#4A7" variant="flat" @click="addAppointment">
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss"></style>

<style lang="scss" scoped>
.v-btn-add {
  background: var(--btn-primary);
}

.v-btn-cancel {
  background: var(--btn-danger);
}

.v-btn {
  border-radius: 25px;
}

.show-appointment-form {
  top: var(--distance-from-top) !important;
}

.appointment-form {
  flex-direction: column;
  padding: 1rem;
  top: -100%;
  display: flex;
  position: absolute;
  width: 35%;
  flex-grow: 0;
  max-height: 83dvh;
  left: 35%;
  border-top-left-radius: 10px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 10px;
  transition: top 0.3s ease;
}

.btn-circle-close {
  position: absolute;
  border-radius: 25px;
  background-color: transparent;
  width: 2em;
  height: 2em;
}

.circle-close {
  position: relative;
  display: flex;
  left: 15px;
  top: -5px;
  width: 2em;
  height: 2em;
  color: white;
  border-radius: 25px;
  background-color: var(--btn-danger);
}

.text-input {
  border-radius: 25px;
}
</style>