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

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
// import Logo from "../assets/GemHondaLogo.png";
import Logo from "../assets/Home-logo.png"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDesktop = () => window.innerWidth > 768;

  useEffect(() => {
    const handleResize = () => {
      if (isDesktop()) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (menu) => {
    if (isDesktop()) setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (isDesktop()) setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    if (!isDesktop()) {
      setOpenDropdown((prev) => (prev === menu ? null : menu));
    }
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={Logo} alt="Honda Logo" className="logo" />
        {/* <span className="logo-text">GEM HONDA</span> */}
      </NavLink>

      <ul className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
        {/* SALES */}
        <li
          className={`dropdown ${openDropdown === "sales" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("sales")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="dropdown-toggle"
            type="button"
            onClick={() => toggleDropdown("sales")}
          >
            Sales
          </button>
          <ul className="dropdown-menu">
            
            <li>
              <NavLink
                to="/scooter-page"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Scooters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bike-list"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Motorcycles
              </NavLink>
            </li>
          </ul>
        </li>

        {/* SERVICES */}
        <li
          className={`dropdown ${openDropdown === "services" ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="dropdown-toggle"
            type="button"
            onClick={() => toggleDropdown("services")}
          >
            Services
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Offers
              </NavLink>
            </li>
          </ul>
        </li>

        {/* CONTACT */}
        <li>
          <NavLink
            to="/contact-container"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Contact Us
          </NavLink>
        </li>

        {/* CALL NOW */}
        <li className="call-now-wrapper">
          <a
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
          >
            Call : 909 432 0000
          </a>
        </li>
      </ul>

      {/* MOBILE ICON */}
      <button
        type="button"
        className="navbar-icons"
        onClick={handleToggleMobileMenu}
        aria-label="Toggle navigation"
      >
        {mobileMenuOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
