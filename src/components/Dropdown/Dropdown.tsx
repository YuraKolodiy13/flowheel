import React from "react";
import {ISubMenuItem} from "../Nav/Nav";
import './Dropdown.scss';

interface IDropdownProps {
  submenus: ISubMenuItem[],
  dropdown: boolean
}

const Dropdown: React.FC<IDropdownProps> = ({submenus, dropdown}) => (
  <ul className={`dropdown ${dropdown ? "show" : ""}`}>
    {submenus.map((submenu, index) => (
      <li key={index} className="dropdown__items">
        <a href={submenu.url}>{submenu.title}</a>
      </li>
    ))}
  </ul>
)

export default Dropdown;