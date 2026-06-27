import React from "react";

import {
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";



export default function Footer() {

  return (

    <footer className="footer">

      <div
        className="container"
        style={{
          paddingTop:"90px",
          paddingBottom:"40px",
        }}
      >




        <div className="grid-4">




          {/* BRAND */}
          <div>

            <img
              src="https://i.postimg.cc/8zQ7s8D8/logo.png"
              alt="logo"
              style={{
                width:"58px",
                marginBottom:"24px",
              }}
            />








            <h2
              style={{
                fontSize:"34px",
                fontWeight:800,
              }}
            >

              Victorious

            </h2>








            <p
              style={{
                color:"#CBD5E1",
                marginTop:"20px",
                lineHeight:1.9,
              }}
            >

              Helping instructors grow,
              optimize and scale their
              online course businesses.

            </p>

          </div>









          {/* LINKS */}
          <div>

            <h3
              style={{
                marginBottom:"24px",
                fontSize:"20px",
              }}
            >

              Navigation

            </h3>








            <div
              style={{
                display:"flex",
                flexDirection:"column",
                gap:"16px",
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
                marginBottom:"24px",
                fontSize:"20px",
              }}
            >

              Services

            </h3>








            <div
              style={{
                display:"flex",
                flexDirection:"column",
                gap:"16px",
                color:"#CBD5E1",
              }}
            >

              <p>
                Udemy SEO
              </p>

              <p>
                Course Promotion
              </p>

              <p>
                Growth Consulting
              </p>

              <p>
                Marketplace Strategy
              </p>

            </div>

          </div>










          {/* SOCIAL */}
          <div>

            <h3
              style={{
                marginBottom:"24px",
                fontSize:"20px",
              }}
            >

              Connect

            </h3>








            <div
              style={{
                display:"flex",
                gap:"16px",
              }}
            >

              <a
                href="https://web.facebook.com/profile.php?id=61581763733878"
                target="_blank"
                className="social-circle"
              >

                <FaFacebookF />

              </a>








              <a
                href="https://wa.me/2348136545616"
                target="_blank"
                className="social-circle"
              >

                <FaWhatsapp />

              </a>

            </div>










            <a
              href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
              target="_blank"
              className="btn-primary"
              style={{
                marginTop:"30px",
              }}
            >

              Hire On Upwork

            </a>

          </div>

        </div>









        {/* BOTTOM */}
        <div
          style={{
            borderTop:
              "1px solid rgba(255,255,255,.08)",
            marginTop:"70px",
            paddingTop:"28px",
            textAlign:"center",
            color:"#94A3B8",
          }}
        >

          © 2026 Victorious Digital Enterprises.
          All rights reserved.

        </div>

      </div>

    </footer>

  );

}