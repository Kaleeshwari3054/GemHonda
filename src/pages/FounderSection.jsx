import React from 'react';
import '../Styles/FounderSection.css';

const FounderSection = () => {
  return (
    <section className="founder-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Leadership Team</h2>
          <p>Meet the people who drive our success</p>
        </div>
        
      <div className="leaders-container">
          {/* Manager Section */}
          <div className="col-lg-6 col-md-6">
            <div className="leader-card manager-card">
              <div className="leader-image">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                  alt="General Manager"
                  className="img-fluid"
                />
                <div className="leader-overlay">
                  <div className="leader-badge">
                    <i className="fas fa-crown"></i>
                    <span>Leadership</span>
                  </div>
                </div>
              </div>
              <div className="leader-content">
                <h3>Mr. Rajesh Gupta</h3>
                <h4>General Manager</h4>
                <p>
                  With over 15 years of experience in the automotive industry, 
                  Mr. Gupta leads our team with vision and dedication. His commitment 
                  to customer satisfaction and operational excellence has made Gem Honda 
                  a trusted name in the region.
                </p>
                <div className="leader-stats">
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">5000+</span>
                    <span className="stat-label">Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Employee of the Month Section */}
          <div className="col-lg-6 col-md-6">
            <div className="leader-card employee-card">
              <div className="leader-image">
                <img 
                  src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                  alt="Employee of the Month"
                  className="img-fluid"
                />
                <div className="leader-overlay">
                  <div className="leader-badge employee-badge">
                    <i className="fas fa-star"></i>
                    <span>Star Performer</span>
                  </div>
                </div>
              </div>
              <div className="leader-content">
                <h3>Ms. Priya Sharma</h3>
                <h4>Employee of the Month</h4>
                <p>
                  Ms. Sharma has consistently delivered exceptional customer service 
                  and achieved outstanding sales performance. Her dedication to helping 
                  customers find their perfect Honda vehicle makes her our star performer 
                  this month.
                </p>
                <div className="leader-stats">
                  <div className="stat">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Customer Satisfaction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Sales This Month</span>
                  </div>
                </div>
                <div className="achievement-badge">
                  <i className="fas fa-trophy"></i>
                  <span>December 2024 Winner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="company-values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Trust</h4>
              <p>Building lasting relationships through honesty and reliability</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h4>Excellence</h4>
              <p>Delivering superior service and quality in everything we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Customer First</h4>
              <p>Putting our customers' needs at the heart of our business</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <p>Embracing new technologies and continuous improvement</p>
            </div>
          </div>
        </div>

        {/* Company Location & Contact */}
        <div className="company-location">
          <h3>Visit Our Showroom</h3>
          <div className="location-content">
            <div className="location-info">
              <div className="company-logo">
                <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1" alt="Gem Honda Logo" />
              </div>
              <div className="contact-details">
                <h4>Gem Honda</h4>
                <p><i className="fas fa-map-marker-alt"></i> 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu 600092</p>
                <p><i className="fas fa-phone"></i> +91 909 432 0000</p>
                <p><i className="fas fa-envelope"></i> thegemhonda@gmail.com</p>
                <p><i className="fas fa-clock"></i> Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267!2d80.2084!3d13.0358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267!2sVirugambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gem Honda Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;