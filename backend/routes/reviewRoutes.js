import express from "express";

import {
  createReview,
  getReviews,
  getAllReviews,
  approveReview,
} from "../controllers/reviewController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();



// PUBLIC
router.post("/", createReview);

router.get("/", getReviews);



// ADMIN
router.get(
  "/admin",
  protect,
  adminOnly,
  getAllReviews
);

router.patch(
  "/:id/approve",
  protect,
  adminOnly,
  approveReview
);

export default router;

