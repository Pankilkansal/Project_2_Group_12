import React, { useState, useEffect } from "react";
import "./style.css";
    // img: require("../../images/card-img-1.jpg") ,


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar target ${isSticky ? "sticky" : ""} ${menuOpen ? "change" : ""}`}>
        <a href="#" className="navbar-link">
          <span>Home</span>
        </a>
        <a href="#" className="navbar-link">
          <span>Meals</span>
        </a>
        <a href="#" className="navbar-link">
          <span>Gallery</span>
        </a>
        <a href="#" className="navbar-link">
          <span>Contact</span>
        </a>
      </nav>
      <div className={`menu target ${menuOpen ? "change" : ""}`} onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </div>
    </>
  );
}

export default Navbar;
