import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Profile = sequelize.define("Profile", {
  profile_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: DataTypes.STRING,
  name: DataTypes.STRING,
  info: DataTypes.STRING,
  linkedin: DataTypes.STRING,
});

export default Profile;