// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleMouseEnter = (menu) => {
//     if (window.innerWidth > 768) setOpenDropdown(menu);
//   };

//   const handleMouseLeave = () => {
//     if (window.innerWidth > 768) setOpenDropdown(null);
//   };

//   const toggleDropdown = (menu) => {
//     // Mobile only
//     if (window.innerWidth <= 768) {
//       setOpenDropdown(openDropdown === menu ? null : menu);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">HONDA</Link>

//       <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
//         {/* SALES */}
//         <li
//           className={`dropdown ${openDropdown === 'sales' ? 'open' : ''}`}
//           onMouseEnter={() => handleMouseEnter('sales')}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => toggleDropdown('sales')}
//         >
//           <span className="dropdown-toggle">Sales ▾</span>
//           {openDropdown === 'sales' && (
//             <ul className="dropdown-menu">
//               <li><Link to="/evlist">EV</Link></li>
//               <li><Link to="/bike-list">Motorcycles</Link></li>
//               <li><Link to="/scooter-page">Scooters</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* SERVICES */}
//         <li
//           className={`dropdown ${openDropdown === 'services' ? 'open' : ''}`}
//           onMouseEnter={() => handleMouseEnter('services')}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => toggleDropdown('services')}
//         >
//           <span className="dropdown-toggle">Services ▾</span>
//           {openDropdown === 'services' && (
//             <ul className="dropdown-menu">
//               <li><Link to="/warranty">Warranty</Link></li>
//               <li><Link to="/recall">Recall Campaign</Link></li>
//             </ul>
//           )}
//         </li>

//         {/* ABOUT */}
//         <li
//           className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}
//           onMouseEnter={() => handleMouseEnter('about')}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => toggleDropdown('about')}
//         >
//           <span className="dropdown-toggle">About Honda ▾</span>
//           {openDropdown === 'about' && (
//             <ul className="dropdown-menu">
//               <li><Link to="#">Corporate</Link></li>
//               <li><Link to="#">Honda Global</Link></li>
//               <li><Link to="#">Honda Cars India Ltd</Link></li>
//               <li><Link to="#">Honda Car Power Sales Ltd</Link></li>
//               <li><Link to="#">Honda Power Pack Energy Pvt Ltd</Link></li>
//               <li><Link to="#">Technology</Link></li>
//               <li><Link to="#">Racing</Link></li>
//               <li><Link to="#">Careers</Link></li>
//             </ul>
//           )}
//         </li>

//         <li>
//           <Link to="/contact-container">Contact Us</Link>
//         </li>
//       </ul>

//       <div className="navbar-icons">
//         <i
//           className="fa-solid fa-bars"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         ></i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../assets/GemHondaLogo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    // Mobile only
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Honda Logo" className="logo" />
         <span className="logo-text">GEM HONDA</span>
      </Link>
     

      <ul className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
        {/* SALES */}
        <li
          className={`dropdown ${openDropdown === "sales" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("sales")}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleDropdown("sales")}
        >
          <span className="dropdown-toggle">Sales</span>
          <ul className="dropdown-menu">
            {/* <li>
              <Link to="/evlist">EV</Link>
            </li> */}
            <li>
            
               <Link to="/scooter-page">Scooters</Link>
            </li>
            <li>
               <Link to="/bike-list">Motorcycles</Link>
            </li>
          </ul>
        </li>

        {/* SERVICES */}
        <li
          className={`dropdown ${openDropdown === "services" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleDropdown("services")}
        >
          <span className="dropdown-toggle">Services</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            {/* <li>
              <Link to="/warranty">Warranty</Link>
            </li>
            <li>
              <Link to="/free-services">Free Services</Link>
            </li> */}
          </ul>
        </li>

        {/* ABOUT */}
        {/* <li
          className={`dropdown ${openDropdown === "about" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleDropdown("about")}
        > */}
          {/* <span className="dropdown-toggle">About Honda </span>
          <ul className="dropdown-menu">
            <li>
              <Link to="#">Corporate</Link>
            </li>
            <li>
              <Link to="#">Honda Global</Link>
            </li>
            <li>
              <Link to="#">Honda Cars India Ltd</Link>
            </li>
            <li>
              <Link to="#">Honda Car Power Sales Ltd</Link>
            </li>
            <li>
              <Link to="#">Honda Power Pack Energy Pvt Ltd</Link>
            </li>
            <li>
              <Link to="#">Technology</Link>
            </li>
            <li>
              <Link to="#">Racing</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul> */}
        {/* </li> */}

        <li>
          <Link to="/contact-container">Contact Us</Link>
        </li>

        {/* 📞 CALL NOW BUTTON */}
       
          <a
            href="tel:+919094320000"
            className="call-now-btn"
            style={{
              backgroundColor: "hsl(0, 73%, 41%)",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "25px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "0.3s",
            }}
            // onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
            // onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Call Now
          </a>
    
      </ul>

      <div className="navbar-icons">
        <i
          className="fa-solid fa-bars"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
