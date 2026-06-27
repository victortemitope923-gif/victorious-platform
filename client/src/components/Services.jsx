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
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",

      description:
        "Improve your course rankings with strategic keyword optimization, titles, subtitles and marketplace positioning.",
    },







    {
      title:
        "Course Promotion",

      icon:
        <FaBullhorn />,

      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",

      description:
        "Reach more students using modern traffic systems, promotion campaigns and scalable enrollment strategies.",
    },







    {
      title:
        "Growth Consulting",

      icon:
        <FaChartLine />,

      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",

      description:
        "We build long-term growth systems that help instructors increase visibility, sales and recurring student acquisition.",
    },








    {
      title:
        "Marketplace Strategy",

      icon:
        <FaRocket />,

      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",

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