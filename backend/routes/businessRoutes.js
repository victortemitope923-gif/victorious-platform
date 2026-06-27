import express from "express";

import {
  createBusiness,
  getBusiness,
} from "../controllers/businessController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// PUBLIC
router.get("/", getBusiness);


// ADMIN
router.post("/", protect, createBusiness);

export default router;

