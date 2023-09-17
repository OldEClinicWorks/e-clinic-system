<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits([
    'on-location-changed',
    'on-transitioned'
]);
const props = defineProps({
    location: {
        type: String,
        validaotr(value: locations) {
            function isValidLocation(value: locations): boolean {
                return value === locations.LEFT
                    || value === locations.CENTER
                    || value === locations.LEFT_OUT;
            }
            return isValidLocation(value);
        },
        default: 'center'
    }
});

enum locations {
    LEFT = 'left',
    CENTER = 'center',
    LEFT_OUT = 'left-out'
}
</script>

<template>
    <!-- SEARCH BAR -->
    <div class="flex">
        <div @click="" class="search-bar  bg-black h-10" :class="{
            'search-bar-to-left': location === locations.LEFT,
            'search-bar-to-center': location === locations.CENTER,
            'search-bar-to-left-out': location === locations.LEFT_OUT
        }" @transitionend="emit('on-transitioned', location)"></div>
    </div>
</template>



<style lang="scss" scoped>
.search-bar-to-left-out {
    left: -50% !important;
    width: 45% !important;
    transition: left 0.3s ease, width 0.3s ease;
}

.search-bar-to-left {
    left: 25px !important;
    width: 30% !important;
    transition: left 0.3s ease, width 0.3s ease;
}

.search-bar-to-center {
    left: 15%;
    width: 50%;
    transition: left 0.3s ease, width 0.3s ease;
}

.search-bar {
    position: absolute;
    top: var(--distance-from-top);
    min-width: 50px;
    border-radius: 25px;
    transition: left 0.3s ease, width 0.3s ease;
}
</style>