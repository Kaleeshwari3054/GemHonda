// // // // src/components/ScooterOverview.jsx
// // // import React from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import "../Styles/ScooterOverview.css";

// // // const ScooterOverview = () => {
// // //   const location = useLocation();
// // //   const scooter = location.state?.scooter;

// // //   // If no data was passed, show a fallback
// // //   if (!scooter) {
// // //     return <p>No scooter selected. Please go back and choose one.</p>;
// // //   }

// // //   return (
// // //     <div className="scooter-overview-container">
// // //       {/* Tabs */}
// // //       <div className="scooter-tabs">
// // //         <span className="active">Overview</span>
// // //         <Link to="/scooter-colours-container">Colours</Link>
// // //       </div>

// // //       {/* Overview Section */}
// // //       <div className="scooter-content">
// // //         <div className="scooter-image">
// // //           <img src={scooter.image} alt={scooter.name} />
// // //         </div>
// // //         <div className="scooter-details">
// // //           <h2>{scooter.name}</h2>
// // //           <p className="price">
// // //             {scooter.price} <span>{scooter.priceNote}</span>
// // //           </p>
// // //           <p className="description">{scooter.description}</p>

// // //         </div>
// // //       </div>

// // //       {/* 🚀 Price Table */}
// // //      <div className="price-list">
// // //   <h3>Price Table</h3>
// // //   <table>
// // //     <thead>
// // //       <tr>
// // //         <th>Variant</th>
// // //         <th>STD</th>
// // //         <th>DLX</th>
// // //         <th>H SMART</th>
// // //       </tr>
// // //     </thead>
// // //     <tbody>
// // //       <tr>
// // //         <td>Ex-Showroom</td>
// // //         <td>{scooter.price}</td>
// // //         <td>₹95,864</td>
// // //         <td>₹98,865</td>
// // //       </tr>
// // //       <tr>
// // //         <td>Insurance</td>
// // //         <td>₹6,809</td>
// // //         <td>₹6,930</td>
// // //         <td>₹6,965</td>
// // //       </tr>
// // //       <tr>
// // //         <td>Road Tax</td>
// // //         <td>₹11,734</td>
// // //         <td>₹12,786</td>
// // //         <td>₹13,087</td>
// // //       </tr>
// // //       <tr className="highlight">
// // //         <td>On Road</td>
// // //         <td>₹1,03,887</td>
// // //         <td>₹1,15,580</td>
// // //         <td>₹1,18,917</td>
// // //       </tr>
// // //       <tr>
// // //         <td>Accessories</td>
// // //         <td>₹4,980</td>
// // //         <td>₹4,980</td>
// // //         <td>₹4,980</td>
// // //       </tr>
// // //       <tr>
// // //         <td>Regt & Handling</td>
// // //         <td>₹1,985</td>
// // //         <td>₹1,985</td>
// // //         <td>₹1,985</td>
// // //       </tr>
// // //       {/* <tr className="total-row">
// // //         <td>Total Amount</td>
// // //         <td>₹1,10,852</td>
// // //         <td>₹1,22,545</td>
// // //         <td>₹1,25,882</td>
// // //       </tr> */}
// // //     </tbody>
// // //   </table>
// // // </div>

// // //     </div>
// // //   );
// // // };

// // // export default ScooterOverview;

// // // src/components/ScooterOverview.jsx
// // import React, { useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import "../Styles/ScooterOverview.css";

// // import Scooter1 from "../assets/scooter images/Scooter1.jpeg";
// // import Scooter2 from "../assets/scooter images/Scooter2.jpeg";
// // import Scooter3 from "../assets/scooter images/Scooter3.jpeg";
// // import Scooter4 from "../assets/scooter images/Scooter4.jpeg";
// // import Scooter5 from "../assets/scooter images/Scooter5.jpeg";
// // import Scooter6 from "../assets/scooter images/Scooter6.jpeg";

// // const ScooterOverview = () => {
// //   const location = useLocation();
// //   const scooter = location.state?.scooter;

// //   // Fallback
// //   if (!scooter) {
// //     return <p>No scooter selected. Please go back and choose one.</p>;
// //   }

