import { Appointment, Payment, Payout, Review } from "../models/index.js";
import { DoctorProfile, PatientProfile, Specialty, User } from "../models/index.js";
import adminSeeder from "./002-adminSeeder.js";
import demoUsersSeeder from "./003-demoUsersSeeder.js";
import demoOperationsSeeder from "./004-demoOperationsSeeder.js";
import specialtiesSeeder from "./001-specialtiesSeeder.js";

export const seederContext = {
  Appointment,
  DoctorProfile,
  Payment,
  PatientProfile,
  Payout,
  Review,
  Specialty,
  User
};

const seeders = [specialtiesSeeder, adminSeeder, demoUsersSeeder, demoOperationsSeeder];

export default seeders;
