import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Sidebar/Header';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar/PrimarySidebar';
const App = () => {
  return (
      <div>
    
        <Header />
        <Sidebar />
          <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>

        </div>
    )
}

export default App
