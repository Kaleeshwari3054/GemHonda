import React from "react";
import imageSrc from "../assets/image.png";
export default function AboutUs() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <h2
  className="fw-bold mb-3 text-center"
>
  About <span style={{ color: "hsl(0, 73%, 41%)" }}>GEM Honda</span>
</h2>

        {/* Left: Content */}
        <div className="col-lg-6 order-2 order-lg-1">
          

          <p className="text-secondary mb-3">
            Welcome to <strong>GEM Honda</strong>, your trusted destination for Honda two-wheelers.
            We bring you the latest range of bikes and scooters — where style meets performance.
            Every ride is more than travel; it’s an emotion.
          </p>

          <p className="text-secondary mb-4">
            Our dedicated team ensures a smooth buying experience, genuine accessories, and reliable
            after-sales service. Driven by Honda’s legacy and GEM’s commitment to customer delight,
            we make every journey begin with trust.
          </p>

          <div className="d-flex align-items-center gap-3">
            <a
              href="#"
              className="btn px-4 rounded-pill text-white"
              style={{
                backgroundColor: "hsl(0, 73%, 41%)",
                border: "none",
              }}
            >
              Read More
            </a>
            <a
              href="#contact-container"
              className="fw-semibold text-decoration-none"
              style={{ color: "hsl(0, 73%, 41%)" }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 text-center">
          <img
            src={imageSrc}
            alt="GEM Honda Showroom"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
