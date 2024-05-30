import React from 'react';
import '../styles/About.css';

/* About component for displaying personal information */
export default function About() {
  return (
    <div className="about">
      <div className="content">
        {/* Section header */}
        <h2>Who is Derek Leduc you ask?</h2>
        
        {/* Paragraph content */}
        <p>
          I am currently a student at Centennial College, pursuing a degree in Software Engineering. Alongside my academic studies, I actively practice electronics, focusing on microcontrollers and building custom guitar pedals. My passion lies in the integration of software and hardware, and I have hands-on experience with FPGA development, specifically with the Cyclone V.
          Throughout my projects, I have successfully built various electronic devices, including variable DC power supplies, MIDI devices for music applications, my own audio probe, and numerous guitar pedals. These projects have allowed me to merge my skills in software engineering and electronics, driving my interest in bridging the gap between these fields, particularly in music production.
          My goal is to continue exploring the synergy between software and hardware to innovate and create new tools and technologies that enhance music production and performance.
        </p>
        
        {/* Resume button */}
        <button className="resume-button" onClick={() => window.location.href = '/path/to/derekresume2024.pdf'}>
          My Resume
        </button>
      </div>
    </div>
  );
}
