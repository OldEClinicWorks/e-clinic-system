<script setup lang="ts">
import {useSampleStore} from '@/store/sample';
const store = useSampleStore();
const addRecord = () => {
    const input = document.getElementById('name');
    console.log(input);
}
</script>

<template>
    <ul>
        <li>item1</li>
    </ul>
    <div>
        <input id="name" type="text" name="name" />
        <input type="submit" @click="addRecord" />
    </div>
</template>

<style lang="scss" scoped></style>