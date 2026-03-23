import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const DoctorProfile = sequelize.define(
  "DoctorProfile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    registrationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    experienceYears: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    consultationFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT
    },
    clinicAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false
    },
    serviceRadiusKm: {
      type: DataTypes.INTEGER,
      defaultValue: 15
    },
    approvalStatus: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending"
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: "doctor_profiles"
  }
);

export default DoctorProfile;
