// src/components/Home.jsx
import React from 'react';
import profilePic from '../assets/Images/profilepic.png';

export default function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="content">
        <h2>Hi, I'm Derek.</h2>
        <p>Software/Electronics/Audio Engineer extraordinaire!</p>
      </div>
    </div>
  );
}
