import React from "react";

import Reveal from "./Reveal";



export default function Reviews() {

  const reviews = [

    {
      name: "Ali Raza",
      role: "Udemy Instructor",
      review:
        "Excellent work. My course visibility improved significantly and enrollments started increasing within weeks.",
    },



    {
      name: "Sarah Khan",
      role: "Course Creator",
      review:
        "Very professional and highly strategic. The optimization systems helped improve rankings and conversion.",
    },



    {
      name: "Hassan Malik",
      role: "Online Instructor",
      review:
        "Strong communication, great execution and measurable growth. Highly recommended for Udemy instructors.",
    },

  ];







  return (

    <section
      className="section"
      style={{
        background: "#F1F5F9",
      }}
    >

      <div className="container">

        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >

          <p
            style={{
              color: "#2563EB",
              fontWeight: 700,
              marginBottom: "18px",
              letterSpacing: "1px",
            }}
          >

            CLIENT REVIEWS

          </p>





          <h2 className="heading-lg">

            What Our Clients Say

          </h2>

        </div>









        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >

          {reviews.map((item, index) => (

            <Reveal key={index}>

              <div className="card">




                {/* PROFILE */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    marginBottom: "24px",
                  }}
                >

                  <div
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#2563EB,#0F172A)",
                    }}
                  />





                  <div>

                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >

                      {item.name}

                    </h3>





                    <p
                      className="text-muted"
                      style={{
                        marginTop: "6px",
                      }}
                    >

                      {item.role}

                    </p>

                  </div>

                </div>









                {/* STARS */}
                <div
                  style={{
                    color: "#FACC15",
                    fontSize: "20px",
                    marginBottom: "22px",
                  }}
                >

                  ★★★★★

                </div>









                {/* REVIEW */}
                <p
                  className="text-muted"
                  style={{
                    lineHeight: 1.9,
                    fontSize: "17px",
                  }}
                >

                  "{item.review}"

                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}

