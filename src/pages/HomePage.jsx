// // src/pages/HomePage.jsx
// import React from 'react';
// import '../Styles/home.css';
// import image1 from "../assets/hoda_banner-pica.png"
// const HomePage = () => {
//   return (
//     <div className="homepage">
//       {/* Embedded YouTube Background Video */}
//    <div className="banner-image">
//   <img 
//     src={image1}
//     alt="Banner" 
//   />
// </div>


//       <div className="homepage-overlay">
//         <h1>Cumulative Motorcycle Production</h1>
//         <h2>500,000,000 <span>units</span></h2>
//         <p>Driven by innovation. Powered by trust.</p>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import '../Styles/home.css';

import activa125 from "../assets/Activa125/Activa125-1.png"
import activa110 from "../assets/Activa125/Activa125-2.jpg"
import dio125 from "../assets/Dio125/dio125-1.png"
import dio110 from "../assets/Dio125/dio125-2.webp"
import dio111 from "../assets/Dio125/dio125-2.webp"

const HomePage = () => {
  // Scooter images for carousel
  const scooterImages = [
    {
      id: 1,
      src: activa125,
      alt: "Honda Activa 125",
      title: "Honda Activa 125",
      subtitle: "India's Most Trusted Scooter"
    },
    {
      id: 2,
      src: activa110,
      alt: "Honda Activa 110",
      title: "Honda Activa 110",
      subtitle: "Lightweight & Efficient"
    },
    {
      id: 3,
      src: dio125,
      alt: "Honda Dio 125",
      title: "Honda Dio 125",
      subtitle: "Sporty & Smart"
    },
    {
      id: 4,
      src: dio110,
      alt: "Honda Dio 110",
      title: "Honda Dio 110",
      subtitle: "Compact Sporty Design"
    },
    {
      id: 5,
      src: dio111,
      alt: "Honda Dio 110",
      title: "Honda Dio 110",
      subtitle: "Compact Sporty Design"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scooterImages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [scooterImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scooterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scooterImages.length) % scooterImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="homepage">
      {/* Advanced Carousel Banner */}
      <div id="scooterCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {scooterImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {scooterImages.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="banner-image">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="d-block w-100"
                />
                <div className="carousel-overlay"></div>
              </div>
              {/* <div className="carousel-caption">
                <div className="homepage-overlay">
                  <h1>Welcome to Gem Honda</h1>
                  <h2>{image.title}</h2>
                  <p>{image.subtitle}</p>
                  <div className="hero-buttons">
                    <button className="btn btn-primary btn-lg me-3">
                      Explore Now
                    </button>
                    <button className="btn btn-outline-light btn-lg">
                      Book Test Ride
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

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