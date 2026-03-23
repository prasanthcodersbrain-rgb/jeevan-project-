import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PatientProfile = sequelize.define(
  "PatientProfile",
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
    address: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 7)
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 7)
    }
  },
  {
    tableName: "patient_profiles"
  }
);

export default PatientProfile;
