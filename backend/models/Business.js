import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(

  {
    companyName: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    services: [
      {
        type: String,
      },
    ],

    upwork: {
      type: String,
    },

    facebook: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const Business = mongoose.model(
  "Business",
  businessSchema
);

export default Business;

