import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../Styles/Reviews.css";

const Reviews = [
  {
    name: "RAJA",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user89.png",
    review:
      "Fast service they are doing like 45 mits service is very useful for me. But need to book it one day before. Over all excellent service.",
  },
  {
    name: "Azas",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user21.png",
    review:
      "GEM service is excellent and I thank to the Management to maintain the customer relationship like car dealer.",
  },
  {
    name: "Vivek Rajput",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user16.png",
    review:
      "Very good service by GEM Honda..! They are trained very well for Major works and customer activity..!",
  },
  {
    name: "SENTHIL",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user93.png",
    review:
      "GEM Service is very excellent compare with other authorised service center...! they have delivered the vehicle with in a day along with good service.. Keep it up GEM Honda..!",
  },
  {
    name: "SUBASHINI",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user83.png",
    review: "Vert good service of Honda vehicles provided here.",
  },
  {
    name: "Gurupatham",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user60.png",
    review:
      "Nice service and my scooter is in good condition after their service..",
  },
  {
    name: "SRINIVAS",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user32.png",
    review: "Excellent service compare with other service providers.",
  },
  {
    name: "SHAIKH",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user68.png",
    review: "Good service by Gem Honda(Authorized by Honda).",
  },
  {
    name: "ANAND",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user44.png",
    review:
      "Good Customer relationship and Customer followup..! fantastic Service..!",
  },
  {
    name: "DINESH BAVANE",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user73.png",
    review: "Excellent Service by GEM Honda compare with other Honda services",
  },
];

const Reviewspage = () => {
  const [activeTab, setActiveTab] = useState("mixed"); // "mixed", "google", "jusdial"

  const handleGoogleClick = () => setActiveTab("google");
  const handleJusdialClick = () => setActiveTab("jusdial");

  const renderReviews = () => {
    if (activeTab === "google") {
      return Reviewspage.slice(0, 8); // Show first 8 as Google reviews
    } else if (activeTab === "jusdial") {
      return Reviewspage.slice(2, 10); // Show different set as Jusdial reviews
    }
    return Reviewspage;
  };

  return (
    <div className="reviews-section" id="Reviews-sec">
      {/* Perfect Reviews Header */}
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center mb-5">
            <h2 className="reviews-main-heading">What Our Customers Say</h2>
            <p className="reviews-subtitle">
              Trusted by thousands of happy customers
            </p>
          </Col>

          {/* CLICKABLE Google + Jusdial Row */}
          {/* CLICKABLE Google + Jusdial Row - LINKS TO SEPARATE PAGES */}
          <Col md={6} className="text-md-end text-center mb-4 mb-md-0">
            <a
              href="/google-reviews"
              className={`review-platform-btn google-review-btn ${
                activeTab === "google" ? "active" : ""
              }`}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/028/667/072/non_2x/google-logo-icon-symbol-free-png.png"
                alt="Google Reviews"
                className="platform-logo google-logo"
              />
              <div className="review-points">
                <div className="rating-points">4.2</div>
                <span className="review-count">(1253)</span>
              </div>
            </a>
          </Col>
          <Col md={6} className="text-md-start text-center">
            <a
              href="/jusdial-reviews"
              className={`review-platform-btn jusdial-review-btn ${
                activeTab === "jusdial" ? "active" : ""
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Justdial_Logo.svg/2560px-Justdial_Logo.svg.png"
                alt="Jusdial Reviews"
                className="platform-logo"
              />
              <div className="review-points">
                <div className="rating-points">4.2</div>
                <span className="review-count">(1878)</span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>

      {/* Dynamic Reviews Slider */}
      <Container>
        <div className="reviews-slider-container">
          <div className="reviews-track">
            {[...renderReviews(), ...renderReviews()].map((item, index) => (
              <div className="review-card-wrapper" key={index}>
                <Card className="review-card h-100">
                  <div className="review-header">
                    <Image
                      src={item.image}
                      roundedCircle
                      width="60"
                      height="60"
                      className="review-avatar"
                      alt={item.name}
                    />
                    <h5 className="reviewer-name">{item.name}</h5>
                  </div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#fbc02d" size={14} />
                    ))}
                  </div>
                  <Card.Text className="review-text">{item.review}</Card.Text>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviewspage;
