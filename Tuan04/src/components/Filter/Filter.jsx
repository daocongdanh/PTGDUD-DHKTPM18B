import React from "react";
import { Menu, Star } from "lucide-react";
import "./Filter.css";

const Filter = () => {
  const types = [
    "Pan-fried",
    "Stir-fried",
    "Grilled",
    "Roasted",
    "Sauteed",
    "Baked",
    "Steamed",
    "Stewed",
  ];
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <Menu size={20} />
        <span>FILTERS</span>
      </div>

      <div className="filter-section">
        <h4>Type</h4>
        <div className="filter-options">
          {types.map((type) => (
            <label key={type} className="filter-option">
              <input type="checkbox" />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Time</h4>
        <input type="range" min="0" max="100" />
        <input type="range" min="0" max="100" />
      </div>

      <div className="filter-section">
        <h4>Rating</h4>
        <div className="filter-options rate">
          {ratings.map((rating) => (
            <label key={rating} className="filter-option rate">
              <input type="checkbox" />
              {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} fill="gold" stroke="gold" />
              ))}
            </label>
          ))}
        </div>
      </div>

      <button className="apply-button">Apply</button>
    </div>
  );
};

export default Filter;
