import React from "react";
import "../Styles/EVComparison.css";

const EVComparison = () => {
  return (
    <div className="comparison-container">
      {/* Banner Section */}
      <div className="comparison-banner">
        <img
          src="https://i.ytimg.com/vi/Wjz8wu6ZffM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnYdFuyf_yGB5lLIsNYxIX_aP3NA" // replace with your banner image path
          alt="EV Comparison Banner"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h2>Compare EV Variants</h2>
          <p>Find the best match for your needs</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="title">Price</h3>

      {/* Comparison Table */}
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Variants (2)</th>
            <th>Activa e Standard</th>
            <th>Activa e Honda RoadSync Duo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ex-Showroom Price</td>
            <td>
              ₹ 1,17,076 <br />
              <span className="offers">Get Offers</span>
            </td>
            <td>
              ₹ 1,52,463 <br />
              <span className="offers">Get Offers</span>
            </td>
          </tr>
          <tr>
            <td>Riding Range and Top Speed</td>
            <td>102 km, 80 kmph</td>
            <td>102 km, 80 kmph</td>
          </tr>
          <tr>
            <td>Kerb Weight (kg)</td>
            <td>118</td>
            <td>119</td>
          </tr>
          <tr>
            <td>Mobile Phone Connectivity</td>
            <td>✗</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>GPS & Navigation</td>
            <td>✗</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Battery Status</td>
            <td>✗</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Live Charging Status</td>
            <td>✗</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>OTA Updates</td>
            <td>Not Available</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EVComparison;
