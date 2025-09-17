// src/pages/HomePage.jsx
import React from 'react';
import '../Styles/home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Embedded YouTube Background Video */}
   <div className="banner-image">
  <img 
    src="https://images.pexels.com/photos/33203566/pexels-photo-33203566/free-photo-of-nighttime-motorcycle-ride-with-rider-on-honda.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
    alt="Banner" 
  />
</div>


      <div className="homepage-overlay">
        <h1>Cumulative Motorcycle Production</h1>
        <h2>500,000,000 <span>units</span></h2>
        <p>Driven by innovation. Powered by trust.</p>
      </div>
    </div>
  );
};

export default HomePage;