// //   // 🎨 Colours (moved here from ScooterColours.jsx)
// //   const colours = [
// //     { name: "navy blue", hex: "rgb(12, 20, 32)", image: Scooter1 },
// //     { name: "Dark Red / Maroon", hex: "rgb(104, 30, 33)", image: Scooter2 },
// //     {
// //       name: "Strontium Silver Metallic & Igneous Black",
// //       hex: "#2B2B2B",
// //       image: Scooter3,
// //     },
// //     { name: "Deep Blue Metallic", hex: "rgb(17, 67, 113)", image: Scooter4 },
// //     { name: "Silver Metallic", hex: "#BBBBBB", image: Scooter5 },
// //     { name: "Glossy Black", hex: "#000000", image: Scooter6 },
// //   ];

// //   const [selectedColour, setSelectedColour] = useState(colours[0]);

// //   return (
// //     <div className="scooter-overview-container">
// //       {/* Bike Name */}
// //       <h2 className="scooter-title">{scooter.name}</h2>

// // <div className="scooter-content">
// //   {/* Left Image */}
// //   <div className="scooter-image">
// //     <img src={selectedColour.image} alt={selectedColour.name} />
// //   </div>

// //   {/* Right Details */}
// //   <div className="scooter-details">
// //     <p className="scooter-description">{scooter.description}</p>

// //     {/* Colours */}
// //     <div className="scooter-colours-container">
// //       <h3>Available Colours</h3>
// //       <div className="colour-palette">
// //         {colours.map((colour, idx) => (
// //           <div
// //             key={idx}
// //             className={`colour-swatch ${
// //               selectedColour.name === colour.name ? "active" : ""
// //             }`}
// //             style={{ backgroundColor: colour.hex }}
// //             onClick={() => setSelectedColour(colour)}
// //           />
// //         ))}
// //       </div>
// //       <p className="selected-colour">Color: {selectedColour.name}</p>
// //     </div>
// //   </div>
// // </div>

// //       {/* Price Table */}
// //       <div className="price-list">
// //         <h3>Price Table</h3>
// //         {/* ... existing table ... */}
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Variant</th>
// //               <th>STD</th>
// //               <th>DLX</th>
// //               <th>H SMART</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td>Ex-Showroom</td>
// //               <td>{scooter.price}</td>
// //               <td>₹95,864</td>
// //               <td>₹98,865</td>
// //             </tr>
// //             <tr>
// //               <td>Insurance</td>
// //               <td>₹6,809</td>
// //               <td>₹6,930</td>
// //               <td>₹6,965</td>
// //             </tr>
// //             <tr>
// //               <td>Road Tax</td>
// //               <td>₹11,734</td>
// //               <td>₹12,786</td>
// //               <td>₹13,087</td>
// //             </tr>
// //             <tr className="highlight">
// //               <td>On Road</td>
// //               <td>₹1,03,887</td>
// //               <td>₹1,15,580</td>
// //               <td>₹1,18,917</td>
// //             </tr>
// //             <tr>
// //               <td>Accessories</td>
// //               <td>₹4,980</td>
// //               <td>₹4,980</td>
// //               <td>₹4,980</td>
// //             </tr>
// //             <tr>
// //               <td>Regt & Handling</td>
// //               <td>₹1,985</td>
// //               <td>₹1,985</td>
// //               <td>₹1,985</td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScooterOverview;




// // src/components/ScooterOverview.jsx
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../Styles/ScooterOverview.css";

// // 🎨 Import local colour images
// import Scooter1 from "../assets/scooter images/Scooter1.jpeg";
// import Scooter2 from "../assets/scooter images/Scooter2.jpeg";
// import Scooter3 from "../assets/scooter images/Scooter3.jpeg";
// import Scooter4 from "../assets/scooter images/Scooter4.jpeg";
// import Scooter5 from "../assets/scooter images/Scooter5.jpeg";
// import Scooter6 from "../assets/scooter images/Scooter6.jpeg";

// const ScooterOverview = () => {
//   const location = useLocation();
//   const scooter = location.state?.scooter;

//   // 🔙 Fallback if no scooter passed
//   if (!scooter) {
//     return <p>No scooter selected. Please go back and choose one.</p>;
//   }

