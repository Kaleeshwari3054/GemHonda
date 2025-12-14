// // import React from "react";
// // import imageSrc from "../assets/image.png";
// // import About1 from "../assets/About-img/Aboutus-1.jpeg";
// // import Abou2 from "../assets/About-img/Aboutus-2.jpeg";
// // import About3 from "../assets/About-img/Aboutus-3.jpeg";
// // import About4 from "../assets/About-img/Aboutus-4.jpeg";
// // import About5 from "../assets/About-img/Aboutus-5.jpeg";
// // import About6 from "../assets/About-img/Aboutus-6.jpeg";
// // import About7 from "../assets/About-img/Aboutus-7.jpeg";

// // export default function AboutUs() {
// //   const ScrollingImages = () => {
// //   const images = [About1, Abou2, About3, About4, About5, About6, About7];
// //   }
// //   return (
// //     <section className="container py-5" id="about">
// //       <div className="row align-items-center">
// //         <h2
// //   className="fw-bold mb-3 text-center"
// // >
// //   About <span style={{ color: "hsl(0, 73%, 41%)" }}>GEM Honda</span>
// // </h2>

// //         {/* Left: Content */}
// //         <div className="col-lg-6 order-2 order-lg-1">
          

// //           <p className="text-secondary mb-3">
// //             Welcome to <strong>GEM Honda</strong>, your trusted destination for Honda two-wheelers.
// //             We bring you the latest range of bikes and scooters — where style meets performance.
// //             Every ride is more than travel; it’s an emotion.
// //           </p>

// //           <p className="text-secondary mb-4">
// //             Our dedicated team ensures a smooth buying experience, genuine accessories, and reliable
// //             after-sales service. Driven by Honda’s legacy and GEM’s commitment to customer delight,
// //             we make every journey begin with trust.
// //           </p>

// //           {/* <div className="d-flex align-items-center gap-3">
// //             <a
// //               href="#"
// //               className="btn px-4 rounded-pill text-white"
// //               style={{
// //                 backgroundColor: "hsl(0, 73%, 41%)",
// //                 border: "none",
// //               }}
// //             >
// //               Read More
// //             </a>
// //             <a
// //               href="#contact-container"
// //               className="fw-semibold text-decoration-none"
// //               style={{ color: "hsl(0, 73%, 41%)" }}
// //             >
// //               Contact Us
// //             </a>
// //           </div> */}
// //         </div>

// //         {/* Right: Image */}
// //         {/* <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 text-center">
// //           <img
// //             src={imageSrc}
// //             alt="GEM Honda Showroom"
// //             className="img-fluid rounded shadow-sm"
// //             style={{ maxHeight: "300px", objectFit: "cover" }}
// //           />
// //         </div> */}

