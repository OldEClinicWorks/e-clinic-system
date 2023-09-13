import { defineStore } from "pinia";
import { ref } from "vue";

export const usePatientStore = defineStore("patients-store", () => {
  const Patients = ref([]);

  function filterPatients_by(property: string | number, value: any){
    const filteredArray = Patients.value.filter((object) => object.value[property] === value);
    return filteredArray;
  }    
  function getPatient(id: any){
    const index = Patients.value.findIndex((patient) => patient.id === id);
    return Patients.value[index]
  }
  function getPatients(){
    return Patients.value;
  }
  function updatePatient(newPatient, id){

  }
  return { Patients, getPatientById, getPatients };
});
