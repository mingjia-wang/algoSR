import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <div className="navbar">
      <div>
        <h3 className="left">Logo</h3>
      </div>
      <ul className="right">
        <li  className="elem">
          <Link to="/cards">
            View Cards
          </Link>
        </li>
        <li className="elem">
          <Link to="/addcard">
            Add Card
          </Link>
        </li>
        <h3 className="nav-name">Name</h3>
      </ul>
    </div>
  )
}

export default NavBar;