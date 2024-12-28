import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Homepage from './components/Homepage';
import Expericence from './components/Pages/Experience/Experience';
import Certification from './components/Pages/Certification/Certification';
import Education from './components/Pages/Education/Education';
import Skill from "./components/Pages/Skills/Skill";
import Project from "./components/Pages/Projects/Project";
import Contact from "./components/Pages/Contacts/Contact";
import Achievement from "./components/Pages/Achievements/Achievements";
import Sidebar from './components/Sidebar/PrimarySidebar'; // Import Sidebar

const AppRoutes = () => {
  // const location = useLocation();
  // console.log('Current path:', location.pathname); // This will show the active route

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/experience" element={<Expericence />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path='/achievements' element={<Achievement />} />
        <Route path="/contact-me" element={<Contact />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;