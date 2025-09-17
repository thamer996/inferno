// Testimonials.js
import React from "react";
import "./Testimonials.css"; // Import the CSS file

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-grid">
        {/* Left Side - Testimonials */}
        <div className="testimonials-left">
          {/* Testimonial 1 */}
          <div className="testimonial-card testimonial-blue">
            <p>
              “We are thrilled with our shutters. Sun and security installed
              them. They later helped us upgrade to the power system. We now have
              power on two of the shutters and lift up on one. They are all
              working great. Highly recommend this company. They stand behind
              their product.”
            </p>
            <div className="testimonial-author">
              <div className="avatar red">O.G</div>
              <span>Southeast Portland, Portland, OR</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <p>
              “These guys are amazing! I highly recommend them. Thanks again for
              being so awesome!”
            </p>
            <div className="testimonial-author">
              <div className="avatar gray">B</div>
              <span>Bobby L</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <p>
              “Work was performed in a timely as well as very professional
              manner. I would recommend the shutters as well as the sun and
              security team, to everyone. Thanks sun and security!”
            </p>
            <div className="testimonial-author">
              <div className="avatar gray">N</div>
              <span>Name</span>
            </div>
          </div>
        </div>

        {/* Right Side - Title + Image */}
        <div className="testimonials-right">
          <h2 className="title">Customer Testimonials</h2>
          <div className="image-card small">
            <img
              src={`${process.env.PUBLIC_URL}/images/fighterss.png`}
              alt="Firefighters"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
