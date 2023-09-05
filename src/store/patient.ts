import { defineStore } from "pinia";

export const usePatientStore = defineStore("patient", {
  state: () => ({
    patients: () => {
      return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    },
  }),
  getters: {
    getPatient(patient_id) {
      return { id: 1 };
    },
  },
  actions: {
    addPatient() {},
  },
});
