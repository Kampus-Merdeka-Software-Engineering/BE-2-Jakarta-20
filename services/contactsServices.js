
import Contacts from "../models/contacts.js";

export const newContact = async (name, email, subject, message) => {
  try {
    await Contacts.create({ name, email, subject, message });
    return null;
  } catch (error) {
    console.error("Error creating new contact:", error);
    throw error;
  }
};