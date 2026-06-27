import React from "react";

import Reveal from "./Reveal";



export default function Services() {

  const services = [

    {
      title:
        "Udemy SEO Optimization",

      description:
        "We optimize your course title, subtitles, keywords, descriptions and search positioning to improve rankings and visibility.",
    },



    {
      title:
        "Course Promotion & Marketing",

      description:
        "Advanced promotion systems that help increase enrollments, improve traffic quality and build stronger audience reach.",
    },



    {
      title:
        "AEO & Algorithm Optimization",

      description:
        "We help your courses align with Udemy’s recommendation systems for improved discoverability and marketplace growth.",
    },



    {
      title:
        "Growth Strategy Consulting",

      description:
        "Structured scaling systems focused on long-term growth, conversion optimization and revenue expansion.",
    },

  ];






  return (

    <section className="section">

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

            OUR SERVICES

          </p>





          <h2
            className="heading-lg"
            style={{
              maxWidth: "760px",
              margin: "auto",
            }}
          >

            Everything You Need
            To Succeed On Udemy

          </h2>

        </div>








        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "28px",
          }}
        >

          {services.map((service, index) => (

            <Reveal key={index}>

              <div className="card">




                {/* ICON */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#0F172A,#2563EB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                    marginBottom: "30px",
                  }}
                >

                  ✦

                </div>








                <h3
                  style={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: "20px",
                  }}
                >

                  {service.title}

                </h3>








                <p
                  className="text-muted"
                  style={{
                    lineHeight: 1.9,
                    fontSize: "16px",
                  }}
                >

                  {service.description}

                </p>








                <button
                  style={{
                    marginTop: "32px",
                    background: "transparent",
                    color: "#2563EB",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >

                  Learn More →

                </button>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}

