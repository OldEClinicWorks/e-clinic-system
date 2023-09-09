"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretaryController = void 0;
exports.SecretaryController = {
    getPatients(req, res) {
        let patients = [];
        return res.status(200).json({ patients });
    },
    addPatient(req, res) {
        return res.status(200).json({
            message: "patient was added successfully.",
        });
    },
    deletePatient(req, res) { },
    updatePatient(req, res) { },
    makeAppointment(req, res) { },
    getAppointments(req, res) { },
    deleteAppointment(req, res) { },
    updateAppointment(req, res) { },
    markAppointmentSuccess(req, res) { },
    markAppointmentFailed(req, res) { },
    markAppointmentWaiting(req, res) { },
};
