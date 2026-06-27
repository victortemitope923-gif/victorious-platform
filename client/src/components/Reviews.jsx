import React from "react";

export default function Reviews({
  reviews
}) {

  return (

    <section
      className="section"
      id="reviews"
    >

      <div className="container">

        <p className="section-tag">
          CLIENT REVIEWS
        </p>

        <h2 className="heading-lg">

          Real Client Feedback

        </h2>

        <div
          className="services-grid"
          style={{
            marginTop:"60px"
          }}
        >

          {reviews?.length > 0 ? (

            reviews.map((review) => (

              <div
                key={review._id}
                className="review-card"
              >

                <h3
                  style={{
                    marginBottom:"14px"
                  }}
                >
                  {review.name}
                </h3>

                <p>
                  {review.message}
                </p>

              </div>

            ))

          ) : (

            <p
              className="text-muted"
            >
              No reviews available yet.
            </p>

          )}

        </div>

      </div>

    </section>

  );

}

