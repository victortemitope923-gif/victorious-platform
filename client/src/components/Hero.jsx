import React from "react";

import {
  FaArrowRight,
  FaStar,
} from "react-icons/fa";



export default function Hero() {

  return (

    <section className="hero">

      <div className="container hero-grid">




        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badge">

            TRUSTED UDEMY GROWTH AGENCY

          </div>








          <h1 className="hero-title">

            We Help
            Udemy Instructors
            Grow Faster
            And Earn More

          </h1>








          <p className="hero-text">

            Strategic course optimization,
            Udemy SEO, marketplace ranking,
            conversion systems and promotion
            strategies designed for long-term
            growth and visibility.

          </p>









          {/* BUTTONS */}
          <div className="hero-buttons">

            <a
              href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
              target="_blank"
              className="btn-primary"
            >

              Get Started

              <FaArrowRight />

            </a>








            <a
              href="https://wa.me/2348136545616"
              target="_blank"
              className="btn-secondary-dark"
            >

              WhatsApp Us

            </a>

          </div>










          {/* STATS */}
          <div className="hero-stats">

            <div className="hero-stat">

              <h2>
                100+
              </h2>

              <p>
                Courses Optimized
              </p>

            </div>







            <div className="hero-stat">

              <h2>
                248%
              </h2>

              <p>
                Growth Increase
              </p>

            </div>







            <div className="hero-stat">

              <h2>
                5.0
              </h2>

              <p>
                Client Rating
              </p>

            </div>

          </div>

        </div>











        {/* RIGHT */}
        <div className="hero-right">

          <div className="hero-image-wrapper">

            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business Team"
              className="hero-image"
            />









            {/* FLOATING CARD */}
            <div className="floating-card">

              <div className="floating-top">

                <div>

                  <p>
                    Monthly Growth
                  </p>

                  <h3>
                    +35.8%
                  </h3>

                </div>






                <div className="green-dot"></div>

              </div>









              <div className="floating-bottom">

                <FaStar className="star-icon" />

                <span>

                  Trusted by instructors worldwide

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}