import React, {
  useEffect,
  useState,
} from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ReviewForm from "./components/ReviewForm";


import {
  getBusinessProfile,
} from "./services/businessService";

import {
  getReviews,
} from "./services/reviewService";



function App() {

  const [business, setBusiness] =
    useState(null);

  const [reviews, setReviews] =
    useState([]);




  useEffect(() => {

    const fetchData = async () => {

      try {

        const businessData =
          await getBusinessProfile();

        setBusiness(
          businessData.business
        );



        const reviewData =
          await getReviews();

        setReviews(
          reviewData.reviews
        );

      } catch (error) {

        console.log(error);

      }

    };

    fetchData();

  }, []);







  return (

    <div>

      <Navbar />

      <Hero />

      <Services
        business={business}
      />

      <Reviews
        reviews={reviews} 
      />
      <ReviewForm />





      {/* CTA */}
      <section className="section">

        <div className="container">

          <div
            className="glass"
            style={{
              borderRadius: "40px",
              padding: "80px",
              textAlign: "center",
            }}
          >

            <h2
              className="heading-lg"
              style={{
                maxWidth: "800px",
                margin: "auto",
              }}
            >

              Ready To Scale
              Your Online Course Business?

            </h2>







            <p
              className="text-muted"
              style={{
                marginTop: "24px",
                fontSize: "18px",
                lineHeight: 1.8,
                maxWidth: "700px",
                marginInline: "auto",
              }}
            >

              Let’s build a structured growth strategy
              for your courses, visibility,
              rankings, and student acquisition.

            </p>







            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >

              <a
                href={business?.upwork}
                target="_blank"
                className="btn-primary"
              >

                Hire On Upwork

              </a>





              <a
                href={business?.facebook}
                target="_blank"
                className="btn-secondary"
              >

                Contact On Facebook

              </a>

            </div>

          </div>

        </div>

      </section>





      <Footer />

    </div>

  );

}

export default App;

