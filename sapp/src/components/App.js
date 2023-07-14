import React from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Furniture from './Furniture';
import '../styling/App.css';
import { Route, Routes}from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Sidenav />
        <Routes><Route path="/" element={<Furniture type = "" />} />
        <Route path="/sofa" element={<Furniture type = "sofa" />} />
        <Route path="/table" element={<Furniture type = "table" />} />
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
