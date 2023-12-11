import Profile from "../models/about.js";

export const getAllProfile = async () => {
  return await Profile.findAll();
};