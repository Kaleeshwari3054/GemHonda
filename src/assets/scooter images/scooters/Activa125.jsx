import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/ScooterDetails.css";

// Import scooter images
import Scooter1 from "../../assets/Activa125/Activa125-1.png";
import Scooter2 from "../../assets/Activa125/Activa125-2.jpg";
import Scooter3 from "../../assets/Activa125/Activa125-3.jpg";
import Scooter4 from "../../assets/Activa125/Activa125-4.webp";
import Scooter5 from "../../assets/Activa125/Activa125-5.jpg";

const Activa125 = () => {
  // Color variants for Activa 125
  const colours = [
    { name: "Majestic Brown Metallic", hex: "rgb(119, 33, 42)", image: Scooter1 },
    { name: "Pearl Amazing White", hex: "#6B6B6B", image: Scooter2 },
    { name: "Strontium Silver Metallic", hex: "#000000", image: Scooter3 },
    { name: "Deep Blue Metallic", hex: "#1B4371", image: Scooter4 },
    { name: "Matte Axis Grey", hex: "#C0C0C0", image: Scooter5 },
  ];

  const [selectedColour, setSelectedColour] = useState(colours[0]);
  const [activeTab, setActiveTab] = useState("overview");

  // Specifications data
  const specifications = {
    engine: {
      displacement: "124.9 cc",
      maxPower: "8.29 PS @ 6500 rpm",
      maxTorque: "10.54 Nm @ 5000 rpm",
      fuelSystem: "PGM-FI",
      ignition: "DC-CDI",
      transmission: "V-Matic (Automatic)"
    },
    dimensions: {
      length: "1833 mm",
      width: "708 mm",
      height: "1156 mm",
      wheelbase: "1238 mm",
      groundClearance: "153 mm",
      seatHeight: "780 mm",
      kerbWeight: "118 kg"
    },
    performance: {
      fuelTank: "5.3 litres",
      mileage: "60 kmpl (approx)",
      topSpeed: "85 kmph",
      brakes: "Drum (Front & Rear)",
      tyres: "90/100-10 (Front & Rear)"
    }
  };

  const features = [
    "LED Headlamp with Position Lamp",
    "Digital Analog Meter",
    "Mobile Charging Socket",
    "External Fuel Lid",
    "Metal Body",
    "Combi Brake System (CBS)",
    "Side Stand Indicator",
    "Service Due Indicator"
  ];

  return (
    <div className="scooter-details-container">
      {/* Hero Section */}
      {/* <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Honda Activa 125</h1>
                <p className="hero-subtitle">India's Most Trusted Scooter</p>
                <div className="price-section">
                  <span className="price">₹ 94,422</span>
                  <span className="price-note">Ex-showroom Price</span>
                </div>
                <div className="hero-buttons">
                  <Link to="/contact-container" className="btn btn-primary btn-lg">
                    Book Test Ride
                  </Link>
                  <button className="btn btn-outline-primary btn-lg">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src={selectedColour.image} alt="Honda Activa 125" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Navigation Tabs */}
      <div className="nav-tabs-section">
        <div className="container">
          <ul className="nav nav-tabs custom-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'colors' ? 'active' : ''}`}
                onClick={() => setActiveTab('colors')}
              >
                Colors
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'price' ? 'active' : ''}`}
                onClick={() => setActiveTab('price')}
              >
                Price
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content-section">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-pane active">
              <div className="row">
                <div className="col-lg-8">
                  <div className="overview-content">
                    <h2>Honda Activa 125 - The Perfect Urban Companion</h2>
                    <p className="lead">
                      The Honda Activa 125 continues to be India's most trusted scooter, combining 
                      reliability, fuel efficiency, and modern features in one perfect package.
                    </p>
                    <p>
                      With its refined 125cc engine, the Activa 125 delivers smooth performance 
                      and excellent fuel economy. The scooter features a spacious under-seat storage, 
                      comfortable seating, and Honda's proven build quality that has made it a 
                      household name across India.
                    </p>
                    <div className="key-highlights">
                      <h4>Key Highlights</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="highlight-list">
                            <li>124.9cc HET Engine</li>
                            <li>60 kmpl Mileage</li>
                            <li>LED Headlamp</li>
                            <li>Digital-Analog Meter</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="highlight-list">
                            <li>18L Under Seat Storage</li>
                            <li>Mobile Charging Socket</li>
                            <li>Combi Brake System</li>
                            <li>Metal Body</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="quick-specs">
                    <h4>Quick Specifications</h4>
                    <div className="spec-item">
                      <span className="spec-label">Engine:</span>
                      <span className="spec-value">124.9cc</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Power:</span>
                      <span className="spec-value">8.29 PS</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Mileage:</span>
                      <span className="spec-value">60 kmpl</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Weight:</span>
                      <span className="spec-value">118 kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'specifications' && (
            <div className="tab-pane active">
              <div className="specifications-grid">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="spec-category">
                      <h4>Engine Specifications</h4>
                      {Object.entries(specifications.engine).map(([key, value]) => (
                        <div key={key} className="spec-row">
                          <span className="spec-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="spec-category">
                      <h4>Dimensions</h4>
                      {Object.entries(specifications.dimensions).map(([key, value]) => (
                        <div key={key} className="spec-row">
                          <span className="spec-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="spec-category">
                      <h4>Performance</h4>
                      {Object.entries(specifications.performance).map(([key, value]) => (
                        <div key={key} className="spec-row">
                          <span className="spec-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div className="tab-pane active">
              <div className="colors-section">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="color-image">
                      <img src={selectedColour.image} alt={selectedColour.name} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="color-selector">
                      <h4>Available Colors</h4>
                      <div className="color-palette">
                        {colours.map((colour, index) => (
                          <div
                            key={index}
                            className={`color-swatch ${selectedColour.name === colour.name ? 'active' : ''}`}
                            style={{ backgroundColor: colour.hex }}
                            onClick={() => setSelectedColour(colour)}
                            title={colour.name}
                          />
                        ))}
                      </div>
                      <p className="selected-color-name">{selectedColour.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="tab-pane active">
              <div className="features-section">
                <h3>Key Features</h3>
                <div className="row">
                  {features.map((feature, index) => (
                    <div key={index} className="col-lg-6 col-md-6 mb-3">
                      <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Price Tab */}
          {activeTab === 'price' && (
            <div className="tab-pane active">
              <div className="price-section">
                <h3>Honda Activa 125 Price Details</h3>
                <div className="price-table-wrapper">
                  <table className="table table-striped price-table">
                    <thead>
                      <tr>
                        <th>Variant</th>
                        <th>STD</th>
                        <th>DLX</th>
                        <th>H-SMART</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ex-Showroom</td>
                        <td>₹94,422</td>
                        <td>₹98,864</td>
                        <td>₹1,02,865</td>
                      </tr>
                      <tr>
                        <td>Insurance</td>
                        <td>₹6,809</td>
                        <td>₹6,930</td>
                        <td>₹6,965</td>
                      </tr>
                      <tr>
                        <td>Road Tax</td>
                        <td>₹9,442</td>
                        <td>₹9,886</td>
                        <td>₹10,287</td>
                      </tr>
                      <tr className="highlight-row">
                        <td><strong>On Road Price</strong></td>
                        <td><strong>₹1,10,673</strong></td>
                        <td><strong>₹1,15,680</strong></td>
                        <td><strong>₹1,20,117</strong></td>
                      </tr>
                      <tr>
                        <td>Accessories</td>
                        <td>₹4,980</td>
                        <td>₹4,980</td>
                        <td>₹4,980</td>
                      </tr>
                      <tr>
                        <td>Registration & Handling</td>
                        <td>₹1,985</td>
                        <td>₹1,985</td>
                        <td>₹1,985</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="price-note">
                    <small>*Prices may vary by location. Contact your nearest dealer for exact pricing.</small>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Ready to Experience Honda Activa 125?</h3>
              <p>Book a test ride today and feel the difference</p>
              <div className="cta-buttons">
                <Link to="/contact-container" className="btn btn-primary btn-lg me-3">
                  Book Test Ride
                </Link>
                <Link to="/scooter-page" className="btn btn-outline-primary btn-lg">
                  View All Scooters
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activa125;