import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Climate-Resilient Farming Hubs</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/myfarm">My Farm</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
      </ul>
    </nav>
  );
}

export default navbar;
