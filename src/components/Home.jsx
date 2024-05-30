import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

/* Home component for displaying the homepage content */
export default function Home() {
  return (
    <div className="home">
      <div className="content">
        {/* Section header */}
        <h2>Hi, I'm Derek.
        Software/Electronics/Audio Engineer extraordinaire!
        </h2>
        
        {/* Paragraph content */}
        <p>Click the button below to find out more about me</p>
        
        {/* Link to the About page */}
        <Link to="/about">
          <button className="about-button">About Me</button>
        </Link>
      </div>
    </div>
  );
}
