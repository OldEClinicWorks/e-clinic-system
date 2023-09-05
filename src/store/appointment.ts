import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";
import { API } from "@/js/api";
import {
  IAppointment_DBRecord,
  IAppointment,
} from "@/contracts/appointments/IAppointment";
import { ION_DATETIME_DEFAULT_DATE_FORMAT } from "@/js/constants";
import moment from "moment";
import { useAppointmentStatusStore } from "./appointment_statuses";
import { usePatientStore } from "./patient";

export const useAppointmentStore = defineStore("appointment", () => {
  const statusStore = useAppointmentStatusStore();
  const patientStore = usePatientStore();

  // state
  const appointments = ref([]);

  // getters
  const getAppointments = () => {
    return appointments.value;
  };

  // actions
  const fetchAppointments = async () => {
    try {
      const res = await axios.get(API.APPOINTMENTS.getAppointments);
      appointments.value = res.data;
      console.log(appointments.value);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  // function convert(record: IAppointment_DBRecord): IAppointment {
  //   return {
  //     id: record.id,
  //     enter: moment(record.enter_date)
  //       .format(ION_DATETIME_DEFAULT_DATE_FORMAT)
  //       .toString(),
  //     exit: moment(record.leave_date)
  //       .format(ION_DATETIME_DEFAULT_DATE_FORMAT)
  //       .toString(),
  //     serialNumber: record.serial_number,
  //     status: statusStore.getStatus(record.status_id),
  //     patient: patientStore.getPatient(record.patient_id),
  //   };
  // }

  // function convertArrOfRecords(
  //   recordsArr: IAppointment_DBRecord[]
  // ): IAppointment[] {
  //   const transformedArr: IAppointment[] = recordsArr.map((record) => {
  //     return convert(record);
  //   });
  //   return transformedArr;
  // }

  return { appointments, fetchAppointments, getAppointments };
});
