import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <p>Dasteen<span>.blog</span></p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <a href='#cat'>Category</a>
          <Link to='/about'>About Me</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;