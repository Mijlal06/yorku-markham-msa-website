import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-area" onClick={closeMenu}>
        <span className="logo-frame">
          <img src="/logo.png" alt="YorkU Markham MSA Logo" className="logo" />
        </span>
        <span className="site-name">YorkU Markham MSA</span>
      </Link>

      <div className="nav-right">
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/events" onClick={closeMenu}>
            Events
          </Link>

          <Link to="/resources" onClick={closeMenu}>
            Resources
          </Link>

          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <ThemeToggle />

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;