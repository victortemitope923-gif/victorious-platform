import React from "react";

import Reveal from "./Reveal";

import {
  FaChartLine,
  FaSearch,
  FaBullhorn,
  FaRocket,
} from "react-icons/fa";



export default function Services() {

  const services = [

    {
      title:
        "Udemy SEO Optimization",

      icon:
        <FaSearch />,

      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

      description:
        "Improve your course rankings with strategic keyword optimization, titles, subtitles and marketplace positioning.",
    },







    {
      title:
        "Course Promotion",

      icon:
        <FaBullhorn />,

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

      description:
        "Reach more students using modern traffic systems, promotion campaigns and scalable enrollment strategies.",
    },







    {
      title:
        "Growth Consulting",

      icon:
        <FaChartLine />,

      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",

      description:
        "We build long-term growth systems that help instructors increase visibility, sales and recurring student acquisition.",
    },








    {
      title:
        "Marketplace Strategy",

      icon:
        <FaRocket />,

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

      description:
        "Advanced optimization strategies designed specifically for Udemy algorithm performance and marketplace success.",
    },

  ];










  return (

    <section className="services-section">

      <div className="container">




        {/* TOP */}
        <div className="section-heading">

          <p className="section-tag">

            OUR SERVICES

          </p>






          <h2 className="section-title">

            Everything Needed
            To Scale Your
            Udemy Business

          </h2>






          <p className="section-text">

            Modern growth systems,
            real optimization strategies
            and long-term scaling support
            for serious instructors.

          </p>

        </div>









        {/* GRID */}
        <div className="services-grid">

          {services.map((service, index) => (

            <Reveal key={index}>

              <div className="service-card">




                {/* IMAGE */}
                <div className="service-image-wrapper">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />

                </div>








                {/* CONTENT */}
                <div className="service-content">

                  <div className="service-icon">

                    {service.icon}

                  </div>








                  <h3 className="service-title">

                    {service.title}

                  </h3>








                  <p className="service-description">

                    {service.description}

                  </p>








                  <button className="service-btn">

                    Learn More →

                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}