import React from "react";
import "./TrustedPartners.css";

const partnerLogos = [
  "/images/pentagon.png",
  "/images/qmi.png",
  "/images/alutech.png",
  "/images/rollshield.png",
  "/images/somfy.png",
  "/images/caposa.png",
  "/images/heroal.png",
];

const TrustedPartners = () => {
  return (
    <section className="trusted-partners">
      <h2>Trusted Partners</h2>
      <div className="partner-logos">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt="Partner Logo" />
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
