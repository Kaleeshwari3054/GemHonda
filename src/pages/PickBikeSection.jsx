import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/pickBikeSection.css';

const PickBikeSection = () => {
  const vehicles = [
    {
      id: 'activa-125',
      name: 'Activa 125',
      displayName: 'Honda Activa 125',
      price: '₹ 94,422 - 1,02,865',
      priceNote: '*Ex-Showroom in Chennai',
      engine: '124.9',
      fuelCapacity: '5.3 L',
      brakes: 'Drum',
      image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Activa-125.png',
      type: 'scooter',
      route: '/scooters/activa-125'
    },
    {
      id: 'activa-110',
      name: 'Activa 110',
      displayName: 'Honda Activa 110',
      price: '₹ 76,684 - 79,884',
      priceNote: '*Ex-Showroom in Chennai',
      engine: '109.51',
      fuelCapacity: '5.3 L',
      brakes: 'Drum',
      image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Activa-110.png',
      type: 'scooter',
      route: '/scooters/activa-110'
    },
    {
      id: 'dio-125',
      name: 'Dio 125',
      displayName: 'Honda Dio 125',
      price: '₹ 96,749 - 1,05,549',
      priceNote: '*Ex-Showroom in Chennai',
      engine: '124.9',
      fuelCapacity: '5.3 L',
      brakes: 'Drum',
      image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Dio-125.png',
      type: 'scooter',
      route: '/scooters/dio-125'
    },
    {
      id: 'dio-110',
      name: 'Dio 110',
      displayName: 'Honda Dio 110',
      price: '₹ 78,349 - 81,549',
      priceNote: '*Ex-Showroom in Chennai',
      engine: '109.51',
      fuelCapacity: '5.3 L',
      brakes: 'Drum',
      image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/PLP-images/Dio-110.png',
      type: 'scooter',
      route: '/scooters/dio-110'
    },
    {
      id: 'shine-125',
      name: 'Shine 125',
      displayName: 'Honda Shine 125',
      price: '₹ 81,300 - 95,500',
      priceNote: '*Ex-Showroom in Chennai',
      engine: '123.94',
      fuelCapacity: '10.5 L',
      brakes: 'Drum',
      image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/shine-125.jpg',
      type: 'bike',
      route: '/bike-details-container'
    },
    {
      id: 'sp-125',
      name: 'SP 125',
      displayName: 'Honda SP 125',
      price: '₹ 95,500 - 1,14,200',
      priceNote: '*Ex-Showroom in Chennai',
      engine: '124',
      fuelCapacity: '11 L',
      brakes: 'Drum',
      image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/shine-125.jpg',
      type: 'bike',
      route: '/bike-details-container'
    }
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? vehicles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedVehicle(vehicles[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === vehicles.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedVehicle(vehicles[newIndex]);
  };

  const handleTabClick = (vehicle, index) => {
    setSelectedVehicle(vehicle);
    setCurrentIndex(index);
  };

  return (
    <section className="pick-bike-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Pick a Bike to start</h2>
          <p className="section-subtitle">Our professional and well-trained staff is ready to assist</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bike-navigation">
          <button className="nav-arrow nav-arrow-left" onClick={handlePrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="bike-tabs">
            {vehicles.map((vehicle, index) => (
              <button
                key={vehicle.id}
                className={`bike-tab ${selectedVehicle.id === vehicle.id ? 'active' : ''}`}
                onClick={() => handleTabClick(vehicle, index)}
              >
                {vehicle.name}
              </button>
            ))}
          </div>

          <button className="nav-arrow nav-arrow-right" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Vehicle Display */}
        <div className="vehicle-display">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="vehicle-image">
                <img 
                  src={selectedVehicle.image} 
                  alt={selectedVehicle.displayName}
                  className="img-fluid"
                />
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="vehicle-details">
                <h3 className="vehicle-name">{selectedVehicle.displayName}</h3>
                <div className="vehicle-price">
                  <span className="price-amount">{selectedVehicle.price}</span>
                  <span className="price-note">{selectedVehicle.priceNote}</span>
                </div>

                <div className="vehicle-actions">
                  {/* <button className="btn btn-quote">Get a Quote</button> */}
                  <div className="vehicle-links">
                    <Link to="#" className="vehicle-link">Compare</Link>
                    <span className="separator">|</span>
                    <Link 
                    //   to={selectedVehicle.route} 
                      className="vehicle-link"
                      state={{ 
                        [selectedVehicle.type]: {
                          name: selectedVehicle.displayName,
                          price: selectedVehicle.price.split(' - ')[0],
                          image: selectedVehicle.image,
                          description: `The ${selectedVehicle.displayName} combines reliability, performance, and style in one perfect package.`
                        }
                      }}
                    >
                      View More Details
                    </Link>
                  </div>
                </div>

                {/* Specifications */}
                {/* <div className="vehicle-specs">
                  <div className="spec-item">
                    <div className="spec-value">{selectedVehicle.engine}</div>
                    <div className="spec-label">Engine ( CC )</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-value">{selectedVehicle.fuelCapacity}</div>
                    <div className="spec-label">Fuel Capacity</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-value">{selectedVehicle.brakes}</div>
                    <div className="spec-label">Brakes</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickBikeSection;