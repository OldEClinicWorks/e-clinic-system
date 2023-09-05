import { IAppointmentFaker } from "../Contracts/Models/IAppointment.js";
export const AppointmentsController = {
    getAppointments(req, res) {
        let arr = [];
        for (let index = 0; index < 5; index++) {
            arr.push(IAppointmentFaker());
        }
        return res.status(200).json(arr);
    },
    getAppointmentStatuses(req, res) {
        let arr = [
            {
                id: 1,
                status: "success",
                description: "patient has attended this appointment.",
            },
            {
                id: 2,
                status: "waiting",
                description: "patient is waiting until appointment is due.",
            },
            {
                id: 3,
                status: "failed",
                description: "patient did not attend this appointment.",
            },
        ];
        return res.status(200).json(arr);
    },
};
