import { Router } from "express";
import { postnewContact } from "../controllers/contactsControllers.js";

const router = Router();

router.post("/contacts", postnewContact);

export default router;