//   // 🎨 Colours for this scooter
//   const colours = [
//     { name: "Navy Blue", hex: "rgb(12, 20, 32)", image: Scooter1 },
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
//       {/* 🚀 Title */}
//       <h2 className="scooter-title">{scooter.name}</h2>

//       <div className="scooter-content">
//         {/* Left: Image */}
//         <div className="scooter-image">
//           <img src={selectedColour.image} alt={selectedColour.name} />
//         </div>

//         {/* Right: Details */}
//         <div className="scooter-details">
//           <p className="scooter-description">{scooter.description}</p>

//           {/* 🎨 Colour Selector */}
//           <div className="scooter-colours-container">
//             <h3>Available Colours</h3>
//             <div className="colour-palette">
//               {colours.map((colour, idx) => (
//                 <div
//                   key={idx}
//                   className={`colour-swatch ${
//                     selectedColour.name === colour.name ? "active" : ""
//                   }`}
//                   style={{ backgroundColor: colour.hex }}
//                   onClick={() => setSelectedColour(colour)}
//                   title={colour.name}
//                 />
//               ))}
//             </div>
//             <p className="selected-colour">Selected: {selectedColour.name}</p>
//           </div>
//         </div>
//       </div>

//       {/* 💰 Price Table */}
//       <div className="price-list">
//         <h3>Price Table</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Variant</th>
//               <th>STD</th>
//               <th>DLX</th>
//               <th>H-SMART</th>
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


// // src/components/ScooterDetails.jsx
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../Styles/BikeDetails.css"; // ✅ Reuse same styles

// // 🎨 Import local colour images
// import Scooter1 from "../assets/scooter images/Scooter1.jpeg";
// import Scooter2 from "../assets/scooter images/Scooter2.jpeg";
// import Scooter3 from "../assets/scooter images/Scooter3.jpeg";
// import Scooter4 from "../assets/scooter images/Scooter4.jpeg";
// import Scooter5 from "../assets/scooter images/Scooter5.jpeg";
// import Scooter6 from "../assets/scooter images/Scooter6.jpeg";

// const ScooterDetails = () => {
//   const location = useLocation();
//   const { scooter } = location.state || {}; // get scooter from navigation

//   if (!scooter) {
//     return <p>No scooter selected. Please go back and choose one.</p>;
//   }

//   // 🎨 Available colours
//   const colors = [
//     { name: "Navy Blue", image: Scooter1 },
//     { name: "Dark Red", image: Scooter2 },
//     { name: "Silver + Black", image: Scooter3 },
//     { name: "Deep Blue", image: Scooter4 },
//     { name: "Silver Metallic", image: Scooter5 },
//     { name: "Glossy Black", image: Scooter6 },
//   ];

//   const [selectedImage, setSelectedImage] = useState(colors[0].image);

//   return (
//     <>
//       <div className="bike-details-container">
//         <h1>{scooter.name}</h1>

//         {/* Main Image */}
//         <img
//           src={selectedImage}
//           alt={scooter.name}
//           className="bike-main-image"
//         />

//         {/* Price */}
//         <h1 className="bike-price">
//           Price: <span className="bike-details">{scooter.price}</span>
//         </h1>

//         {/* Description */}
//         <h1 className="bike-price">
//           Description:{" "}
//           <span className="bike-details">{scooter.description}</span>
//         </h1>

//         {/* Colour Picker */}
//         <div className="color-picker">
//           <h3>Choose Color:</h3>
//           {colors.map((color, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedImage(color.image)}
//               style={{
//                 background: `url(${color.image}) center/cover no-repeat`,
//                 width: "40px",
//                 height: "40px",
//                 margin: "5px",
//                 border: selectedImage === color.image ? "2px solid #000" : "2px solid #ccc",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//               }}
//               title={color.name}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Price Table */}
//       <div className="price-list">
//         <h3>Price Table</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Variant</th>
//               <th>STD</th>
//               <th>DLX</th>
//               <th>H-SMART</th>
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
//     </>
//   );
// };

// export default ScooterDetails;



// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "../Styles/BikeDetails.css";

