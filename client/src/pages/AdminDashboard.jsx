import React, {
  useEffect,
  useState,
} from "react";

import {
  getReviews,
  deleteReview,
} from "../services/reviewService";

export default function AdminDashboard() {

  const [reviews, setReviews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);



  const fetchReviews =
    async () => {

      try {

        const data =
          await getReviews();

        setReviews(
          data.reviews || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };



  useEffect(() => {

    fetchReviews();

  }, []);





  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this review?"
        );

      if (!confirmDelete) return;

      try {

        await deleteReview(id);

        setReviews(
          reviews.filter(
            (review) =>
              review._id !== id
          )
        );

      } catch (error) {

        console.log(error);

      }

    };






  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: "40px",
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >

        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "40px",
          }}
        >

          Admin Dashboard

        </h1>






        {loading ? (

          <p>
            Loading reviews...
          </p>

        ) : reviews.length === 0 ? (

          <p>
            No reviews yet.
          </p>

        ) : (

          <div
            style={{
              display: "grid",
              gap: "24px",
            }}
          >

            {reviews.map((review) => (

              <div
                key={review._id}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "28px",
                  boxShadow:
                    "0 10px 30px rgba(15,23,42,.08)",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >

                  <div>

                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        marginBottom: "10px",
                      }}
                    >

                      {review.name}

                    </h2>

                    <p
                      style={{
                        color: "#64748B",
                        lineHeight: 1.8,
                        maxWidth: "700px",
                      }}
                    >

                      {review.message}

                    </p>

                  </div>






                  <button
                    onClick={() =>
                      handleDelete(
                        review._id
                      )
                    }
                    style={{
                      background:
                        "#EF4444",
                      color: "white",
                      border: "none",
                      padding:
                        "14px 24px",
                      borderRadius:
                        "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      height: "fit-content",
                    }}
                  >

                    Delete

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}