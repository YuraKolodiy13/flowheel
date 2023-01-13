import Dropdown from '../Dropdown/Dropdown';
import React, {useEffect, createRef, useState} from "react";
import {IMenuItem} from '../Nav/Nav';
import './Menu.scss';

interface IMenuProps {
  items: IMenuItem
}

const Menu: React.FC<IMenuProps> = ({items}) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = createRef<HTMLLIElement>();

  useEffect(() => {
    // @ts-ignore
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    // @ts-ignore
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown, ref]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default Menu;