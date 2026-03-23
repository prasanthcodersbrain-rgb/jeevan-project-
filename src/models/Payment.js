import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentGateway: {
      type: DataTypes.STRING,
      defaultValue: "mock"
    },
    gatewayTransactionId: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    commissionAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    doctorShareAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("initiated", "paid", "failed", "refunded"),
      defaultValue: "initiated"
    }
  },
  {
    tableName: "payments"
  }
);

export default Payment;
