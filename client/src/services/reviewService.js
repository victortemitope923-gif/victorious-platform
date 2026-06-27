const API =
  "https://victorious-platform-api.onrender.com/api/reviews";



// GET REVIEWS
export const getReviews =
  async () => {

    const response =
      await fetch(API);

    return response.json();

};



// CREATE REVIEW
export const createReview =
  async (reviewData) => {

    const response =
      await fetch(API, {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          reviewData
        ),

      });

    return response.json();

};



// DELETE REVIEW
export const deleteReview =
  async (id) => {

    const response =
      await fetch(`${API}/${id}`, {

        method: "DELETE",

      });

    return response.json();

};