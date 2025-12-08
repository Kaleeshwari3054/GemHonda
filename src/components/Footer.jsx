// import React from 'react';
// import '../Styles/Footer.css';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaCommentDots, FaClipboardList } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <>
//       {/* Floating Icons */}
//       <div className="floating-icons">
//         <a href="tel:18001033434" className="icon"><FaPhoneAlt /></a>
//         <a href="mailto:customercare@honda.hmsi.in" className="icon"><FaCommentDots /></a>
//         <div className="icon"><FaClipboardList /></div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
          
//           {/* Newsletter */}
//           <div className="newsletter">
//             <p className="footer-heading">Signup for Newsletter</p>
//             <div className="newsletter-form">
//               <input type="email" placeholder="jondev@example.com" />
//               <button>&#10148;</button>
//             </div>
//           </div>

//            {/* Social Media */}
//           <div className="footer-social">
//             <h5>Follow Us</h5>
//             <span>
//               <a href="https://www.facebook.com/HondaIndia" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//               <a href="https://www.instagram.com/honda_india/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//               <a href="https://www.linkedin.com/company/honda-india/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//               <a href="https://www.youtube.com/user/Honda2WheelersIndia" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//             </span>
//           </div>

//           {/* Footer Bottom */}
//           <div className="footer-bottom">
//             <p>© 2025 Gem Honda Motorcycle and Scooter India Pvt. Ltd. All Rights Reserved.</p>
//             <p>
//               For Assistance: <a href="tel:+917299999733">+91 72999 99733</a> |
//               Email: <a href="mailto:customercare@honda.hmsi.in"> thegemhonda@gmail.com</a>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaCommentDots,
  FaClipboardList
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Floating Contact Icons */}
      <div className="floating-icons">
        <a href="tel:+917299999733" className="icon" aria-label="Call">
          <FaPhoneAlt />
        </a>
        <a href="mailto:Gemmotors@thegemmotors.com" className="icon" aria-label="Mail">
          <FaCommentDots />
        </a>
        <Link to="/contact-container" className="icon" aria-label="Contact Form">
          <FaClipboardList />
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-container">

    {/* Newsletter */}
    <div className="newsletter">
      <p className="footer-heading">Subscribe to Newsletter</p>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button>→</button>
      </div>
    </div>

    {/* Quick Links */}
    <div className="footer-links">
      <h5>Quick Links</h5>
  <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/offers">Offers</Link></li>
   <li><Link to="/scooter-page">sales</Link></li>
    <li><Link to="/contact-container">Contact</Link></li>
</ul>

    </div>

    {/* Contact Info */}
    <div className="footer-contact">
      <h5>Contact Us</h5>
      <p>
        📞 <a href="tel:+919094320000">+91-919094320000</a><br />
        📧 <a href="mailto:Gemmotors@thegemmotors.com">Gemmotors@thegemmotors.com</a><br />
        📨 <a href="mailto:Customercare@thegemmotors.com">Customercare@thegemmotors.com</a>
      </p>
    </div>

    {/* Social Media */}
    <div className="footer-social">
      <h5>Follow Us</h5>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
   
    <p className="legal-links">
      <Link to="/privacy-policy">Privacy Policy</Link> | 
      <Link to="/disclaimer">Disclaimer</Link> | 
      <Link to="/terms">Terms & Conditions</Link> | 
      <Link to="/sitemap">Sitemap</Link>
    </p>
     <p>© 2025 Gem Motors. All Rights Reserved.</p>
  </div>
</footer>

    </>
  );
};

export default Footer;
