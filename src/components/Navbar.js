import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          Shobhit<span className="accent">.Dev</span>
        </a>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={(e) => handleNavLinkClick(e, 'certifications')}>
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;