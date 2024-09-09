import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'

const Menu = () => {
  return (
    <div className='menu-container'>
      <Link to="/" className='menu-home'>Home</Link>
      <Link to="/product" className='menu-product'>Product</Link>
    </div>
  );
};

export default Menu;