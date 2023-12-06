import { Router } from "express";
import {
  postnewContact,
  getnewContact,
} from "../controllers/contactsControllers.js";

const router = Router();

router.get("/", getnewContact);
router.post("/", postnewContact);

export default router;