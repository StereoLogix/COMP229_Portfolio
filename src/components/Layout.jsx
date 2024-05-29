import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout({ children, logo, image }) {
  return (
    <div className="layout">
      <nav className="nav">
        <img src={logo} alt="Logo" className="nav-logo left" />
        <div className="nav-links">
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/projects">Projects</Link> | 
          <Link to="/services">Services</Link> |
          <Link to="/contact">Contact</Link> 
        </div>
        <img src={logo} alt="Logo" className="nav-logo right" />
      </nav>
      <div className="content-wrapper">
        <div className="sidebar">
          {image && <img src={image} alt="Page specific" />}
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
      <footer className="footer">
          &copy; Derek Leduc 300600738 COMP229 Web Application Development Assignment 1
      </footer>
    </div>
  );
}
