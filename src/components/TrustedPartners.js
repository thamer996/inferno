import React from "react";
import "./TrustedPartners.css";

const partnerLogos = [
  "/images/1.png",
   "/images/2.png",
  "/images/3.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
];

const TrustedPartners = () => {
  return (
   <div className="trusted-partners">
  <h2>Trusted Partners</h2>
  <div className="logos-banner">
    <img src="/images/1.png" alt="Partner 1" className="logo logo1" />
    <img src="/images/2.png" alt="Partner 2" className="logo logo2" />
    <img src="/images/3.png" alt="Partner 3" className="logo logo3" />
    <img src="/images/5.png" alt="Partner 5" className="logo logo5" />
    <img src="/images/6.png" alt="Partner 6" className="logo logo6" />
    <img src="/images/7.png" alt="Partner 7" className="logo logo7" />
    <img src="/images/8.png" alt="Partner 8" className="logo logo8" />
    <img src="/images/9.png" alt="Partner 9" className="logo logo9" />
  </div>
</div>


  );
};

export default TrustedPartners;
