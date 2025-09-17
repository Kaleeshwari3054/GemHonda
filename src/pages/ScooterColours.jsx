// src/components/ScooterColours.jsx
import React, { useState } from "react";
import "../Styles/ScooterColours.css";
import Scooter1 from "../assets/scooter images/Scooter1.jpeg";
import Scooter2 from "../assets/scooter images/Scooter2.jpeg";
import Scooter3 from "../assets/scooter images/Scooter3.jpeg";
import Scooter4 from "../assets/scooter images/Scooter4.jpeg";
import Scooter5 from "../assets/scooter images/Scooter5.jpeg";
import Scooter6 from "../assets/scooter images/Scooter6.jpeg";

const ScooterColours = () => {
  // const colours = [
  //     {
  //         name: "Majestic Brown Metallic",
  //         hex: "#5A3923",
  //         image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",

  //     },
  //     {
  //         name: "Pearl Amazing White Matte",
  //         hex: "#F5F5F5",
  //         image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",

  //     },
  //     {
  //         name: "Strontium Silver Metallic & Igneous Black",
  //         hex: "#BBBBBB",
  //         image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN"
  //     },

  //     {
  //         name: "Black",
  //         hex: "#000000",
  //         image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
  //     },

  // ];
  const colours = [
    {
      name: "Majestic Brown Metallic",
      hex: "#0b1620",
      image: Scooter1,
    },
    {
      name: "Pearl Amazing White Matte",
      hex: "#63191c", // <-- looks more like Dark Red / Maroon, not White
      image: Scooter2,
    },
    {
      name: "Strontium Silver Metallic & Igneous Black",
      hex: "#2b2b2b", // dark grayish black
      image: Scooter3,
    },
    {
      name: "Deep Blue Metallic",
      hex: "rgb(17, 67, 113)", // navy blue shade
      image: Scooter4,
    },
    {
      name: "Silver Metallic",
      hex: "#BBBBBB", // light silver/gray
      image: Scooter5,
    },
    {
      name: "Glossy Black",
      hex: "#000000",
      image: Scooter6,
    },
  ];

  const [selectedColour, setSelectedColour] = useState(colours[0]);

  return (
    <>
      <div className="scooter-colours-container">
        <div className="scooter-image">
          <img src={selectedColour.image} alt={selectedColour.name} />
        </div>

        <div className="colour-palette">
          {colours.map((colour, idx) => (
            <div
              key={idx}
              className={`colour-swatch ${
                selectedColour.name === colour.name ? "active" : ""
              }`}
              style={{ backgroundColor: colour.hex }}
              onClick={() => setSelectedColour(colour)}
              title={colour.name}
            />
          ))}
        </div>

        <p className="selected-colour">Color: {selectedColour.name}</p>
      </div>
    </>
  );
};

export default ScooterColours;
