import React from "react";
import "./TwoImages.css";

const TwoImages = () => {
  const cards = [
    { title: "1.25 Million High End High Fire-Risk Homes in CA" },
    { title: "3 Million High Fire-Risk Homes in 14 Western States" },
    { title: "$1.3 Trillion In Replacement Value" }
  ];

  return (
    <section className="twoimages">
      <div className="twoimages-container">
        {/* Images */}
        <img
          src={`${process.env.PUBLIC_URL}/images/statesFinal.png`}
          alt="Map"
          className="left-img"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/expand.png`}
          alt="Expanded"
          className="right-img"
        />

        {/* Cards */}
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{card.title}</h3>
              {card.text && <p className="card-text">{card.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoImages;
