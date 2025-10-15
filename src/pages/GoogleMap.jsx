// import React from "react";
// import "../Styles/GoogleMap.css";
// import logo from '../assets/GemHondaLogo.png'
// const GoogleMap = () => {
//   return (
//     <section className="google-map">

//         {/* Company Location & Contact */}
//         <div className="company-location">
//           <h3>Visit Our Showroom</h3>
//           <div className="location-content">
//             <div className="location-info">
//               <div className="company-logo">
//                 <img src={logo} alt="Gem Honda Logo" />
//               </div>
//               <div className="contact-details">
//                 <h4>Gem Honda</h4>
//                 <p>
//                   <i className="fas fa-map-marker-alt"></i> 2/9 Yaathaval
//                   Street, Virugambakkam, Chennai, Tamil Nadu 600092
//                 </p>
//                 <p>
//                   <i className="fas fa-phone"></i> +91 909 432 0000
//                 </p>
//                 <p>
//                   <i className="fas fa-envelope"></i> thegemhonda@gmail.com
//                 </p>
//                 <p>
//                   <i className="fas fa-clock"></i> Mon - Sat: 9:00 AM - 7:00 PM
//                 </p>
//               </div>
//             </div>
//             <div className="google-map">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.826743240344!2d80.20840731482213!3d13.035804990788547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526711ee0a2f73%3A0x5b64d5b6e6c8a8a8!2s2%2F9%2C%20Yaathaval%20St%2C%20Virugambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600092!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Gem Honda Location"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//     </section>
//   );
// };

// export default GoogleMap;

import React from "react";
import "../Styles/GoogleMap.css";
import logo from "../assets/GemHondaLogo.png";

const LAT = 13.035805;
const LNG = 80.208407;
const ZOOM = 18;

const GoogleMap = () => {
  const mapSrc = `https://maps.google.com/maps?q=${LAT},${LNG}&z=${ZOOM}&output=embed`;
  const openMapsUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

  return (
    <section className="google-map-section">
      <div className="container">
        <h2 className="section-title text-center mb-4">Visit Our Showroom</h2>
        <div className="row">
          {/* Info Card */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="card p-3 shadow-sm">
              <img src={logo} alt="Gem Honda" className="img-fluid mb-3" />
              <h5>Gem Honda</h5>
              <p>📍 2/9 Yaathaval Street, Virugambakkam, Chennai, TN 600092</p>
              <p>
                📞 <a href="tel:+919094320000">+91 9094320000</a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:thegemhonda@gmail.com">thegemhonda@gmail.com</a>
              </p>
              <p>⏰ Mon - Sat: 9:00 AM - 7:00 PM</p>
              <a
                href={openMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-2"
                style={{ backgroundColor: "hsl(0, 73%, 41%)", color: "#fff" }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="col-lg-8">
            <iframe
              title="Sri Devi Karumari Cinemas Location"
              src="https://www.google.com/maps?q=13.049656,80.193422+(Sri+Devi+Karumari+Cinemas)&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
