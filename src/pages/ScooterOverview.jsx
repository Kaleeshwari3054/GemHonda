// // // src/components/ScooterOverview.jsx
// // import React from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import "../Styles/ScooterOverview.css";

// // const ScooterOverview = () => {
// //   const location = useLocation();
// //   const scooter = location.state?.scooter;

// //   // If no data was passed, show a fallback
// //   if (!scooter) {
// //     return <p>No scooter selected. Please go back and choose one.</p>;
// //   }

// //   return (
// //     <div className="scooter-overview-container">
// //       {/* Tabs */}
// //       <div className="scooter-tabs">
// //         <span className="active">Overview</span>
// //         <Link to="/scooter-colours-container">Colours</Link>
// //       </div>

// //       {/* Overview Section */}
// //       <div className="scooter-content">
// //         <div className="scooter-image">
// //           <img src={scooter.image} alt={scooter.name} />
// //         </div>
// //         <div className="scooter-details">
// //           <h2>{scooter.name}</h2>
// //           <p className="price">
// //             {scooter.price} <span>{scooter.priceNote}</span>
// //           </p>
// //           <p className="description">{scooter.description}</p>

// //         </div>
// //       </div>

// //       {/* 🚀 Price Table */}
// //      <div className="price-list">
// //   <h3>Price Table</h3>
// //   <table>
// //     <thead>
// //       <tr>
// //         <th>Variant</th>
// //         <th>STD</th>
// //         <th>DLX</th>
// //         <th>H SMART</th>
// //       </tr>
// //     </thead>
// //     <tbody>
// //       <tr>
// //         <td>Ex-Showroom</td>
// //         <td>{scooter.price}</td>
// //         <td>₹95,864</td>
// //         <td>₹98,865</td>
// //       </tr>
// //       <tr>
// //         <td>Insurance</td>
// //         <td>₹6,809</td>
// //         <td>₹6,930</td>
// //         <td>₹6,965</td>
// //       </tr>
// //       <tr>
// //         <td>Road Tax</td>
// //         <td>₹11,734</td>
// //         <td>₹12,786</td>
// //         <td>₹13,087</td>
// //       </tr>
// //       <tr className="highlight">
// //         <td>On Road</td>
// //         <td>₹1,03,887</td>
// //         <td>₹1,15,580</td>
// //         <td>₹1,18,917</td>
// //       </tr>
// //       <tr>
// //         <td>Accessories</td>
// //         <td>₹4,980</td>
// //         <td>₹4,980</td>
// //         <td>₹4,980</td>
// //       </tr>
// //       <tr>
// //         <td>Regt & Handling</td>
// //         <td>₹1,985</td>
// //         <td>₹1,985</td>
// //         <td>₹1,985</td>
// //       </tr>
// //       {/* <tr className="total-row">
// //         <td>Total Amount</td>
// //         <td>₹1,10,852</td>
// //         <td>₹1,22,545</td>
// //         <td>₹1,25,882</td>
// //       </tr> */}
// //     </tbody>
// //   </table>
// // </div>

// //     </div>
// //   );
// // };

// // export default ScooterOverview;

// // src/components/ScooterOverview.jsx
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../Styles/ScooterOverview.css";

// import Scooter1 from "../assets/scooter images/Scooter1.jpeg";
// import Scooter2 from "../assets/scooter images/Scooter2.jpeg";
// import Scooter3 from "../assets/scooter images/Scooter3.jpeg";
// import Scooter4 from "../assets/scooter images/Scooter4.jpeg";
// import Scooter5 from "../assets/scooter images/Scooter5.jpeg";
// import Scooter6 from "../assets/scooter images/Scooter6.jpeg";

// const ScooterOverview = () => {
//   const location = useLocation();
//   const scooter = location.state?.scooter;

//   // Fallback
//   if (!scooter) {
//     return <p>No scooter selected. Please go back and choose one.</p>;
//   }

//   // 🎨 Colours (moved here from ScooterColours.jsx)
//   const colours = [
//     { name: "navy blue", hex: "rgb(12, 20, 32)", image: Scooter1 },
//     { name: "Dark Red / Maroon", hex: "rgb(104, 30, 33)", image: Scooter2 },
//     {
//       name: "Strontium Silver Metallic & Igneous Black",
//       hex: "#2B2B2B",
//       image: Scooter3,
//     },
//     { name: "Deep Blue Metallic", hex: "rgb(17, 67, 113)", image: Scooter4 },
//     { name: "Silver Metallic", hex: "#BBBBBB", image: Scooter5 },
//     { name: "Glossy Black", hex: "#000000", image: Scooter6 },
//   ];

//   const [selectedColour, setSelectedColour] = useState(colours[0]);

//   return (
//     <div className="scooter-overview-container">
//       {/* Bike Name */}
//       <h2 className="scooter-title">{scooter.name}</h2>

// <div className="scooter-content">
//   {/* Left Image */}
//   <div className="scooter-image">
//     <img src={selectedColour.image} alt={selectedColour.name} />
//   </div>

//   {/* Right Details */}
//   <div className="scooter-details">
//     <p className="scooter-description">{scooter.description}</p>

