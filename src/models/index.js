import sequelize from "../config/db.js";
import User from "./User.js";
import PatientProfile from "./PatientProfile.js";
import DoctorProfile from "./DoctorProfile.js";
import Specialty from "./Specialty.js";
import DoctorSpecialty from "./DoctorSpecialty.js";
import Appointment from "./Appointment.js";
import Payment from "./Payment.js";
import Review from "./Review.js";
import Payout from "./Payout.js";

User.hasOne(PatientProfile, { foreignKey: "userId", as: "patientProfile" });
PatientProfile.belongsTo(User, { foreignKey: "userId", as: "user" });

User.hasOne(DoctorProfile, { foreignKey: "userId", as: "doctorProfile" });
DoctorProfile.belongsTo(User, { foreignKey: "userId", as: "user" });

DoctorProfile.belongsToMany(Specialty, {
  through: DoctorSpecialty,
  foreignKey: "doctorProfileId",
  otherKey: "specialtyId",
  as: "specialties"
});

Specialty.belongsToMany(DoctorProfile, {
  through: DoctorSpecialty,
  foreignKey: "specialtyId",
  otherKey: "doctorProfileId",
  as: "doctorProfiles"
});

Appointment.belongsTo(User, { foreignKey: "patientId", as: "patient" });
Appointment.belongsTo(User, { foreignKey: "doctorId", as: "doctor" });
Appointment.belongsTo(Specialty, { foreignKey: "specialtyId", as: "specialty" });
Appointment.hasOne(Payment, { foreignKey: "appointmentId", as: "payment" });
Appointment.hasOne(Review, { foreignKey: "appointmentId", as: "review" });

Payment.belongsTo(Appointment, { foreignKey: "appointmentId", as: "appointment" });
Payment.belongsTo(User, { foreignKey: "patientId", as: "patient" });
Payment.belongsTo(User, { foreignKey: "doctorId", as: "doctor" });
Payment.hasOne(Payout, { foreignKey: "paymentId", as: "payout" });

Review.belongsTo(Appointment, { foreignKey: "appointmentId", as: "appointment" });
Review.belongsTo(User, { foreignKey: "patientId", as: "patient" });
Review.belongsTo(User, { foreignKey: "doctorId", as: "doctor" });

Payout.belongsTo(Payment, { foreignKey: "paymentId", as: "payment" });
Payout.belongsTo(User, { foreignKey: "doctorId", as: "doctor" });

export {
  sequelize,
  User,
  PatientProfile,
  DoctorProfile,
  Specialty,
  DoctorSpecialty,
  Appointment,
  Payment,
  Review,
  Payout
};
