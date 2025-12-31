// import React from "react";
// import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import { FaStar } from "react-icons/fa";

import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../Styles/Reviewspage.css";

const googleReviewsData = [
  {
    name: "RAJA",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user89.png",
    review: "Fast service they are doing like 45 mits service is very useful for me. But need to book it one day before. Over all excellent service.",
  },
  {
    name: "Azas",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user21.png",
    review: "GEM service is excellent and I thank to the Management to maintain the customer relationship like car dealer.",
  },
  {
    name: "Vivek Rajput",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user16.png",
    review: "Very good service by GEM Honda..! They are trained very well for Major works and customer activity..!",
  },
  {
    name: "SENTHIL",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user93.png",
    review: "GEM Service is very excellent compare with other authorised service center...!",
  },
  {
    name: "SUBASHINI",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user83.png",
    review: "Vert good service of Honda vehicles provided here.",
  },
  {
    name: "Gurupatham",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user60.png",
    review: "Nice service and my scooter is in good condition after their service..",
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
];

const GoogleReviews = () => {
  return (
    <div className="google-reviews-page" style={{ padding: "80px 0", minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yGPyAHDX-ZD4H1JndXavrj0xtcBJ0voZYA&s"
              alt="Google"
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "800", marginBottom: "10px" }}>Google Reviews</h1>
            <div style={{ color: "white", fontSize: "1.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>4.2</span> (1253 Reviews)
            </div>
          </Col>
        </Row>

        <Row>
          {googleReviewsData.map((review, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="google-review-card h-100" style={{ borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                <Card.Body className="p-4">
                  <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                    <Image
                      src={review.image}
                      roundedCircle
                      width={50}
                      height={50}
                    />
                    <div>
                      <h6 style={{ margin: 0, fontWeight: "bold" }}>{review.name}</h6>
                      <div style={{ display: "flex", gap: "3px" }}>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color="#fbc02d" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "#495057", margin: 0, lineHeight: 1.6 }}>{review.review}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GoogleReviews;
