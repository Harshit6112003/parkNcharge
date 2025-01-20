import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Index from './Index';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import ChargingLocator from './ChargingLocator';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
    
        <Route path="/" element={<AboutUs />} />
        <Route path="/AboutUs" element={<Index />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/ChargingLocator" element={<ChargingLocator />} />

        <Route path="/Screen1" element={<Screen1 />} />
        <Route path="/Screen2" element={<Screen2 />} />

      </Routes>
    </Router>
  );
}

export default App;