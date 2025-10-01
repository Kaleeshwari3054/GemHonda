import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/BikeDetails.css";
import ScooterViewer360 from "../components/ScooterViewer360";

// 🛵 ACTIVA 125 IMAGES
import Activa125_1 from "./scooters/activa125-Mat Axis Gray Metallic.png";
import Activa125_2 from "./scooters/activa125-Pearl Deep Ground Gray.png";
import Activa125_3 from "./scooters/activa125-Pearl Igneous Black.png";
import Activa125_4 from "./scooters/activa125-Pearl Precious White.png";
import Activa125_5 from "./scooters/activa125-Pearl Siren Blue.png";
import Activa125_6 from "./scooters/activa125-Rebel Red Metallic.png";

// 🛵 ACTIVA 110 IMAGES
import Activa110_1 from "./scooters/activa110-Decent Blue Metallic.png";
import Activa110_2 from "./scooters/Activa110-Mat Axis Gray Metallic.png";
import Activa110_3 from "./scooters/activa110-Pearl Igneous Black.png";
import Activa110_4 from "./scooters/activa110-Pearl Precious White.png";
import Activa110_5 from "./scooters/activa110-Pearl Siren Blue.png";
import Activa110_6 from "./scooters/activa110-Rebel Red Metallic.png";

// 🛵 DIO 125 IMAGES
import Dio125_1 from "./scooters/dio125-Imperial Red.png";
import Dio125_2 from "./scooters/dio125-Mat Marvel Blue Metallic.png";
import Dio125_3 from "./scooters/dio125-Pearl Deep Ground Gray (Emblem).png";
import Dio125_4 from "./scooters/dio125-Pearl Deep Ground Gray (Stripe).png";
import Dio125_5 from "./scooters/dio125-Pearl Igneous Black.png";
import Dio125_6 from "./scooters/dio125-Pearl Sports Yellow.png";

// 🛵 DIO 110 IMAGES
import Dio110_1 from "./scooters/dio110-Imperial Red Metallic​.png";
import Dio110_2 from "./scooters/dio110-Mat Axis Gray Metallic.png";
import Dio110_3 from "./scooters/dio110-Mat Marvel Blue.png";
import Dio110_4 from "./scooters/dio110-Pearl Igneous Black + Pearl Deep Ground Gray.png";
import Dio110_5 from "./scooters/dio110-Pearl Igneous Black.png";

const ScooterOverview = () => {
  const location = useLocation();
  const { scooter } = location.state || {};

  if (!scooter) {
    return <p>No scooter selected. Please go back and choose one.</p>;
  }

  // 🎨 Set colors based on selected scooter
  let colors = [];

  if (scooter.name === "Activa 125") {
    colors = [
      { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Activa125_1, is360: true },
      { name: "Pearl Deep Ground Gray", code: "#444444", image: Activa125_2 },
      { name: "Pearl Igneous Black", code: "#000000", image: Activa125_3 },
      { name: "Pearl Precious White", code: "#ffffff", image: Activa125_4 },
      { name: "Pearl Siren Blue", code: "#1e3a8a", image: Activa125_5 },
      { name: "Rebel Red Metallic", code: "#8b0000", image: Activa125_6 },
    ];
  } 
  else if (scooter.name === "Activa 110") {
    colors = [
      { name: "Decent Blue Metallic", code: "#1a2b8a", image: Activa110_1, is360: true },
      { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Activa110_2 },
      { name: "Pearl Igneous Black", code: "#000000", image: Activa110_3 },
      { name: "Pearl Precious White", code: "#ffffff", image: Activa110_4 },
      { name: "Pearl Siren Blue", code: "#1e40af", image: Activa110_5 },
      { name: "Rebel Red Metallic", code: "#8b0000", image: Activa110_6 },
    ];
  } else if (scooter.name === "Dio 125") {
    colors = [
      { name: "Imperial Red", code: "#ff1b1b", image: Dio125_1, is360: true },
      { name: "Mat Marvel Blue Metallic", code: "#1e3a8a", image: Dio125_2 },
      { name: "Pearl Deep Ground Gray (Emblem)", code: "#444444", image: Dio125_3 },
      { name: "Pearl Deep Ground Gray (Stripe)", code: "#555555", image: Dio125_4 },
      { name: "Pearl Igneous Black", code: "#000000", image: Dio125_5 },
      { name: "Pearl Sports Yellow", code: "#facc15", image: Dio125_6 },
    ];
  } 
  else if (scooter.name === "Dio 110") {
    colors = [
      { name: "Imperial Red Metallic", code: "#ff1b1b", image: Dio110_1, is360: true },
      { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Dio110_2 },
      { name: "Mat Marvel Blue", code: "#1e3a8a", image: Dio110_3 },
      { name: "Pearl Igneous Black + Pearl Deep Ground Gray", code: "#333333", image: Dio110_4 },
      { name: "Pearl Igneous Black", code: "#000000", image: Dio110_5 },
    ];
  }

  // 🖼 Default selected color
  const [selectedImage, setSelectedImage] = useState(colors[0].image);
  const [selectedColorName, setSelectedColorName] = useState(colors[0].name);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedImage(color.image);
    setSelectedColorName(color.name);
    setSelectedColor(color);
  };

  return (
    <div className="bike-details-container">
      <h1>{scooter.name}</h1>

      {/* 🏍️ Main Image with 360° View */}
      <div className="bike-image-container">
        {selectedColor.is360 ? (
          <ScooterViewer360 
            images={[selectedColor.image]}
            selectedColor={selectedColor}
            className="bike-main-image"
          />
        ) : (
          <img 
            src={selectedImage} 
            alt={scooter.name} 
            className="bike-main-image"
          />
        )}
      </div>

      {/* 💰 Price */}
      <h2>Price: <span>{scooter.price}</span></h2>

      {/* 📝 Description */}
      <p className="bike-description">{scooter.description}</p>

      {/* 🎨 Color Picker */}
      <div className="color-picker">
        <h3>Choose Color:</h3>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorChange(color)}
              style={{
                backgroundColor: color.code,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: selectedImage === color.image ? "3px solid #d50000" : "2px solid #ccc",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease"
              }}
              title={color.name}
            >
              {color.is360 && (
                <div style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#d50000",
                  color: "white",
                  borderRadius: "50%",
                  width: "16px",
                  height: "16px",
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  360°
                </div>
              )}
            </div>
          ))}
        </div>
        <p style={{ marginTop: "10px" }}>
          Selected Color: <strong>{selectedColorName}</strong>
          {selectedColor.is360 && <span style={{ color: "#d50000", marginLeft: "10px" }}>✨ 360° View Available</span>}
        </p>
      </div>
    </div>
  );
};

export default ScooterOverview;