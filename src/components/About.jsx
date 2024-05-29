// src/components/About.jsx
import React from 'react';
import solderingPic from '../assets/Images/soldering.png';

export default function About() {
  return (
    <div className="about">
      <div className="sidebar">
        <img src={solderingPic} alt="Soldering" />
      </div>
      <div className="content">
        <h2>A little about myself</h2>
        <p>More detailed information about my background, experience, and interests.</p>
      </div>
    </div>
  );
}
