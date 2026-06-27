import React from "react";

import CountUp from "react-countup";

import {
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {

  return (

    <section className="hero">

      <div className="container">

        <div className="hero-grid">

          <div className="hero-content">

            <p className="section-tag">
              TRUSTED UDEMY GROWTH AGENCY
            </p>

            <h1 className="heading-xl">

              We Help Udemy Instructors
              Grow Faster And Earn More

            </h1>

            <p>

              Strategic course optimization,
              Udemy SEO, marketplace ranking,
              conversion systems and promotion
              strategies designed for long-term
              growth and visibility.

            </p>

            <div className="hero-buttons">

              <a
                href="https://wa.me/2348136545616"
                target="_blank"
                className="btn-primary"
              >

                Get Started

                <FaArrowRight />

              </a>

              <a
                href="https://upwork.com/freelancers/~010c38570f0d8c1ab5"
                target="_blank"
                className="btn-light"
              >

                Hire On Upwork

              </a>

            </div>

            <div className="stats">

              <div className="stat-box">

                <h2>

                  <CountUp
                    end={100}
                    duration={3}
                  />

                  +

                </h2>

                <p>
                  Courses Optimized
                </p>

              </div>

              <div className="stat-box">

                <h2>

                  <CountUp
                    end={248}
                    duration={3}
                  />

                  %

                </h2>

                <p>
                  Growth Increase
                </p>

              </div>

              <div className="stat-box">

                <h2>

                  <CountUp
                    end={5}
                    decimals={1}
                    duration={3}
                  />

                </h2>

                <p>
                  Client Rating
                </p>

              </div>

            </div>

          </div>

          <div className="hero-image-wrap">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="Team Meeting"
              className="hero-image"
            />

            <div
              className="floating-card"
              style={{
                bottom:"-20px",
                left:"-20px"
              }}
            >

              <p
                style={{
                  color:"#64748B",
                  marginBottom:"8px"
                }}
              >
                Monthly Growth
              </p>

              <h2
                style={{
                  color:"#1DBF73"
                }}
              >
                +35.8%
              </h2>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

