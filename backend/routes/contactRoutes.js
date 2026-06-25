import express from "express";
import {
  submitContactForm,
  getContactMessages,
  deleteContactMessage,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", submitContactForm);
router.get("/messages", getContactMessages);
router.delete("/messages/:id", deleteContactMessage);

export default router;