// //           <div 
// //       className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 text-center"
// //       style={{
// //         position: 'relative',
// //         width: '100%',
// //         height: '300px',
// //         overflow: 'hidden',
// //         borderRadius: '8px',
// //         boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
// //       }}
// //     >
// //       <div 
// //         style={{
// //           position: 'absolute',
// //           top: 0,
// //           left: 0,
// //           width: '100%',
// //           height: '2100px',
// //           animation: 'scrollTopToBottom 5s linear infinite'
// //         }}
// //       >
// //         {images.map((src, index) => (
// //           <React.Fragment key={index}>
// //             <img
// //               src={src}
// //               alt={`About ${index + 1}`}
// //               style={{
// //                 width: '100%',
// //                 height: '300px',
// //                 objectFit: 'cover',
// //                 display: 'block'
// //               }}
// //             />
// //           </React.Fragment>
// //         ))}
// //         {/* Duplicate for seamless loop */}
// //         {images.map((src, index) => (
// //           <img
// //             key={`dup-${index}`}
// //             src={src}
// //             alt={`About ${index + 1}`}
// //             style={{
// //               width: '100%',
// //               height: '300px',
// //               objectFit: 'cover',
// //               display: 'block'
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <style jsx>{`
// //         @keyframes scrollTopToBottom {
// //           0% {
// //             transform: translateY(0);
// //           }
// //           100% {
// //             transform: translateY(-1200px);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //       </div>
// //     </section>
// //   );
// // }



// import React, { useState, useEffect } from "react";
// import About1 from "../assets/About-img/Aboutus-1.jpeg";
// import Abou2 from "../assets/About-img/Aboutus-2.jpeg";
// import About3 from "../assets/About-img/Aboutus-3.jpeg";
// import About4 from "../assets/About-img/Aboutus-4.jpeg";
// import About5 from "../assets/About-img/Aboutus-5.jpeg";
// import About6 from "../assets/About-img/Aboutus-6.jpeg";
// import About7 from "../assets/About-img/Aboutus-7.jpeg";

// export default function AboutUs() {
//   const images = [
//     About1, Abou2, About3, About4, About5, About6, About7
//   ];
  
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="container py-5" id="about">
//       <div className="row align-items-center">
//         <h2 className="fw-bold mb-3 text-center col-12">
//           About <span style={{ color: "hsl(0, 73%, 41%)" }}>GEM Honda</span>
//         </h2>

//         {/* LEFT: Content */}
//         <div className="col-lg-6 order-1 order-lg-1">
//           <p className="text-secondary mb-3">
//             Welcome to <strong>GEM Honda</strong>, your trusted destination for Honda two-wheelers.
//             We bring you the latest range of bikes and scooters — where style meets performance.
//             Every ride is more than travel; it's an emotion.
//           </p>

//           <p className="text-secondary mb-4">
//             Our dedicated team ensures a smooth buying experience, genuine accessories, and reliable
//             after-sales service. Driven by Honda's legacy and GEM's commitment to customer delight,
//             we make every journey begin with trust.
//           </p>
//         </div>

//         {/* RIGHT: VERTICAL CAROUSEL - FIXED */}
//         <div className="col-lg-6 order-2 order-lg-2 mb-4 mb-lg-0 d-flex justify-content-center">
//           <div 
//             style={{ 
//               width: '50%', 
//               height: '400px',
//               position: 'relative',
//               borderRadius: '8px',
//               overflow: 'hidden',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
//             }}
//           >
//             {/* Carousel Container */}
//             <div
//               style={{ 
//                 height: '400px',
//                 overflow: 'hidden',
//                 position: 'relative'
//               }}
//             >
//               {images.map((imgSrc, index) => (
//                 <img 
//                   key={index}
//                   src={imgSrc}
//                   alt={`About ${index + 1}`}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     opacity: index === current ? 1 : 0,
//                     transition: 'opacity 0.5s ease-in-out',
//                     borderRadius: '8px'
//                   }}
//                 />
//               ))}
//             </div>

//             {/* DOTS NAVIGATION */}
//             {/* <div style={{ 
//               position: 'absolute', 
//               bottom: '15px', 
//               left: '50%', 
//               transform: 'translateX(-50%)',
//               display: 'flex', 
//               gap: '10px',
//               zIndex: 10
//             }}> */}
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   style={{
//                     width: '12px',
//                     height: '12px',
//                     borderRadius: '50%',
//                     border: 'none',
//                     background: current === index ? '#dc3545' : '#ddd',
//                     cursor: 'pointer',
//                     padding: 0,
//                     transition: 'all 0.3s ease'
//                   }}
//                   onClick={() => setCurrent(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import About1 from "../assets/About-img/Aboutus-1.jpeg";
import Abou2 from "../assets/About-img/Aboutus-2.jpeg";
import About3 from "../assets/About-img/Aboutus-3.jpeg";
import About4 from "../assets/About-img/Aboutus-4.jpeg";
import About5 from "../assets/About-img/Aboutus-5.jpeg";
import About6 from "../assets/About-img/Aboutus-6.jpeg";
import About7 from "../assets/About-img/Aboutus-7.jpeg";

export default function AboutUs() {
  const images = [
    About1, Abou2, About3, About4, About5, About6, About7
  ];
  
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container py-5" id="about">
      <div className="row align-items-center">
        <h2 className="fw-bold mb-3 text-center col-12">
          About <span style={{ color: "hsl(0, 73%, 41%)" }}>GEM Honda</span>
        </h2>

        {/* LEFT: Content */}
        <div className="col-lg-6 order-1 order-lg-1">
          <p className="text-secondary mb-3">
            Welcome to <strong>GEM Honda</strong>, your trusted destination for Honda two-wheelers.
            We bring you the latest range of bikes and scooters — where style meets performance.
            Every ride is more than travel; it's an emotion.
          </p>

          <p className="text-secondary mb-4">
            Our dedicated team ensures a smooth buying experience, genuine accessories, and reliable
            after-sales service. Driven by Honda's legacy and GEM's commitment to customer delight,
            we make every journey begin with trust.
          </p>
        </div>

        {/* RIGHT: RESPONSIVE CAROUSEL */}
        <div className="col-lg-6 order-2 order-lg-2 mb-4 mb-lg-0 d-flex justify-content-center">
          <div 
            style={{ 
              width: isMobile ? '300px' : '50%', 
              height: '400px',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            {/* Carousel Images */}
            <div style={{ 
              height: '500px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {images.map((imgSrc, index) => (
                <img 
                  key={index}
                  src={imgSrc}
                  alt={`About ${index + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: index === current ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    borderRadius: '8px'
                  }}
                />
              ))}
            </div>

            {/* DOTS */}
            {/* <div style={{ 
              position: 'absolute', 
              bottom: '15px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex', 
              gap: '10px',
              zIndex: 10
            }}> */}
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: current === index ? '#dc3545' : '#ddd',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
