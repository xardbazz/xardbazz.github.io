import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <button className="toggleButton" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;