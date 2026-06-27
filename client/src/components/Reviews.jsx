import React from "react";

import Reveal from "./Reveal";

import {
  FaStar,
} from "react-icons/fa";



export default function Reviews() {

  const reviews = [

    {
      name: "John Carter",

      role: "Udemy Instructor",

      image:
        "https://randomuser.me/api/portraits/men/32.jpg",

      review:
        "Our course visibility increased massively after the optimization work. The communication and strategy were excellent.",
    },








    {
      name: "Sarah Williams",

      role: "Course Creator",

      image:
        "https://randomuser.me/api/portraits/women/44.jpg",

      review:
        "Very professional service. We saw stronger rankings, more enrollments and better marketplace positioning.",
    },









    {
      name: "Michael Brown",

      role: "Online Educator",

      image:
        "https://randomuser.me/api/portraits/men/75.jpg",

      review:
        "One of the best consulting experiences I’ve had. The growth systems actually produced measurable results.",
    },

  ];









  return (

    <section
      className="section"
      style={{
        background:"#ffffff",
      }}
    >

      <div className="container">




        {/* TOP */}
        <div
          style={{
            textAlign:"center",
            marginBottom:"70px",
          }}
        >

          <p className="section-tag">

            CLIENT REVIEWS

          </p>







          <h2 className="heading-lg">

            Trusted By
            Instructors Worldwide

          </h2>







          <p
            className="text-muted"
            style={{
              maxWidth:"700px",
              margin:"24px auto 0",
              lineHeight:1.9,
              fontSize:"18px",
            }}
          >

            Real experiences from instructors
            who improved rankings,
            visibility and marketplace growth.

          </p>

        </div>









        {/* GRID */}
        <div className="grid-3">

          {reviews.map((item,index)=>(

            <Reveal key={index}>

              <div
                className="card"
                style={{
                  padding:"0",
                  overflow:"hidden",
                }}
              >




                {/* IMAGE */}
                <div
                  style={{
                    height:"240px",
                    overflow:"hidden",
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      height:"100%",
                      objectFit:"cover",
                    }}
                  />

                </div>









                {/* CONTENT */}
                <div
                  style={{
                    padding:"32px",
                  }}
                >

                  {/* STARS */}
                  <div
                    style={{
                      display:"flex",
                      gap:"6px",
                      color:"#FACC15",
                      marginBottom:"20px",
                    }}
                  >

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>








                  <p
                    className="text-muted"
                    style={{
                      lineHeight:1.9,
                      fontSize:"17px",
                    }}
                  >

                    "{item.review}"

                  </p>








                  <div
                    style={{
                      marginTop:"30px",
                      display:"flex",
                      alignItems:"center",
                      gap:"14px",
                    }}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width:"58px",
                        height:"58px",
                        borderRadius:"50%",
                        objectFit:"cover",
                      }}
                    />








                    <div>

                      <h3
                        style={{
                          fontSize:"18px",
                          fontWeight:700,
                        }}
                      >

                        {item.name}

                      </h3>







                      <p
                        className="text-muted"
                        style={{
                          marginTop:"4px",
                        }}
                      >

                        {item.role}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}