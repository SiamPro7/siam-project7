import { useEffect, useState } from "react";
import "./Navbar.css"; // Import the CSS file


const Navbar = ({coin}) => {
   const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if page is scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <nav className={`navbar NetBarSTK ${isScrolled ? "BackgroundBlur" : ""}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img
            src="./assets/logo.png"
            alt="Cricket Logo"
            className="logo-image"
          />
        </div>

        {/* Links Section */}
        <div className="navbar-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/fixture" className="nav-link">
            Fixture
          </a>
          <a href="/teams" className="nav-link">
            Teams
          </a>
          <a href="/schedules" className="nav-link">
            Schedules
          </a>
        </div>

        {/* Coin Button Section */}
        <div className="navbar-coins">
          <span className="coin-text">Coins:{coin}</span>
          <img src="./assets/coin.png" alt="Coin Icon" className="coin-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