// import Activa125_1 from "../pages/scooters/activa125-Mat Axis Gray Metallic.png";
// import Activa125_2 from "../pages/scooters/activa125-Pearl Deep Ground Gray.png";
// import Activa125_3 from "../pages/scooters/activa125-Pearl Igneous Black.png";
// import Activa125_4 from "../pages/scooters/activa125-Pearl Precious White.png";
// import Activa125_5 from "../pages/scooters/activa125-Pearl Siren Blue.png";
// import Activa125_6 from "../pages/scooters/activa125-Rebel Red Metallic.png";

// import Activa110_1 from "../pages/scooters/activa110-Decent Blue Metallic.png";
// import Activa110_2 from "../pages/scooters/activa110-Mat Axis Gray Metallic.png";
// import Activa110_3 from "../pages/scooters/activa110-Pearl Igneous Black.png";
// import Activa110_4 from "../pages/scooters/activa110-Pearl Precious White.png";
// import Activa110_5 from "../pages/scooters/activa110-Pearl Siren Blue.png";
// import Activa110_6 from "../pages/scooters/activa110-Rebel Red Metallic.png";

// import Dio125_1 from "../pages/scooters/dio125-Imperial Red.png";
// import Dio125_2 from "../pages/scooters/dio125-Mat Marvel Blue Metallic.png";
// import Dio125_3 from "../pages/scooters/dio125-Pearl Deep Ground Gray (Emblem).png";
// import Dio125_4 from "../pages/scooters/dio125-Pearl Deep Ground Gray (Stripe).png";
// import Dio125_5 from "../pages/scooters/dio125-Pearl Igneous Black.png";
// import Dio125_6 from "../pages/scooters/dio125-Pearl Sports Yellow.png";

// import Dio110_1 from "../pages/scooters/dio110-Imperial Red Metallic​.png";
// import Dio110_2 from "../pages/scooters/dio110-Mat Axis Gray Metallic.png";
// import Dio110_3 from "../pages/scooters/dio110-Mat Marvel Blue.png";
// import Dio110_4 from "../pages/scooters/dio110-Pearl Igneous Black + Pearl Deep Ground Gray.png";
// import Dio110_5 from "../pages/scooters/dio110-Pearl Igneous Black.png";

// const ScooterOverview = () => {
//   const location = useLocation();
//   const { scooter } = location.state || {};

//   if (!scooter) {
//     return <p>No scooter selected. Please go back and choose one.</p>;
//   }

//   let colors = [];

//   if (scooter.name === "Activa 125") {
//     colors = [
//       { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Activa125_1 },
//       { name: "Pearl Deep Ground Gray", code: "#444444", image: Activa125_2 },
//       { name: "Pearl Igneous Black", code: "#000000", image: Activa125_3 },
//       { name: "Pearl Precious White", code: "#ffffff", image: Activa125_4 },
//       { name: "Pearl Siren Blue", code: "#1e3a8a", image: Activa125_5 },
//       { name: "Rebel Red Metallic", code: "#8b0000", image: Activa125_6 },
//     ];
//   } else if (scooter.name === "Activa 110") {
//     colors = [
//       { name: "Decent Blue Metallic", code: "#1a2b8a", image: Activa110_1 },
//       { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Activa110_2 },
//       { name: "Pearl Igneous Black", code: "#000000", image: Activa110_3 },
//       { name: "Pearl Precious White", code: "#ffffff", image: Activa110_4 },
//       { name: "Pearl Siren Blue", code: "#1e40af", image: Activa110_5 },
//       { name: "Rebel Red Metallic", code: "#8b0000", image: Activa110_6 },
//     ];
//   } else if (scooter.name === "Dio 125") {
//     colors = [
//       { name: "Imperial Red", code: "#ff1b1b", image: Dio125_1 },
//       { name: "Mat Marvel Blue Metallic", code: "#1e3a8a", image: Dio125_2 },
//       { name: "Pearl Deep Ground Gray (Emblem)", code: "#444444", image: Dio125_3 },
//       { name: "Pearl Deep Ground Gray (Stripe)", code: "#555555", image: Dio125_4 },
//       { name: "Pearl Igneous Black", code: "#000000", image: Dio125_5 },
//       { name: "Pearl Sports Yellow", code: "#facc15", image: Dio125_6 },
//     ];
//   } else if (scooter.name === "Dio 110") {
//     colors = [
//       { name: "Imperial Red Metallic", code: "#ff1b1b", image: Dio110_1 },
//       { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Dio110_2 },
//       { name: "Mat Marvel Blue", code: "#1e3a8a", image: Dio110_3 },
//       { name: "Pearl Igneous Black + Pearl Deep Ground Gray", code: "#333333", image: Dio110_4 },
//       { name: "Pearl Igneous Black", code: "#000000", image: Dio110_5 },
//     ];
//   }

