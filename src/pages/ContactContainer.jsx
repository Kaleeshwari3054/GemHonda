import React from "react";
import "../Styles/ContactContainer.css";

const ContactContainer = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="subtitle">
        We’re here to help! Reach out to us for inquiries, bookings, or support.
      </p>

      <div className="contact-content">
        {/* Left Side - Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Enter your phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message..." rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side - Info + Map */}
        <div className="contact-info">
          <h3>Honda Bike Showroom</h3>
          <p>📍 2/9 Yaathaval Street,Virugambakkam Chennai, Tamil Nadu, India</p>
          <p>📞 +91 909 432 0000 </p>
          <p>✉️ thegemhonda@gmail.com</p>
<div className="map">
  <img 
    src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg" 
    alt="Honda Showroom" 
    className="map-image"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
