import { Router } from "express";
import {
  postnewContact,
  getnewContact,
} from "../controllers/contactsControllers.js";

const router = Router();

router.get("/contacts", getnewContact);
router.post("/contacts", postnewContact);

export default router;