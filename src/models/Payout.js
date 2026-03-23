import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Payout = sequelize.define(
  "Payout",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    grossAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    commissionAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    payoutAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("pending", "processed", "failed"),
      defaultValue: "processed"
    },
    paidAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: "payouts"
  }
);

export default Payout;
