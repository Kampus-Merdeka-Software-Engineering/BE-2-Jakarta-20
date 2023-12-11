import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { startSequelize } from "./utils/startSequelize.js";

const app = express();
const port = process.env.PORT | 3000;

import contactsRoutes from "./routes/contactsRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw());
app.use(bodyParser.json())

app.use("/", contactsRoutes);
app.use("/", aboutRoutes);

startSequelize();

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});