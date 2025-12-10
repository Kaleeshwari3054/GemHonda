import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import slide1 from '../assets/HomepageSlides/06-17074.jpg';
import slide2 from '../assets/HomepageSlides/activa--d--19212.jpg';
import slide3 from '../assets/HomepageSlides/festival-offers-d--19215.jpg';
import slide4 from '../assets/HomepageSlides/cd110-17069.jpg'
import slide5 from '../assets/HomepageSlides/shine-100--d--19208.jpg';


const HomePage = () => {
  const scooterImages = [
    // Activa 125
    {
      id: 1,
      src: slide1,
      alt: "Activa 125 - Mat Axis Gray Metallic",
    },
    {
      id: 2,
      src: slide2,
      alt: "Activa 125 - Pearl Igneous Black",
    },
    {
      id: 3,
      src: slide3,
      alt: "Activa 125 - Pearl Igneous Black 2",
    },

    // Activa 110
    {
      id: 4,
      src: slide4,
      alt: "Activa 110 - Decent Blue Metallic",
    },
    {
      id: 5,
      src: slide5,
      alt: "Activa 110 - Mat Axis Gray Metallic",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto-change slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scooterImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [scooterImages.length]);

  // ✅ Manual controls
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % scooterImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + scooterImages.length) % scooterImages.length
    );
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="homepage">
      <div
        id="scooterCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* ✅ Indicators */}
        <div className="carousel-indicators">
          {scooterImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? "active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* ✅ All images will show here */}
        <div className="carousel-inner">
          {scooterImages.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="banner-image">
                <img src={image.src} alt={image.alt} className=" w-100" />
                <div className="carousel-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
