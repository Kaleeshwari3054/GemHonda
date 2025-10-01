// import React, { useState, useEffect, useRef } from 'react';

// const ScooterViewer360 = ({ selectedColor, className = "" }) => {
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [autoRotate, setAutoRotate] = useState(true);
//   const containerRef = useRef(null);
//   const autoRotateRef = useRef(null);

//   // For demo purposes, we'll simulate 360 frames using rotation
//   const totalFrames = 72; // 72 frames for 360 degrees (5 degrees per frame)

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, [selectedColor]);

//   // Auto-rotate effect
//   useEffect(() => {
//     if (autoRotate && !isDragging && !isLoading) {
//       autoRotateRef.current = setInterval(() => {
//         setCurrentFrame(prev => (prev + 1) % totalFrames);
//       }, 100); // Smooth rotation
//     } else {
//       clearInterval(autoRotateRef.current);
//     }

//     return () => clearInterval(autoRotateRef.current);
//   }, [autoRotate, isDragging, isLoading, totalFrames]);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setAutoRotate(false);
//     setStartX(e.clientX);
//     e.preventDefault();
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
    
//     const deltaX = e.clientX - startX;
//     const sensitivity = 3; // Adjust sensitivity
//     const frameChange = Math.floor(deltaX / sensitivity);
    
//     if (Math.abs(frameChange) > 0) {
//       setCurrentFrame(prev => {
//         const newFrame = (prev + frameChange) % totalFrames;
//         return newFrame < 0 ? totalFrames + newFrame : newFrame;
//       });
//       setStartX(e.clientX);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     // Resume auto-rotate after 3 seconds of inactivity
//     setTimeout(() => {
//       if (!isDragging) {
//         setAutoRotate(true);
//       }
//     }, 3000);
//   };

//   const handleWheel = (e) => {
//     e.preventDefault();
//     setAutoRotate(false);
//     const direction = e.deltaY > 0 ? 1 : -1;
//     setCurrentFrame(prev => {
//       const newFrame = (prev + direction * 2) % totalFrames;
//       return newFrame < 0 ? totalFrames + newFrame : newFrame;
//     });
    
//     // Resume auto-rotate after wheel stops
//     setTimeout(() => {
//       setAutoRotate(true);
//     }, 2000);
//   };

//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setAutoRotate(false);
//     setStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
    
//     const deltaX = e.touches[0].clientX - startX;
//     const sensitivity = 2;
//     const frameChange = Math.floor(deltaX / sensitivity);
    
//     if (Math.abs(frameChange) > 0) {
//       setCurrentFrame(prev => {
//         const newFrame = (prev + frameChange) % totalFrames;
//         return newFrame < 0 ? totalFrames + newFrame : newFrame;
//       });
//       setStartX(e.touches[0].clientX);
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//     setTimeout(() => {
//       if (!isDragging) {
//         setAutoRotate(true);
//       }
//     }, 3000);
//   };

//   useEffect(() => {
//     const handleGlobalMouseMove = (e) => handleMouseMove(e);
//     const handleGlobalMouseUp = () => handleMouseUp();

//     if (isDragging) {
//       document.addEventListener('mousemove', handleGlobalMouseMove);
//       document.addEventListener('mouseup', handleGlobalMouseUp);
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleGlobalMouseMove);
//       document.removeEventListener('mouseup', handleGlobalMouseUp);
//     };
//   }, [isDragging, startX]);

//   const rotation = (currentFrame / totalFrames) * 360;

//   return (
//     <div 
//       ref={containerRef}
//       className={`scooter-360-viewer ${className}`}
//       onMouseDown={handleMouseDown}
//       onWheel={handleWheel}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       style={{
//         position: 'relative',
//         cursor: isDragging ? 'grabbing' : 'grab',
//         userSelect: 'none',
//         overflow: 'hidden',
//         borderRadius: '15px',
//         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//         padding: '20px',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//         border: '2px solid #e9ecef'
//       }}
//     >
//       {isLoading && (
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 10,
//           background: 'rgba(213, 0, 0, 0.95)',
//           color: 'white',
//           padding: '15px 25px',
//           borderRadius: '25px',
//           fontSize: '14px',
//           fontWeight: '600',
//           boxShadow: '0 8px 25px rgba(213,0,0,0.3)',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//             <div style={{
//               width: '20px',
//               height: '20px',
//               border: '2px solid transparent',
//               borderTop: '2px solid white',
//               borderRadius: '50%',
//               animation: 'spin 1s linear infinite'
//             }}></div>
//             Loading 360° View...
//           </div>
//         </div>
//       )}
      
//       <div style={{
//         transform: `rotateY(${rotation}deg)`,
//         transformStyle: 'preserve-3d',
//         transition: isDragging ? 'none' : autoRotate ? 'transform 0.1s linear' : 'transform 0.2s ease-out',
//         perspective: '1000px'
//       }}>
//         <img 
//           src={selectedColor.image} 
//           alt={selectedColor.name}
//           style={{
//             width: '100%',
//             height: 'auto',
//             display: 'block',
//             maxWidth: '500px',
//             margin: '0 auto',
//             filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
//             transition: 'filter 0.3s ease'
//           }}
//           draggable={false}
//         />
//       </div>

//       {/* Enhanced 360 Indicator */}
//       <div style={{
//         position: 'absolute',
//         top: '20px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         background: 'linear-gradient(135deg, #d50000, #b71c1c)',
//         color: 'white',
//         padding: '10px 20px',
//         borderRadius: '25px',
//         fontSize: '13px',
//         fontWeight: '700',
//         boxShadow: '0 6px 20px rgba(213,0,0,0.4)',
//         animation: autoRotate ? 'pulse 2s infinite' : 'none',
//         zIndex: 5,
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <span style={{ fontSize: '16px' }}>🔄</span>
//         360° Interactive View
//         {autoRotate && <span style={{ fontSize: '10px', opacity: 0.8 }}>(Auto-rotating)</span>}
//       </div>

//       {/* Enhanced Progress Indicator */}
//       <div style={{
//         position: 'absolute',
//         bottom: '20px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         width: '250px',
//         height: '6px',
//         background: 'rgba(255,255,255,0.4)',
//         borderRadius: '3px',
//         overflow: 'hidden',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
//       }}>
//         <div style={{
//           width: `${(currentFrame / totalFrames) * 100}%`,
//           height: '100%',
//           background: 'linear-gradient(90deg, #d50000, #ff4444, #d50000)',
//           borderRadius: '3px',
//           transition: 'width 0.1s ease-out',
//           boxShadow: '0 0 10px rgba(213,0,0,0.5)'
//         }} />
//       </div>

//       {/* Control Hints */}
//       <div style={{
//         position: 'absolute',
//         bottom: '35px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         color: '#666',
//         fontSize: '11px',
//         textAlign: 'center',
//         background: 'rgba(255,255,255,0.9)',
//         padding: '5px 12px',
//         borderRadius: '15px',
//         backdropFilter: 'blur(5px)'
//       }}>
//         Drag to rotate • Scroll to spin • Touch & swipe on mobile
//       </div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.9; transform: translateX(-50%) scale(1); }
//           50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
//         }
        
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ScooterViewer360;

import React, { useState, useRef } from "react";

const ScooterViewer360 = ({ frames, className = "" }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const frameRef = useRef(0);
  const totalFrames = frames.length;

  // ✅ Function to update frame safely
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

  // 🖱️ Mouse scroll → rotate 360°
  const handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1; // scroll down = forward, up = back
    updateFrame(direction * 2); // change *2 = faster
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
