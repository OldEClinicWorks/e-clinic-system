import { IPatient } from "@/contracts/IPatient";
export interface IAppointment_DBRecord {
  id: number;
  enter_date: Date;
  leave_date: Date;
  serial_number: number;
  status_id: number;
  patient_id: number;
  created_at: Date;
}

export interface IAppointment {
  id: Number;
  enter: String;
  exit: String;
  serialNumber: Number;
  status: string;
  patient: IPatient;
}


