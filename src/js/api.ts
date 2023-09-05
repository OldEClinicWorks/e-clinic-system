export const base_prod = "";
export const base_dev = "http://localhost:5414/api/";
export const current_base = base_dev;

const getAppointments = "appointments";
const getAppointmentStatuses = "appointment_statuses"
export const API = {
  APPOINTMENTS: {
    getAppointments: current_base + getAppointments,
    getAppointmentStatuses: current_base + getAppointmentStatuses
  },
};
