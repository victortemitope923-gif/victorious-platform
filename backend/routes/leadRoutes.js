import express from "express";

import {
  createLead,
  getLeads,
  updateLeadStatus,
} from "../controllers/leadController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();



// PUBLIC
router.post("/", createLead);



// ADMIN
router.get(
  "/",
  protect,
  adminOnly,
  getLeads
);



// UPDATE STATUS
router.patch(
  "/:id",
  protect,
  adminOnly,
  updateLeadStatus
);

export default router;

