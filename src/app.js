import cors from "cors";
import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Health Booking System Backend is running",
    docs: {
      health: "/api/health",
      auth: "/api/auth/login",
      patientNearbyDoctors: "/api/patient/doctors/nearby",
      adminDashboard: "/api/admin/dashboard"
    }
  });
});

app.use("/api", routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
