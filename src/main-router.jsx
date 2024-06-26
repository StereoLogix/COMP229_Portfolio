/*main-router.jsx Derek Leduc 300600738 COMP229 Web Application Development Assignment 1*/


import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Layout from './components/Layout.jsx';

const MainRouter = () => {
    return <div>
        <Layout/>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    </div>
}

export default MainRouter;