//   const [selectedImage, setSelectedImage] = useState(colors[0].image);
//   const [selectedColorName, setSelectedColorName] = useState(colors[0].name);
//   const [animate, setAnimate] = useState(true);

//   // When color changes, trigger fade animation
//   const handleColorChange = (color) => {
//     setAnimate(false);
//     setTimeout(() => {
//       setSelectedImage(color.image);
//       setSelectedColorName(color.name);
//       setAnimate(true);
//     }, 200);
//   };

//   return (
//     <div className="bike-details-container">
//       <h1>{scooter.name}</h1>

//       {/* 🏍️ Image with rotation + fade animation */}
//       <div className={`bike-image-wrapper ${animate ? "fade-in" : ""}`}>
//         <img src={selectedImage} alt={scooter.name} className="bike-main-image spin-once" />
//       </div>

//       <h2>Price: <span>{scooter.price}</span></h2>
//       <p className="bike-description">{scooter.description}</p>

//       {/* 🎨 Color Picker */}
//       <div className="color-picker">
//         <h3>Choose Color:</h3>
//         <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
//           {colors.map((color, index) => (
//             <div
//               key={index}
//               onClick={() => handleColorChange(color)}
//               style={{
//                 backgroundColor: color.code,
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//                 transform: selectedImage === color.image ? "scale(1.2)" : "scale(1)",
//                 transition: "transform 0.3s ease",
//               }}
//               title={color.name}
//             />
//           ))}
//         </div>
//         <p style={{ marginTop: "10px" }}>
//           Selected Color: <strong>{selectedColorName}</strong>
//         </p>
        
//       </div>
//        {/* Price Table */}
//       <div className="price-list">
//         <h3>Price Table</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Variant</th>
//               <th>STD</th>
//               <th>DLX</th>
//               <th>H-SMART</th>
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

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/BikeDetails.css";

// Activa 125 Images
import Activa125_1 from "../pages/scooters/activa125-Mat Axis Gray Metallic.png";
import Activa125_2 from "../pages/scooters/activa125-Pearl Deep Ground Gray.png";
import Activa125_3 from "../pages/scooters/activa125-Pearl Igneous Black.png";
import Activa125_4 from "../pages/scooters/activa125-Pearl Precious White.png";
import Activa125_5 from "../pages/scooters/activa125-Pearl Siren Blue.png";
import Activa125_6 from "../pages/scooters/activa125-Rebel Red Metallic.png";

// Activa 110 Images
import Activa110_1 from "../pages/scooters/activa110-Decent Blue Metallic.png";
import Activa110_2 from "../pages/scooters/activa110-Mat Axis Gray Metallic.png";
import Activa110_3 from "../pages/scooters/activa110-Pearl Igneous Black.png";
import Activa110_4 from "../pages/scooters/activa110-Pearl Precious White.png";
import Activa110_5 from "../pages/scooters/activa110-Pearl Siren Blue.png";
import Activa110_6 from "../pages/scooters/activa110-Rebel Red Metallic.png";

// Dio 125 Images
import Dio125_1 from "../pages/scooters/dio125-Imperial Red.png";
import Dio125_2 from "../pages/scooters/dio125-Mat Marvel Blue Metallic.png";
import Dio125_3 from "../pages/scooters/dio125-Pearl Deep Ground Gray (Emblem).png";
import Dio125_4 from "../pages/scooters/dio125-Pearl Deep Ground Gray (Stripe).png";
import Dio125_5 from "../pages/scooters/dio125-Pearl Igneous Black.png";
import Dio125_6 from "../pages/scooters/dio125-Pearl Sports Yellow.png";

