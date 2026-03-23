import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Specialty = sequelize.define(
  "Specialty",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "specialties"
  }
);

export default Specialty;
