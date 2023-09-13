import { ION_DATETIME_DEFAULT_DATE_FORMAT } from "@/js/constants";
import moment from "moment";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { QUEUE_FETCH_APPOINTMNETS_BY_DATE_URL } from "./routes";
import axios from "axios";
import { successful } from "../api";

export const useQueueStore = defineStore("queue", async () => {
  const appointments = ref(<any[]>[]);
  const selectedDate = ref(moment().format(ION_DATETIME_DEFAULT_DATE_FORMAT));

  const state = reactive({
    appointments:[],

  })
  const fetchAppointments = async (): Promise<boolean> => {
    // fetch appointment according to date
    return await axios
      .get<any[]>(QUEUE_FETCH_APPOINTMNETS_BY_DATE_URL)
      .then((res) => {
        if ( successful(res)) {
          appointments.value = res.data;
          return true;
        }
        return false;
      });
  };

  return { appointments, fetchAppointments, selectedDate };
});
