// import React from "react";
// import "../Styles/ContactContainer.css";

// const ContactContainer = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <p className="subtitle">
//         We’re here to help! Reach out to us for inquiries, bookings, or support.
//       </p>

//       <div className="contact-content">
//         {/* Left Side - Form */}
//         <div className="contact-form">
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input type="text" id="name" placeholder="Enter your name" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" placeholder="Enter your email" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input type="tel" id="phone" placeholder="Enter your phone" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" placeholder="Write your message..." rows="4" required></textarea>
//             </div>

//             <button type="submit" className="submit-btn">Send Message</button>
//           </form>
//         </div>

//         {/* Right Side - Info + Map */}
//         <div className="contact-info">
//           <h3>Honda Bike Showroom</h3>
//           <p>📍 2/9 Yaathaval Street,Virugambakkam Chennai, Tamil Nadu, India</p>
//           <p>📞 +91 909 432 0000 </p>
//           <p>✉️ thegemhonda@gmail.com</p>
// <div className="map">
//   <img 
//     src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg" 
//     alt="Honda Showroom" 
//     className="map-image"
//   />
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactContainer;

import React, { useState, useRef } from "react";

const ScooterViewer360 = ({ frames, className = "" }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const frameRef = useRef(0);
  const totalFrames = frames.length;

  // ✅ Function to update frame smoothly
  const updateFrame = (change) => {
    frameRef.current = (frameRef.current + change + totalFrames) % totalFrames;
    setCurrentFrame(frameRef.current);
  };

  // 🖱️ Mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const sensitivity = 4; // smaller = faster rotation
    const frameChange = Math.floor(deltaX / sensitivity);
    if (frameChange !== 0) {
      updateFrame(frameChange);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // 🖱️ Mouse scroll (wheel)
  const handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1; // scroll down → forward, up → back
    updateFrame(direction);
  };

  // 📱 Touch drag
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 4;
    const frameChange = Math.floor(deltaX / sensitivity);
    if (frameChange !== 0) {
      updateFrame(frameChange);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div
      className={`scooter-360-viewer ${className}`}
      style={{
        position: "relative",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        overflow: "hidden",
        borderRadius: "12px",
        background: "#f9f9f9",
        padding: "10px",
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={frames[currentFrame]}
        alt="Scooter 360 view"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable={false}
      />
    </div>
  );
};

export default ScooterViewer360;
