import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useTodoItemStore = defineStore("TodoItem", () => {
  let array: any[] = [];
  const state = ref(array);

  const addItem = (item: any) => {
    state.value.push(item);
    addNewItem(item);
  };
  const getItems = () => {
    return state.value;
  };

  const fetchItems = async () => {
    await axios.get<any[]>("http://localhost:5414/api/test").then((res) => {
      state.value = res.data;
      alert(state.value);
    });
  };
  async function addNewItem(item: any) {
    try {
      const newItemData = {
        title: item,
      };
      console.log("New item added");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  return { state, getItems, addItem, fetchItems };
});
