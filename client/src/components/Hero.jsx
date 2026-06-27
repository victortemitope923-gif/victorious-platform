import React from "react";



export default function Hero() {

  return (

    <section className="hero">

      <div
        className="container"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >




          {/* LEFT */}
          <div>

            <p
              style={{
                color: "#60A5FA",
                fontWeight: 600,
                marginBottom: "22px",
                letterSpacing: "1px",
              }}
            >

              UDEMY GROWTH CONSULTING

            </p>







            <h1
              className="heading-xl"
              style={{
                maxWidth: "700px",
              }}
            >

              We Help
              Instructors Grow,
              Rank & Earn More

            </h1>







            <p
              style={{
                color: "#CBD5E1",
                marginTop: "28px",
                fontSize: "20px",
                lineHeight: 1.8,
                maxWidth: "620px",
              }}
            >

              Strategic Udemy SEO,
              course promotion,
              algorithm optimization,
              and marketplace growth systems
              that help your courses
              reach more students.

            </p>








            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "42px",
                flexWrap: "wrap",
              }}
            >

              <button className="btn-primary">

                Our Services

              </button>





              <button className="btn-secondary">

                Book A Call

              </button>

            </div>








            {/* STATS */}
            <div
              className="stats"
              style={{
                marginTop: "70px",
              }}
            >

              <div className="stat-box">

                <h2>
                  5.0
                </h2>

                <p>
                  Client Rating
                </p>

              </div>





              <div className="stat-box">

                <h2>
                  100+
                </h2>

                <p>
                  Projects Completed
                </p>

              </div>





              <div className="stat-box">

                <h2>
                  248%
                </h2>

                <p>
                  Growth Increase
                </p>

              </div>

            </div>

          </div>









          {/* RIGHT CARD */}
          <div>

            <div
              style={{
                background:
                  "linear-gradient(180deg,#0B1738,#081126)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "34px",
                padding: "42px",
                minHeight: "520px",
                position: "relative",
                overflow: "hidden",
              }}
            >

              <div
                style={{
                  position: "absolute",
                  top: "-120px",
                  right: "-120px",
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  background:
                    "rgba(37,99,235,0.25)",
                  filter: "blur(80px)",
                }}
              />








              <p
                style={{
                  color: "#CBD5E1",
                  fontSize: "18px",
                }}
              >

                Total Students

              </p>





              <h2
                style={{
                  fontSize: "64px",
                  fontWeight: 800,
                  marginTop: "14px",
                }}
              >

                24,816

              </h2>





              <p
                style={{
                  color: "#4ADE80",
                  marginTop: "10px",
                  fontWeight: 700,
                  fontSize: "22px",
                }}
              >

                ↑ 35.4%

              </p>









              {/* GRAPH */}
              <div
                style={{
                  marginTop: "60px",
                  height: "220px",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >

                <svg
                  viewBox="0 0 500 200"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >

                  <path
                    d="
                    M0 180
                    C50 160 80 120 120 130
                    C160 140 180 80 230 90
                    C280 100 300 40 360 60
                    C420 80 440 10 500 20
                    "
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                </svg>

              </div>









              {/* MINI CARDS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "20px",
                  marginTop: "30px",
                }}
              >

                <div
                  style={{
                    background:
                      "rgba(255,255,255,0.03)",
                    border:
                      "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    padding: "24px",
                  }}
                >

                  <p
                    style={{
                      color: "#CBD5E1",
                    }}
                  >

                    Reviews

                  </p>

                  <h3
                    style={{
                      marginTop: "12px",
                      fontSize: "40px",
                    }}
                  >

                    4.9

                  </h3>

                </div>







                <div
                  style={{
                    background:
                      "rgba(255,255,255,0.03)",
                    border:
                      "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    padding: "24px",
                  }}
                >

                  <p
                    style={{
                      color: "#CBD5E1",
                    }}
                  >

                    Revenue

                  </p>

                  <h3
                    style={{
                      marginTop: "12px",
                      fontSize: "40px",
                    }}
                  >

                    $18K

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

