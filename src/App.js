import './App.css';
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';

import Button from '@mui/material/Button';


import Navbar from './components/Navbar';
import Home from './components/Home';

// import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';

import Projects from './components/Projects';
import About from './components/About';
// import Certificates from './components/Certificates';
// import Reviewers from './components/Reviewers';



function App() {
  const [navState, setNavState] = useState(
    JSON.parse(localStorage.getItem('navState')) || {
      home: true,
      achievements: false,
      education: false,
      experience: false,
      projects: false,
      certificates: false,
      reviewers: false,
      about: false,
      }
    );

  useEffect(() => {
      localStorage.setItem('navState', JSON.stringify(navState));
  }, [navState]);

  const handleNavClick = (button) => {
      let updatedButtonState = {};
      Object.keys(navState).forEach((key) => {
          updatedButtonState[key] = key === button;
      });
      setNavState(updatedButtonState);

  };

  return (
    <div>
      <Router> 
        <Navbar handleNavClick={handleNavClick} navState={navState}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/achievements" element={<Achievements />} /> */}
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/certificates" element={<Certificates />} />  */}
          {/* <Route path="/reviewers" element={<Reviewers />} /> */}
        </Routes>
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '30px',
                paddingBottom: '30px',
                background: "#330000",
                width: '100%',
                height: '100px',
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
            }}>
                {/* <Button sx={{color: "#ffffff", fontFamily: "Roboto, sans-serif", '&:hover': {color: "red"}}}>About</Button> */}
                <Button sx={{color: "#ffffff", fontFamily: "Roboto, sans-serif", '&:hover': {color: "red"}}}>Contact</Button>
                <Button sx={{color: "#ffffff", fontFamily: "Roboto, sans-serif", '&:hover': {color: "red"}}}>Blogs</Button>
                <Button sx={{color: "#ffffff", fontFamily: "Roboto, sans-serif", '&:hover': {color: "red"}}}>Support</Button>
        </div>
      </Router>
    </div>
  );
}

export default App;
