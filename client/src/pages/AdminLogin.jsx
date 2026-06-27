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



    fetchReviews();

  }, []);









  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
      }}
    >




      {/* SIDEBAR */}
      <div
        style={{
          width: "280px",
          background:
            "linear-gradient(180deg,#071028,#0A1B46)",
          color: "white",
          padding: "40px 30px",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >

        <h1
          style={{
            fontSize: "34px",
            fontWeight: 800,
            marginBottom: "60px",
          }}
        >

          Victorious

        </h1>









        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          <button
            className="btn-primary"
            style={{
              textAlign: "left",
            }}
          >

            Dashboard

          </button>





          <button
            style={{
              background: "transparent",
              color: "white",
              textAlign: "left",
              padding: "14px 0",
              fontSize: "16px",
            }}
          >

            Reviews

          </button>





          <button
            style={{
              background: "transparent",
              color: "white",
              textAlign: "left",
              padding: "14px 0",
              fontSize: "16px",
            }}
          >

            Leads

          </button>





          <button
            style={{
              background: "transparent",
              color: "white",
              textAlign: "left",
              padding: "14px 0",
              fontSize: "16px",
            }}
          >

            Bookings

          </button>





          <button
            style={{
              background: "transparent",
              color: "white",
              textAlign: "left",
              padding: "14px 0",
              fontSize: "16px",
            }}
          >

            Business Info

          </button>

        </div>

      </div>













      {/* MAIN CONTENT */}
      <div
        style={{
          marginLeft: "280px",
          width: "100%",
          padding: "50px",
        }}
      >

        <h2
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#0F172A",
          }}
        >

          Admin Dashboard

        </h2>





        <p
          className="text-muted"
          style={{
            marginTop: "12px",
            fontSize: "17px",
          }}
        >

          Manage your reviews,
          leads, bookings and platform data.

        </p>









        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "24px",
            marginTop: "50px",
          }}
        >

          <div className="card">

            <h3
              style={{
                color: "#64748B",
                fontSize: "18px",
              }}
            >

              Total Reviews

            </h3>

            <h1
              style={{
                fontSize: "52px",
                marginTop: "20px",
                color: "#0F172A",
              }}
            >

              {reviews.length}

            </h1>

          </div>









          <div className="card">

            <h3
              style={{
                color: "#64748B",
                fontSize: "18px",
              }}
            >

              Total Leads

            </h3>

            <h1
              style={{
                fontSize: "52px",
                marginTop: "20px",
                color: "#0F172A",
              }}
            >

              0

            </h1>

          </div>









          <div className="card">

            <h3
              style={{
                color: "#64748B",
                fontSize: "18px",
              }}
            >

              Bookings

            </h3>

            <h1
              style={{
                fontSize: "52px",
                marginTop: "20px",
                color: "#0F172A",
              }}
            >

              0

            </h1>

          </div>

        </div>













        {/* REVIEWS TABLE */}
        <div
          className="card"
          style={{
            marginTop: "50px",
            overflowX: "auto",
          }}
        >

          <h2
            style={{
              fontSize: "30px",
              marginBottom: "30px",
            }}
          >

            Recent Reviews

          </h2>









          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >

            <thead>

              <tr
                style={{
                  borderBottom:
                    "1px solid #E2E8F0",
                }}
              >

                <th
                  style={{
                    textAlign: "left",
                    padding: "18px 0",
                  }}
                >

                  User

                </th>





                <th
                  style={{
                    textAlign: "left",
                  }}
                >

                  Service

                </th>





                <th
                  style={{
                    textAlign: "left",
                  }}
                >

                  Rating

                </th>





                <th
                  style={{
                    textAlign: "left",
                  }}
                >

                  Message

                </th>

              </tr>

            </thead>









            <tbody>

              {reviews.map((review) => (

                <tr
                  key={review._id}
                  style={{
                    borderBottom:
                      "1px solid #F1F5F9",
                  }}
                >

                  <td
                    style={{
                      padding: "20px 0",
                    }}
                  >

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >

                      <img
                        src={review.image}
                        alt={review.name}
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />





                      <div>

                        <h4
                          style={{
                            fontSize: "16px",
                          }}
                        >

                          {review.name}

                        </h4>

                      </div>

                    </div>

                  </td>









                  <td>

                    {review.service}

                  </td>









                  <td>

                    {"⭐".repeat(
                      review.rating
                    )}

                  </td>









                  <td
                    style={{
                      maxWidth: "320px",
                      color: "#64748B",
                    }}
                  >

                    {review.message}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

