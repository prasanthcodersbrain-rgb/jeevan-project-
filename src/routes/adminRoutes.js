import { Router } from "express";
import {
  createPayout,
  getDashboard,
  getPendingDoctors,
  updateDoctorApproval
} from "../controllers/adminController.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import {
  doctorApprovalRules,
  payoutRules
} from "../middlewares/validationSchemas.js";

const router = Router();

router.use(authenticate, authorize("admin"));
router.get("/doctors/pending", getPendingDoctors);
router.patch("/doctors/:doctorId/approval", validate(doctorApprovalRules), updateDoctorApproval);
router.get("/dashboard", getDashboard);
router.post("/payouts", validate(payoutRules), createPayout);

export default router;
