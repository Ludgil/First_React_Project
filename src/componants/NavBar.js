import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='container-nav'>
      <ul>
        <li>
          <NavLink
            to='/'
            exact={true}
            className='btn-nav'
            activeClassName='active'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='btn-nav' activeClassName='active'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
