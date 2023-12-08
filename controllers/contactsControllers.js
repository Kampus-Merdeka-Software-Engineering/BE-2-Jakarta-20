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
    response.status(201).send("Form submitted successfully");
  } catch (error) {
    console.error("Error handling form submission:", error);
    response.status(500).send("Internal Server Error");
  }
};