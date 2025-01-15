import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close the sidebar on route change
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-links">
            <span className="navbar-link active">Home</span>
            <span className="navbar-link">Movies</span>
          </div>
        </div>
        <div className="navbar-icons">
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/iconamoon_search-bold.png`}
            alt="Search"
            className="navbar-icon-search"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/${
              isMenuOpen ? "Vector.png" : "menu.png"
            }`}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className={isMenuOpen ? "close-icon" : "navbar-icon-menu"}
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          {/* <img
            src={`${process.env.PUBLIC_URL}/assets/icons/vector.png`}
            alt="Close"
            className="close-icon"
            onClick={toggleMenu}
          /> */}
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>Trailers</li>
          <li>News & Press</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
