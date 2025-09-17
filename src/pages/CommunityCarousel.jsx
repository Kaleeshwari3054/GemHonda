import React, { useEffect, useState } from "react";
import "../Styles/CommunityCarousel.css";


//community carousel

const images = [
  {
    id: 1,
    src: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fbig%2Fhonda%2Fcb-hornet-160r%2Fhonda-cb-hornet-160r.jpg%3Fv%3D31&w=640&q=75",
    alt: "Bike Show",
  },
  {
    id: 2,
    src: "https://imgd.aeplcdn.com/370x208/n/cw/ec/153955/honda-unicorn-right-side-view0.jpeg?isig=0&wm=3&q=80",
    alt: "Desert Ride",
  },
  {
    id: 3,
    src: "https://auto.hindustantimes.com/htmobile1/honda_cb300f-flex-fuel/images/exterior_honda-cb300f-flex-fuel_front-right-view_600x400.jpg?imwidth=420",
    alt: "Night Riders",
  },
  {
    id: 4,
    src: "https://www.indiacarnews.com/wp-content/uploads/2018/02/Honda-X-Blade.jpg",
    alt: "Track Race",
  },
];

const CommunityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImage = (offset) => {
    return images[(currentIndex + offset) % images.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="community-carousel">
      {[0, 1].map((offset) => (
        <div key={offset} className="community-card">
          <div className="image-wrapper">
            <img
              src={getImage(offset).src}
              alt={getImage(offset).alt}
              className="card-image"
            />
          </div>
          <div className="card-caption">{getImage(offset).alt}</div>
        </div>
      ))}
    </div>
  );
};

export default CommunityCarousel;
