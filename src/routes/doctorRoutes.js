import { Router } from "express";
import {
  getDoctorAppointments,
  getDoctorEarnings,
  updateAppointmentStatus
} from "../controllers/doctorController.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { appointmentStatusRules } from "../middlewares/validationSchemas.js";

const router = Router();

router.use(authenticate, authorize("doctor"));
router.get("/appointments", getDoctorAppointments);
router.get("/earnings", getDoctorEarnings);
router.patch(
  "/appointments/:appointmentId/status",
  validate(appointmentStatusRules),
  updateAppointmentStatus
);

export default router;
