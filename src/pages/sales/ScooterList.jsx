import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/ScooterList.css"; // reuse same styles (BikeList.css)

const scooters = [
  {
    name: "Activa 125",
    cc: "124 cc",
    mileage: "60 kmpl",
    bhp: "8.3 bhp",
    weight: "111 kg",
    price: "₹ 94,422",
    rating: "4.6/5",
    ratingsCount: "5,230 Ratings",
    description:
      "The Activa 125 2025 edition blends trusted Honda reliability with modern upgrades—featuring a TFT display, USB-C charging, and idle stop system for smarter, sleeker daily commuting.",
    image:
   "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Activa-125.png",
  },
  {
    name: "Activa 110",
    cc: "109.5 cc",
    mileage: "65 kmpl",
    bhp: "7.6 bhp",
    weight: "105 kg",
    price: "₹ 89,000",
    rating: "4.4/5",
    ratingsCount: "3,120 Ratings",
    description:
      "Lightweight and nimble, the Activa 110 delivers easy handling and convenience in dense urban environments—now with enhanced styling and refined performance.",
    image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Activa-110.png",
  },
  {
    name: "Dio 125",
    cc: "124 cc",
    mileage: "55 kmpl",
    bhp: "8.2 bhp",
    weight: "106 kg",
    price: "₹ 96,749",
    rating: "4.5/5",
    ratingsCount: "4,010 Ratings",
    description:
      "A sporty head-turner equipped with a modern TFT console, smart key, USB-C port, and idle stop tech—Dio 125 2025 is made for agile and connected city riding.",
    image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Dio-125.png",
  },
  {
    name: "Dio 110",
    cc: "109.5 cc",
    mileage: "60 kmpl",
    bhp: "7.7 bhp",
    weight: "104 kg",
    price: "₹ 91,000",
    rating: "4.3/5",
    ratingsCount: "2,875 Ratings",
    description:
      "Compact yet bold, the updated Dio 110 offers efficient maneuverability with premium features like a TFT display and smart connectivity in a sleek frame.",
    image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Dio-110.png",
  },
];

const ScooterList = () => {
  return (
    <div>
      {/* 🚀 Banner Section */}
      <div className="scooter-banner">
        <img
          src="https://www.vihaanhonda.com/assets/img/Activa_special_Edition_homeBanner.jpg"
          alt="Scooter Banner"
          className="banner-image-Scooter"
        />
        <div className="banner-overlay">
          <h1>Explore Our Scooters</h1>
          <p>Find the perfect scooter for your ride</p>
        </div>
      </div>

      {/* 🚀 Scooter Grid Section */}
      <div className="bike-list">
        {scooters.map((scooter, index) => (
          <div className="bike-card" key={index}>
            {/* Scooter Image */}
            <img
              src={scooter.image}
              alt={scooter.name}
              className="bike-image"
            />

            {/* Scooter Details */}
            <div className="bike-details">
              <h2 className="bike-name">{scooter.name}</h2>
              <p className="bike-specs">
                {scooter.cc} | {scooter.mileage} | {scooter.bhp} |{" "}
                {scooter.weight}
              </p>
              <p className="bike-price">{scooter.price}</p>

              {/* Ratings */}
              <p className="bike-rating">
                ⭐ {scooter.rating} <span>({scooter.ratingsCount})</span>
              </p>

              {/* Explore & Book Now */}
              <Link to="/scooter-overview-container" state={{ scooter }}>
                Explore
              </Link>
              <Link to="/contact-container" state={{ scooter }}>
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScooterList;
