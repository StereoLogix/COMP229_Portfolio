/*Home.jsx Derek Leduc 300600738 COMP229 Web Application Development Assignment 1*/

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  const text = "Hi, I'm Derek. Software/Electronics/Audio Engineer extraordinaire!";

  useEffect(() => {
    const animateText = () => {
      const textContainer = document.querySelector('.animated-text');
      if (textContainer) {
        const words = textContainer.querySelectorAll('.animated-word span');
        for (let i = 0; i < words.length; i++) {
          words[i].style.animationDelay = `${i * 0.1}s`;
          words[i].classList.add('animated-letter');
        }
      }
    };

    animateText();
  }, []);

  const createSpans = (text) => {
    return text.split(' ').map((word, index) => (
      `<span class="animated-word" key=${index}>${word.split('').map((char, charIndex) => (
        `<span key=${charIndex}>${char}</span>`
      )).join('')}</span>&nbsp;`
    )).join('');
  };

  return (
    <div className="home">
      <div className="content">
        {/* Section header */}
        <h2 className="animated-text" dangerouslySetInnerHTML={{ __html: createSpans(text) }}></h2>
        
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
