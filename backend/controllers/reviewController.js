import Review from "../models/Review.js";



// CREATE REVIEW
export const createReview = async (req, res) => {

  try {

    const review = await Review.create(req.body);

    res.status(201).json({
      success: true,
      review,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};




// GET APPROVED REVIEWS
export const getReviews = async (req, res) => {

  try {

    const reviews = await Review.find({
      approved: true,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: reviews.length,
      reviews,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};




// GET ALL REVIEWS (ADMIN)
export const getAllReviews = async (req, res) => {

  try {

    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: reviews.length,
      reviews,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};




// APPROVE REVIEW
export const approveReview = async (req, res) => {

  try {

    const review = await Review.findById(
      req.params.id
    );

    if (!review) {

      return res.status(404).json({
        success: false,
        message: "Review not found",
      });

    }

    review.approved = true;

    await review.save();

    res.json({
      success: true,
      review,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// DELETE REVIEW
export const deleteReview = async (req, res) => {

  try {

    const review =
      await Review.findByIdAndDelete(
        req.params.id
      );

    if (!review) {

      return res.status(404).json({
        success: false,
        message: "Review not found",
      });

    }

    res.json({
      success: true,
      message: "Review deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};