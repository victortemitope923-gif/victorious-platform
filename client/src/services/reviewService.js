const API =
  "https://victorious-platform-api.onrender.com/api/reviews";



export const getReviews =
  async () => {

    const response =
      await fetch(API);

    return response.json();

};



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

