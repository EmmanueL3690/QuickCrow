import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

import logo from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".navbar") &&
        !e.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }

      if (
        searchOpen &&
        !e.target.closest(".search-bar") &&
        !e.target.closest(".search-toggle")
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="page-header">
      <div className="header-container">
        {/* Mobile Menu Toggle (Left on mobile) */}
        <button
          className="menu-toggle mobile-only"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
            setSearchOpen(false);
          }}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? "active" : ""}`}>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
          </span>
        </button>

        {/* Logo Centered on Mobile, Left on Desktop */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Nav Centered */}
        <nav className="navbar desktop-only">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        {/* Desktop Search (Right) */}
        <div className="search-bar desktop-only">
          <input type="text" placeholder="Craving Something?" />
          <button type="button">
            <img className="search-icond" src="ico.png" alt="search" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Nav */}
     {/* Mobile Sidebar Nav */}
<nav className={`navbar mobile-only ${menuOpen ? "active" : ""}`}>
  <div className="sidebar-logo">QuickChow</div>

  {/* Mobile search bar inside nav */}
  <div className="search-bar-mobile-search">
    <input className="inp-bar" type="text" placeholder="Craving Something?" />
    <button className="button1" type="button">
      <img className="search-icond" src="ico.png" alt="search" />
    </button>
  </div>

  <ul>
    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
    <li><Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link></li>
    <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
    <li><Link to="/order" onClick={() => setMenuOpen(false)}>Order</Link></li>
    <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
  </ul>
</nav>

      {/* Background Overlay */}
      {(menuOpen || searchOpen) && <div className="mobile-overlay"></div>}
    </header>
  );
};

export default Header;