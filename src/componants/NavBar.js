import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='container-nav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}
