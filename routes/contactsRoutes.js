import { Router } from "express";
import { postnewContact } from "../controllers/contactsControllers.js";
import { getnewContact } from "../controllers/contactsControllers.js";

const router = Router();

router.get("/contacts", getnewContact);
router.post("/contacts", postnewContact);

export default router;