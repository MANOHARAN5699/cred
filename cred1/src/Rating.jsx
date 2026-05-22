import React from "react";
import "./Rating.css";

export default function Rating() {
  const ratingData = [
    {
      id: 1,
      title: "APP STORE",
      rating: "4.8",
    },
    {
      id: 2,
      title: "PLAY STORE",
      rating: "4.8",
    },
  ];

  return (
    <div className="rating-section">
      {ratingData.map((item) => (
        <div className="rating-card" key={item.id}>
          
          {/* Stars */}
          <div className="stars">
            ★ ★ ★ ★ ★
          </div>

          {/* Rating */}
          <div className="rating-number">
            {item.rating}
            <span>/5</span>
          </div>

          {/* Store Name */}
          <p className="store-name">{item.title}</p>
        </div>
      ))}
    </div>
  );
}