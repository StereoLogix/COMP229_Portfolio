import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Services from './components/Services';
import profilePic from './assets/Images/profilepic.png';
import solderingImage from './assets/Images/soldering.png';
import deskImage from './assets/Images/desk.png';
import breadboardImage from './assets/Images/breadboard.png';
import guitarpedalImage from './assets/Images/guitarpedal.png';
import logo from './assets/Images/logo.png'; // Path to the logo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout logo={logo} image={profilePic}><Home /></Layout>} />
        <Route path="/about" element={<Layout logo={logo} image={solderingImage}><About /></Layout>} />
        <Route path="/contact" element={<Layout logo={logo} image={deskImage}><Contact /></Layout>} />
        <Route path="/projects" element={<Layout logo={logo} image={guitarpedalImage}><Projects /></Layout>} />
        <Route path="/services" element={<Layout logo={logo} image={breadboardImage}><Services /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
