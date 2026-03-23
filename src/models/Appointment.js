import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Appointment = sequelize.define(
  "Appointment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    symptoms: {
      type: DataTypes.TEXT
    },
    visitType: {
      type: DataTypes.ENUM("home", "clinic"),
      defaultValue: "home"
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "accepted",
        "rejected",
        "completed",
        "cancelled"
      ),
      defaultValue: "pending"
    },
    patientAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    patientLatitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false
    },
    patientLongitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    tableName: "appointments"
  }
);

export default Appointment;
