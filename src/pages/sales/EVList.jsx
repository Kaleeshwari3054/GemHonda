import { Link } from "react-router-dom";
import "../../Styles/EvList.css";

const EVList = () => {
  const evs = [
    {
      name: "Honda Activa e (Standard)",
      price: "₹ 1,17,076",
      priceNote: "Ex-Showroom",
      description:
        "The Honda Activa e is an electric scooter designed for city commuting, offering a smooth ride, modern features, and an eco-friendly alternative to petrol scooters.",
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80",
    },
    {
      name: "Honda QC1:",
      price: "₹ 90,000",
      priceNote: "Ex-Showroom",
      description:
        "Honda EM1 e: is a stylish electric scooter with advanced battery tech, ideal for urban travel with zero emissions.",
      image:
        "https://images.timesdrive.in/thumb/msid-151101288,thumbsize-632775,width-450,height-254,resizemode-75/151101288.jpg",
    },
  ];

  return (
    <div className="ev-list">
      {evs.map((ev, index) => (
        <div className="ev-card" key={index}>
          <img src={ev.image} alt={ev.name} />
          <div className="ev-card-content">
            <h3>{ev.name}</h3>
            <p className="ev-price">{ev.price}</p>
            <p className="ev-price-note">{ev.priceNote}</p>
            <p className="ev-description">{ev.description}</p>
            <Link
              to="/ev-overview-container"
              state={{ ev }}
              className="ev-explore"
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EVList;