// Dio 110 Images
import Dio110_1 from "../pages/scooters/dio110-Imperial Red Metallic​.png";
import Dio110_2 from "../pages/scooters/dio110-Mat Axis Gray Metallic.png";
import Dio110_3 from "../pages/scooters/dio110-Mat Marvel Blue.png";
import Dio110_4 from "../pages/scooters/dio110-Pearl Igneous Black + Pearl Deep Ground Gray.png";
import Dio110_5 from "../pages/scooters/dio110-Pearl Igneous Black.png";

const ScooterOverview = () => {
  const location = useLocation();
  const { scooter } = location.state || {};

  if (!scooter) return <p>No scooter selected. Please go back and choose one.</p>;

  // Define available colors per scooter
  let colors = [];

  if (scooter.name === "Activa 125") {
    colors = [
      { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Activa125_1 },
      { name: "Pearl Deep Ground Gray", code: "#444444", image: Activa125_2 },
      { name: "Pearl Igneous Black", code: "#000000", image: Activa125_3 },
      { name: "Pearl Precious White", code: "#ffffff", image: Activa125_4 },
      { name: "Pearl Siren Blue", code: "#1e3a8a", image: Activa125_5 },
      { name: "Rebel Red Metallic", code: "#8b0000", image: Activa125_6 },
    ];
  } else if (scooter.name === "Activa 110") {
    colors = [
      { name: "Decent Blue Metallic", code: "#1a2b8a", image: Activa110_1 },
      { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Activa110_2 },
      { name: "Pearl Igneous Black", code: "#000000", image: Activa110_3 },
      { name: "Pearl Precious White", code: "#ffffff", image: Activa110_4 },
      { name: "Pearl Siren Blue", code: "#1e40af", image: Activa110_5 },
      { name: "Rebel Red Metallic", code: "#8b0000", image: Activa110_6 },
    ];
  } else if (scooter.name === "Dio 125") {
    colors = [
      { name: "Imperial Red", code: "#ff1b1b", image: Dio125_1 },
      { name: "Mat Marvel Blue Metallic", code: "#1e3a8a", image: Dio125_2 },
      { name: "Pearl Deep Ground Gray (Emblem)", code: "#444444", image: Dio125_3 },
      { name: "Pearl Deep Ground Gray (Stripe)", code: "#555555", image: Dio125_4 },
      { name: "Pearl Igneous Black", code: "#000000", image: Dio125_5 },
      { name: "Pearl Sports Yellow", code: "#facc15", image: Dio125_6 },
    ];
  } else if (scooter.name === "Dio 110") {
    colors = [
      { name: "Imperial Red Metallic", code: "#ff1b1b", image: Dio110_1 },
      { name: "Mat Axis Gray Metallic", code: "#4a4a4a", image: Dio110_2 },
      { name: "Mat Marvel Blue", code: "#1e3a8a", image: Dio110_3 },
      { name: "Pearl Igneous Black + Pearl Deep Ground Gray", code: "#333333", image: Dio110_4 },
      { name: "Pearl Igneous Black", code: "#000000", image: Dio110_5 },
    ];
  }

  const [selectedImage, setSelectedImage] = useState(colors[0].image);
  const [selectedColorName, setSelectedColorName] = useState(colors[0].name);

  const handleColorChange = (color) => {
    setSelectedImage(color.image);
    setSelectedColorName(color.name);
  };

  return (
    <div className="bike-details-container">
      <h1>{scooter.name}</h1>

      {/* Bike Image */}
      <div className="bike-image-wrapper">
        <img src={selectedImage} alt={scooter.name} className="bike-main-image" />
      </div>

      {/* Price and Description */}
      <h2>Price: <span>{scooter.price}</span></h2>
      <p className="bike-description">{scooter.description}</p>

      {/* Color Picker */}
      <div className="color-picker">
        <h3>Choose Color:</h3>
        <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorChange(color)}
              style={{
                backgroundColor: color.code,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                transform: selectedImage === color.image ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
              title={color.name}
            />
          ))}
        </div>
        <p style={{ marginTop: "10px" }}>
          Selected Color: <strong>{selectedColorName}</strong>
        </p>
      </div>

      {/* Price Table */}
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
