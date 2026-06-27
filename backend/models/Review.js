import mongoose from "mongoose";



const reviewSchema =
  new mongoose.Schema(

    {

      name: {
        type: String,
        required: true,
      },



      rating: {
        type: Number,
        required: true,
      },



      message: {
        type: String,
        required: true,
      },



      image: {
        type: String,
        default:
          "https://i.pravatar.cc/150",
      },



      service: {
        type: String,
        default:
          "Course Growth",
      },

    },

    {
      timestamps: true,
    }

  );



export default mongoose.model(
  "Review",
  reviewSchema
);

