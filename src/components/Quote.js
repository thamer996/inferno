import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Quote.css";

const Quote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const form = useRef(); // <-- Reference to the form

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Your reservation request has been submitted!");
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const handleProceed = () => {
    if (!selectedPayment) {
      alert("Please select a payment method first!");
      return;
    }
    alert(`You selected: ${selectedPayment}`);
    setIsModalOpen(false);
  };

  return (
    <section className="quote">
      <div className="quote-container">
        {/* Left side: Image with overlay form */}
        <div className="quote-left">
          <form ref={form} className="quote-form" onSubmit={handleSubmit}>
            <p className="quote-form-subtitle">Contact Us for more information</p>

            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
            <input type="text" name="user_zip" placeholder="Zip Code" required />
            <textarea name="message" placeholder="Message" rows="3" required></textarea>

            <button type="submit">Get in Touch with us!</button>
            <p className="quote-privacy">
              *We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>

        {/* Right side */}
        <div className="quote-right">
          <h2 className="quote-title">Reserve Your Inferno-Roll Shutters Today!</h2>
          <p className="quote-text">
            Protect your home before wildfire season hits. Secure your place in line with a{" "}
            <span className="highlight">$1,000 fully credited reservation fee.</span>
          </p>

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
                <p>Lock in your custom quote</p>
              </div>
              <div className="quote-info-card">
                <span className="icon">💵</span>
                <h4>Reserve with $1,000 </h4>
                <p>Credited toward your order or refunded if you cancel</p>
              </div>
              <div className="quote-info-card">
                <span className="icon">📝</span>
                <h4>50% Deposit</h4>
                <p>50% Deposit (1 month before production)</p>
              </div>
              <div className="quote-info-card">
                <span className="icon">🏁</span>
                <h4>Final 50% Payment</h4>
                <p>Balance due when shutters are ready (minus install costs)</p>
              </div>
              <div className="quote-info-card">
                <span className="icon">🔧</span>
                <h4>Professional Installation</h4>
                <p>Installed by a certified Inferno-Roll dealer or installer</p>
              </div>
            </div>
          </div>

          <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
            Reserve Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Select Payment Method</h2>

            <div className="payment-options">
              <div className="payment-option">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment"
                  value="Credit Card"
                  checked={selectedPayment === "Credit Card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label htmlFor="credit-card">Credit Card</label>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  id="debit-card"
                  name="payment"
                  value="Debit Card"
                  checked={selectedPayment === "Debit Card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label htmlFor="debit-card">Debit Card</label>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  id="apple-pay"
                  name="payment"
                  value="Apple Pay"
                  checked={selectedPayment === "Apple Pay"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label htmlFor="apple-pay">Apple Pay</label>
              </div>
            </div>

            <div className="modal-buttons">
              <button
                className="modal-btn cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="modal-btn send-btn" onClick={handleProceed}>
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Quote;
