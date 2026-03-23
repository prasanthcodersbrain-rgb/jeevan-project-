import { Router } from "express";
import {
  login,
  registerDoctor,
  registerPatient
} from "../controllers/authController.js";
import { validate } from "../middlewares/validate.js";
import {
  doctorRegistrationRules,
  loginRules,
  patientRegistrationRules
} from "../middlewares/validationSchemas.js";

const router = Router();

router.post("/register/patient", validate(patientRegistrationRules), registerPatient);
router.post("/register/doctor", validate(doctorRegistrationRules), registerDoctor);
router.post("/login", validate(loginRules), login);

export default router;
