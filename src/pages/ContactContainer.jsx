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

import React, { useState, useEffect, useRef } from "react";

const ScooterViewer360 = ({ frames, className = "" }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef(null);

  const totalFrames = frames.length;

  // Auto-rotate
  useEffect(() => {
    if (autoRotate && !isDragging) {
      autoRotateRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % totalFrames);
      }, 80); // adjust speed
    } else {
      clearInterval(autoRotateRef.current);
    }

    return () => clearInterval(autoRotateRef.current);
  }, [autoRotate, isDragging, totalFrames]);

  // Mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const frameChange = Math.floor(deltaX / 5); // sensitivity
    if (Math.abs(frameChange) > 0) {
      setCurrentFrame((prev) => {
        let newFrame = (prev + frameChange) % totalFrames;
        if (newFrame < 0) newFrame += totalFrames;
        return newFrame;
      });
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  // Touch support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const frameChange = Math.floor(deltaX / 5);
    if (Math.abs(frameChange) > 0) {
      setCurrentFrame((prev) => {
        let newFrame = (prev + frameChange) % totalFrames;
        if (newFrame < 0) newFrame += totalFrames;
        return newFrame;
      });
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  return (
    <div
      className={`scooter-360-viewer ${className}`}
      style={{
        position: "relative",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        overflow: "hidden",
        borderRadius: "15px",
        background: "#f5f5f5",
        padding: "10px",
        maxWidth: "500px",
        margin: "0 auto"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={frames[currentFrame]}
        alt="Scooter 360 view"
        style={{ width: "100%", height: "auto", display: "block" }}
        draggable={false}
      />
    </div>
  );
};

export default ScooterViewer360;
