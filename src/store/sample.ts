import { defineStore } from "pinia";
import { ref } from "vue";

export const useSmapleStore = defineStore("sample", () => {
  const state = ref([]);

  return { state };
});
