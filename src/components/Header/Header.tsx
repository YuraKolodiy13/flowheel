import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Nav from "../Nav/Nav";

const Header = () => {

  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 0));
  }, []);

  return (
    <header className={`header ${scroll ? 'fixed' : ''}`}>
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