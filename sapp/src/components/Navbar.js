import React from 'react';
import '../styling/Navbar.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
     <div className="left">
        <ul className="navigation">
        <li className = 'Logo'><a href = "/">Logo</a></li>
        <li className = 'Furniture'><Link to = "/">Furniture</Link>
        <ul className="submenu">
        <li><Link to="/sofa">Sofa</Link></li>
        <li><Link to="/table">Table</Link></li>
      </ul>
      </li>
        <li  className = 'Electronics'><a href = "/">Electronics</a>
        <ul className="submenu">
        <li><Link to="/sofa">monitor</Link></li>
        <li><Link to="/table">desktop</Link></li>
      </ul>
        </li>
        </ul>
      </div>
      <div className="right">
        <ul className="user-actions">
        <li><a href = "/">Profile</a></li>
        <li><a href = "/">Wishlist</a></li>
        <li><a href = "/">Bag</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
