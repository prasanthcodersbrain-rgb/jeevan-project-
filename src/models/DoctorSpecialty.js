import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const DoctorSpecialty = sequelize.define(
  "DoctorSpecialty",
  {
    doctorProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    tableName: "doctor_specialties",
    timestamps: false
  }
);

export default DoctorSpecialty;
