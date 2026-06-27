import React from "react";

import {
  FaFacebookF,
} from "react-icons/fa6";

import {
  SiUpwork,
  SiFiverr,
} from "react-icons/si";


export default function Footer() {

  return (

    <footer className="footer">

      <div
        className="container"
        style={{
          paddingTop: "90px",
          paddingBottom: "40px",
        }}
      >




        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "40px",
          }}
        >




          {/* BRAND */}
          <div>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: 800,
              }}
            >

              Victorious

            </h2>





            <p
              style={{
                color: "#CBD5E1",
                marginTop: "20px",
                lineHeight: 1.9,
              }}
            >

              Helping instructors improve
              visibility, rankings,
              enrollments and long-term
              marketplace growth.

            </p>

          </div>









          {/* LINKS */}
          <div>

            <h3
              style={{
                marginBottom: "22px",
                fontSize: "20px",
              }}
            >

              Quick Links

            </h3>





            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                color: "#CBD5E1",
              }}
            >

              <a href="#">
                Home
              </a>

              <a href="#">
                Services
              </a>

              <a href="#">
                Reviews
              </a>

              <a href="#">
                Contact
              </a>

            </div>

          </div>









          {/* SERVICES */}
          <div>

            <h3
              style={{
                marginBottom: "22px",
                fontSize: "20px",
              }}
            >

              Services

            </h3>





            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                color: "#CBD5E1",
              }}
            >

              <p>
                Udemy SEO
              </p>

              <p>
                AEO Optimization
              </p>

              <p>
                Course Promotion
              </p>

              <p>
                Growth Strategy
              </p>

            </div>

          </div>









          {/* SOCIALS */}
          <div>

            <h3
              style={{
                marginBottom: "22px",
                fontSize: "20px",
              }}
            >

              Connect

            </h3>





            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >




              <a
                href="https://web.facebook.com/profile.php?id=61581763733878"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "#0b1d32",
                }}
              >

                <FaFacebookF />

                Facebook

              </a>








              <a
                href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "#021328",
                }}
              >

                <SiUpwork />

                Upwork

              </a>








              <a
                href="https://www.fiverr.com/"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: "#CBD5E1",
                }}
              >

                <SiFiverr />

                Fiverr

              </a>

            </div>

          </div>

        </div>









        {/* BOTTOM */}
        <div
          style={{
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            marginTop: "70px",
            paddingTop: "28px",
            textAlign: "center",
            color: "#94A3B8",
          }}
        >

          © 2026 Victorious Consulting.
          All rights reserved.

        </div>

      </div>

    </footer>

  );

}

