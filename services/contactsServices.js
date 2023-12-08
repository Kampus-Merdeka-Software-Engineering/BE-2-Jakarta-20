
import Contacts from "../models/contacts.js";

export const newContact = async (name, email, subject, message) => {
  return await Contacts.create({ name, email, subject, message });
};