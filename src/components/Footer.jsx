import React from 'react';
import '../Styles/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaCommentDots,
  FaClipboardList
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="icon"><FaPhoneAlt /></div>
        <div className="icon"><FaCommentDots /></div>
        <div className="icon"><FaClipboardList /></div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="newsletter">
            <p className="footer-heading">Signup for Newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="jondev@example.com" />
              <button>&#10148;</button>
            </div>
          </div>

          <div className="footer-links">
            <div><h4>EV</h4></div>
            <div><h4>Motorcycles</h4></div>
            <div><h4>Accessories</h4></div>
            <div>
              <h4>Corporate</h4>
              <ul>
                <li>How we move you</li>
                <li>Our Factories</li>
                <li>History</li>
                <li>Technology</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4>Racing</h4>
              <ul>
                <li>World Championship</li>
                <li>Honda Racing India</li>
              </ul>
            </div>
            <div>
              <h4>Our Dealers</h4>
              <ul>
                <li>Institutional Sales</li>
                <li>FAQs</li>
                <li>Creative Gallery</li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <div>
              <h5>Honda2wheelersIndia</h5>
              <span>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </span>
            </div>
            <div>
              <h5>Honda BigWing India</h5>
              <span>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </span>
            </div>
            <div>
              <h5>Honda Racing India</h5>
              <span>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </span>
            </div>
            <div>
              <h5>Honda India Foundation</h5>
              <span>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </span>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Honda Motorcycle and Scooter India Pvt. Ltd. All Rights Reserved.</p>
            <p>For Assistance Call: 1800 103 3434 | Email: customercare@honda.hmsi.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
