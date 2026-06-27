import React, {
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaWhatsapp,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  return (

    <header className="navbar">

      <div className="container">

        <nav className="nav-wrapper">

          {/* LOGO */}
          <Link
            to="/"
            className="logo-area"
          >

            <img
              src="https://i.postimg.cc/52z8MyKV/2a4583a94e4fcad68a090f2a0e521cce-removebg-preview.png"
              alt="Victorious Digital"
              className="logo-img"
            />

            <div>

              <h2 className="logo-text">
                Victorious
              </h2>

              <p className="logo-subtext">
                Digital Growth
              </p>

            </div>

          </Link>





          {/* DESKTOP MENU */}
          <div className="desktop-menu">

            <a href="/#">
              Home
            </a>

            <a href="/#services">
              Services
            </a>

            <a href="/#reviews">
              Reviews
            </a>

            <a href="/#contact">
              Contact
            </a>

          </div>





          {/* RIGHT */}
          <div className="nav-right">

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





            <a
              href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
              target="_blank"
              className="btn-primary nav-btn"
            >

              Hire Us

            </a>





            <button
              className="mobile-btn"
              onClick={() =>
                setOpen(!open)
              }
            >

              {open
                ? <FaTimes />
                : <FaBars />}

            </button>

          </div>

        </nav>





        {/* MOBILE MENU */}
        {open && (

          <div className="mobile-menu">

            <a href="/#">
              Home
            </a>

            <a href="/#services">
              Services
            </a>

            <a href="/#reviews">
              Reviews
            </a>

            <a href="/#contact">
              Contact
            </a>





            <a
              href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
              target="_blank"
              className="btn-primary"
            >

              Hire Us

            </a>

          </div>

        )}

      </div>

    </header>

  );

}

