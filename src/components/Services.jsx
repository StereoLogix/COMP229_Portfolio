/*Services.jsx Derek Leduc 300600738 COMP229 Web Application Development Assignment 1*/


import React, { useState } from 'react';
import '../styles/Services.css';
import midiControllerImg from '../assets/Images/midicontroller.png';
import customGuitarPedalImg from '../assets/Images/customguitarpedal.png';
import webDesignImg from '../assets/Images/webdesign.png';
import oopImg from '../assets/Images/oop.png';
import appDesignImg from '../assets/Images/appdesign.png';

/* Array of services with names and images */
const services = [
  { name: "Custom Midi Controllers/Midi Software", image: midiControllerImg },
  { name: "Custom Guitar Pedals", image: customGuitarPedalImg },
  { name: "Web Design", image: webDesignImg },
  { name: "Object Oriented Programming", image: oopImg },
  { name: "App Design", image: appDesignImg },
];

/* Services component for displaying the services offered */
export default function Services() {
  /* State for managing the currently displayed image */
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div className="services">
      {/* Section header */}
      <h2 className="glowing-text">Services Offered</h2>

      {/* Container for the services list and image */}
      <div className="services-container">
        
        {/* List of services */}
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              onMouseEnter={() => setCurrentImage(service.image)}
              onMouseLeave={() => setCurrentImage(null)}
            >
              {service.name}
            </div>
          ))}
        </div>
        
        {/* Container for the service image */}
        <div className="image-container">
          {currentImage && <img src={currentImage} alt="Service" />}
        </div>
      </div>
    </div>
  );
}
