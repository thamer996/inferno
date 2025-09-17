import React from "react";
import "./FourCards.css";

const FourCards = () => {
  const cards = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/callfire.png`,
      title: "CAL FIRE Home Hardening",
      text: "Installed to support ember-resistant best practices and defensible space planning"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/iconspace.jpg`,
      title: "PRC 4291 Defensible Space",
      text: "Guidance for creating and maintaining the first 0–100 feet around structures."
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/iconhome.png`,
      title: "Safer from Wildfires Home Hardening Credits",
      text: "Documentation package to support potential insurer discounts where available"
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/images/iconx.jpg`,
      title: "FAIR Plan Readiness (CA)",
      text: "Install and photo log aligned for broker submissions and eligibility reviews"
    }
  ];

  return (
    <section className="fourcards">
      {/* ✅ Section title + subtitle */}
      <div className="section-header">
        <h2 className="section-title">
          Wildfire Standards & Insurance Readiness
        </h2>
        <p className="section-subtitle">
          “Our products and installation practices are aligned with leading guidelines to help homeowners document risk-reduction steps for insurers.”
        </p>
      </div>

      {/* ✅ Cards grid */}
      <div className="fourcards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img
              src={card.image}
              alt={card.title}
              className={`card-image card-image-${card.id}`}
            />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourCards;
