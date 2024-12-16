import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Homepage from './components/Homepage';
import Expericence from './components/Pages/Experience/Experience';
import Certification from './components/Pages/Certification/Certification';
import Education from './components/Pages/Education/Education';

const App = () => {
  return (
    <Router>
    <Routes>
      {/* Parent Route with Layout */}
      <Route path="/" element={<Layout />}>
        {/* Child Routes */}
        <Route path='/home' element={<Homepage />} />
        <Route path="/experience"  element={<Expericence/>} /> 
        <Route path="/education" element={<Education/>} />
        <Route path="/certifications" element={<Certification/>} />
      </Route>
    </Routes>
  </Router>
    )
}

export default App;
