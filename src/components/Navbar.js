import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#5b3cc4' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/franc" style={{ color: 'white', marginRight: '1rem' }}>Franc</Link>
      <Link to="/about-us" style={{ color: 'white', marginRight: '1rem' }}>About Us</Link>
      <Link to="/contact-us" style={{ color: 'white' }}>Contact Us</Link>
    </nav>
  );
};

export default Navbar;
