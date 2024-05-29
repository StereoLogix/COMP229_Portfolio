// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="nav">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <div className="main-content">
        {children}
      </div>
      <footer className="footer">Footer content</footer>
    </div>
  );
}
