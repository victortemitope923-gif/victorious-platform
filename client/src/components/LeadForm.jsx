import React, {
  useState,
} from "react";

export default function LeadForm() {

  const [formData, setFormData] =
    useState({

      name:"",
      email:"",
      whatsapp:"",
      courseLink:"",
      marketplace:"",
      revenue:"",
      message:"",

    });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);





  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]:
      e.target.value,

    });

  };






  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    setLoading(true);

    try{

      const response =
        await fetch(
          "https://victorious-platform-api.onrender.com/api/leads",
          {

            method:"POST",

            headers:{
              "Content-Type":
              "application/json",
            },

            body:JSON.stringify(
              formData
            ),

          }
        );

      const data =
        await response.json();

      if(data.success){

        setSuccess(true);

        setFormData({

          name:"",
          email:"",
          whatsapp:"",
          courseLink:"",
          marketplace:"",
          revenue:"",
          message:"",

        });

      }

    }catch(error){

      console.log(error);

    }

    setLoading(false);

  };







  return (

    <section
      className="section"
      id="lead-form"
    >

      <div className="container">

        <div className="lead-form-wrapper">

          <div className="lead-form-left">

            <p className="section-tag">
              GET MORE ENROLLMENTS
            </p>

            <h2 className="heading-lg">

              Let’s Grow Your
              Udemy Business

            </h2>

            <p
              className="text-muted"
              style={{
                marginTop:"20px",
                lineHeight:1.8,
              }}
            >

              Submit your course details
              and we’ll help you improve
              visibility, SEO rankings,
              conversions and long-term
              student growth.

            </p>





            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Team"
              className="lead-image"
            />

          </div>









          <form
            className="lead-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />



            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />



            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />



            <input
              type="text"
              name="courseLink"
              placeholder="Course Link"
              value={formData.courseLink}
              onChange={handleChange}
            />



            <input
              type="text"
              name="marketplace"
              placeholder="Marketplace (Udemy, Skillshare...)"
              value={formData.marketplace}
              onChange={handleChange}
            />



            <input
              type="text"
              name="revenue"
              placeholder="Monthly Revenue"
              value={formData.revenue}
              onChange={handleChange}
            />



            <textarea
              name="message"
              placeholder="Tell us your goals..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />





            <button
              type="submit"
              className="btn-primary"
              style={{
                width:"100%",
              }}
            >

              {loading
                ? "Submitting..."
                : "Submit Application"}

            </button>





            {success && (

              <p
                style={{
                  marginTop:"20px",
                  color:"#1DBF73",
                  fontWeight:600,
                }}
              >

                Application submitted successfully.

              </p>

            )}

          </form>

        </div>

      </div>

    </section>

  );

}