import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../Styles/Reviews.css";
const reviews = [
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
    review: "Very good service by GEM Honda..! They are trained very well for Major works and customer activity..!",
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
    name:"Gurupatham",
    image:"https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user60.png",
    review:"Nice service and my scooter is in good condition after their service..",
  },
  {
    name:"SRINIVAS",
    image:"https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user32.png",
    review:"Excellent service compare with other service providers.",
  },
  {
    name:"SHAIKH",
    image:"https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user68.png",
    review:"Good service by Gem Honda(Authorized by Honda).",
  },
  {
    name:"ANAND",
    image:"https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user44.png",
    review:"Good Customer relationship and Customer followup..! fantastic Service..!",
  },
  {
    name:"DINESH BAVANE",
    image:"https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user73.png",
    review:"Excellent Service by GEM Honda compare with other Honda services",
  }
];

const Reviews = () => {
  return (
    <div style={{ background: "#f8f9fa", padding: "60px 0" }} id="Reviews-sec">
      <h2 className="text-center fw-bold mb-3">Customer Reviews</h2>
      <p className="text-center text-muted mb-5">
        Real feedback from our happy customers
      </p>

      <div className="reviews-slider">
        <div className="reviews-track">
          {[...reviews, ...reviews].map((item, index) => (
            <div className="review-card" key={index}>
              <Card className="shadow-sm border-0 rounded-4 p-3 h-100">
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={item.image}
                    roundedCircle
                    width="60"
                    height="60"
                    className="me-3"
                    alt={item.name}
                  />
                  <h5 className="fw-bold mb-0">{item.name}</h5>
                </div>

                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#fbc02d" size={14} />
                  ))}
                </div>

                <Card.Text className="text-muted" style={{ fontSize: "15px" }}>
                  {item.review}
                </Card.Text>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
