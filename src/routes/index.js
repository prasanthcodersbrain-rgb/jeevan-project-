import { Router } from "express";
import adminRoutes from "./adminRoutes.js";
import authRoutes from "./authRoutes.js";
import doctorRoutes from "./doctorRoutes.js";
import patientRoutes from "./patientRoutes.js";
import { getSpecialties } from "../controllers/patientController.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ message: "Health booking API is running" });
});

router.get("/specialties", getSpecialties);
router.use("/auth", authRoutes);
router.use("/patient", patientRoutes);
router.use("/doctor", doctorRoutes);
router.use("/admin", adminRoutes);

export default router;
