import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  const users = ref([
    { name: "ahmed", age: 23 },
    { name: "ali", age: 26 },
    { name: "idrees", age: 24 },
  ]);

  const addUser = (user: any) => {
    // save to server
    users.value.push(user)
    // connect api
  };
  const deleteUser = (id: number) => {
    // delete from server
  };

  return { users, addUser, deleteUser };
});
