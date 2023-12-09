import express from "express";
import { newContact } from "../services/contactsServices.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postnewContact = async (request, response) => {
  const { name, email, subject, message } = request.body;

  await newContact(name, email, subject, message);

  const responseData = `
    <p>Data submitted successfully</p>
    <button onclick="goToPreviousPage()">Go to Previous Page</button>
    <script>
        function goToPreviousPage() {
            window.history.back();
        }
    </script>
  `;
  response.status(201).send(responseData);
};