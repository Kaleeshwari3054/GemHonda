import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Styles/ImageCarousel.css'

import  { useEffect, useState } from "react";

const images = [
  "https://media.gettyimages.com/id/458730149/photo/honda-cb-750-four-vintage-motorcycle-in-studio-shoot.jpg?s=612x612&w=gi&k=20&c=LUR68uFUx_X7is97l3PTmXBf4UkoDwaSP5kRKY9ugVA=",
  "https://cdn.bikedekho.com/processedimages/honda/sp125/source/sp1256789ead2971d1.jpg",
  "https://images5.alphacoders.com/329/329291.jpg",
];

 

const cards = [
 
  {
    title: 'Safety',
    desc: 'Create a culture of safe rides',
    image: 'https://unioncountylibraries.org/wp-content/uploads/bicycle-helmets.jpg',
  },
  {
    title: 'CSR',
    desc: 'Empowering communitites through meaningful action',
    image: 'https://media.istockphoto.com/id/1344398972/photo/wind-turbines-are-alternative-electricity-sources-the-concept-of-sustainable-resources-people.jpg?s=612x612&w=0&k=20&c=PC9qGntFaKjhZ0o7HANP08pqK1_uq-faE49f9JLPg_4=',
  },
  {
    title: 'Shine 100',
    desc: '100cc commuter motorcycle designed for fuel efficiency and practicality in urban environments',
    image: 'https://cdn.bikedekho.com/processedimages/honda/shine-100/source/shine-1006809d88b5ffc6.jpg',
  },
];

const ImageCarousel = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(loop);
  }, [])
  return (
    <>
      <section className="carousel-section">
        <h2 className="carousel-heading">Building for a better tomorrow</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="carousel-swiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-card">
                <div className="card-image-wrapper">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FULL-WIDTH STATIC BANNER BELOW CAROUSEL */}
     <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">HONDA RACING</p>
        <h1 className="hero-title">UNSTOPPABLE</h1>
        <p className="hero-desc">ON EVERY TRACK</p>
        <button className="hero-button">Explore racing</button>
      </div>
    </section>
    </>
  );
};

export default ImageCarousel;
