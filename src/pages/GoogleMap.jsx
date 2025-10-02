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

// Center coordinates (Gem Honda) and zoom level
const LAT = 13.035804990788547;
const LNG = 80.20840731482213;
const ZOOM = 18; // 16-19 are typically good; increase for closer zoom

const GoogleMap = () => {
  const mapSrc = `https://maps.google.com/maps?q=${LAT},${LNG}&z=${ZOOM}&output=embed`;
  const openMapsUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

  return (
    <section className="google-map-section">
      <div className="container">
        <h2 className="section-title">Visit Our Showroom</h2>

        <div className="map-wrapper">
          {/* LEFT: Showroom info card */}
          <aside className="info-card">
            <div className="logo-container">
              <img src={logo} alt="Gem Honda Logo" />
            </div>

            <div className="contact-info">
              <h3>Gem Honda</h3>
              <p className="address">
                📍 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu
                600092
              </p>
              <p>
                📞 <a href="tel:+919094320000">+91 97299 99733</a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:thegemhonda@gmail.com">thegemhonda@gmail.com</a>
              </p>
              <p>⏰ Mon - Sat: 9:00 AM - 7:00 PM</p>

              <div className="map-utilities">
                <a
                  className="maps-link"
                  href={openMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT: Map */}
          <div className="map-container">
            <iframe
              title="Gem Honda Location"
              src="https://www.google.com/maps?q=13.041493,80.199688+(Gem+Honda)&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* Non-interactive visual red pin overlay to emphasize the location */}
            <div className="pin" aria-hidden="true">
              <span className="stick" />
              <span className="dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
