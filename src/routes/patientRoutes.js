import { Router } from "express";
import {
  bookAppointment,
  createPayment,
  createReview,
  getPatientAppointments,
  getNearbyDoctors
} from "../controllers/patientController.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import {
  bookAppointmentRules,
  createPaymentRules,
  createReviewRules
} from "../middlewares/validationSchemas.js";

const router = Router();

router.use(authenticate, authorize("patient"));
router.get("/appointments", getPatientAppointments);
router.get("/doctors/nearby", getNearbyDoctors);
router.post("/appointments", validate(bookAppointmentRules), bookAppointment);
router.post("/payments", validate(createPaymentRules), createPayment);
router.post("/reviews", validate(createReviewRules), createReview);

export default router;
