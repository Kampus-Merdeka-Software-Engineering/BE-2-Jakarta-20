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

    // Embed JavaScript to show pop-up alert in the HTML response
    const htmlResponse = `
      <script>
        alert('Data submitted successfully');
        window.location.href = 'https://maifzs.github.io/repotestweb/contacts.html'; // Replace with the actual URL
      </script>
    `;

    // Send the HTML response with embedded script
    response.send(htmlResponse);
  } catch (error) {
    console.error("Error processing new contact:", error);

    // You can embed an error message or script here if needed
    response.status(500).send("Error submitting data");
  }
};