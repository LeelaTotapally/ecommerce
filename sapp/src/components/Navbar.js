import React from 'react';
import '../styling/Navbar.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='nav'>
     <div className="left">
        <ul className="navigation">
        <li className = 'Logo'><Link to = "/">Logo</Link></li>
        <li className = 'Furniture'><Link to = "/furniture">Furniture</Link>
        <ul className="submenu">
        <li><Link to="/sofa">Sofa</Link></li>
        <li><Link to="/table">Table</Link></li>
      </ul>
      </li>
        <li  className = 'Electronics'><Link to = "/electronics">Electronics</Link>
        <ul className="submenu">
        <li><Link to="/monitor">monitor</Link></li>
        <li><Link to="/keyboard">keyboard</Link></li>
      </ul>
        </li>
        </ul>
      </div>
       <div className="right">
        <ul className="user-actions">
       <li className = 'profile'><Link to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <ul className="submenu">
        <li><Link to="/monitor">LOGIN/SIGNUP</Link></li>
        <li><Link to="/keyboard">About</Link></li>
      </ul>
          </li> 
        <li><a href = "/">Wishlist</a></li>
        <li><a href = "/">Bag</a></li>
        </ul>
      </div> 
    </nav>
  );
};

export default Navbar;
