import React from "react";
import "../Styles/FounderSection.css";
import Logo from "../assets/Logo.jpg";
const FounderSection = () => {
  return (
    <section className="founder-section">
      <div className="container">
        {/* <div className="section-header">
          <h2>Our Leadership Team</h2>
          <p>Meet the people who drive our success</p>
        </div> */}

        {/* <div className="leaders-container">
         
          <div className="col-lg-6 col-md-6">
            <div className="leader-card manager-card">
              <div className="leader-image">
                <img
                  src="https://toppng.com/uploads/preview/male-user-filled-icon-man-icon-115533970576b3erfsss1.png"
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
                  Mr. Gupta leads our team with vision and dedication. His
                  commitment to customer satisfaction and operational excellence
                  has made Gem Honda a trusted name in the region.
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

          <div className="col-lg-6 col-md-6">
            <div className="leader-card employee-card">
              <div className="leader-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XV7bulO2QPx4IdxpkPMdVnHdW7zlx5qdlA&s"
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
                  Ms. Sharma has consistently delivered exceptional customer
                  service and achieved outstanding sales performance. Her
                  dedication to helping customers find their perfect Honda
                  vehicle makes her our star performer this month.
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
        </div> */}

        {/* Company Values */}
        <div className="company-values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Trust</h4>
              <p>
                Building lasting relationships through honesty and reliability
              </p>
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
                <img src={Logo} alt="Gem Honda Logo" />
              </div>
              <div className="contact-details">
                <h4>Gem Honda</h4>
                <p>
                  <i className="fas fa-map-marker-alt"></i> 2/9 Yaathaval
                  Street, Virugambakkam, Chennai, Tamil Nadu 600092
                </p>
                <p>
                  <i className="fas fa-phone"></i> +91 909 432 0000
                </p>
                <p>
                  <i className="fas fa-envelope"></i>  gemhondamd@gmail.com
                </p>
                <p>
                  <i className="fas fa-clock"></i> Mon - Sat: 8:00 AM - 8:00 PM   </p>
                 <p><i className="fas fa-clock"></i> Sunday: 9:00 AM - 3:00 PM </p> 
               
              </div>
            </div>
            <div className="google-map">
              <iframe
                title="Sri Devi Karumari Cinemas Location"
                src="https://www.google.com/maps?q=13.049656,80.193422+(Sri+Devi+Karumari+Cinemas)&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
