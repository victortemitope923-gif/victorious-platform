import React from "react";

import { Link } from "react-router-dom";

export default function Services() {

  const services = [

    {

      title:
        "Udemy SEO",

      slug:
        "udemy-seo",

      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",

      description:
        "Boost your course rankings and visibility using strategic Udemy SEO optimization."

    },

    {

      title:
        "Course Marketing",

      slug:
        "course-marketing",

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

      description:
        "Promote your courses with targeted strategies that increase enrollments and conversions."

    },

    {

      title:
        "AEO Optimization",

      slug:
        "aeo-optimization",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

      description:
        "Optimize your course visibility for AI-driven search and answer engines."

    }

  ];

  return (

    <section
      className="section"
      id="services"
    >

      <div className="container">

        <p className="section-tag">
          OUR SERVICES
        </p>

        <h2 className="heading-lg">

          Premium Growth Services

        </h2>

        <div
          className="services-grid"
          style={{
            marginTop:"60px"
          }}
        >

          {services.map((service,index) => (

            <div
              key={index}
              className="card service-card"
            >

              <img
                src={service.image}
                alt={service.title}
              />

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <Link
                to={`/service/${service.slug}`}
                className="btn-primary"
              >

                Learn More

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

