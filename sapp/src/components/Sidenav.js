import React from 'react';
import '../styling/Sidenav.css';

const Sidenav = () => {
  return (
    <div className="sidenav">
        <ul className="vertical">
        <li className = 'price'><a href = "/">Color</a></li>
        <li className = 'brand'><a href = "/">Brand</a>
        <ul className="sub">
        <li><a href="/">nike</a></li>
        <li><a href="/">ikea</a></li>
      </ul>
      </li>
        <li  className = 'color'><a href = "/">Prics</a></li>
        </ul>
      </div>
  );
};

export default Sidenav;
