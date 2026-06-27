import React,{
  useState,
} from "react";

import {
  createReview,
} from "../services/reviewService";



export default function ReviewForm() {

  const [formData,setFormData] =
    useState({
      name:"",
      rating:5,
      message:"",
      image:"",
      service:"",
    });




  const [loading,setLoading] =
    useState(false);





  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value,
    });

  };









  const handleSubmit =
  async(e)=>{

    e.preventDefault();

    try{

      setLoading(true);

      await createReview(
        formData
      );





      alert(
        "Review submitted successfully"
      );






      setFormData({
        name:"",
        rating:5,
        message:"",
        image:"",
        service:"",
      });

    }catch(error){

      console.log(error);

      alert(
        "Something went wrong"
      );

    }finally{

      setLoading(false);

    }

  };










  return(

    <section
      className="section"
      style={{
        background:"#ffffff",
      }}
    >

      <div className="container">




        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
            gap:"60px",
            alignItems:"center",
          }}
        >




          {/* LEFT */}
          <div>

            <p className="section-tag">

              SHARE EXPERIENCE

            </p>








            <h2
              className="heading-lg"
              style={{
                maxWidth:"580px",
              }}
            >

              Tell Others
              About Your
              Experience

            </h2>








            <p
              className="text-muted"
              style={{
                marginTop:"24px",
                lineHeight:1.9,
                fontSize:"18px",
                maxWidth:"560px",
              }}
            >

              Your feedback helps build trust
              and allows other instructors
              discover better growth strategies
              for their courses.

            </p>








            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="review"

              style={{
                marginTop:"40px",
                borderRadius:"30px",
                height:"420px",
                objectFit:"cover",
                boxShadow:
                "0 20px 60px rgba(15,23,42,.10)",
              }}
            />

          </div>









          {/* RIGHT */}
          <div>

            <div
              className="card"
              style={{
                padding:"42px",
              }}
            >

              <form
                onSubmit={handleSubmit}
              >




                {/* NAME */}
                <div
                  style={{
                    marginBottom:"22px",
                  }}
                >

                  <label
                    style={{
                      display:"block",
                      marginBottom:"10px",
                      fontWeight:600,
                    }}
                  >

                    Full Name

                  </label>








                  <input
                    type="text"
                    name="name"
                    placeholder="John Carter"
                    value={formData.name}
                    onChange={handleChange}
                    required

                    style={{
                      width:"100%",
                      padding:"18px",
                      borderRadius:"14px",
                      border:"1px solid #CBD5E1",
                      fontSize:"16px",
                    }}
                  />

                </div>









                {/* SERVICE */}
                <div
                  style={{
                    marginBottom:"22px",
                  }}
                >

                  <label
                    style={{
                      display:"block",
                      marginBottom:"10px",
                      fontWeight:600,
                    }}
                  >

                    Service Used

                  </label>








                  <input
                    type="text"
                    name="service"
                    placeholder="Udemy SEO"
                    value={formData.service}
                    onChange={handleChange}

                    style={{
                      width:"100%",
                      padding:"18px",
                      borderRadius:"14px",
                      border:"1px solid #CBD5E1",
                      fontSize:"16px",
                    }}
                  />

                </div>









                {/* IMAGE */}
                <div
                  style={{
                    marginBottom:"22px",
                  }}
                >

                  <label
                    style={{
                      display:"block",
                      marginBottom:"10px",
                      fontWeight:600,
                    }}
                  >

                    Profile Image URL

                  </label>








                  <input
                    type="text"
                    name="image"
                    placeholder="https://..."
                    value={formData.image}
                    onChange={handleChange}

                    style={{
                      width:"100%",
                      padding:"18px",
                      borderRadius:"14px",
                      border:"1px solid #CBD5E1",
                      fontSize:"16px",
                    }}
                  />

                </div>









                {/* RATING */}
                <div
                  style={{
                    marginBottom:"22px",
                  }}
                >

                  <label
                    style={{
                      display:"block",
                      marginBottom:"10px",
                      fontWeight:600,
                    }}
                  >

                    Rating

                  </label>








                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}

                    style={{
                      width:"100%",
                      padding:"18px",
                      borderRadius:"14px",
                      border:"1px solid #CBD5E1",
                      fontSize:"16px",
                    }}
                  >

                    <option value="5">
                      5 Stars
                    </option>

                    <option value="4">
                      4 Stars
                    </option>

                    <option value="3">
                      3 Stars
                    </option>

                    <option value="2">
                      2 Stars
                    </option>

                    <option value="1">
                      1 Star
                    </option>

                  </select>

                </div>









                {/* MESSAGE */}
                <div
                  style={{
                    marginBottom:"26px",
                  }}
                >

                  <label
                    style={{
                      display:"block",
                      marginBottom:"10px",
                      fontWeight:600,
                    }}
                  >

                    Your Review

                  </label>








                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Share your experience..."
                    value={formData.message}
                    onChange={handleChange}
                    required

                    style={{
                      width:"100%",
                      padding:"18px",
                      borderRadius:"14px",
                      border:"1px solid #CBD5E1",
                      fontSize:"16px",
                      resize:"none",
                    }}
                  />

                </div>









                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}

                  style={{
                    width:"100%",
                    height:"58px",
                    fontSize:"17px",
                  }}
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Review"}

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}