import express from "express";
import { newContact } from "../services/contactsServices.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postnewContact = async (request, response) => {
  const { name, email, subject, message } = request.body;

  const contact = await newContact(name, email, subject, message);

  response.json({
    data: contact,
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getnewContact = (_, response) => {
  response.send("This is the contact page.");
};