import React, { useState, useEffect, useRef } from 'react';

const ScooterViewer360 = ({ images, selectedColor, className = "" }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  // For demo purposes, we'll simulate 360 frames using rotation
  const totalFrames = 36; // 36 frames for 360 degrees (10 degrees per frame)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedColor]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const sensitivity = 2; // Adjust sensitivity
    const frameChange = Math.floor(deltaX / sensitivity);
    
    if (Math.abs(frameChange) > 0) {
      setCurrentFrame(prev => {
        const newFrame = (prev + frameChange) % totalFrames;
        return newFrame < 0 ? totalFrames + newFrame : newFrame;
      });
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    setCurrentFrame(prev => {
      const newFrame = (prev + direction) % totalFrames;
      return newFrame < 0 ? totalFrames + newFrame : newFrame;
    });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX]);

  const rotation = (currentFrame / totalFrames) * 360;

  return (
    <div 
      ref={containerRef}
      className={`scooter-360-viewer ${className}`}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      style={{
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        overflow: 'hidden',
        borderRadius: '10px'
      }}
    >
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          fontSize: '14px'
        }}>
          Loading 360° View...
        </div>
      )}
      
      <div style={{
        transform: `rotateY(${rotation}deg)`,
        transformStyle: 'preserve-3d',
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}>
        <img 
          src={selectedColor.image} 
          alt={selectedColor.name}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxWidth: '500px',
            margin: '0 auto'
          }}
          draggable={false}
        />
      </div>

      {/* 360 Indicator */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, #d50000, #b71c1c)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
        boxShadow: '0 4px 15px rgba(213,0,0,0.3)',
        animation: 'pulse 2s infinite',
        zIndex: 5
      }}>
        🔄 360° View - Drag to rotate
      </div>

      {/* Progress Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '4px',
        background: 'rgba(255,255,255,0.3)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${(currentFrame / totalFrames) * 100}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #d50000, #ff4444)',
          borderRadius: '2px',
          transition: 'width 0.1s ease-out'
        }} />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default ScooterViewer360;