import React from 'react';
import Navbar from './Navbar';

import Furniture from './Furniture';
import Electronics from './Electronics';
import Login from './Login';
import CreateUser from './CreateUser';

import '../styling/App.css';
import { Route, Routes}from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
    
        <Routes><Route path="/furniture" element={<Furniture type = "" />} />
        <Route path="/sofa" element={<Furniture type = "sofa" />} />
        <Route path="/table" element={<Furniture type = "table" />} />
        <Route path="/electronics" element={<Electronics type = "" />} />
        <Route path="/monitor" element={<Electronics type = "monitor" />} />
        <Route path="/keyboard" element={<Electronics type = "keyboard" />} />
        <Route path="/login" element={<Login  />} />
       <Route path="/createuser" element={<CreateUser  />} />
       
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
