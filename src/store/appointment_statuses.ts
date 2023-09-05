import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";
import { API } from "@/js/api";
import { IAppointmentStatus } from "@/contracts/appointments/IAppointmentStatus";
export const useAppointmentStatusStore = defineStore(
  "appointment_status",
  () => {
    // state
    const statuses = ref([]);

    // getters
    function getStatus(status_id: number): string {
      const status = statuses.value.find(
        (obj: IAppointmentStatus) => obj.id === status_id
      );
      return status ?? "status id not found";
    }

    // actions
    const fetchStatuses = async () => {
      try {
        const res = await axios.get(API.APPOINTMENTS.getAppointmentStatuses);
        statuses.value = res.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    };
    return { statuses, fetchStatuses, getStatus };
  }
);
