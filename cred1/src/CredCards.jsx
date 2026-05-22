import React from "react";
import "./CredCards.css";

const cards = [
  {
    id: 1,
    tag: "SCAN & PAY",
    title: "scan & pay\nany UPI QR",
    image:
      "",
    glow: "pink-glow",
  },
  {
    id: 2,
    tag: "UPI ON CREDIT",
    title: "UPI payments.\non credit.",
    image:
      "",
    glow: "purple-glow",
  },
  {
    id: 3,
    tag: "TAP TO PAY",
    title: "tap your\nphone.\npay on credit.",
    image:
      "",
    glow: "green-glow",
  },
];

export default function CredCards() {
  return (
    <div className="cards-section">
      <div className="cards-wrapper">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-content">
              <p className="card-tag">{card.tag}</p>

              <h1 className="card-title">{card.title}</h1>

              <button className="card-btn">
                KNOW MORE →
              </button>
            </div>

            <div className={`card-glow ${card.glow}`}>

                
            </div>

           

            {/* <img
              src={card.image}
              alt={card.title}
              className="card-image"
            /> */}

            
          </div>
        ))}
      </div>
    </div>
  );
}