import React from "react";
import "./Navbar.css"; // Import the CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Air Jordan</div>
      <div className="nav-links">
        <a href="#" className="nav-link">
          Where We Fly
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
        <button className="book-btn">Book Flights</button>
      </div>
    </nav>
  );
};

export default Navbar;
