// RideCards.jsx
import React from 'react';
import '../Styles/RideCards.css';

const rideData = [
  {
    id: 1,
    title: 'Electrify Your Dreams',
    description: 'Discover the future where cutting-edge design meets electric performance and style.',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80',
  },
  {
    id: 2,
    tag: 'REDWING',
    title: 'Explore With Every Ride',
    description: 'Enjoy amazing journeys packed with world-class features and high-quality riding comfort.',
    image: 'https://cdn-fastly.motorcycle.com/media/2023/03/20/11107009/church-of-mo-2010-honda-cbr1000r-review.jpg?size=720x845&nocrop=1',
  },
  {
    id: 3,
    title: 'Excites the World',
    description: 'Explore boldly, follow your passion, and discover the extraordinary with every turn.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdjxT2xDD9j2vOw4FXrwH5K3B8W6_OvkSbA&s',
  },
];

const RideCards = () => {
  return (
    <section className="ride-section">
      <h2 className="ride-heading">The Ride That Moves You</h2>
      <div className="ride-cards">
        {rideData.map((item) => (
          <div className="ride-card" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="ride-overlay">
              <p className="ride-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RideCards;
