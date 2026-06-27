import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    platform: {
      type: String,
      required: true,
    },

    consultationType: {
      type: String,
      required: true,
    },

    preferredDate: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "completed"],
      default: "pending",
    },
  },

  {
    timestamps: true,
  }
);

const Booking = mongoose.model(
  "Booking",
  bookingSchema
);

export default Booking;

