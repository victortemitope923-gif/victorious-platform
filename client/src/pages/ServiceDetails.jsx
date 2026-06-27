import React from "react";

import { useParams } from "react-router-dom";

import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = {

  "udemy-seo": {

    title:
      "Udemy SEO Optimization",

    subtitle:
      "Rank Higher. Get More Students. Increase Revenue.",

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",

    description:
      "Most Udemy courses fail because students never discover them. We optimize your titles, subtitles, keywords, descriptions and ranking strategy so your course appears higher in Udemy search results and attracts more enrollments.",

    longText:
      "Our SEO strategy is built specifically for Udemy's marketplace algorithm. We research profitable keywords, optimize conversion structure and improve discoverability so your course gains consistent visibility over time. Whether you are launching a new course or reviving an old one, we help you dominate your niche.",

    benefits: [

      "Advanced Keyword Research",
      "Course Ranking Optimization",
      "Higher Organic Visibility",
      "Better Conversion Structure",
      "Student Attraction Strategy",
      "Marketplace Growth"

    ]

  },

  "course-marketing": {

    title:
      "Course Marketing",

    subtitle:
      "Turn Your Course Into A Profitable Brand.",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",

    description:
      "Creating a great course is only the beginning. We help instructors build marketing systems that increase visibility, drive targeted traffic and maximize enrollments.",

    longText:
      "Our marketing system focuses on positioning your course in front of the right audience using strategic promotion, conversion optimization and marketplace growth tactics. We help you scale your instructor business beyond random sales and create predictable growth.",

    benefits: [

      "Audience Growth",
      "Sales Funnel Strategy",
      "Promotion Campaigns",
      "Conversion Optimization",
      "Brand Positioning",
      "Long-Term Scaling"

    ]

  },

  "aeo-optimization": {

    title:
      "AEO Optimization",

    subtitle:
      "Optimize For The Future Of AI Search.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",

    description:
      "AI search engines and answer systems are changing how people discover content online. AEO helps position your course for the next generation of search visibility.",

    longText:
      "We optimize your course content structure for Answer Engine Optimization so your educational content performs better inside AI-driven systems, snippets and smart search experiences. This gives your brand stronger authority and future-ready visibility.",

    benefits: [

      "AI Search Visibility",
      "Featured Answer Optimization",
      "Authority Building",
      "Future Search Strategy",
      "Smart Content Structuring",
      "Enhanced Discoverability"

    ]

  }

};

export default function ServiceDetails() {

  const { slug } = useParams();

  const service =
    services[slug];

  if (!service) {

    return (

      <div
        style={{
          padding:"200px 40px",
          textAlign:"center"
        }}
      >

        <h1>
          Service Not Found
        </h1>

      </div>

    );

  }

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="service-hero">

        <div className="container">

          <div className="service-details-grid">

            <div className="service-details-content">

              <p className="section-tag">

                PREMIUM SERVICE

              </p>

              <h1>

                {service.title}

              </h1>

              <h3>

                {service.subtitle}

              </h3>

              <p>

                {service.description}

              </p>

              <div className="service-benefits">

                {service.benefits.map(
                  (item,index) => (

                  <div
                    key={index}
                    className="service-benefit"
                  >

                    <FaCheckCircle />

                    <span>
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <div className="hero-buttons">

                <a
                  href="https://wa.me/2348136545616"
                  target="_blank"
                  className="btn-primary"
                >

                  Start This Service

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

            </div>

            <div className="service-details-image">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>

          </div>

        </div>

      </section>

      {/* WHY THIS SERVICE */}

      <section className="section">

        <div className="container">

          <div className="service-info-box">

            <div>

              <p className="section-tag">

                WHY THIS MATTERS

              </p>

              <h2 className="heading-lg">

                Serious Growth Requires Strategy

              </h2>

            </div>

            <p>

              {service.longText}

            </p>

          </div>

        </div>

      </section>

      {/* RESULTS */}

      <section
        className="section"
        style={{
          background:"#0F172A",
          color:"white"
        }}
      >

        <div className="container">

          <div
            style={{
              textAlign:"center"
            }}
          >

            <p
              className="section-tag"
              style={{
                color:"#1DBF73"
              }}
            >

              EXPECTED RESULTS

            </p>

            <h2 className="heading-lg">

              What You Can Expect

            </h2>

          </div>

          <div
            className="services-grid"
            style={{
              marginTop:"60px"
            }}
          >

            <div className="result-card">

              <h2>
                Higher Visibility
              </h2>

              <p>

                Improve discoverability and marketplace ranking.

              </p>

            </div>

            <div className="result-card">

              <h2>
                More Enrollments
              </h2>

              <p>

                Increase conversion rates and student acquisition.

              </p>

            </div>

            <div className="result-card">

              <h2>
                Long-Term Growth
              </h2>

              <p>

                Build sustainable course performance over time.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="section">

        <div className="container">

          <div className="premium-cta">

            <p className="section-tag">

              READY TO GROW?

            </p>

            <h2 className="heading-lg">

              Let's Scale Your Course Business

            </h2>

            <p>

              Work with Victorious Digital
              and transform your course visibility,
              rankings and enrollments.

            </p>

            <div className="hero-buttons">

              <a
                href="https://wa.me/2348136545616"
                target="_blank"
                className="btn-primary"
              >

                Contact On WhatsApp

              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61581763733878"
                target="_blank"
                className="btn-light"
              >

                Contact On Facebook

              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

