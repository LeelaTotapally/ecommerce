import React from 'react';
import '../styling/Sidenav.css';

const Sidenav = () => {
  return (
    <div className="sidenav">
        <ul className="vertical">
        <li className = 'brand'><a className = "heading"href = "/">Color</a>
        <ul className="sub">
        <li><a href="/">100</a></li>
        <li><a href="/">50</a></li>
      </ul>
        </li>
        <li className = 'brand'><a className = "heading" href = "/">Brand</a>
        <ul className="sub">
        <li><a href="/">nike</a></li>
        <li><a href="/">ikea</a></li>
      </ul>
      </li>
        <li  className = 'brand'><a className = "heading" href = "/">Price</a>
        <ul className="sub">
        <li><a href="/">red</a></li>
        <li><a href="/">black</a></li>
      </ul>
        </li>
        
        </ul>
      </div>
  );
};

export default Sidenav;
