<script setup lang="ts">
import { IonIcon } from '@ionic/vue';

const props = defineProps({
    name: String,
    icon: String,
});

</script>

<template>
    <ion-icon :name="props.name" :icon="props.icon" class="h-10 w-10 cursor-pointer arrowStyle"></ion-icon>
</template>

<style lang="scss" scoped>
.arrowStyle {
    border-radius: 50%;
    background-color: var(--xbase-color-primary);

    &:hover {
        background-color: green;
    }
}
</style>