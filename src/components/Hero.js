import React, { useState, useEffect } from "react";
import "./Hero.css";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/hero image.jpg`,
    `${process.env.PUBLIC_URL}/images/hero image2.jpg`,
    `${process.env.PUBLIC_URL}/images/hero image3.jpg`
  ];

  const [current, setCurrent] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    emailjs.init("xcEXf9FxY5Dz9-acw"); // Your public key
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <img
          key={current}
          src={images[current]}
          alt={`Hero ${current + 1}`}
          className="hero-image active"
        />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Home Defense Meets Wildfire Science.</h1>
          <p>
            Custom-installed fire, storm, and security shutters, engineered for safety,
            savings, and lasting value.
          </p>
<div
  style={{
    position: "relative", // Hero section container
    height: "50vh",      // Full hero height
    width: "100%",
    background: "url('/path-to-hero.jpg') no-repeat center/cover",
  }}
>
  {/* Hero content here */}

  <div
    title="Call us now!"
    style={{
      position: "absolute", // stays in same spot inside hero
      bottom: "15vh",
      right: "5vw",
      fontSize: "3vw",
      fontWeight: 200,
      color: "#ffffff",
      textDecoration: "none",
      letterSpacing: "0.3vw",
      background: "rgba(0, 0, 0, 0.4)",
      padding: "1vw 1.5vw",
      borderRadius: "2vw",
      border: "0.3vw solid rgba(255, 255, 255, 0.7)",
      textShadow: "0.4vw 0.4vw 2vw rgba(0, 0, 0, 0.9)",
      backdropFilter: "blur(6px)",
      boxShadow: "0 0 4vw rgba(255, 255, 255, 0.2)",
      zIndex: 10,
      transition: "all 0.3s ease-in-out",
      cursor: "default",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
      e.currentTarget.style.borderColor = "white";
      e.currentTarget.style.boxShadow = "0 0 6vw rgba(255, 255, 255, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)";
      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.7)";
      e.currentTarget.style.boxShadow = "0 0 4vw rgba(255, 255, 255, 0.2)";
    }}
  >
    <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>Call us now</span>
    <span style={{ fontSize: "1em" }}>📞 (888) 999-8809</span>
  </div>
</div>






        </div>
      </div>

      <div className="hero-buttons-top">
        <button className="btn-primary" onClick={() => setActiveModal("quote")}>
          Get a Free Quote
        </button>
        <button className="btn-secondary" onClick={() => setActiveModal("investor")}>
          Investor Info
        </button>
      </div>

      {activeModal === "quote" && <QuoteModal onClose={() => setActiveModal(null)} />}
      {activeModal === "investor" && <InvestorModal onClose={() => setActiveModal(null)} />}
    </section>
  );
};

/* ==============================
   Quote Modal Component
   ============================== */
const QuoteModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(e.target);
    formData.set("phone", formData.get("phone")?.toString().replace(/\s/g, ""));
    formData.set("time", new Date().toLocaleString());

    const serviceID = "service_f6wd06o";
    const templateID = "template_lrnd4jt"; // Replace with your Quote template ID

    emailjs.sendForm(serviceID, templateID, e.target)
      .then(
        () => {
          setStatusMessage("✅ Quote request sent!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("❌ Failed to send quote. Check template & service ID.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Request a Free Quote</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Your message" required />
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="modal-buttons">
            <button type="submit" className="modal-btn send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            <button type="button" className="modal-btn cancel-btn" onClick={onClose} disabled={loading}>
              Cancel
            </button>
          </div>

          {statusMessage && (
            <p className={statusMessage.startsWith("✅") ? "success" : "error"}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

/* ==============================
   Investor Modal Component
   ============================== */
const InvestorModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(e.target);
    formData.set("phone", formData.get("phone")?.toString().replace(/\s/g, ""));
    formData.set("time", new Date().toLocaleString());

    const serviceID = "service_f6wd06o";
    const templateID = "template_atcbvng"; // Replace with your Investor template ID

    emailjs.sendForm(serviceID, templateID, e.target)
      .then(
        () => {
          setStatusMessage("✅ Investor info sent!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("❌ Failed to send investor info. Check template & service ID.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Investor Info</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Your message" required />
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="modal-buttons">
            <button type="submit" className="modal-btn send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            <button type="button" className="modal-btn cancel-btn" onClick={onClose} disabled={loading}>
              Cancel
            </button>
          </div>

          {statusMessage && (
            <p className={statusMessage.startsWith("✅") ? "success" : "error"}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Hero;
