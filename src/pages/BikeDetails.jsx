// src/pages/Products/BikeDetails.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/BikeDetails.css";

const BikeDetails = () => {
  const location = useLocation();
  const { bike } = location.state; // Get bike from navigation

  const [selectedImage, setSelectedImage] = useState(bike.image);

  return (
    <>
    <div className="bike-details-container">
      <h1>{bike.name}</h1>
      <img src={selectedImage} alt={bike.name} className="bike-main-image" />
<h1 className="bike-price">price: <span  className="bike-details"> {bike.price}</span></h1>
     
     <h1 className="bike-price">description: <span className="bike-details"> {bike.description}</span></h1>

      <div className="color-picker">
        <h3>Choose Color:</h3>
        {bike.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(color.image)}
            style={{
              background: color.name.toLowerCase(),
              width: "30px",
              height: "30px",
              margin: "5px",
              border: "2px solid #ccc",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          ></button>
        ))}
      </div>
      
    </div>
     <div className="price-list">
  <h3>Price Table</h3>
  <table>
    <thead>
      <tr>
        <th>Variant</th>
        <th>STD</th>
        <th>DLX</th>
        <th>H SMART</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ex-Showroom</td>
        <td>{bike.price}</td>
        <td>₹95,864</td>
        <td>₹98,865</td>
      </tr>
      <tr>
        <td>Insurance</td>
        <td>₹6,809</td>
        <td>₹6,930</td>
        <td>₹6,965</td>
      </tr>
      <tr>
        <td>Road Tax</td>
        <td>₹11,734</td>
        <td>₹12,786</td>
        <td>₹13,087</td>
      </tr>
      <tr className="highlight">
        <td>On Road</td>
        <td>₹1,03,887</td>
        <td>₹1,15,580</td>
        <td>₹1,18,917</td>
      </tr>
      <tr>
        <td>Accessories</td>
        <td>₹4,980</td>
        <td>₹4,980</td>
        <td>₹4,980</td>
      </tr>
      <tr>
        <td>Regt & Handling</td>
        <td>₹1,985</td>
        <td>₹1,985</td>
        <td>₹1,985</td>
      </tr>
     
    </tbody>
  </table>
</div>

    </>
  );
};

export default BikeDetails;
