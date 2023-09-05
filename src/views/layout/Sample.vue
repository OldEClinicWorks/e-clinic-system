<script setup lang="ts">
import { useTodoItemStore } from '@/store/TodoItem';
import { ref } from 'vue';
const store = useTodoItemStore();
const inputValue = ref('');
const { state, getItems, addItem, fetchItems } = store;
const addRecord = () => {
    addItem(inputValue.value);
}
const fetch = () => {
    fetchItems();
    addItem('fetched data');
}
</script>

<template>
    <ul>
        <li v-for="item in getItems()">{{ item }}</li>
    </ul>
    <div>
        <input id="name" type="text" name="name" v-model="inputValue" /><br>
        <input type="submit" @click="addRecord" /><br>
        <input type="button" @click="fetch" name="fetch" />
    </div>
</template>

<style lang="scss" scoped></style>@/store/todo