/*Projects.jsx Derek Leduc 300600738 COMP229 Web Application Development Assignment 1*/


import React, { useState } from 'react';
import '../styles/Projects.css';
import electronicsImg1 from '../assets/Images/electronics.png';
import electronicsImg2 from '../assets/Images/electronics2.png';
import hm2Img1 from '../assets/Images/hm2.png';
import hm2Img2 from '../assets/Images/hm2(2).png';
import midiImg1 from '../assets/Images/midi.png';
import midiImg2 from '../assets/Images/midi2.png';

/* Projects component for displaying project information and overlay */
export default function Projects() {
  /* State for managing overlay visibility */
  const [overlay, setOverlay] = useState(false);

  /* State for managing project content displayed in the overlay */
  const [projectContent, setProjectContent] = useState({ title: "", images: [], text: "" });

  /* Handler for button click to display project details */
  const handleButtonClick = (project) => {
    setProjectContent(project);
    setOverlay(true);
    setTimeout(() => {
      document.querySelector('.overlay').classList.add('show');
    }, 10);
  };

  /* Handler for closing the overlay */
  const handleCloseOverlay = () => {
    document.querySelector('.overlay').classList.remove('show');
    setTimeout(() => {
      setOverlay(false);
    }, 500);
  };

  /* List of projects with details */
  const projects = [
    {
      title: "Project 1: Variable DC Power Supply",
      images: [electronicsImg1, electronicsImg2],
      text: "This is a 20V variable DC power supply. It takes 120V AC from the wall and uses a rectifier circuit to convert the AC input into DC for output. We use a variable resistor system to control the output between 1V and 20V DC. The unit is also USB controllable and has its own app to use custom voltages as well as log the output. Great for home breadboard projects or even powering some home electronics!",
    },
    {
      title: "Project 2: HM2 w/clean blend",
      images: [hm2Img1, hm2Img2],
      text: "This custom built and modded HM2 pedal was my third guitar pedal build and I wanted to do something a little more ambitious. I found a pcb for an hm2 clone and I found a pcb for a clean blend circuit. I populated both pcb's and then wired them together to offer a clean blend to the super heavy and harsh distortion of the hm2, which ultimately adds back some transients for definition. Wired myself and drilled/painted the enclosure myself as well.",
    },
    {
      title: "Project 3: Arduino Midi Controller",
      images: [midiImg1, midiImg2],
      text: "This project was my first time putting my own circuit together, and also my first time using a micro controller. It started with the idea of wanting to making a volume controller for windows, but when I realized that I could program the controller to do whatever I wanted, it became much bigger. This prototype was mainly used for controlling audio like Windows and Spotify, but the next iterations are already in the design phase. One will include a midi controller for software like ableton and traktor, and the other will be a fully customizable windows controller with its own software to map the controls without any coding knowledge or experience.",
    },
  ];

  return (
    <div className="projects">
      <div className="content">
        {/* Section header */}
        <h2 className="glowing-text">My Projects</h2>
        
        {/* Buttons for each project */}
        {projects.map((project, index) => (
          <button
            key={index}
            className="project-button"
            onClick={() => handleButtonClick(project)}
          >
            {project.title}
          </button>
        ))}
      </div>
      
      {/* Overlay for displaying project details */}
      {overlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>{projectContent.title}</h2>
            <div className="overlay-images">
              {projectContent.images.map((image, index) => (
                <img key={index} src={image} alt={`Project ${index + 1}`} />
              ))}
            </div>
            <p>{projectContent.text}</p>
            <button className="close-button" onClick={handleCloseOverlay}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
