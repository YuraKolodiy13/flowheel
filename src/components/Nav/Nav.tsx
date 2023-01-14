import React, {useState} from 'react';
import Button from "../Button/Button";
import Menu from '../Menu/Menu';
import './Nav.scss';

export interface ISubMenuItem {
  title: string,
  url: string
}
export interface IMenuItem {
  title: string,
  url: string,
  submenu: ISubMenuItem[]
}

const menuItems = [
  {
    title: 'Products',
    url: '/products',
    submenu: [
      {
        title:  'design',
        url: 'web',
      }
    ],
  },
  {
    title: 'Resources',
    url: '/resources',
    submenu: [
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
  {
    title: 'Pricing',
    url: '/pricing',
    submenu: [
      {
        title: 'web development',
        url: 'web-dev',
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
];

const Nav = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <nav className='nav'>
      <div className={`nav__toggle ${openMenu ? 'close' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
        <span/>
      </div>
      <div className={`nav__container ${openMenu ? 'open' : ''}`}>
        <div className="nav__left">
          <ul className="nav__menus">
            {menuItems.map((menu: IMenuItem, index: number) =>
              <Menu items={menu} key={index} />
            )}
          </ul>
        </div>
        <div className="nav__user">
          <Button
            title='Login'
            color='inverse'
            doAction={() => {}}
          />
          <Button
            title='Sign Up'
            color='primary'
            doAction={() => {}}
          />
        </div>
      </div>
    </nav>
  )

}
export default Nav;