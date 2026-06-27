import express from "express";

import {
  createBooking,
  getBookings,
} from "../controllers/bookingController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// PUBLIC
router.post("/", createBooking);


// ADMIN
router.get("/", protect, getBookings);

export default router;

