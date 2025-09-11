import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote-container">
        {/* Left side: Image with overlay form */}
        <div className="quote-left">
          <img src="/images/quote.jpg" alt="Quote" className="quote-image" />
          <form className="quote-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Zip Code" required />
            <textarea placeholder="Message" rows="3" required></textarea>
            <button type="submit">Get in Touch with us!</button>
            <p className="quote-privacy">*We respect your privacy. No spam, ever.</p>
          </form>
        </div>

        {/* Right side: Title, Info, Button */}
        <div className="quote-right">
          <h2 className="quote-title">
            Reserve Your Inferno-Roll Shutters Today!
          </h2>
          <p className="quote-text">
           Protect your home before wildfire season hits. Secure your place in line with a 

            <span className="highlight"> $1,000 fully credited reservation fee.</span>
          </p>

          {/* Big White Card containing all info cards */}
          <div className="quote-info-wrapper">
           <div className="quote-info-grid">
  <div className="quote-info-card">
    <span className="icon">📏</span>
    <h4>Get Your Free Estimate</h4>
    <p>Share rough measurement or schedule a site evaluator</p>
  </div>
  <div className="quote-info-card">
    <span className="icon">💲</span>
    <h4>Agree on preliminary Pricing</h4>
    <p> Lock in your custom quote</p>
  </div>
  <div className="quote-info-card">
    <span className="icon">💵</span>
    <h4>Reserve with $1,000 </h4>
    <p>Credited toward your order or refundedif you cancel</p>
  </div>
  <div className="quote-info-card">
    <span className="icon">📝</span>
    <h4>50% Deposit </h4>
    <p>50% Deposit(1 month before production)</p>
  </div>
  <div className="quote-info-card">
    <span className="icon">🏁</span>
    <h4>Final 50% Payment</h4>
    <p>Balance due when shutters are ready (minus install costs)</p>
  </div>
  <div className="quote-info-card">
    <span className="icon">🔧</span>
    <h4>Professional Installation</h4>
    <p>Installed by a certified Inferno-Roll dealeror installer</p>
  </div>
</div>

          </div>

          {/* Button */}
          <button className="quote-btn">Reserve Now</button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
