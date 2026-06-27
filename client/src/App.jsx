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
import LeadForm from "./components/LeadForm";

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





      {/* CTA SECTION */}
<section
  className="section"
  style={{
    background:"#F8FAFC",
  }}
>

  <div className="container">

    <div
      style={{
        position:"relative",
        overflow:"hidden",

        background:
        "linear-gradient(135deg,#052e16,#14532d)",

        borderRadius:"40px",

        padding:"90px 70px",

        color:"white",
      }}
    >




      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
        alt="team"

        style={{
          position:"absolute",
          inset:0,
          width:"100%",
          height:"100%",
          objectFit:"cover",
          opacity:0.12,
        }}
      />








      {/* CONTENT */}
      <div
        style={{
          position:"relative",
          zIndex:2,
          maxWidth:"820px",
        }}
      >

        <p
          style={{
            color:"#86EFAC",
            fontWeight:700,
            letterSpacing:"1px",
            marginBottom:"22px",
          }}
        >

          READY TO GROW?

        </p>








        <h2
          className="heading-lg"
          style={{
            maxWidth:"760px",
          }}
        >

          Let’s Scale
          Your Udemy
          Course Business

        </h2>








        <p
          style={{
            marginTop:"28px",
            color:"#DCFCE7",
            fontSize:"19px",
            lineHeight:1.9,
            maxWidth:"700px",
          }}
        >

          Build a stronger course brand,
          improve visibility,
          increase enrollments
          and create long-term marketplace growth
          using proven optimization strategies.

        </p>









        <div
        style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "40px",
        flexWrap: "wrap",
        alignItems: "center",
       }}
       >

       <a
          href={business?.upwork}
          target="_blank"
          className="btn-light">
         Hire On Upwork
       </a>

       <a
         href="https://wa.me/2348136545616"
          target="_blank"
          className="btn-primary">
          Chat On WhatsApp
       </a>

       </div>

      </div>

    </div>

      </div>

     </section>




      <LeadForm />
      <Footer />

    </div>

  );

}

export default App;

