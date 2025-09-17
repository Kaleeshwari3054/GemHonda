import React from 'react';
import '../../Styles/DealerNetworkSection.css';
// import networkBanner from '../../assets/21b6f53d-3159-48a4-84d8-67ca5e44918c.png';

const DealerNetworkSection = () => {
  return (
    <section className="dealer-section">
      {/* <img src={networkBanner} alt="Dealer Network" className="dealer-banner" /> */}

      <div className="dealer-content">
        <h2 className="dealer-title">Expanding Across Horizons</h2>
        <p className="dealer-subtitle">
          Honda Motorcycle & Scooter India Pvt. Ltd. (HMSI) boasts an expansive network with over 6,500 touchpoints. 
          This includes a dynamic combination of Redwing and BigWing showrooms across numerous cities, 
          serving customers pan India. Since our inception, we've served over 64 million customers, 
          a testament to our commitment to excellence and customer satisfaction.
        </p>

        <div className="dealer-tabs">
          <button>Redwing</button>
          <button>BigWing</button>
          <button>Best Deal</button>
          <button className="active">Honda e:Swap Station</button>
          <button>Honda EV Concept Store</button>
        </div>

        <div className="dealer-details">
          <h3>Honda e:Swap Station</h3>
          <p><strong>Powering the Future</strong></p>
          <ul>
            <li><strong>Innovative Infrastructure:</strong> Dedicated to supporting Honda's electric vehicles with state-of-the-art battery swap stations.</li>
            <li><strong>Quick Swap Technology:</strong> Minimise downtime with fast and efficient battery exchanges.</li>
            <li><strong>Ubiquitous Access:</strong> Strategically located stations to ensure you are never far from a power boost.</li>
            <li><strong>Sustainable Solutions:</strong> Contributing to a greener planet with our advanced, eco-friendly technology.</li>
            <li><strong>Reliable Network:</strong> Count on Honda's promise of quality and reliability even in electric mobility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DealerNetworkSection;
