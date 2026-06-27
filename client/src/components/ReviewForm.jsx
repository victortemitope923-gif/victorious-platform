import React, {
  useState,
} from "react";

import {
  createReview,
} from "../services/reviewService";



export default function ReviewForm() {

  const [formData, setFormData] =
    useState({
      name: "",
      rating: 5,
      message: "",
      image: "",
      service: "",
    });




  const [loading, setLoading] =
    useState(false);




  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };











  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await createReview(
          formData
        );



        alert(
          "Review submitted successfully"
        );



        setFormData({
          name: "",
          rating: 5,
          message: "",
          image: "",
          service: "",
        });

      } catch (error) {

        console.log(error);

        alert(
          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    };












  return (

    <section className="section">

      <div className="container">

        <div
          className="card"
          style={{
            maxWidth: "760px",
            margin: "auto",
          }}
        >

          <h2
            className="heading-lg"
            style={{
              marginBottom: "20px",
            }}
          >

            Leave A Review

          </h2>






          <p
            className="text-muted"
            style={{
              marginBottom: "40px",
            }}
          >

            Share your experience
            working with us.

          </p>












          <form
            onSubmit={handleSubmit}
          >




            {/* NAME */}
            <div
              style={{
                marginBottom: "24px",
              }}
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "14px",
                  border:
                    "1px solid #CBD5E1",
                  fontSize: "16px",
                }}
              />

            </div>












            {/* PROFILE IMAGE */}
            <div
              style={{
                marginBottom: "24px",
              }}
            >

              <input
                type="text"
                name="image"
                placeholder="Profile Image URL"
                value={formData.image}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "14px",
                  border:
                    "1px solid #CBD5E1",
                  fontSize: "16px",
                }}
              />

            </div>












            {/* SERVICE */}
            <div
              style={{
                marginBottom: "24px",
              }}
            >

              <input
                type="text"
                name="service"
                placeholder="Service Used"
                value={formData.service}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "14px",
                  border:
                    "1px solid #CBD5E1",
                  fontSize: "16px",
                }}
              />

            </div>












            {/* RATING */}
            <div
              style={{
                marginBottom: "24px",
              }}
            >

              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "14px",
                  border:
                    "1px solid #CBD5E1",
                  fontSize: "16px",
                }}
              >

                <option value="5">
                  5 Stars
                </option>

                <option value="4">
                  4 Stars
                </option>

                <option value="3">
                  3 Stars
                </option>

                <option value="2">
                  2 Stars
                </option>

                <option value="1">
                  1 Star
                </option>

              </select>

            </div>












            {/* MESSAGE */}
            <div
              style={{
                marginBottom: "24px",
              }}
            >

              <textarea
                name="message"
                placeholder="Write your review..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "14px",
                  border:
                    "1px solid #CBD5E1",
                  fontSize: "16px",
                  resize: "none",
                }}
              />

            </div>












            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >

              {loading
                ? "Submitting..."
                : "Submit Review"}

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

