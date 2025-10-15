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

// import React, { useState, useEffect } from 'react';
// import '../Styles/home.css';

// import activa125_1 from "project/src/assets/scooter images/scooters/activa125-MatAxisGrayMetallic.png"
// import activa125_2 from "project/src/assets/scooter images/scooters/activa125-PearlIgneousBlack.png"
// import activa125_3 from "project/src/assets/scooter images/scooters/activa125-PearlIgneousBlack.png"
// import activa110_1 from "project/src/assets/scooter images/scooters/activa110-DecentBlueMetallic.png"
// import activa110_2 from "project/src/assets/scooter images/scooters/Activa110-MatAxisGrayMetallic.png"
// import activa110_3 from "project/src/assets/scooter images/scooters/activa110-PearlIgneousBlack.png"
// import dio125_1 from "project/src/assets/scooter images/scooters/dio125-MatMarvelBlueMetallic.png"
// import dio125_2 from "project/src/assets/scooter images/scooters/dio125-PearlDeepGroundGray_Stripe.png"
// import dio125_3 from "project/src/assets/scooter images/scooters/dio125-PearlDeepGroundGray_Stripe.png"
// import dio110_1 from "project/src/assets/scooter images/scooters/dio110-MatAxisGrayMetallic.png"
// import dio110_2 from "project/src/assets/scooter images/scooters/dio110-MatAxisGrayMetallic.png"
// import dio110_3 from "project/src/assets/scooter images/scooters/dio110-MatMarvelBlue.png"


// const HomePage = () => {
//   // Scooter images for carousel
//   const scooterImages = [
//     {
//       id: 1,
//       src: activa125,
//       alt: "Honda Activa 125",
//       title: "Honda Activa 125",
//       subtitle: "India's Most Trusted Scooter"
//     },
//     {
//       id: 2,
//       src: activa110,
//       alt: "Honda Activa 110",
//       title: "Honda Activa 110",
//       subtitle: "Lightweight & Efficient"
//     },
//     {
//       id: 3,
//       src: dio125,
//       alt: "Honda Dio 125",
//       title: "Honda Dio 125",
//       subtitle: "Sporty & Smart"
//     },
//     {
//       id: 4,
//       src: dio110,
//       alt: "Honda Dio 110",
//       title: "Honda Dio 110",
//       subtitle: "Compact Sporty Design"
//     },
//     {
//       id: 5,
//       src: dio111,
//       alt: "Honda Dio 110",
//       title: "Honda Dio 110",
//       subtitle: "Compact Sporty Design"
//     }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % scooterImages.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [scooterImages.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % scooterImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + scooterImages.length) % scooterImages.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="homepage">
//       {/* Advanced Carousel Banner */}
//       <div id="scooterCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
//         <div className="carousel-indicators">
//           {scooterImages.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               className={index === currentSlide ? 'active' : ''}
//               onClick={() => goToSlide(index)}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>

//         <div className="carousel-inner">
//           {scooterImages.map((image, index) => (
//             <div
//               key={image.id}
//               className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//             >
//               <div className="banner-image">
//                 <img 
//                   src={image.src} 
//                   alt={image.alt}
//                   className="d-block w-100"
//                 />
//                 <div className="carousel-overlay"></div>
//               </div>
//               {/* <div className="carousel-caption">
//                 <div className="homepage-overlay">
//                   <h1>Welcome to Gem Honda</h1>
//                   <h2>{image.title}</h2>
//                   <p>{image.subtitle}</p>
//                   <div className="hero-buttons">
//                     <button className="btn btn-primary btn-lg me-3">
//                       Explore Now
//                     </button>
//                     <button className="btn btn-outline-light btn-lg">
//                       Book Test Ride
//                     </button>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           ))}
//         </div>

//         <button 
//           className="carousel-control-prev" 
//           type="button"
//           onClick={prevSlide}
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button 
//           className="carousel-control-next" 
//           type="button"
//           onClick={nextSlide}
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import slide1 from '../assets/HomepageSlides/06-17074.jpg';
import slide2 from '../assets/HomepageSlides/activa--d--19212.jpg';
import slide3 from '../assets/HomepageSlides/festival-offers-d--19215.jpg';
import slide4 from '../assets/HomepageSlides/cd110-17069.jpg'
import slide5 from '../assets/HomepageSlides/shine-100--d--19208.jpg';


const HomePage = () => {
  // ✅ Combine all imported images into one array
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
    // {
    //   id: 6,
    //   src: activa110_3,
    //   alt: "Activa 110 - Pearl Igneous Black",
    //   title: "Honda Activa 110",
    //   subtitle: "Pearl Igneous Black",
    // },

    // Dio 125
    // {
    //   id: 7,
    //   src: dio125_1,
    //   alt: "Dio 125 - Mat Marvel Blue Metallic",
    //   title: "Honda Dio 125",
    //   subtitle: "Mat Marvel Blue Metallic",
    // },
    // {
    //   id: 8,
    //   src: dio125_2,
    //   alt: "Dio 125 - Pearl Deep Ground Gray",
    //   title: "Honda Dio 125",
    //   subtitle: "Pearl Deep Ground Gray",
    // },
    // {
    //   id: 9,
    //   src: dio125_3,
    //   alt: "Dio 125 - Pearl Deep Ground Gray 2",
    //   title: "Honda Dio 125",
    //   subtitle: "Pearl Deep Ground Gray",
    // },

    // // Dio 110
    // {
    //   id: 10,
    //   src: dio110_1,
    //   alt: "Dio 110 - Mat Axis Gray Metallic",
    //   title: "Honda Dio 110",
    //   subtitle: "Mat Axis Gray Metallic",
    // },
    // {
    //   id: 11,
    //   src: dio110_2,
    //   alt: "Dio 110 - Mat Axis Gray Metallic 2",
    //   title: "Honda Dio 110",
    //   subtitle: "Mat Axis Gray Metallic",
    // },
    // {
    //   id: 12,
    //   src: dio110_3,
    //   alt: "Dio 110 - Mat Marvel Blue",
    //   title: "Honda Dio 110",
    //   subtitle: "Mat Marvel Blue",
    // },
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
                <img src={image.src} alt={image.alt} className="d-block w-100" />
                <div className="carousel-overlay"></div>
              </div>
              {/* Optional caption */}
              <div className="carousel-caption">
                <h2>{image.title}</h2>
                <p>{image.subtitle}</p>
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
