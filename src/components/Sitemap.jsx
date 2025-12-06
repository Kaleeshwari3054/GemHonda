import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SiteMap = () => {
  return (
    <div className="sitemap-page">
      <div className="sitemap-container">
        <h1 className="sitemap-title">Home</h1>

        <div className="sitemap-grid">

          <div className="sitemap-section">
            <div className="sitemap-header">General Info</div>
            <Link to="/outlet" className="sitemap-link">Outlet</Link>
            <Link to="/gallery" className="sitemap-link">Gallery</Link>
            <Link to="/insurance" className="sitemap-link">Insurance</Link>
            <Link to="/about" className="sitemap-link">About Us</Link>
            <Link to="/bike-loan" className="sitemap-link">Bike Loan</Link>
            <Link to="/faq" className="sitemap-link">FAQ</Link>
            <Link to="/offers" className="sitemap-link">Offers</Link>
            <Link to="/testimonials" className="sitemap-link">Testimonials</Link>
            <Link to="/contact" className="sitemap-link">Contact Us</Link>
            <Link to="/terms" className="sitemap-link">Terms & Conditions</Link>
            <Link to="/book-service" className="sitemap-link">Book Service</Link>
            <Link to="/career" className="sitemap-link">Career</Link>
          </div>

          <div className="sitemap-section">
            <div className="sitemap-header">Home</div>
            <Link to="/" className="sitemap-link">Home Page</Link>
          </div>

          <div className="sitemap-section">
            <div className="sitemap-header">Others</div>
            <Link to="/privacy-policy" className="sitemap-link">Privacy Policy</Link>
            <Link to="/disclaimer" className="sitemap-link">Disclaimer</Link>
            <Link to="/sitemap" className="sitemap-link">Sitemap</Link>
          </div>

          <div className="sitemap-section">
            <div className="sitemap-header">Careers</div>
            <Link to="/careers" className="sitemap-link">Current Openings</Link>
            <Link to="/apply" className="sitemap-link">Apply Now</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SiteMap;
