import React from "react";

import {
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiUpwork,
} from "react-icons/si";

export default function Footer() {

  return (

    <footer
      className="footer"
      id="contact"
    >

      <div className="container">

        <div className="footer-grid">




          {/* BRAND */}
          <div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "24px",
              }}
            >

              <img
                src="https://i.postimg.cc/52z8MyKV/2a4583a94e4fcad68a090f2a0e521cce-removebg-preview.png"
                alt="Victorious"
                style={{
                  width: "70px",
                }}
              />

              <div>

                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                  }}
                >

                  Victorious

                </h2>

                <p
                  style={{
                    color: "#94A3B8",
                  }}
                >

                  Digital Growth

                </p>

              </div>

            </div>





            <p
              style={{
                color: "#CBD5E1",
                lineHeight: 1.9,
                maxWidth: "340px",
              }}
            >

              Helping instructors grow
              visibility, rankings,
              enrollments and long-term
              marketplace success.

            </p>

          </div>









          {/* LINKS */}
          <div>

            <h3 className="footer-title">
              Navigation
            </h3>

            <div className="footer-links">

              <a href="#">
                Home
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#reviews">
                Reviews
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

          </div>









          {/* SERVICES */}
          <div>

            <h3 className="footer-title">
              Services
            </h3>

            <div className="footer-links">

              <p>
                Udemy SEO
              </p>

              <p>
                AEO Optimization
              </p>

              <p>
                Course Marketing
              </p>

              <p>
                Growth Strategy
              </p>

            </div>

          </div>









          {/* CONTACT */}
          <div>

            <h3 className="footer-title">
              Connect
            </h3>

            <div className="footer-links">

              <a
                href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
                target="_blank"
                className="footer-social"
              >

                <SiUpwork />

                Upwork

              </a>





              <a
                href="https://web.facebook.com/profile.php?id=61581763733878"
                target="_blank"
                className="footer-social"
              >

                <FaFacebookF />

                Facebook

              </a>





              <a
                href="https://wa.me/2348136545616"
                target="_blank"
                className="footer-social"
              >

                <FaWhatsapp />

                WhatsApp

              </a>

            </div>

          </div>

        </div>






        {/* BOTTOM */}
        <div className="footer-bottom">

          © 2026 Victorious Digital.
          All rights reserved.

        </div>

      </div>

    </footer>

  );

}