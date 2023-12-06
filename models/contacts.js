import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Contacts = sequelize.define("Contacts", {
  contact_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  subject: DataTypes.STRING,
  message: DataTypes.TEXT,
});

export default Contacts;