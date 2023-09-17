<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['change-patient', 'on-transitioned'])
const props = defineProps({
    shouldShow: Boolean
})

</script>

<template>
    <v-card @transitionend="$emit('on-transitioned')" :class="{ 'show-patient-card': shouldShow }"
        class="selected-patient-card">
        <v-window class="h-full">
            <v-window-item>
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
            <v-btn color="primary" variant="flat" @click="$emit('change-patient')">
                Change
            </v-btn>
        </v-card-actions>
    </v-card>
</template>



<style lang="scss" scoped>
.selected-patient-card {
    top: -100%;
    position: absolute;
    transition: top 0.3s ease;
}

.show-patient-card {
    top: var(--distance-from-top) ;
    left: 2.5%;
    width: 30%;
    transition: top 0.3s ease;
}
</style>