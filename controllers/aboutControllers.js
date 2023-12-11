import express from "express";
import { getAllProfile } from "../services/aboutServices.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getProfile = async (request, response) => {
  const profileList = await getAllProfile();
  response.json({
    data: profileList,
  });
};