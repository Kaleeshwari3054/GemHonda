// src/components/EVColours.jsx
import React, { useState } from "react";
import "../Styles/EVColours.css";

const EVColours = () => {
  // Define all colours with name, swatch color, and image URL
  const colours = [
    {
      name: "Pearl Serenity Blue",
      hex: "#90E0EF",
      image: "https://imgd.aeplcdn.com/1056x594/n/0yv379b_1796369.jpg?q=80"
    },
    {
      name: "Black",
      hex: "#000000",
      image: "https://imgd.aeplcdn.com/1056x594/n/jgcv79b_1796373.jpg?q=80"
    },
    {
      name: "Blue",
      hex: "#4b55d0",
      image: "https://imgd.aeplcdn.com/1056x594/n/e8fv79b_1796377.jpg?q=80"
    },
    {
      name: "White",
      hex: "#ffffff",
      image: "https://imgd.aeplcdn.com/1056x594/n/lwev79b_1796375.jpg?q=80"
    },
    {
      name: "Grey",
      hex: "#7e8b99",
      image: "https://imgd.aeplcdn.com/1056x594/n/ztav79b_1796371.jpg?q=80"
    }
  ];

  const [selectedColour, setSelectedColour] = useState(colours[0]);

  return (
    <div className="ev-colours-container">
      
      {/* Scooter Image */}
      <div className="scooter-image">
        <img src={selectedColour.image} alt={selectedColour.name} />
      </div>

      {/* Colour swatches */}
      <div className="colour-palette">
        {colours.map((colour, index) => (
          <div
            key={index}
            className={`colour-swatch ${
              selectedColour.name === colour.name ? "active" : ""
            }`}
            style={{ backgroundColor: colour.hex }}
            onClick={() => setSelectedColour(colour)}
          ></div>
        ))}
      </div>

      {/* Selected colour name */}
      <p className="selected-colour">Colour: {selectedColour.name}</p>
    </div>
  );
};

export default EVColours;
