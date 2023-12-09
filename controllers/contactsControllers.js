import express from "express";
import { newContact } from "../services/contactsServices.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postnewContact = async (request, response) => {
  const { name, email, subject, message } = request.body;
  
  try {
    await newContact(name, email, subject, message);

    // Send a success response
    response
      .status(200)
      .json({ success: true, message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error processing new contact:", error);

    // Send an error response
    response
      .status(500)
      .json({ success: false, message: "Error submitting data" });
  }
};