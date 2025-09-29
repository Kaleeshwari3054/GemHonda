import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaCommentDots, FaClipboardList } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="tel:18001033434" className="icon"><FaPhoneAlt /></a>
        <a href="mailto:customercare@honda.hmsi.in" className="icon"><FaCommentDots /></a>
        <div className="icon"><FaClipboardList /></div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          
          {/* Newsletter */}
          <div className="newsletter">
            <p className="footer-heading">Signup for Newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="jondev@example.com" />
              <button>&#10148;</button>
            </div>
          </div>

           {/* Social Media */}
          <div className="footer-social">
            <h5>Follow Us</h5>
            <span>
              <a href="https://www.facebook.com/HondaIndia" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/honda_india/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/honda-india/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/user/Honda2WheelersIndia" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </span>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© 2025 Honda Motorcycle and Scooter India Pvt. Ltd. All Rights Reserved.</p>
            <p>
              For Assistance: <a href="tel:18001033434">1800 103 3434</a> | 
              Email: <a href="mailto:customercare@honda.hmsi.in">customercare@honda.hmsi.in</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
