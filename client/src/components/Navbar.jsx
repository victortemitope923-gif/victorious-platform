import React, {
  useState,
} from "react";



export default function Navbar() {

  const [open, setOpen] =
    useState(false);




  return (

    <header className="navbar">

      <div className="container">

        <nav
          style={{
            height: "88px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >




          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >

            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#2563EB,#0F172A)",
              }}
            />

            <div>

              <h2
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >

                Victorious

              </h2>

              <p
                style={{
                  color: "#CBD5E1",
                  fontSize: "13px",
                  marginTop: "4px",
                }}
              >

                Growth Consulting

              </p>

            </div>

          </div>









          {/* DESKTOP MENU */}
          <div
            className="desktop-menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "38px",
              color: "white",
              fontWeight: 500,
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
              About
            </a>

            <a href="#">
              Contact
            </a>





            <a
              href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
              target="_blank"
              className="btn-primary"
            >

              Book A Call

            </a>

          </div>









          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setOpen(!open)
            }
            className="mobile-btn"
            style={{
              display: "none",
              background: "transparent",
              color: "white",
              fontSize: "34px",
            }}
          >

            ☰

          </button>

        </nav>








        {/* MOBILE MENU */}
        {open && (

          <div
            style={{
              background: "#0F172A",
              borderRadius: "24px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              color: "white",
              marginBottom: "24px",
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
              About
            </a>

            <a href="#">
              Contact
            </a>





            <a
              href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
              target="_blank"
              className="btn-primary"
            >

              Book A Call

            </a>

          </div>

        )}

      </div>

    </header>

  );

}

