import React, {
  useEffect,
  useState,
} from "react";

import {
  getReviews,
} from "../services/reviewService";



export default function AdminDashboard() {

  const [reviews, setReviews] =
    useState([]);




  useEffect(() => {

    fetchReviews();

  }, []);






  const fetchReviews =
    async () => {

      try {

        const data =
          await getReviews();

        setReviews(
          data.reviews
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
        padding: "60px 0",
      }}
    >

      <div className="container">

        <div
          style={{
            marginBottom: "50px",
          }}
        >

          <p
            style={{
              color: "#2563EB",
              fontWeight: 700,
              marginBottom: "14px",
            }}
          >

            ADMIN PANEL

          </p>





          <h1 className="heading-lg">

            Reviews Dashboard

          </h1>

        </div>









        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >

          {reviews.map((review) => (

            <div
              key={review._id}
              className="card"
            >

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >




                {/* USER */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >

                  <img
                    src={
                      review.image ||
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
                    }
                    alt={review.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />







                  <div>

                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >

                      {review.name}

                    </h3>





                    <p
                      className="text-muted"
                    >

                      {review.service}

                    </p>

                  </div>

                </div>








                {/* RATING */}
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >

                  {"⭐".repeat(
                    review.rating
                  )}

                </div>

              </div>










              {/* MESSAGE */}
              <p
                className="text-muted"
                style={{
                  marginTop: "28px",
                  lineHeight: 1.9,
                  fontSize: "17px",
                }}
              >

                "{review.message}"

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

