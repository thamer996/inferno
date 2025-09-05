import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote-container">
        {/* Left side: image with form */}
        <div className="quote-left">
          <img src="/images/quote.jpg" alt="Quote" className="quote-image" />
          <form className="quote-form">
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Message" required />
            <button type="submit">Get in touch </button>
          </form>
        </div>

        {/* Right side: title, info, button */}
        <div className="quote-right">
          <h2 className="quote-title">Get a Free Quote</h2>
          <p className="quote-text">
            Fill the form and our team will contact you immediately to provide a personalized quote for your project. Fast, reliable, and free!
          </p>
          <button className="quote-btn">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
