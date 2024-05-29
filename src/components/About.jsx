import React from 'react';
import '../styles/About.css'; 

export default function About() {
  return (
    <div className="about">
      <div className="content">
        <h2>Who is Derek Leduc you ask?</h2>
        <p>
          I am currently a student at Centennial College, pursuing a degree in Software Engineering. Alongside my academic studies, I actively practice electronics, focusing on microcontrollers and building custom guitar pedals. My passion lies in the integration of software and hardware, and I have hands-on experience with FPGA development, specifically with the Cyclone V.
        </p>
        <p>
          Throughout my projects, I have successfully built various electronic devices, including variable DC power supplies, MIDI devices for music applications, my own audio probe, and numerous guitar pedals. These projects have allowed me to merge my skills in software engineering and electronics, driving my interest in bridging the gap between these fields, particularly in music production.
        </p>
        <p>
          My goal is to continue exploring the synergy between software and hardware to innovate and create new tools and technologies that enhance music production and performance.
        </p>
        <a href="/assets/Documents/derekresume2024.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resume-button">My Resume</button>
        </a>
      </div>
    </div>
  );
}
