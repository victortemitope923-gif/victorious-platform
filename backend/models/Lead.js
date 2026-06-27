import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new",
    },
  },

  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;

