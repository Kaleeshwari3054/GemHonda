import React, { useState, useEffect } from "react";
import offers1 from "../assets/Offers-img/Offers1.jpeg";
import offers2 from "../assets/Offers-img/Offers2.jpeg";
import offers3 from "../assets/Offers-img/Offers3.jpeg";
import offers4 from "../assets/Offers-img/Offers4.jpeg";
import offers5 from "../assets/Offers-img/Offers5.jpeg";
import offers6 from "../assets/Offers-img/Offers6.jpeg";
import offers7 from "../assets/Offers-img/Offers7.jpeg";
import offers8 from "../assets/Offers-img/Offers8.jpeg";

const OffersSmoothScroll = () => {
  const slides = [
    { img: offers1, title: "A complite service package just 999rs only" },
    { img: offers2, title: "Limited offers just 999rs only" },
    { img: offers3, title: "Engine oil 100% discount" },
    { img: offers4, title: "Our NxtGEN smart services" },
    { img: offers5, title: "For womens offers" },
    { img: offers6, title: "Update for all service" },
    { img: offers7, title: "Birthday wishes to vehicles" },
    { img: offers8, title: "Our smart services" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="offers-smooth-section">
      <div className="container-fluid">
        <h2 className="offers-head"> GEM HONDA PREMIUM OFFERS</h2>
        <div className="row align-items-center">
          {/* ✅ LEFT CONTENT – STYLED */}
          <div className="col-lg-4 col-md-12 offers-left">
            {/* <h2 className="offer-heading">🔥 Premium Offers</h2> */}
            {/* 
            <div className="offer-box">
              <p className="intro-text">
                Dear <strong>HONDA Customer</strong>,
              </p>

              <div className="price-tag">
                💥 Just <span>₹999/-</span> la பிரீமியம் Service
              </div>

              <ul className="service-list">
                <li>✅ Engine Oil – 100% Free</li>
                <li>✅ General Service – Free</li>
                <li>✅ Full Wash & Polish – Free</li>
                <li>✅ Chain & Clutch O/H – Free</li>
              </ul>

              <div className="history-text">
                🚀 Never, Ever – 1st Time in History..!
              </div>
            </div> */}

            <div className="message-box">
              <h4>🌟 Premium Service Highlights</h4>

              <ul className="feature-list">
                <li>📱 Live Video Update Service</li>
                <li>🛰 Live GPS Tracking Pick & Drop</li>
                <li>⌚ 2nd Shift Available (7PM - 7AM)</li>
                <li>🚀 1 Hour Service by 2 Mechanics</li>
                <li>💧 5 Mins Instant Oil Change</li>
                <li>👷 NexTGen Trained Mechanics</li>
                <li>🕒 24/7 Hrs Intake, No Hurry</li>
              </ul>

              <div className="location-box">
                📍 <strong>GEM HONDA, VIRUGAMBAKAM</strong>
              </div>

              <div className="contact-box">
                📞{" "}
                <a href="tel:7299999711">Click & Call Service – 7299999711</a>{" "}
                <br />
                📞 <a href="tel:7299999733">Click & Call Sales – 7299999733</a>
              </div>

              <div className="timing-box">
                🕒 TIMING: 7AM - 10PM (Week Days) <br />
                🌞 All Sundays Open (9AM - 5PM)
              </div>

              <div className="premium-note">
                🌟 Exclusive PREMIUM Service For PREMIUM Customers 🌟
              </div>
            </div>
          </div>

          {/* ✅ RIGHT IMAGE SECTION – UPDATED */}
          <div className="col-lg-8 col-md-12">
            {/* <h2 className="text-center fw-bold mb-4">
              🔥 GEM HONDA PREMIUM OFFERS
            </h2> */}

            <div className="carousel-box">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((item, index) => (
                  <div
                    className={`carousel-slide ${
                      index === current ? "active-slide" : "inactive-slide"
                    }`}
                    key={index}
                  >
                    <h4 className="slide-title">{item.title}</h4>
                    <img src={item.img} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ DOTS */}
            <div className="dots-wrapper">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${current === index ? "active" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        .offers-smooth-section {
          // background: #f7f9fc;
          padding: 40px 0;
        }
        /* ✅ LEFT CONTENT STYLES */
        .offers-left {
          padding: 20px 15px;
          // margin-left: 10px;
        }
        .offers-head {
          text-align: center;
          font-weight: 700;
          margin-bottom: 40px;
          font-size: 30px;
        }

        .offer-heading {
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .offer-box {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          padding: 25px;
          margin-bottom: 25px;
        }

        .intro-text {
          font-size: 18px;
          margin-bottom: 15px;
        }

        .price-tag {
          background: linear-gradient(to right, #d60000, #ff4d4d);
          color: #fff;
          font-size: 20px;
          font-weight: 800;
          padding: 12px 18px;
          border-radius: 12px;
          margin-bottom: 20px;
          text-align: center;
        }

        .price-tag span {
          font-size: 24px;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-list li {
          font-size: 17px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .history-text {
          text-align: center;
          font-weight: 800;
          margin-top: 15px;
          font-size: 18px;
          color: #d60000;
        }

        /* MESSAGE BOX */
        .message-box {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .message-box h4 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .location-box {
          font-size: 17px;
          font-weight: 800;
          margin-top: 15px;
        }

        .contact-box {
          margin-top: 15px;
          font-size: 16px;
          font-weight: 600;
        }

        .contact-box a {
          color: #d60000;
          text-decoration: none;
        }

        .timing-box {
          margin-top: 15px;
          font-size: 15px;
          font-weight: 600;
        }

        .premium-note {
          margin-top: 20px;
          background: #000;
          color: #fff;
          padding: 12px;
          border-radius: 12px;
          text-align: center;
          font-weight: 800;
          font-size: 16px;
        }

        /* ✅ Responsive */
        @media (max-width: 768px) {
          .offer-heading {
            font-size: 28px;
            text-align: center;
          }
        }

        /* LEFT CONTENT */
        .offers-left h2 {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .offers-left p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .offers-left ul {
          list-style: none;
          padding: 0;
        }

        .offers-left li {
          font-size: 17px;
          margin-bottom: 12px;
        }

        /* CAROUSEL */
        .carousel-box {
          width: 70%;
          margin: auto;
          overflow: hidden;
          border-radius: 25px;
          background: white;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.6s ease-in-out;
        }

        .carousel-slide {
          min-width: 100%;
          text-align: center;
          padding: 20px;
          transition: all 0.6s ease;
        }

        .carousel-slide img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 20px;
        }

        /* ✅ Highlight center */
        .active-slide {
          transform: scale(1.02);
          filter: brightness(1.05);
        }

        /* ✅ Dim side images */
        .inactive-slide {
          filter: brightness(0.6) contrast(0.9);
        }

        /* DOTS */
        .dots-wrapper {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #cfcfcf;
        }

        .dot.active {
          background: #d60000;
          transform: scale(1.2);
        }

        /* ✅ RESPONSIVE */
        @media (max-width: 992px) {
          .carousel-box {
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .marquee-slide {
            min-width: 240px;
          }

          .marquee-slide img {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default OffersSmoothScroll;