//     {/* Colours */}
//     <div className="scooter-colours-container">
//       <h3>Available Colours</h3>
//       <div className="colour-palette">
//         {colours.map((colour, idx) => (
//           <div
//             key={idx}
//             className={`colour-swatch ${
//               selectedColour.name === colour.name ? "active" : ""
//             }`}
//             style={{ backgroundColor: colour.hex }}
//             onClick={() => setSelectedColour(colour)}
//           />
//         ))}
//       </div>
//       <p className="selected-colour">Color: {selectedColour.name}</p>
//     </div>
//   </div>
// </div>

//       {/* Price Table */}
//       <div className="price-list">
//         <h3>Price Table</h3>
//         {/* ... existing table ... */}
//         <table>
//           <thead>
//             <tr>
//               <th>Variant</th>
//               <th>STD</th>
//               <th>DLX</th>
//               <th>H SMART</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Ex-Showroom</td>
//               <td>{scooter.price}</td>
//               <td>₹95,864</td>
//               <td>₹98,865</td>
//             </tr>
//             <tr>
//               <td>Insurance</td>
//               <td>₹6,809</td>
//               <td>₹6,930</td>
//               <td>₹6,965</td>
//             </tr>
//             <tr>
//               <td>Road Tax</td>
//               <td>₹11,734</td>
//               <td>₹12,786</td>
//               <td>₹13,087</td>
//             </tr>
//             <tr className="highlight">
//               <td>On Road</td>
//               <td>₹1,03,887</td>
//               <td>₹1,15,580</td>
//               <td>₹1,18,917</td>
//             </tr>
//             <tr>
//               <td>Accessories</td>
//               <td>₹4,980</td>
//               <td>₹4,980</td>
//               <td>₹4,980</td>
//             </tr>
//             <tr>
//               <td>Regt & Handling</td>
//               <td>₹1,985</td>
//               <td>₹1,985</td>
//               <td>₹1,985</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ScooterOverview;




// src/components/ScooterOverview.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/ScooterOverview.css";

// 🎨 Import local colour images
import Scooter1 from "../assets/scooter images/Scooter1.jpeg";
import Scooter2 from "../assets/scooter images/Scooter2.jpeg";
import Scooter3 from "../assets/scooter images/Scooter3.jpeg";
import Scooter4 from "../assets/scooter images/Scooter4.jpeg";
import Scooter5 from "../assets/scooter images/Scooter5.jpeg";
import Scooter6 from "../assets/scooter images/Scooter6.jpeg";

const ScooterOverview = () => {
  const location = useLocation();
  const scooter = location.state?.scooter;

  // 🔙 Fallback if no scooter passed
  if (!scooter) {
    return <p>No scooter selected. Please go back and choose one.</p>;
  }

  // 🎨 Colours for this scooter
  const colours = [
    { name: "Navy Blue", hex: "rgb(12, 20, 32)", image: Scooter1 },
    { name: "Dark Red / Maroon", hex: "rgb(104, 30, 33)", image: Scooter2 },
    {
      name: "Strontium Silver Metallic & Igneous Black",
      hex: "#2B2B2B",
      image: Scooter3,
    },
    { name: "Deep Blue Metallic", hex: "rgb(17, 67, 113)", image: Scooter4 },
    { name: "Silver Metallic", hex: "#BBBBBB", image: Scooter5 },
    { name: "Glossy Black", hex: "#000000", image: Scooter6 },
  ];

  const [selectedColour, setSelectedColour] = useState(colours[0]);

  return (
    <div className="scooter-overview-container">
      {/* 🚀 Title */}
      <h2 className="scooter-title">{scooter.name}</h2>

      <div className="scooter-content">
        {/* Left: Image */}
        <div className="scooter-image">
          <img src={selectedColour.image} alt={selectedColour.name} />
        </div>

        {/* Right: Details */}
        <div className="scooter-details">
          <p className="scooter-description">{scooter.description}</p>

          {/* 🎨 Colour Selector */}
          <div className="scooter-colours-container">
            <h3>Available Colours</h3>
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
            <p className="selected-colour">Selected: {selectedColour.name}</p>
          </div>
        </div>
      </div>

      {/* 💰 Price Table */}
      <div className="price-list">
        <h3>Price Table</h3>
        <table>
          <thead>
            <tr>
              <th>Variant</th>
              <th>STD</th>
              <th>DLX</th>
              <th>H-SMART</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ex-Showroom</td>
              <td>{scooter.price}</td>
              <td>₹95,864</td>
              <td>₹98,865</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>₹6,809</td>
              <td>₹6,930</td>
              <td>₹6,965</td>
            </tr>
            <tr>
              <td>Road Tax</td>
              <td>₹11,734</td>
              <td>₹12,786</td>
              <td>₹13,087</td>
            </tr>
            <tr className="highlight">
              <td>On Road</td>
              <td>₹1,03,887</td>
              <td>₹1,15,580</td>
              <td>₹1,18,917</td>
            </tr>
            <tr>
              <td>Accessories</td>
              <td>₹4,980</td>
              <td>₹4,980</td>
              <td>₹4,980</td>
            </tr>
            <tr>
              <td>Regt & Handling</td>
              <td>₹1,985</td>
              <td>₹1,985</td>
              <td>₹1,985</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScooterOverview;
