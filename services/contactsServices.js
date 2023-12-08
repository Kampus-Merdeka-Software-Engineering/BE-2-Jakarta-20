import Contacts from "../models/contacts.js";

export const newContact = async (name, email, subject, message) => {
  try {
    return await Contacts.create({ name, email, subject, message });
  } catch (error) {
    console.error("Error creating new contact:", error);
    throw error; // Re-throw the error to be caught by the calling function
  }
};