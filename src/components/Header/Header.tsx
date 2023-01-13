import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <h3 className='header__logo'>
          <Link to='/'>flo.wheel</Link>
        </h3>
        <Nav/>
      </div>
    </header>
  );
};

export default Header;