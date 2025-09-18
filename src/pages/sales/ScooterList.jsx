import { Link } from "react-router-dom";
import "../../Styles/ScooterList.css";

const ScooterList = () => {
  const scooters = [
    {
      name: "Activa 125",
      slug: "activa-125",
      price: "₹ 94,422 ",
      priceNote: "Ex-showroom Price",
      description:
        "The Activa 125 2025 edition blends trusted Honda reliability with modern upgrades—featuring a TFT display, USB-C charging, and idle stop system for smarter, sleeker daily commuting.",
      image:
        "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    },
    {
      name: "Activa 110",
      slug: "activa-110",
      price: "₹ 94,422 ",
      priceNote: "Ex-showroom Price",
      description:
        "Lightweight and nimble, the Activa 110 delivers easy handling and convenience in dense urban environments—now with enhanced styling and refined performance.",
      image:
        "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    },
    {
      name: "Dio 125",
      slug: "dio-125",
      price: "₹ 96,749 ",
      priceNote: "Ex-showroom Price",
      description:
        "A sporty head-turner equipped with a modern TFT console, smart key, USB-C port, and idle stop tech—Dio 125 2025 is made for agile and connected city riding.",
      image:
        "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    },
    {
      name: "Dio 110",
      slug: "dio-110",
      price: "₹ 96,749 ",
      priceNote: "Ex-showroom Price",
      description:
        "Compact yet bold, the updated Dio 110 offers efficient maneuverability with premium features like a TFT display and smart connectivity in a sleek frame.",
      image:
        "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    },
  ];

  return (
    <div>
      {/* 🚀 Banner Section */}
      <div className="scooter-banner">
        <img
          src="https://www.vihaanhonda.com/assets/img/Activa_special_Edition_homeBanner.jpg"
          alt="Scooter Banner"
        />
        <div className="banner-overlay">
          <h1>Explore Our Scooters</h1>
          <p>Find the perfect scooter for your ride</p>
        </div>
      </div>

      {/* 🚀 Scooter Grid Section */}
      <div className="scooter-list">
        {scooters.map((scooter, index) => (
          <div className="scooter-card" key={index}>
            <img src={scooter.image} alt={scooter.name} />
            <div className="scooter-card-content">
              <h3>{scooter.name}</h3>
              <p className="scooter-price">{scooter.price}</p>
              {/* <p className="scooter-price-note">{scooter.priceNote}</p> */}
              {/* Instead of showing description here, show it in overview page */}
              <Link
                to={`/scooters/${scooter.slug}`}
                state={{ scooter }}
                className="scooter-explore"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScooterList;


